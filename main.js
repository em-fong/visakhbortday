function cycle() {

  //rando select an image, plug it in
  let choice = String(Math.floor(Math.random() * Math.floor(9)) + 1);
  let mood = document.getElementById("mood");
  
  mood.src = "assets/" + choice + ".jpg";
  console.log(mood);
}
