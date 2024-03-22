// Example background script
console.log('Background script loaded.');

// Add any background functionality here
// For example, you could listen for events or messages from content scripts

// Example: Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Message received from content script:', message);
    
    // Perform any necessary actions in response to the message
    // For example, you could send a message back to the content script
    sendResponse({ response: 'Message received' });
});
