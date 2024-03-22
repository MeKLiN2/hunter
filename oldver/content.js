let blockTampermonkeySettings = true;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "updateBlockTampermonkeySettings") {
    blockTampermonkeySettings = message.value;
    // Adjust the behavior of your content script based on the new value
    if (blockTampermonkeySettings) {
      // Block elements on Tampermonkey settings page
      blockElements();
    } else {
      // Do nothing or revert any changes made to Tampermonkey settings page
    }
  }
});

// Define the classes you want to block
const classesToBlock = ["head_container", "content_wrapper"];

// Function to remove elements by class name
function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

// Function to block elements on Tampermonkey settings page
function blockElements() {
  classesToBlock.forEach(className => {
    removeElementsByClass(className);
  });
}

// Initially block elements on Tampermonkey settings page
blockElements();
