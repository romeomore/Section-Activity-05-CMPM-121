// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter = 0;

// These constants are for button IDs and heading text
const incrementBtn = "increment",
  counterSpanID = "counter",
  headingText = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${headingText}</h1>
    <p>Counter: <span id="${counterSpanID}">0</span></p>
    <button id="${incrementBtn}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get references to the buttons and counter span
  const buttonIncrement = document.getElementById(incrementBtn);
  const buttonDecrement = document.getElementById("dec");
  const buttonReset = document.getElementById("reset");
  const counterSpan = document.getElementById(counterSpanID);

  // Check if any element is missing, then exit the function
  if (!buttonIncrement || !buttonDecrement || !buttonReset || !counterSpan) {
    return;
  }

  // Add click event to the increment button
  buttonIncrement.addEventListener("click", () => {
    counter++;
    // Update the counter display
    counterSpan.innerHTML = `${counter}`;
    document.title = "Clicked " + counter;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  });

  // Add click event to the decrement button
  buttonDecrement.addEventListener("click", () => {
    counter--;
    // Update the counter display
    counterSpan.innerHTML = `${counter}`;
    document.title = "Clicked " + counter;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  });

  // Add click event to the reset button
  buttonReset.addEventListener("click", () => {
    counter = 0;
    // Update the counter display
    counterSpan.innerHTML = `${counter}`;
    document.title = "Clicked " + counter;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
