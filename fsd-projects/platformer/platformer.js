$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 2 - Create Platforms
createPlatform(500, 0, 20, 290);
createPlatform(1350, 480, 50, 50, "green");

    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 50);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("grace",100, 300, 0.4, 0.2)

    
    // TODO 4 - Create Cannons
createCannon("top", 200, 1000);
createCannon("right", 300, 2000);
 createCannon("bottom", 400, 1000);
    
   
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
// TODO 2 - Create Platforms
createPlatform(505, 525, 150, 50, "red");
createPlatform(235, 620, 150, 50, "blue");
createPlatform(1250, 250, 200, 50, "pink");
createPlatform(145, 400, 200, 50, "white");
createPlatform(650, 450, 200, 50, "Purple");
createPlatform(950, 375, 200, 50, "cyan");
    // TODO 3 - Create Collectables
createCollectable("diamond", 575, 565);
createCollectable("diamond", 300 ,555);
createCollectable("steve", 2295 ,175);
    
    // TODO 4 - Create Cannons
createCannon("top", 200, 800);
createCannon("right", 425, 3000);   
createCannon("right", 400, 2000);  
createCannon("right", 805, 900);  
createCannon("top", 685, 2000);