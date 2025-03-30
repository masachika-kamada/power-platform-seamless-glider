document.addEventListener('DOMContentLoaded', function () {
  const services = document.querySelectorAll('.service');
  const serviceUrls = {
    'Admin Center': 'https://admin.powerplatform.microsoft.com/environments/environment/[ID]/hub',
    'Maker Portal': 'https://make.powerapps.com/environments/[ID]/home',
    'Power Automate': 'https://make.powerautomate.com/environments/[ID]/home',
    'Power Pages': 'https://make.powerpages.microsoft.com/environments/[ID]/portals/home',
    'Copilot Studio': 'https://copilotstudio.microsoft.com/environments/[ID]/home'
  };

  services.forEach(service => {
    service.addEventListener('click', function () {
      const serviceName = this.querySelector('span').textContent;
      const baseUrl = serviceUrls[serviceName];

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentUrl = tabs[0].url;
        const environmentIdMatch = currentUrl.match(/(Default-)?[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/);

        if (environmentIdMatch) {
          const environmentId = environmentIdMatch[0];
          const newUrl = baseUrl.replace("[ID]", environmentId);
          chrome.tabs.update(tabs[0].id, { url: newUrl }, function () {
            window.close(); // Close the popup after redirecting
          });
        } else {
          alert('Could not find environment id in the current URL');
        }
      });
    });
  });
});
