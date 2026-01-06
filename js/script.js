function toggleEvents() {
    const hiddenEvents = document.querySelectorAll('.event.hidden');
    const allExtraEvents = document.querySelectorAll('.event.extra'); // semua event tambahan
    const btn = document.getElementById('viewAllBtn');
    
    if (btn.textContent === 'Visit Complete Changelog') {
      // Buka semua
      allExtraEvents.forEach(event => {
        event.classList.remove('hidden');
      });
      btn.textContent = 'Show Less';
    } else {
      // Tutup semua
      allExtraEvents.forEach(event => {
        event.classList.add('hidden');
      });
      btn.textContent = 'Visit Complete Changelog';
    }
  }

  