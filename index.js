const userDB = { 
    username: "joko",
    password: "rahasia",
    role: "admin"
};

function loginUser(inputUsername, inputPassword, callback){
    setTimeout(() => {
        if (inputUsername === userDB.username && inputPassword === userDB.password){
            callback(userDB)
        }
        else console.log("username salah");
    }, 500);
}

//ambil role lempar pakai callback
function getRole(user, callback){
    setTimeout(()=>{
        callback(user.role);
    },500);
}

// cek role, jika admin lempar dashboard admin jika bukan admin
function getMenu(role, callback){
    setTimeout(()=>{
        getRole(user, function(user){
            if (user === 'admin'){
                console.log("Wilkommen to admin dashboard");
            } 
        })
    },500);
}

loginUser("joko", "rahasia", function(user){
    loginUser(user.username, user.password, function(user){
        getMenu()
    })
})

