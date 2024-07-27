// content.js
(function() {
  const originalContent = document.body.innerHTML;
  
  function createIntentionPage() {
    document.body.innerHTML = `
      <div id="intention-page" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        color: #333;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
      ">
        <h1>YouTube Intention Check</h1>
        <p>We've noticed you want to go to YouTube. Do you have a specific intention in mind?</p>
        <input type="text" id="intention-input" placeholder="Type your intention here..." style="
          width: 300px;
          padding: 10px;
          margin: 20px 0;
          font-size: 16px;
        ">
        <p id="timer" style="font-size: 14px;"></p>
      </div>
    `;

    const input = document.getElementById('intention-input');
    const timer = document.getElementById('timer');
    let timeLeft = 4;

    const countdownInterval = setInterval(() => {
      timer.textContent = `Time left: ${timeLeft} seconds`;
      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.body.removeChild(document.getElementById('intention-page'));
        blockYouTube();
      }
    }, 1000);

    input.addEventListener('input', () => {
      clearInterval(countdownInterval);
      document.body.innerHTML = originalContent;
    });
  }

  function blockYouTube() {
    document.body.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        color: #333;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
      ">
        <h1>YouTube Access Blocked</h1>
        <p>YouTube access is blocked for the next 5 minutes.</p>
        <p>Please try again later with a clear intention.</p>
      </div>
    `;

    setTimeout(() => {
      document.body.innerHTML = originalContent;
    }, 5 * 60 * 1000); // 5 minutes
  }

  if (window.location.pathname === '/') {
    createIntentionPage();
  }
})();

