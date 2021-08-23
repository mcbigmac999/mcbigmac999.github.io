var locations = new Object();

locations["start"] = {
  description: "You are at the top of a hill, you see a beach a cave a mountain and a forest",
  moves: {
    "Go to beach": "beach",
    "Go to cave": "cave",
    "Go to mountain": "mountain",
    "Go to forest": "forest"
  }
};
locations["cave"] = {
  description: "You went in the cave, which way do you go",
    moves: {
    "Go straight": "straight",
    "Go left": "left",
    "Go right": "Right",
    "Go back to start": "start"
    }
}
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

var inventory = ["map"];

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
  
  text += "<p>You are carrying: " + inventory;
  
  text += "</body></html>";
  document.getElementById("demo").innerHTML = text;
}

function goLocation(loc) {
  drawLocation(loc);
}

function start() {
  drawLocation("start");
}
