chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html',
    {minWidth: 800, minHeight: 600});
});