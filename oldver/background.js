chrome.runtime.onInstalled.addListener(() => {
  // Set the initial value for whether to block elements on Tampermonkey settings page
  chrome.storage.local.set({ blockTampermonkeySettings: true });
});

// Listen for changes in Tampermonkey settings
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.blockTampermonkeySettings) {
    const newValue = changes.blockTampermonkeySettings.newValue;
    if (typeof newValue === "boolean") {
      // Send a message to content scripts to update their behavior
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
          chrome.tabs.sendMessage(tab.id, {
            action: "updateBlockTampermonkeySettings",
            value: newValue,
          }, (response) => {
            // Handle response if needed
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError.message);
            }
          });
        });
      });
    }
  }
});
