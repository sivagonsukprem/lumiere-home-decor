(function () {
  const user = LH.getUser();
  const name = user ? user.name : t('account_default_customer');
  const email = user ? user.email : 'guest@example.com';
  const initial = name.trim().charAt(0).toUpperCase() || 'L';
  const page = window.location.pathname.split('/').pop();

  const navItems = [
    { href: 'profile.html', label: t('account_nav_profile'), icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>' },
    { href: 'address.html', label: t('account_nav_address'), icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/>' },
    { href: 'orders.html', label: t('account_nav_orders'), icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 7h6m-6 4h6"/>' },
    { href: 'wishlist.html', label: t('account_nav_wishlist'), icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-8.318a4.5 4.5 0 010-6.364z"/>' },
  ];

  const navHTML = navItems.map(item => `
    <a href="${item.href}" class="${page === item.href ? 'active' : ''}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${item.icon}</svg>
      ${item.label}
    </a>`).join('') + `
    <a href="#" id="logout-link">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
      ${t('account_nav_logout')}
    </a>`;

  document.getElementById('account-nav').innerHTML = `
    <div class="account-nav-head">
      <div class="account-avatar">${initial}</div>
      <div>
        <div class="name">${name}</div>
        <div class="email">${email}</div>
      </div>
    </div>
    ${navHTML}
  `;

  document.getElementById('logout-link').addEventListener('click', function (e) {
    e.preventDefault();
    LH.logout();
    LH.toast(t('account_logged_out'));
    setTimeout(() => { window.location.href = 'login.html'; }, 400);
  });
})();
