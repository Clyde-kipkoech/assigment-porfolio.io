function hireMe() {
    
    window.location.href = "mailto: kipkoechclyde546@gm"; 
  }

  function downloadCV() {
    
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf';
    link.download = 'Clyde_Kipkoech_CV.pdf';  
    link.click();
  }