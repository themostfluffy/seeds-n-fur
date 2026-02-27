//economy
var money = 5;

//seeds
//common seeds
var fernSeeds = 0;
var daisySeeds = 0;
var sunflowerSeeds = 0;
var roseSeeds = 0;
var tulipSeeds = 0;
var pondLilySeeds = 0;
var potatoSeeds = 0;
//rare seeds
var venusFlytrapSeeds = 0;
var cactusSeeds = 0;
var orchidSeeds = 0;
var wistariaSeeds = 0;
var omnivorousPlantSeeds = 0;
//legendary seeds
var kangarooPawSeeds = 0;
var corpseFlowerSeeds = 0;
var ashtulipeSeeds = 0;
var volcanicPoppySeeds = 0;
var ghostOrchidSeeds = 0;
//costs
//common seeds
var fernCost = 5;
var daisyCost = 10;
var sunflowerCost = 15;
var roseCost = 20;
var tulipCost = 25;
var pondLilyCost = 30;
//rare seeds
var venusFlytrapCost = 150;
var cactusCost = 200;
var orchidCost = 250;
var wistariaCost = 300;
var omnivorousPlantCost = 350;
//legendary seeds
var kangarooPawCost = 1000;
var corpseFlowerCost = 1500;
var ashtulipeCost = 2000;
var volcanicPoppyCost = 2500;
var ghostOrchidCost = 3000;

//images 
function preload() {
  // seed packet image – path is relative to index.html
  // the actual file in the repo is called "seeds.png", so match that name
  seedimg = loadImage("seeds.png");
}

// for seeds draw a seed packet and call it a day
// for the grown plant, draw what you think it would look like but your own twist  :3

// canvas size as screen
function setup() {
  // use the full window so the canvas scales with the browser
  createCanvas(windowWidth, windowHeight);
}
// loop code
function draw() {
  background(0);
  // display image if it has finished loading
    //common seeds
    image(seedimg, 0, 500, 100, 100);
    image(seedimg, 100, 500, 100, 100);
    image(seedimg, 200, 500, 100, 100);
    image(seedimg, 300, 500, 100, 100);
    image(seedimg, 400, 500, 100, 100);
    image(seedimg, 500, 500, 100, 100);
    //rare seeds
    image(seedimg, 0, 600, 100, 100);
    image(seedimg, 100, 600, 100, 100);
    image(seedimg, 200, 600, 100, 100);
    image(seedimg, 300, 600, 100, 100);
    image(seedimg, 400, 600, 100, 100);
    //legendary seeds
    image(seedimg, 0,700 ,100 ,100);
    image(seedimg ,100 ,700 ,100 ,100);
    image(seedimg ,200 ,700 ,100 ,100);
    image(seedimg ,300 ,700 ,100 ,100);
    image(seedimg ,400 ,700 ,100 ,100);
  
}
