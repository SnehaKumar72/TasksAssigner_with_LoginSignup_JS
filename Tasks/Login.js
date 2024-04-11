import fs from 'fs';

function loginUser(userName,pass) {
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
    const user = users.find(
    (user) => user.name === userName && user.pass === password
    );
    if (user) {
    resolve(user);
    }else{
        reject(new Error("Invalid email or password"));
    }
    },1000);
});
}
   async function result() {
    const user = await loginUser(userName,pass);
    console.log({user});
   }

   fetch("./users.json")
   .then((response) => {
       return response.json();
   })
   .then((data) => {
       console.log(data);
   });

   const Login = async (userName, emailId) => {
    var users = await fetch("./users.json").then((response) => {
    return response.json();
    });
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    var user = users.find(
    (user) => user.name === userName && user.email === emailId
    );
    if (user) {
    resolve(user);
    } else {
    reject(new Error("Invalid email or password"));
    }
    }, 1000);
    });
    };
    document.getElementById("submitForm").addEventListener("sumbit", async (e) => {
    e.preventDefault();
    let userName = document.querySelector("#userName").value;
    let emailId  = document.querySelector("#emailid").value;
    try {
    let user = await Login(userName, emailid);
    console.log("User logged in:", user);
    } catch (error) {
    console.error("Login error:", error.message);
    }
    });
    