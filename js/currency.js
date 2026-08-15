/* Injects a currency dropdown into the utility bar (desktop) and mobile
   drawer, wired to the formatPrice()/setCurrency() helpers in data.js.
   Switching currency reloads the page so every rendered price re-formats. */
(function () {
  const LABELS = { THB: 'ไทย | THB ฿', USD: 'USD $', EUR: 'EUR €', CNY: 'CNY ¥' };

  function buildSelect(id) {
    const current = getCurrency();
    const options = Object.keys(CURRENCIES).map(code =>
      `<option value="${code}" ${code === current ? 'selected' : ''}>${LABELS[code]}</option>`
    ).join('');
    return `<select id="${id}" class="currency-select">${options}</select>`;
  }

  function wireSelect(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('change', () => {
      setCurrency(el.value);
      location.reload();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const utilityLinks = document.querySelector('.utility-bar .utility-links');
    if (utilityLinks) {
      utilityLinks.insertAdjacentHTML('afterbegin', buildSelect('currency-select-desktop'));
      wireSelect('currency-select-desktop');
    }

    const drawerNav = document.querySelector('.mobile-drawer .drawer-nav');
    if (drawerNav) {
      const wrap = document.createElement('div');
      wrap.className = 'drawer-currency';
      wrap.innerHTML = buildSelect('currency-select-mobile');
      drawerNav.insertAdjacentElement('afterend', wrap);
      wireSelect('currency-select-mobile');
    }
  });
})();
