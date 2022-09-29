
const preloader = document.getElementById('page-preloader');

document.body.onload = function () {
  setTimeout(function () {
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 500);
};

// export const spinnerMethod = {
//   removeSpinner: function () {
//     setTimeout(preloader.classList.add('done'), 500);
//   },
//   addSpinner: function () {
//     preloader.classList.remove('done');
//   },
// };
