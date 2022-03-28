document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  var canvas = document.getElementById("canvas");
  RemoveAllChildNodes(canvas); //Remove all circles before drawing new circles
  var num_circles = document.querySelector(".input_circles_num").value;

  for(let i = 0; i < num_circles; i++){
    drawCircle(canvas);
  }
}

function drawCircle(canvas) {
  var canvas = document.getElementById("canvas");
  var circle = GenerateCircle(canvas.offsetWidth, canvas.offsetHeight);
  canvas.appendChild(circle);
  }

  function GenerateCircle(width, height) {
    var circle = document.createElement("div");
    circle.className = "circle";
    var size = Math.floor(Math.random() * (200 - 50) + 50)+ "px"; //Generate size between 50 and 200 px
    var X = Math.floor(Math.random() * width) + 1 + "px";
    var Y = Math.floor(Math.random() * height) + 1+ "px";
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    circle.style.background = randomColor;
    circle.style.size = size;
    circle.style.left = X;
    circle.style.top = Y;
    return circle;
  }

  function RemoveAllChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }

