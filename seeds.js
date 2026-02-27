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
    //seed packet image
    seedimg = loadImage('seed.png');

}
//for seeds draw a seed packet and call it a day 
//for the grown plant, draw what you think it would look like but your own twist  :3

//canvas size as screen 
function setup() {
    createCanvas(windowWidth, windowHeight);
}