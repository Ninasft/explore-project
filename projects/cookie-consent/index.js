const modal = document.querySelector(".modal");

// Cek localStorage saat halaman dimuat
window.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (cookieConsent=="accepted") {
        modal.style.display = "none";
    }
});

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    modal.style.display = "none";
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }