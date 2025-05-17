const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

const chromeCheck = document.getElementById('chrome-check');
const content = document.getElementById('content');

if (!isChrome) {
  chromeCheck.innerHTML = `This website works best in Google Chrome.  For the best experience, please open it there. <a href="https://www.google.com/chrome/">Download Chrome here.</a>`;
  chromeCheck.style.color = "red"; //Example styling
  chromeCheck.style.fontSize = "1.2em"; //Example styling
} else {
  content.style.display = 'block';
  chromeCheck.style.display = 'none';
}
alert("edit 1")
