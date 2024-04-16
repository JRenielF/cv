document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        var main = document.querySelector('section');
  
        if (window.scrollY > 50) { 
            header.classList.add('solid');
            header.classList.remove('transparent');
        } else {
            header.classList.remove('solid');
            header.classList.add('transparent');
        }
    });
  });