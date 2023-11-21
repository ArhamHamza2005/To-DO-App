let id="no";
//localStorage.clear();
selectData();
function manageData(){
	document.getElementById('msg').innerHTML="";
	let name=document.getElementById('name').value;
	if(name==''){
		swal("Please Add Task", "Please Add Task", "error")
	}else{
		console.log(id);
		if(id=='no'){
			let arr=getCrudData();
			if(arr==null){
				let data=[name];
				setCrudData(data);
			}else{
				arr.push(name);
				setCrudData(arr);
			}
			document.getElementById('msg').innerHTML="";
		}else{
			let arr=getCrudData();
			arr[id]=name;
			setCrudData(arr);
			document.getElementById('msg').innerHTML="";
		}
		document.getElementById('name').value='';
		selectData();
	}
}

function selectData(){
	let arr=getCrudData();
	if(arr!=null){
		let html='';
		let sno=1;
		for(let k in arr){
			html=html+`<tr><td>${sno}</td><td>${arr[k]}</td><td><a id="edit"href="javascript:void(0)" onclick="editData(${k})">Edit</a>&nbsp;<a id="del" href="javascript:void(0)" onclick="deleteData(${k})">Delete</a></td></tr>`;
			sno++;
		}
		document.getElementById('root').innerHTML=html;
		
	}
}

function editData(rid){
	id=rid;
	let arr=getCrudData();
	document.getElementById('name').value=arr[rid];
}

function deleteData(rid){
	let arr=getCrudData();
	arr.splice(rid,1);
	setCrudData(arr);
	selectData();
}

function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('crud'));
	return arr;
}

function setCrudData(arr){
	localStorage.setItem('crud',JSON.stringify(arr));
}
function logout(){
	localStorage.removeItem("name")
	localStorage.removeItem("email")
	window.location.href="http://127.0.0.1:5500/auth/login.html"
}