function saveData(){
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let user_recods=new Array()
    user_recods=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(name=="" || email=="" || password==""){
        alert("Please fill all the filled")
        
    }
    "break"
    if(user_recods.some((v)=>{
        return v.email==" "
    })){
        alert("fille the filled")
    }
    else{
        user_recods.push({
            "name":name,
            "email":email,
            "password":password
        })
        localStorage.setItem("users",JSON.stringify(user_recods));
    }
    if(email==" "){
        alert("fill the filed")
    }
    {
        alert("save data")
        window.location.href="http://127.0.0.1:5500/dashboard/todo.html"
    }
}
   
    
    function checkData(){
        let email=document.getElementById("email").value
        let password=document.getElementById("password").value
    
        let user_recods=new Array()
        user_recods=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem("users")):[]
        if(user_recods.some((v)=>{
        return v.email==email && v.password==password
        }))
        {
            alert("Login successfully")
            let current_user=user_recods.filter((v)=>{
                return v.email==email && v.password==password
            })[0]
            localStorage.setItem("name",current_user.name);
            localStorage.setItem("email",current_user.email);
            window.location.href="http://127.0.0.1:5500/dashboard/todo.html?"
            
        }
        else{
            alert("Incorrect User")
        }
        
      
    }
    