//Program to train a Neural Network for Shape Classification and identification using machine learning (ml5js)
//Process: Processising, p5js, nodejs and ml5js


//initialiing variables to store images in the form of an array
let acicular = [];
let oblong = [];
let deltoid = [];

//function to load images from the data folder containing images after processing in respective "shape" arrays
function preload() {

  //for loop to store all 100 images of each shape into respective arrays
  for (let i = 0; i < 100; i++) {
    
    //index shifts the number i to the fourth digit
    let index = nf(i + 1, 4, 0);
    acicular[i] = loadImage(`data1/acicular${index}.png`);
    oblong[i] = loadImage(`data1/oblong${index}.png`);
    deltoid[i] = loadImage(`data1/deltoid${index}.png`);
  }
}

//object for shape classification
let shapeClassifier;

function setup() {
  createCanvas(400, 400);
  //background(0);
  //image(squares[0], 0, 0, width, height);

  //passing options with properties set about the Neural Network
  let options = {

    //most important property is the shape of the input (dimensions)
    inputs: [128, 128, 4],
    task: 'imageClassification',
    //automatic visualisation of the loss function as it is training
    debug: true
  };

  //Creating a Neural Network
  shapeClassifier = ml5.neuralNetwork(options);

  //adding image and its associated label
  for (let i = 0; i < acicular.length; i++) {
    shapeClassifier.addData({ image: acicular[i] }, { label: 'Acicular' });
    shapeClassifier.addData({ image: oblong[i] }, { label: 'Oblong' });
    shapeClassifier.addData({ image: deltoid[i] }, { label: 'Deltoid' });
  }

  //Ultimate convinience of working with ml5 library: It will analyse data, look at the min and max ranges of
  //pixel values and normalize it in the range of 0-1 so that training is easier
  shapeClassifier.normalizeData();

  //trainging the shape classification module in ml5
  //epochs is set to 50 meaning it sends all of the data (300 images) into the Neural Network 50 times
  shapeClassifier.train({ epochs: 50 }, finishedTraining);
}

//test trained regularly to check loss
function finishedTraining() {
  console.log('finished training!');
  shapeClassifier.save();
}