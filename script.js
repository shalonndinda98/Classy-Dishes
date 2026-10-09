const menuItems = [
  { id: 'ugali-nyama', name: 'Ugali & Nyama Choma', category: 'kenyan', label: 'Kenyan', description: 'Smoky grilled beef, soft ugali, kachumbari.', price: 1450, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' },
  { id: 'pilau', name: 'Mombasa Pilau', category: 'kenyan', label: 'Kenyan', description: 'Fragrant basmati rice, tender beef, pili pili.', price: 980, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80' },
  { id: 'chapati', name: 'Chapati & Coconut Beans', category: 'kenyan', label: 'Kenyan', description: 'Layered chapati, creamy maharagwe ya nazi.', price: 760, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80' },
  { id: 'swahili-fish', name: 'Swahili Coconut Fish', category: 'kenyan', label: 'Kenyan', description: 'Catch of the day, coconut curry, cassava.', price: 1680, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80' },
  { id: 'prawn-start', name: 'Coconut Prawn Skewers', category: 'starters', label: 'Starters', description: 'Charred prawns, tamarind glaze, lime.', price: 890, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' },
  { id: 'samosa', name: 'Spiced Samosas', category: 'starters', label: 'Starters', description: 'Crisp pastry, potato, peas, mint chutney.', price: 480, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80' },
  { id: 'burrata', name: 'Garden Burrata', category: 'starters', label: 'Starters', description: 'Creamy burrata, tomato, herbs, olive oil.', price: 920, image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80' },
  { id: 'pasta', name: 'Coastal Prawn Pasta', category: 'international', label: 'International', description: 'Linguine, prawns, garlic, chilli, lemon.', price: 1480, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80' },
  { id: 'burger', name: 'The Classy Burger', category: 'international', label: 'International', description: 'Beef patty, smoked cheddar, coastal slaw.', price: 1250, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80' },
  { id: 'pizza', name: 'Charred Pineapple Pizza', category: 'international', label: 'International', description: 'Mozzarella, pineapple, chilli honey, basil.', price: 1350, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80' },
  { id: 'chicken', name: 'Peri Peri Grilled Chicken', category: 'international', label: 'International', description: 'Half chicken, peri peri, fries, slaw.', price: 1550, image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80' },
  { id: 'cheesecake', name: 'Passionfruit Cheesecake', category: 'desserts', label: 'Desserts', description: 'Silky cheesecake, passionfruit, coconut crumb.', price: 650, image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80' },
  { id: 'mandazi', name: 'Warm Cardamom Mandazi', category: 'desserts', label: 'Desserts', description: 'Soft spiced dough, honey, vanilla cream.', price: 420, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80' },
  { id: 'mango-sorbet', name: 'Mango & Lime Sorbet', category: 'desserts', label: 'Desserts', description: 'Three bright scoops, made with ripe mango.', price: 520, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=800&q=80' },
  { id: 'dawa', name: 'Classy Dawa', category: 'drinks', label: 'Drinks', description: 'Vodka, honey, ginger, lime, served cold.', price: 650, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80' },
  { id: 'mango-juice', name: 'Fresh Mango Cooler', category: 'drinks', label: 'Drinks', description: 'Ripe mango, lime, mint, crushed ice.', price: 420, image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80' }
];

const state = { filter: 'all', cart: JSON.parse(localStorage.getItem('classy-dishes-cart') || '[]') };
const money = (value) => `KSh ${value.toLocaleString('en-KE')}`;
const byId = (id) => document.getElementById(id);

function renderMenu() {
  const grid = byId('menuGrid');
  const visibleItems = state.filter === 'all' ? menuItems : menuItems.filter((item) => item.category === state.filter);
  grid.innerHTML = visibleItems.map((item) => `
    <article class="menu-card">
      <div class="menu-card-image-wrap"><img src="${item.image}" alt="${item.name}" loading="lazy" /><span class="menu-category">${item.label}</span></div>
      <div class="menu-card-info"><div><h3>${item.name}</h3><p class="menu-card-description">${item.description}</p><button class="add-to-cart" type="button" data-add="${item.id}">Add to cart <span>＋</span></button></div><span class="menu-price">${money(item.price)}</span></div>
    </article>`).join('');
}

function cartLines() {
  return state.cart.map((line) => ({ ...line, item: menuItems.find((item) => item.id === line.id) })).filter((line) => line.item);
}

function updateCart() {
  localStorage.setItem('classy-dishes-cart', JSON.stringify(state.cart));
  const lines = cartLines();
  const count = lines.reduce((sum, line) => sum + line.qty, 0);
  const total = lines.reduce((sum, line) => sum + line.item.price * line.qty, 0);
  document.querySelectorAll('.cart-count').forEach((el) => { el.textContent = count; });
  document.querySelector('.cart-heading-count').textContent = `(${count})`;
  byId('cartTotal').textContent = money(total);
  byId('emptyCart').hidden = lines.length > 0;
  byId('cartItems').innerHTML = lines.map((line) => `
    <div class="cart-item">
      <img class="cart-item-image" src="${line.item.image}" alt="${line.item.name}" />
      <div><h3>${line.item.name}</h3><p class="cart-item-price">${money(line.item.price * line.qty)}</p><div class="quantity-control"><button type="button" data-qty="${line.id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${line.qty}</span><button type="button" data-qty="${line.id}" data-change="1" aria-label="Increase quantity">＋</button></div></div>
      <button class="remove-item" type="button" data-remove="${line.id}" aria-label="Remove ${line.item.name}">×</button>
    </div>`).join('');
}

function openCart() {
  document.querySelector('.cart-drawer').classList.add('is-open');
  document.querySelector('.cart-drawer').setAttribute('aria-hidden', 'false');
  document.querySelector('.cart-backdrop').hidden = false;
  document.body.classList.add('cart-open');
}
function closeCart() {
  document.querySelector('.cart-drawer').classList.remove('is-open');
  document.querySelector('.cart-drawer').setAttribute('aria-hidden', 'true');
  document.querySelector('.cart-backdrop').hidden = true;
  document.body.classList.remove('cart-open');
}
function showToast(message) {
  const toast = document.querySelector('.toast');
  toast.querySelector('p').textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove('is-visible'), 3000);
}
function addToCart(id) {
  const existing = state.cart.find((line) => line.id === id);
  if (existing) existing.qty += 1;
  else state.cart.push({ id, qty: 1 });
  updateCart();
  const item = menuItems.find((entry) => entry.id === id);
  showToast(`${item.name} added to your order`);
}
function changeQuantity(id, change) {
  const line = state.cart.find((entry) => entry.id === id);
  if (!line) return;
  line.qty += change;
  if (line.qty <= 0) state.cart = state.cart.filter((entry) => entry.id !== id);
  updateCart();
}

function submitWhatsApp(form) {
  const lines = cartLines();
  if (!lines.length) { showToast('Add a dish before sending your order'); return; }
  const data = new FormData(form);
  const orderLines = lines.map((line) => `• ${line.item.name} × ${line.qty} — ${money(line.item.price * line.qty)}`).join('\n');
  const total = lines.reduce((sum, line) => sum + line.item.price * line.qty, 0);
  const message = `Hello Classy Dishes! I would like to place an order.\n\n${orderLines}\n\nTotal: ${money(total)}\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nDelivery address: ${data.get('address')}`;
  window.open(`https://wa.me/254711245678?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  byId('orderStatus').textContent = 'WhatsApp opened with your order details.';
}

function init() {
  renderMenu();
  updateCart();

  document.addEventListener('click', (event) => {
    const filter = event.target.closest('[data-filter]');
    if (filter) {
      state.filter = filter.dataset.filter;
      document.querySelectorAll('.category-tab').forEach((tab) => { tab.classList.toggle('is-active', tab === filter); tab.setAttribute('aria-selected', tab === filter ? 'true' : 'false'); });
      renderMenu();
    }
    const add = event.target.closest('[data-add]');
    if (add) addToCart(add.dataset.add);
    const qty = event.target.closest('[data-qty]');
    if (qty) changeQuantity(qty.dataset.qty, Number(qty.dataset.change));
    const remove = event.target.closest('[data-remove]');
    if (remove) { state.cart = state.cart.filter((line) => line.id !== remove.dataset.remove); updateCart(); showToast('Item removed from your order'); }
    if (event.target.closest('.cart-trigger')) openCart();
    if (event.target.closest('.drawer-close') || event.target.closest('.cart-backdrop')) closeCart();
    if (event.target.closest('[data-order-link]')) { event.preventDefault(); openCart(); document.querySelector('.cart-drawer').scrollTo({ top: 0, behavior: 'smooth' }); }
    if (event.target.closest('.menu-toggle')) {
      const nav = document.querySelector('.site-nav');
      const toggle = document.querySelector('.menu-toggle');
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    }
    if (event.target.closest('.site-nav a')) { document.querySelector('.site-nav').classList.remove('is-open'); document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false'); }
  });

  byId('orderForm').addEventListener('submit', (event) => { event.preventDefault(); submitWhatsApp(event.currentTarget); });
  byId('checkoutButton').addEventListener('click', () => { if (!state.cart.length) showToast('Add a dish before checkout'); else showToast('Checkout is ready — send your order on WhatsApp to confirm'); });
  byId('reservationForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    byId('reservationStatus').textContent = `Thank you, ${data.get('name')} — your table request for ${data.get('guests')} on ${data.get('date')} at ${data.get('time')} is confirmed. We’ll call you shortly.`;
    event.currentTarget.reset();
  });
  const dateInput = document.querySelector('input[name="date"]');
  dateInput.min = new Date().toISOString().split('T')[0];
}

document.addEventListener('DOMContentLoaded', init);
