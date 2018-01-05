// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0
}
// ======================
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) { 
    case "N": 
        rover.direction = "W";
        console.log("Rover is facing North and turns left => Rover is now facing West");
        break 
    case "S": 
        rover.direction = "E";
        console.log("Rover is facing South and turns left => Rover is now facing East");
        break 
    case "W": 
        rover.direction = "S";
        console.log("Rover is facing West and turns left => Rover is now facing South");
        break
    case "E": 
        rover.direction = "N";
        console.log("Rover is facing East and turns left => Rover is now facing North");
        break  
    default: 
        console.log("Error! Invalid direction"); 
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) { 
    case "N": 
        rover.direction = "E";
        console.log("Rover is facing North and turns right => Rover is now facing East");
        break 
    case "S": 
        rover.direction = "W";
        console.log("Rover is facing South and turns right => Rover is now facing West");
        break 
    case "W": 
        rover.direction = "N";
        console.log("Rover is facing West and turns right => Rover is now facing North");
        break
    case "E": 
        rover.direction = "S";
        console.log("Rover is facing East and turns right => Rover is now facing South");
        break  
    default: 
        console.log("Error! Invalid direction"); 
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) { 
    case "W": 
        rover.x = rover.x - 1;
        console.log("Rover is facing West and now is moving forward");
        break 
    case "N": 
        rover.y = rover.y - 1;
        console.log("Rover is facing North and now is moving forward");
        break 
    case "S": 
        rover.x = rover.x + 1;
        console.log("Rover is facing South and now is moving forward");
        break
    case "E": 
        rover.y = rover.y + 1;
        console.log("Rover is facing East and now is moving forward");
        break  
    default: 
        console.log("Error! Invalid direction");
  }
}

function reciveCommands(commands){

  for (var command of commands) {
    switch (command) { 
    case "f": 
        moveForward(rover);
        break 
    case "l": 
        turnLeft(rover)
        break 
    case "r": 
        turnRight(rover)
        break 
    default: 
        console.log("Error! Invalid command");
    }
  }
}



/*function crearTabla(){
    var tbl = document.getElementById("tabla");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i < 11; i++) {
        var fila = document.createElement("tr");
        for (var j = 0; j < 11; j++) {
            var celda = document.createElement("td");
            fila.appendChild(celda);
        }
        tblBody.appendChild(fila);
    }
    tbl.appendChild(tblBody);
}*/
