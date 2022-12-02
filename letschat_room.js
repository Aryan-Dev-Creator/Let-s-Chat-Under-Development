 var firebaseConfig = {
  apiKey: "AIzaSyDYWi9q0JJ2ff64L8x8NDI_PARYjjOPqBU",
  authDomain: "letschat-69420.firebaseapp.com",
  projectId: "letschat-69420",
  storageBucket: "letschat-69420.appspot.com",
  messagingSenderId: "990450901975",
  appId: "1:990450901975:web:5a27f08a873248add62192",
  measurementId: "G-TD005ZEGHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!!"; 

function add_room(){

  room_name = document.getElementById("new_room").value;
  
  firebase.database().ref('/').child(room_name).update({ purpose : "Addroom"
  
  
});
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function redirectToRoomName(name){
  console.log("name");
  localStorage.setItem("room_name" , name);
  window.location = "letschat_page.html";
}