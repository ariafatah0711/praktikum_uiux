const URL = "./data/dummy.json";
let products = [],
  cart = {};

// helper format rupiah
const fmt = (v) => "Rp " + v.toLocaleString("id-ID");

async function load() {
  try {
    const res = await fetch(URL);
    products = await res.json();
  } catch {
    products = [];
  }
}

function render() {
  document.getElementById("products").innerHTML = products
    .map(
      (p) => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="actions">
        <div class="price">${fmt(p.price)}</div>
        <div>
          <button class="add" data-id="${p.id}">Tambah</button>
          <button class="del" data-id="${p.id}">Hapus</button>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

function update() {
  const itemsEl = document.getElementById("cart-items");
  const emptyEl = document.querySelector(".cart-empty");
  const totalEl = document.getElementById("cart-total");
  const summaryEl = document.getElementById("cart-summary");
  const ids = Object.keys(cart);

  if (!ids.length) {
    emptyEl.style.display = "block";
    summaryEl.style.display = "none";
    totalEl.textContent = fmt(0);
    itemsEl.innerHTML = "";
    return;
  }

  emptyEl.style.display = "none";
  summaryEl.style.display = "block";

  let total = 0;
  itemsEl.innerHTML = ids
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

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (!Object.keys(cart).length) return alert("Keranjang masih kosong!");

  const checkoutData = {
    items: Object.keys(cart).map((id) => {
      const p = products.find((x) => x.id == id);
      return { name: p.name, qty: cart[id], price: p.price, subtotal: p.price * cart[id] };
    }),
    total: Object.keys(cart).reduce((sum, id) => {
      const p = products.find((x) => x.id == id);
      return sum + p.price * cart[id];
    }, 0),
  };

  localStorage.setItem("checkout", JSON.stringify(checkoutData));
  window.location.href = "success.html";
});

async function start() {
  await load();
  render();
  update();
}

document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", start) : start();
