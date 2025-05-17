const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

const chromeCheck = document.getElementById('chrome-check');
const content = document.getElementById('content');

if (!isChrome) {
  chromeCheck.innerHTML = "This website only works on Google Chrome. Please open it there.";
} else {
  content.style.display = 'block'; // Show content if Chrome is detected
  chromeCheck.style.display = 'none'; // Hide the check message
}
