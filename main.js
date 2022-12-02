function login(){
    user_name = document.getElementById("user_name").value
    console.log(user_name)
    localStorage.setItem("Username", user_name)
    window.location = "kwitter_room.html"
}