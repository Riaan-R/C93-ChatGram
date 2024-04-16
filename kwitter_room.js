
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAwuXc1GRRAB01MFCF282rNd8gzuGxD8Gw",
  authDomain: "chatgram-7ae14.firebaseapp.com",
  databaseURL: "https://chatgram-7ae14-default-rtdb.firebaseio.com",
  projectId: "chatgram-7ae14",
  storageBucket: "chatgram-7ae14.appspot.com",
  messagingSenderId: "367235359271",
  appId: "1:367235359271:web:a3cac5304231a868e0a402"
};
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
room_name=document.getElementById("room_name").value;
localStorage.setItem("room_name",room_name);
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
window.location = "kwitter_page.html";
}

function logout(){
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      
}










function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "  + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

