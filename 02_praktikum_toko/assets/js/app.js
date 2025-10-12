const URL = "./data/dummy.json";
let products = [],
  cart = {};

const fmt = (v) => "Rp " + v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

async function load() {
  try {
    const res = await fetch(URL);
    products = await res.json();
  } catch {
    products = [];
  }
}

function render() {
  const el = document.getElementById("products");
  el.innerHTML = products
    .map(
      (p) => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="price">${fmt(p.price)}</div>
      <div class="actions">
        <button class="add" data-id="${p.id}">Tambah</button>
        <button class="del" data-id="${p.id}">Hapus</button>
      </div>
    </div>
  `
    )
    .join("");
}

function update() {
  const items = document.getElementById("cart-items");
  const empty = document.querySelector(".cart-empty");
  const totalEl = document.getElementById("cart-total");
  const ids = Object.keys(cart);
  if (!ids.length) {
    empty.style.display = "block";
    totalEl.textContent = "Rp 0";
    items.innerHTML = "";
    return;
  }
  empty.style.display = "none";
  let total = 0;
  items.innerHTML = ids
    .map((id) => {
      const p = products.find((x) => x.id == id);
      const subtotal = p.price * cart[id];
      total += subtotal;
      return `<li>${p.name} x ${cart[id]} - ${fmt(subtotal)}</li>`;
    })
    .join("");
  totalEl.textContent = fmt(total);
}

document.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (!id) return;
  if (e.target.classList.contains("add")) cart[id] = (cart[id] || 0) + 1;
  if (e.target.classList.contains("del") && cart[id]) {
    if (--cart[id] <= 0) delete cart[id];
  }
  update();
});

async function start() {
  await load();
  render();
  update();
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", start) : start();
