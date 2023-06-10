(function() {
    const preloader = document.querySelector('.js-preloader');
    const content = document.querySelector('.js-content');
  
    window.addEventListener('load', hidePreloader);
    console.log(preloader);
    function hidePreloader() {
      setTimeout(() => {
        preloader.classList.add('preloader--hidden');
        content.classList.add('preloader__content--hidden');
      }, 1000);
    }
  })();