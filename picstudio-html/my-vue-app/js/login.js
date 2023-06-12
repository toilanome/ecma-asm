
import { router } from "../src/lib";
import loginForm from "/login/login";
let apiUser = "http://localhost:3000/users";


let username = document.querySelector(".username");
    console.log(username)
let password = document.querySelector(".password");
let loginbtn = document.querySelector(".loginbtn");


const getUser = async () =>{
    const response = await fetch(apiUser);
    const data = await response.json();
    return data;
}


loginbtn.addEventListener("click",(e) =>{
    e.preventDefault();
    console.log("click");
    if(username.value == "" || password.value == ""){
        alert("Điền mật khẩu và tài khoản");
    }else{
        getUser().then((data) => {
            const users = data.find(
                (users) => users.username == username.value && users.password == password.value
            );
            console.log(users);
            if(users.roleId == 1){
                alert("Admin");
                // window.location.href = "";

            }else if(users){
                alert("thành công");
                // window.location.href = "/index.html";
                // router.navigate('admin')
                

            }else{
                alert("false")
            }
        }
    )}
    
})







