/**
 * main.js - the logic for our app
 * Get the location
 * @author Sumana Reddy Reddybathula
 */

// first imports..............
import getlocation from './location.js';

// helper functions .........



// event handlers...........

async function locationHandler() {
  const locText = await getLocation();
  document.getElementById('locationAnswer').innerHTML = locText;
}

function clearErrorText() {
  document.getElementById('error-message').innerHTML = '';
}


// declare main method................
function main() {
  console.log('Starting main method...');

  // get references to html elements
  const locationElement = document.getElementById('location');
  const errorElement = document.getElementById('error-message');

  // init error to empty string
  errorElement.innerHTML = '';

  locationElement.addEventListener('click', locationHandler);
  locationElement.addEventListener('touch', locationHandler);
}

// this is where it begins
window.addEventListener('load', main);
/*window.addEventListener('load', (main) => {
  console.log("Loaded Page");
});*/

//window.addEventListener('load', main);

