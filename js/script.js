function toggleEvents() {
  const allExtraEvents = document.querySelectorAll('.event.extra');
  const btn = document.getElementById('viewAllBtn');
  
  // Pakai .trim() untuk hapus spasi
  if (btn.textContent.trim() === 'Visit Complete Changelog') {
    allExtraEvents.forEach(event => {
      event.classList.remove('hidden');
    });
    btn.textContent = 'Show Less';
  } else {
    allExtraEvents.forEach(event => {
      event.classList.add('hidden');
    });
    btn.textContent = 'Visit Complete Changelog';
  }
}