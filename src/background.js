// background.js
chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.url.startsWith('https://www.youtube.com/')) {
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ['content.js']
    });
  }
}, { url: [{ hostEquals: 'www.youtube.com' }] });

