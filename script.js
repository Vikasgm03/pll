
function rs(n){return '₹'+Number(n).toLocaleString('en-IN');}

function load(){
  const grid=document.getElementById('cowGrid');
  COWS.forEach(c=>{
    grid.innerHTML+=`
    <div class="card">
      <img src="${c.image}">
      <div class="body">
        <div><b>${c.name}</b> (${c.breed})</div>
        <div>Milk: ${c.milkCapacity}</div>
        <div>Age: ${c.ageMonths} months</div>
        <div>Weight: ${c.weightKg} kg</div>
        <div class="price">${rs(c.price)}</div>
        <br>
        <a class="btn btn-primary" href="tel:${CONTACT.phone}">Call</a>
        <a class="btn btn-outline" target="_blank" href="https://wa.me/${CONTACT.whatsapp}">WhatsApp</a>
      </div>
    </div>`;
  });

  document.getElementById("jcbImg").src = JCB.image;
  document.getElementById("jcbRate").textContent = rs(JCB.ratePerHour) + "/hour";
  document.getElementById("jcbBook").href = "https://wa.me/" + CONTACT.whatsapp;
}
document.addEventListener("DOMContentLoaded",load);
