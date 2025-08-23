document.addEventListener("DOMContentLoaded", () => {
  const imagePaths = Array.from('resources/images/gallery');
  
  const container = document.getElementById('gallery');
  imagePaths.forEach(path => {
      const img = document.createElement('img');
      img.src = path;
      img.alt = 'Image';
      container.appendChild(img);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.slide');
  let currentIndex = 0;

  function changeSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    const offset = -currentIndex * 100; // Move to the next slide
    carousel.style.transform = `translateX(${offset}%)`;
  }

  // Change slide every 5 seconds
  setInterval(changeSlide, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
  var direction = 1;

  const carousel = {
    num_items: document.querySelectorAll(".slide").length,

    current: 1,

    init: function() {
      document.querySelectorAll(".slide").forEach((element, index) => {
        element.style.order = index + 1;
      });

      this.addEvents();
    },

    addEvents: function() {
      var that = this;

      document.querySelector("#left").addEventListener('click', () => {
        direction = -1;
        this.gotoPrev();
      });

      document.querySelector("#right").addEventListener('click', () => {
        direction = 1;
        this.gotoNext();
      });

      // after each item slides in, slider container fires transitionend event
      document.querySelector(".carousel-container").addEventListener('transitionend', () => {
        this.changeOrder();
      });
    },

    changeOrder: function() {
      // change current position
      if (direction < 0) {
        if(this.current == 1)
          this.current = this.num_items;
        else
          this.current --;
      }
      else {
        if(this.current == this.num_items)
          this.current = 1;
        else 
          this.current ++;
      }

      let order = 1;

      for(let i = this.current; i <= this.num_items; i ++) {
          document.querySelector(".slide[data-position='" + i + "']").style.order = order;
          order ++;
        }

        // change order from first position till current
        for (let i = 1; i < this.current; i ++) {
          document.querySelector(".slide[data-position='" + i + "']").style.order = order;
          order ++;
        }

        

            // translate back to 0 from -100%
      // we don't need transitionend to fire for this translation, so remove transition CSS
      document.querySelector(".carousel-container").classList.remove('slider-container-transition');
      document.querySelector(".carousel-container").style.transform = 'translateX(0)';
    },

    gotoPrev: function() {
      document.querySelector(".carousel-container").classList.add('slider-container-transition');
      document.querySelector(".carousel-container").style.transform = 'translateX(100%)';
    },

    gotoNext: function() {
      // translate from 0 to -100% 
      // we need transitionend to fire for this translation, so add transition CSS
      document.querySelector(".carousel-container").classList.add('slider-container-transition');
      document.querySelector(".carousel-container").style.transform = 'translateX(-100%)';
    }
  };

  carousel.init();
});