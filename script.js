
// Render Cows and JCB from data.js
function formatRs(n){
  try{ return '₹' + Number(n).toLocaleString('en-IN') }catch(e){ return '₹' + n }
}

function renderCows(){
  const grid = document.getElementById('cowGrid');
  if(!grid) return;
  grid.innerHTML = '';
  COWS.forEach(cow => {
    const el = document.createElement('div');
    el.className = 'card cow-card';
    el.innerHTML = `
      <img src="${cow.image}" alt="${cow.name}">
      <div class="card-body">
        <div class="title">${cow.name} <span class="meta">(${cow.breed})</span></div>
        <div class="meta">Age: ${cow.ageMonths} months • Milk: ${cow.milkCapacity} • Weight: ${cow.weightKg} kg</div>
        <div class="meta">Notes: ${cow.notes || ''}</div>
        <div class="price">${formatRs(cow.price)}</div>
        <div style="margin-top:10px;display:flex;gap:10px;">
          <a class="btn btn-primary" href="tel:${CONTACT.phone}">Call</a>
          <a class="btn btn-outline" href="https://wa.me/${CONTACT.whatsapp}?text=I%20am%20interested%20in%20${encodeURIComponent(cow.name)}%20(%20${encodeURIComponent(cow.breed)}%20)" target="_blank">WhatsApp</a>
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
}

function renderJCB(){
  const img = document.getElementById('jcbImg');
  const status = document.getElementById('jcbStatus');
  const rate = document.getElementById('jcbRate');
  const bookBtn = document.getElementById('jcbBookBtn');
  if(!img || !status || !rate || !bookBtn) return;

  img.src = JCB.image;
  status.textContent = JCB.status;
  status.className = 'highlight';
  rate.textContent = formatRs(JCB.ratePerHour) + '/hour';

  if(JCB.status.toLowerCase() === 'available'){
    bookBtn.textContent = 'Book JCB on WhatsApp';
    bookBtn.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Need JCB service at Rs ' + JCB.ratePerHour + '/hr. Is it available today?')}`;
  }else{
    bookBtn.textContent = 'Notify me when available';
    bookBtn.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Please notify me when JCB becomes available.')}`;
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderCows();
  renderJCB();
});
