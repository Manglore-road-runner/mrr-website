// MRR Technology Solutions — site scripts (v1 draft)

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile nav toggle ----
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // ---- Image placeholder / frame system ----
  // Each .frame contains a real <img> pointing at assets/images/<filename>.jpg
  // plus a .frame-fallback shown until that file exists.
  // When the real photo is uploaded with the matching filename, the <img>
  // loads and the placeholder fades out automatically — no code changes.
  document.querySelectorAll('.frame img').forEach(function (img) {
    function markLoaded() { img.closest('.frame').classList.add('is-loaded'); }
    function markMissing() { img.closest('.frame').classList.add('is-missing'); }

    img.addEventListener('load', markLoaded);
    img.addEventListener('error', markMissing);

    // Handle images that already failed/succeeded before listeners attached
    if (img.complete) {
      if (img.naturalWidth > 0) { markLoaded(); } else { markMissing(); }
    }
  });

  // ---- Contact form (static site — needs a form backend before go-live) ----
  var form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('This is a draft form. Connect it to a form service (e.g. Formspree) or backend before launch — see README.md.');
    });
  }

});
