function toggleNav() {
  document.querySelector('.nav-toggle').classList.toggle('open');
  document.querySelector('.nav-mobile').classList.toggle('open');
}

/* legacy alias so old pages still work if not yet updated */
function toggleFunction() { toggleNav(); }
