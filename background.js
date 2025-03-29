chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    const environmentIdMatch = tab.url.match(/environments\/([a-z0-9-]+)/);
    if (environmentIdMatch) {
      const environmentId = environmentIdMatch[1];
      chrome.storage.local.set({ environmentId });
    }
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'navigate') {
    chrome.storage.local.get('environmentId', (data) => {
      const environmentId = data.environmentId;
      if (environmentId) {
        const newUrl = request.url.replace(/environments\/[a-z0-9-]+/, `environments/${environmentId}`);
        chrome.tabs.create({ url: newUrl });
      }
    });
  }
});
