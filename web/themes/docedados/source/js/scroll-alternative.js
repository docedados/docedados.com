// we have to add an element with id "top-of-site-pixel-anchor" where we want the scroll
// to detect a change

// document.addEventListener('DOMContentLoaded', function (event) {
//   if (
//     'IntersectionObserver' in window &&
//     'IntersectionObserverEntry' in window &&
//     'intersectionRatio' in window.IntersectionObserverEntry.prototype
//   ) {
//     let observer = new IntersectionObserver((entries) => {
//       if (entries[0].boundingClientRect.y < 0) {
//         document.body.classList.add('header-not-at-top');
//       } else {
//         document.body.classList.remove('header-not-at-top');
//       }
//     });

//     observer.observe(document.querySelector('#top-of-site-pixel-anchor'));
//   }
// });
