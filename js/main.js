/* ==========================================================================
   Bax Baxter Home Decor — Shared Site Logic (Cart, Header inject, Toast, Wishlist)
   Prototype only — uses localStorage to simulate backend state.
   ========================================================================== */

const LH = {
  CART_KEY: 'lh_cart',
  WISHLIST_KEY: 'lh_wishlist',
  USER_KEY: 'lh_user',
  ORDERS_KEY: 'lh_orders',

  getCart() {
    try { return JSON.parse(localStorage.getItem(this.CART_KEY)) || []; }
    catch (e) { return []; }
  },
  saveCart(cart) {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart));
    this.updateCartBadge();
  },
  addToCart(productId, qty = 1, options = {}) {
    const cart = this.getCart();
    const existing = cart.find(i => i.id === productId && JSON.stringify(i.options) === JSON.stringify(options));
    if (existing) { existing.qty += qty; }
    else { cart.push({ id: productId, qty, options }); }
    this.saveCart(cart);
    this.toast('เพิ่มสินค้าลงตะกร้าแล้ว', 'success');
  },
  updateQty(productId, options, qty) {
    const cart = this.getCart();
    const item = cart.find(i => i.id === productId && JSON.stringify(i.options) === JSON.stringify(options));
    if (item) { item.qty = Math.max(1, qty); this.saveCart(cart); }
  },
  removeFromCart(productId, options) {
    let cart = this.getCart();
    cart = cart.filter(i => !(i.id === productId && JSON.stringify(i.options) === JSON.stringify(options)));
    this.saveCart(cart);
  },
  cartCount() {
    return this.getCart().reduce((sum, i) => sum + i.qty, 0);
  },
  cartTotal() {
    return this.getCart().reduce((sum, i) => {
      const p = typeof getProductById === 'function' ? getProductById(i.id) : null;
      return sum + (p ? p.price * i.qty : 0);
    }, 0);
  },
  clearCart() { this.saveCart([]); },

  getWishlist() {
    try { return JSON.parse(localStorage.getItem(this.WISHLIST_KEY)) || []; }
    catch (e) { return []; }
  },
  toggleWishlist(productId) {
    let list = this.getWishlist();
    if (list.includes(productId)) { list = list.filter(id => id !== productId); }
    else { list.push(productId); this.toast('เพิ่มในรายการโปรดแล้ว', 'success'); }
    localStorage.setItem(this.WISHLIST_KEY, JSON.stringify(list));
    return list.includes(productId);
  },
  isWishlisted(productId) { return this.getWishlist().includes(productId); },

  getUser() {
    try { return JSON.parse(localStorage.getItem(this.USER_KEY)); }
    catch (e) { return null; }
  },
  login(name, email) {
    localStorage.setItem(this.USER_KEY, JSON.stringify({ name, email, joined: new Date().toISOString() }));
  },
  logout() { localStorage.removeItem(this.USER_KEY); },

  getOrders() {
    try { return JSON.parse(localStorage.getItem(this.ORDERS_KEY)) || this.seedOrders(); }
    catch (e) { return this.seedOrders(); }
  },
  seedOrders() {
    const statuses = ['completed', 'shipping', 'processing', 'paid', 'pending', 'cancelled'];
    const orders = [];
    for (let i = 1; i <= 6; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i * 5);
      orders.push({
        no: 'LH' + (250800 + i * 7),
        date: d.toISOString(),
        status: statuses[i % statuses.length],
        total: Math.floor(Math.random() * 15000) + 1500,
        items: Math.floor(Math.random() * 4) + 1,
      });
    }
    localStorage.setItem(this.ORDERS_KEY, JSON.stringify(orders));
    return orders;
  },
  createOrder(cartSnapshot, total) {
    const orders = this.getOrders();
    const orderNo = 'LH' + Date.now().toString().slice(-8);
    orders.unshift({ no: orderNo, date: new Date().toISOString(), status: 'pending', total, items: cartSnapshot.length });
    localStorage.setItem(this.ORDERS_KEY, JSON.stringify(orders));
    return orderNo;
  },

  updateCartBadge() {
    document.querySelectorAll('.cart-count').forEach(el => { el.textContent = this.cartCount(); });
  },

  toast(msg, type = 'success') {
    let toastEl = document.getElementById('lh-toast');
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.id = 'lh-toast';
      toastEl.className = 'toast';
      toastEl.innerHTML = `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span id="lh-toast-msg"></span>`;
      document.body.appendChild(toastEl);
    }
    document.getElementById('lh-toast-msg').textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2600);
  },

  statusLabel(status) {
    const key = 'order_status_' + status;
    return (typeof t === 'function' && I18N[key]) ? t(key) : status;
  },

  formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' });
  },
};

document.addEventListener('DOMContentLoaded', () => {
  LH.updateCartBadge();

  // Mobile drawer toggle
  const hamburger = document.querySelector('.hamburger');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const drawerClose = document.querySelector('.drawer-close');
  const openDrawer = () => { drawer && drawer.classList.add('open'); overlay && overlay.classList.add('open'); };
  const closeDrawer = () => { drawer && drawer.classList.remove('open'); overlay && overlay.classList.remove('open'); };
  hamburger && hamburger.addEventListener('click', openDrawer);
  drawerClose && drawerClose.addEventListener('click', closeDrawer);
  overlay && overlay.addEventListener('click', closeDrawer);

  // Header shrink/scroll shadow (harmless progressive enhancement)
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10 ? '0 2px 12px rgba(28,25,23,0.06)' : 'none';
    });
  }
});
