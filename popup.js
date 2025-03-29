document.getElementById('ppac').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'navigate', url: 'https://admin.powerplatform.microsoft.com/environments/' });
});

document.getElementById('power_apps').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'navigate', url: 'https://make.powerapps.com/environments/' });
});

document.getElementById('power_automate').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'navigate', url: 'https://make.powerautomate.com/environments/' });
});

document.getElementById('power_pages').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'navigate', url: 'https://make.powerpages.microsoft.com/environments/' });
});

document.getElementById('copilot_studio').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'navigate', url: 'https://copilotstudio.microsoft.com/environments/' });
});
