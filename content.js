(function() {
  const environmentIdMatch = window.location.href.match(/environments\/([a-z0-9-]+)/);
  if (environmentIdMatch) {
    const environmentId = environmentIdMatch[1];
    chrome.runtime.sendMessage({ action: 'setEnvironmentId', environmentId });
  }
})();
