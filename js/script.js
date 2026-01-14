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

const tabs = document.querySelectorAll('.tab');
const content = document.querySelector('.content-tab');

const tabContents = {
  overview: `
    <h2>Product Overview</h2>
    <p>This is a high quality skincare product.</p>
    <img src="/assets/img/Profil_lengkap_Sana_TWICE_11zon_1_311ba10e3e.jpg">
  `,

  ingredient: `
    <h2>Ingredients</h2>
    <ul class="ingredient-list">
      <li>Niacinamide</li>
      <li>Hyaluronic Acid</li>
      <li>Goji Berry</li>
    </ul>
  `,

  reviews: `
    <h2>User Reviews</h2>
    <p>⭐️⭐️⭐️⭐️⭐️ Amazing product!</p>
    <p>⭐️⭐️⭐️⭐️ Helped my skin a lot.</p>
  `,

  shipping: `
    <h2>Shipping Info</h2>
    <p>Ships within 24 hours. Free shipping over $50.</p>
  `
};

// render default tab
const defaultTab = document.querySelector('.tab-active');
if (defaultTab) {
  const key = defaultTab.dataset.tab;
  content.innerHTML = tabContents[key];
}

// click handling
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.tab-active')?.classList.remove('tab-active');
    tab.classList.add('tab-active');

    const key = tab.dataset.tab;
    content.innerHTML = tabContents[key];
  });
});


const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
const incBtn = document.getElementById("incBtn");
const count = document.getElementById("countLabel");
let counter = 0;

decBtn.onclick=function(){
  counter--;
  count.textContent=counter;
}

incBtn.onclick=function(){
  counter++;
  count.textContent=counter;
}

resetBtn.onclick=function(){
  counter=0;
  count.textContent=counter;
}





