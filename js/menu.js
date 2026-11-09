// Menu do celular e tablet — Grupo Beiramar (mesmo comportamento do site da BRM Asset)
// Abre e fecha pelo botão (☰ ↔ ✕), fecha ao tocar num link, com Esc, ao alargar a tela
// e ao voltar à página pelo navegador. Com o menu aberto, a página atrás não rola.
(function () {
  var header = document.getElementById('header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('navlinks');
  if (!header || !toggle || !nav) return;

  var iconOpen = toggle.innerHTML;
  var iconClose = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>';

  function setMenu(open) {
    header.classList.toggle('is-open', open);
    document.documentElement.classList.toggle('menu-open', open);
    toggle.innerHTML = open ? iconClose : iconOpen;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }

  toggle.addEventListener('click', function () { setMenu(!header.classList.contains('is-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.classList.contains('is-open')) { setMenu(false); toggle.focus(); }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 920 && header.classList.contains('is-open')) setMenu(false);
  });
  window.addEventListener('pageshow', function () { setMenu(false); });
})();
