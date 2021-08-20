var locations = new Object();

locations["start"] = {
  description: "You are at the top of a hill",
  moves: {
    "Go North": "beach",
    "Go South": "south"
  }
};
locations["beach"] = {
 description: "you see a big rock a cliff a boat and a turtle swimming in the sea",
 moves: {
   "investigate big rock": "big rock",
   "go to cliff": "cliff",
   "go to boat": "boat",
   "swim with turtle": "turtle",
   "go back to start": "start"
 }
};

drawLocation("start");

function drawLocation(loc) {
  var text = "<html><body>" +
    locations[loc].description + "<p>";
    
  var moves = locations[loc].moves;
  for (l in moves) {
    text += "<button type='button' onclick='goLocation(\"";
    text += moves[l];
    text += "\")'>";
    text += l;
    text += "</button> ";
  }
  
  text += "</body></html>";
  document.getElementById("demo").innerHTML = text;
}

function goLocation(loc) {
  drawLocation(loc);
  // alert(loc);
}
