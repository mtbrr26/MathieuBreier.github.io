/* ── Scroll progress bar ── */

window.addEventListener('scroll', function () {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = height > 0 ? (winScroll / height) * 100 : 0;
  var bar = document.getElementById('myBar');
  if (bar) bar.style.width = scrolled + '%';
});

/* ── Sidebar visibility & active section tracking ── */

document.addEventListener('DOMContentLoaded', function () {
  var sidebar = document.querySelector('.sidebar');
  var navLinks = document.querySelectorAll('.sidebar .nav a');

  if (!sidebar || navLinks.length === 0) return;

  var firstSectionLink = navLinks[0];
  var firstSectionHref = decodeURIComponent(firstSectionLink.getAttribute('href')).replace(/\s+/g, '-');
  var firstSection = document.querySelector(firstSectionHref);

  if (!firstSection) return;

  function updateSidebar() {
    var viewportHeight = window.innerHeight;
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var middleOfScreen = viewportHeight / 2 + scrollY;
    var documentHeight = document.documentElement.scrollHeight;
    var atBottom = scrollY + viewportHeight >= documentHeight - 2;

    var firstTop = firstSection.offsetTop + firstSection.offsetHeight;

    if (scrollY + middleOfScreen / 5 > firstTop && !atBottom) {
      sidebar.classList.add('sidebar-visible');
    } else {
      sidebar.classList.remove('sidebar-visible');
    }

    /* Highlight active section */
    var sections = [];
    navLinks.forEach(function (link) {
      var href = decodeURIComponent(link.getAttribute('href')).replace(/\s+/g, '-');
      var el = document.querySelector(href);
      if (el) sections.push({ link: link, section: el });
    });
    sections.sort(function (a, b) { return a.section.offsetTop - b.section.offsetTop; });

    var current = sections.length > 0 ? sections[0].link : null;
    sections.forEach(function (item) {
      if (item.section.getBoundingClientRect().top + scrollY < middleOfScreen) {
        current = item.link;
      }
    });

    navLinks.forEach(function (link) { link.classList.remove('active'); });
    if (current) current.classList.add('active');
  }

  window.addEventListener('scroll', updateSidebar);
  updateSidebar();
});
