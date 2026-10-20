const PRODUCTS = [
  {
    id: "void-tee",
    name: "Void Graphic Oversized Tee",
    category: "tops",
    gender: "men",
    price: 799,
    compare: 1199,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    desc: "240 GSM cotton, dropped shoulders, cracked print. The everyday loud tee.",
  },
  {
    id: "city-hoodie",
    name: "Midnight City Hoodie",
    category: "outerwear",
    gender: "unisex",
    price: 1699,
    compare: 2299,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
    desc: "Heavy fleece, kangaroo pocket, clean embroidered mark. Winter default.",
  },
  {
    id: "cargo-sand",
    name: "Sandstorm Cargo Pants",
    category: "bottoms",
    gender: "men",
    price: 1499,
    compare: 1999,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
    desc: "Relaxed cargo with utility pockets. Pair with an oversized tee and go.",
  },
  {
    id: "flare-sneak",
    name: "Flare Court Sneakers",
    category: "footwear",
    gender: "unisex",
    price: 2499,
    compare: 3299,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    desc: "Chunky court silhouette. Cushioned sole, everyday mileage.",
  },
  {
    id: "blush-crop",
    name: "Blush Boxy Crop Tee",
    category: "tops",
    gender: "women",
    price: 699,
    compare: 999,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    desc: "Boxy crop with a soft hand-feel. Built for high-waist cargos.",
  },
  {
    id: "ink-jacket",
    name: "Ink Denim Jacket",
    category: "outerwear",
    gender: "unisex",
    price: 2199,
    compare: 2799,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    desc: "Washed indigo, metal hardware, slightly oversized. Layer over everything.",
  },
  {
    id: "track-shorts",
    name: "Relay Track Shorts",
    category: "bottoms",
    gender: "men",
    price: 899,
    compare: 1299,
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44d6b?auto=format&fit=crop&w=900&q=80",
    desc: "Lightweight shorts with side tape. Gym, street, repeat.",
  },
  {
    id: "rib-tank",
    name: "Porcelain Rib Tank",
    category: "tops",
    gender: "women",
    price: 599,
    compare: 899,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80",
    desc: "Fine rib tank that holds shape. Quiet luxury, loud attitude.",
  },
  {
    id: "wide-trouser",
    name: "Studio Wide Trousers",
    category: "bottoms",
    gender: "women",
    price: 1599,
    compare: 2099,
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=900&q=80",
    desc: "High-rise wide leg. Drapes clean, walks loud.",
  },
  {
    id: "cap-core",
    name: "Core Six-Panel Cap",
    category: "accessories",
    gender: "unisex",
    price: 499,
    compare: 699,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=80",
    desc: "Washed cotton cap with embroidered wordmark.",
  },
  {
    id: "linen-shirt",
    name: "Coast Linen Shirt",
    category: "tops",
    gender: "men",
    price: 1299,
    compare: 1799,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
    desc: "Breathable linen-blend. Open collar, rolled sleeves, weekend mode.",
  },
  {
    id: "knit-set",
    name: "Ember Knit Co-ord",
    category: "outerwear",
    gender: "women",
    price: 2399,
    compare: 2999,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    desc: "Two-piece knit set. Soft, structured, ready for the city.",
  },
];

const SIZES = ["S", "M", "L", "XL"];
const CART_KEY = "soul-thread-cart";
const WISH_KEY = "soul-thread-wish";

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const qs = (sel, root = document) => root.querySelector(sel);
const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];

function money(n) {
  return `₹${n.toLocaleString("en-IN")}`;
}

function read(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

let cart = read(CART_KEY, []);
let wish = read(WISH_KEY, []);
let selectedSize = "M";
let currentProduct = null;
let shopFilter = "all";
let searchQuery = "";

function parseHash() {
  const raw = location.hash.replace(/^#/, "") || "home";
  const [path, query = ""] = raw.split("?");
  const params = Object.fromEntries(new URLSearchParams(query));
  return { path, params };
}

function showView(id) {
  qsa(".view").forEach((view) => {
    view.hidden = view.id !== id;
  });
  window.scrollTo(0, 0);
}

function productCard(p) {
  const off = Math.round(((p.compare - p.price) / p.compare) * 100);
  return `
    <article class="card">
      <a class="card__media" href="#product/${p.id}">
        <img src="${p.image}" alt="${p.name}" />
        <span class="chip">${off}% off</span>
      </a>
      <div class="card__body">
        <h3><a href="#product/${p.id}">${p.name}</a></h3>
        <p class="muted">${p.gender} · ${p.category}</p>
        <p class="price">${money(p.price)} <s>${money(p.compare)}</s></p>
      </div>
    </article>
  `;
}

function filteredProducts(extra = {}) {
  const { gender, category } = extra;
  return PRODUCTS.filter((p) => {
    if (gender && p.gender !== gender && p.gender !== "unisex") return false;
    if (category && p.category !== category) return false;
    if (shopFilter === "men" && p.gender !== "men" && p.gender !== "unisex") return false;
    if (shopFilter === "women" && p.gender !== "women" && p.gender !== "unisex") return false;
    if (["tops", "bottoms", "outerwear", "footwear"].includes(shopFilter) && p.category !== shopFilter) {
      return false;
    }
    if (searchQuery && !`${p.name} ${p.category} ${p.gender}`.toLowerCase().includes(searchQuery)) {
      return false;
    }
    return true;
  });
}

function sortProducts(list) {
  const mode = qs("#sort")?.value || "featured";
  const copy = [...list];
  if (mode === "price-asc") copy.sort((a, b) => a.price - b.price);
  if (mode === "price-desc") copy.sort((a, b) => b.price - a.price);
  if (mode === "sale") copy.sort((a, b) => b.compare - b.price - (a.compare - a.price));
  return copy;
}

function renderHome() {
  const bestsellers = PRODUCTS.slice(0, 4);
  qs("[data-home-grid]").innerHTML = bestsellers.map(productCard).join("");
}

function renderShop(params = {}) {
  if (params.gender) shopFilter = params.gender;
  if (params.category) shopFilter = params.category;
  if (!params.gender && !params.category && shopFilter === "all") shopFilter = "all";

  qsa("#filters button").forEach((btn) => {
    btn.classList.toggle("is-on", btn.dataset.filter === shopFilter);
  });

  const list = sortProducts(filteredProducts(params));
  qs("[data-shop-grid]").innerHTML = list.length
    ? list.map(productCard).join("")
    : `<p>No pieces match that filter. Try another category.</p>`;
  qs("[data-shop-count]").textContent = `${list.length} piece${list.length === 1 ? "" : "s"}`;

  const titleMap = {
    men: "Men",
    women: "Women",
    tops: "Tops",
    bottoms: "Bottoms",
    outerwear: "Hoodies & outerwear",
    footwear: "Footwear",
    all: "All products",
  };
  qs("[data-shop-title]").textContent = titleMap[shopFilter] || "All products";
  qs("[data-shop-eyebrow]").textContent = "Catalog";
}

function renderProduct(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    location.hash = "shop";
    return;
  }
  currentProduct = product;
  selectedSize = "M";
  qs("#pdp-image").src = product.image;
  qs("#pdp-image").alt = product.name;
  qs("#pdp-cat").textContent = `${product.gender} · ${product.category}`;
  qs("#pdp-name").textContent = product.name;
  qs("#pdp-price").innerHTML = `${money(product.price)} <s>${money(product.compare)}</s>`;
  qs("#pdp-desc").textContent = product.desc;
  qs("#pdp-sizes").innerHTML = SIZES.map(
    (size) => `<button type="button" data-size="${size}" class="${size === "M" ? "is-on" : ""}">${size}</button>`
  ).join("");
  qs("#toggle-wish").textContent = wish.includes(product.id) ? "Saved" : "Wishlist";
}

function cartCount() {
  return cart.reduce((n, item) => n + item.qty, 0);
}

function cartTotal() {
  return cart.reduce((n, item) => {
    const p = PRODUCTS.find((x) => x.id === item.id);
    return n + (p ? p.price * item.qty : 0);
  }, 0);
}

function updateBadges() {
  const count = cartCount();
  const cartBadge = qs("[data-cart-count]");
  cartBadge.hidden = count === 0;
  cartBadge.textContent = String(count);
  const wishBadge = qs("[data-wish-count]");
  wishBadge.hidden = wish.length === 0;
  wishBadge.textContent = String(wish.length);
}

function renderCart() {
  const box = qs("[data-cart-items]");
  if (!cart.length) {
    box.innerHTML = "<p>Your bag is empty. Add a tee.</p>";
  } else {
    box.innerHTML = cart
      .map((item) => {
        const p = PRODUCTS.find((x) => x.id === item.id);
        if (!p) return "";
        return `
          <div class="line">
            <img src="${p.image}" alt="" />
            <div>
              <strong>${p.name}</strong>
              <div class="muted">Size ${item.size}</div>
              <div class="qty">
                <button type="button" data-qty="${item.id}|${item.size}|-1">−</button>
                <span>${item.qty}</span>
                <button type="button" data-qty="${item.id}|${item.size}|1">+</button>
              </div>
            </div>
            <div>${money(p.price * item.qty)}</div>
          </div>
        `;
      })
      .join("");
  }
  qs("[data-cart-sub]").textContent = money(cartTotal());
  const pay = qs("[data-pay-total]");
  if (pay) pay.textContent = money(cartTotal());
  write(CART_KEY, cart);
  updateBadges();
}

function renderWish() {
  const box = qs("[data-wish-items]");
  if (!wish.length) {
    box.innerHTML = "<p>No saved pieces yet.</p>";
    return;
  }
  box.innerHTML = wish
    .map((id) => {
      const p = PRODUCTS.find((x) => x.id === id);
      if (!p) return "";
      return `
        <div class="line">
          <img src="${p.image}" alt="" />
          <div>
            <strong><a href="#product/${p.id}" data-close-wish>${p.name}</a></strong>
            <div>${money(p.price)}</div>
          </div>
        </div>
      `;
    })
    .join("");
}

function toast(message) {
  const el = qs("#toast");
  el.textContent = message;
  el.hidden = false;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    el.hidden = true;
  }, 1800);
}

function addToCart(id, size) {
  const existing = cart.find((item) => item.id === id && item.size === size);
  if (existing) existing.qty += 1;
  else cart.push({ id, size, qty: 1 });
  renderCart();
  toast("Added to bag");
}

function route() {
  const { path, params } = parseHash();
  qs("#mobile-nav").hidden = true;
  if (path === "home" || path === "") {
    renderHome();
    showView("view-home");
  } else if (path === "shop") {
    shopFilter = params.gender || params.category || "all";
    renderShop(params);
    showView("view-shop");
  } else if (path.startsWith("product/")) {
    renderProduct(path.replace("product/", ""));
    showView("view-product");
  } else if (path === "checkout") {
    if (!cart.length) {
      location.hash = "shop";
      toast("Add something to the bag first");
      return;
    }
    renderCart();
    showView("view-checkout");
  } else if (path === "thanks") {
    showView("view-thanks");
  } else {
    renderHome();
    showView("view-home");
  }
}

qs("[data-open-menu]")?.addEventListener("click", () => {
  const nav = qs("#mobile-nav");
  nav.hidden = !nav.hidden;
});

qs("[data-open-search]")?.addEventListener("click", () => {
  const bar = qs("#search-bar");
  bar.hidden = !bar.hidden;
  if (!bar.hidden) qs("#search-input").focus();
});

qs("#search-input")?.addEventListener("input", (event) => {
  searchQuery = event.target.value.trim().toLowerCase();
  location.hash = "shop";
  renderShop(parseHash().params);
});

qs("#filters")?.addEventListener("click", (event) => {
  const btn = event.target.closest("button[data-filter]");
  if (!btn) return;
  shopFilter = btn.dataset.filter;
  const hash = shopFilter === "all" ? "shop" : `shop?${["men", "women"].includes(shopFilter) ? "gender" : "category"}=${shopFilter}`;
  if (location.hash.replace("#", "") !== hash) location.hash = hash;
  else renderShop(parseHash().params);
});

qs("#sort")?.addEventListener("change", () => renderShop(parseHash().params));

qs("#pdp-sizes")?.addEventListener("click", (event) => {
  const btn = event.target.closest("button[data-size]");
  if (!btn) return;
  selectedSize = btn.dataset.size;
  qsa("#pdp-sizes button").forEach((el) => el.classList.toggle("is-on", el === btn));
});

qs("#add-to-cart")?.addEventListener("click", () => {
  if (!currentProduct) return;
  addToCart(currentProduct.id, selectedSize);
  qs("#cart-drawer").hidden = false;
});

qs("#toggle-wish")?.addEventListener("click", () => {
  if (!currentProduct) return;
  if (wish.includes(currentProduct.id)) {
    wish = wish.filter((id) => id !== currentProduct.id);
    toast("Removed from wishlist");
  } else {
    wish.push(currentProduct.id);
    toast("Saved to wishlist");
  }
  write(WISH_KEY, wish);
  qs("#toggle-wish").textContent = wish.includes(currentProduct.id) ? "Saved" : "Wishlist";
  updateBadges();
  renderWish();
});

qs("[data-open-cart]")?.addEventListener("click", () => {
  renderCart();
  qs("#cart-drawer").hidden = false;
});

qs("[data-open-wishlist]")?.addEventListener("click", () => {
  renderWish();
  qs("#wish-drawer").hidden = false;
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-cart]")) qs("#cart-drawer").hidden = true;
  if (event.target.closest("[data-close-wish]")) qs("#wish-drawer").hidden = true;
  if (event.target.id === "cart-drawer") qs("#cart-drawer").hidden = true;
  if (event.target.id === "wish-drawer") qs("#wish-drawer").hidden = true;

  const qtyBtn = event.target.closest("[data-qty]");
  if (qtyBtn) {
    const [id, size, delta] = qtyBtn.dataset.qty.split("|");
    const item = cart.find((row) => row.id === id && row.size === size);
    if (!item) return;
    item.qty += Number(delta);
    if (item.qty <= 0) cart = cart.filter((row) => !(row.id === id && row.size === size));
    renderCart();
  }
});

qs("#checkout-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const name = String(data.get("name") || "").trim();
  qs("#thanks-copy").textContent = `Thanks, ${name}. Order #ST${Date.now().toString().slice(-6)} is a demo — nothing was charged.`;
  cart = [];
  write(CART_KEY, cart);
  renderCart();
  location.hash = "thanks";
});

qs("#mobile-nav")?.addEventListener("click", (event) => {
  if (event.target.closest("a")) qs("#mobile-nav").hidden = true;
});

window.addEventListener("hashchange", route);
renderHome();
renderCart();
renderWish();
route();
