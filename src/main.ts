// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let c = 0;

// These constants are for button IDs and heading text
const a = "increment", b = "counter", h = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${h}</h1>
    <p>Counter: <span id="${b}">0</span></p>
    <button id="${a}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get the increment button element from the document
  const buttonIncrement = document.getElementById(a);
  // Get the decrement button element from the document
  const buttonDecrement = document.getElementById("dec");
  // Get the reset button element from the document
  const buttonReset = document.getElementById("reset");
  // Get the counter span element from the document
  const counterSpan = document.getElementById(b);

  // Check if any element is missing, then exit the function
  if (!buttonIncrement || !buttonDecrement || !buttonReset || !counterSpan) return;

  // Add click event to the increment button
  buttonIncrement.addEventListener("click", () => {
    // Increase the counter by 1
    c++;
    // Update the counter display
    ctr.innerHTML = `${c}`;
    // Update the document title
    document.title = "Clicked " + c;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
  });

  // Add click event to the decrement button
  buttonDecrement.addEventListener("click", () => {
    // Decrease the counter by 1
    c--;
    // Update the counter display
    ctr.innerHTML = `${c}`;
    // Update the document title
    document.title = "Clicked " + c;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
  });

  // Add click event to the reset button
  buttonReset.addEventListener("click", () => {
    // Reset the counter to 0
    c = 0;
    // Update the counter display
    ctr.innerHTML = `${c}`;
    // Update the document title
    document.title = "Clicked " + c;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = c % 2 ? "pink" : "lightblue";
  });
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
