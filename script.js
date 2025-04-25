function hireMe() {
    // Example: redirect to contact page or open email client
    window.location.href = "mailto: kipkoechclyde546@gm"; // Replace with your email
  }

  function downloadCV() {
    // Example: download CV from a file
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf';  // Replace with your CV file path
    link.download = 'Clyde_Kipkoech_CV.pdf';  // File name when downloading
    link.click();
  }