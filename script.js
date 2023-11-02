   var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      var dropdownlink = this.el.querySelectorAll('.dropdownlink');
      dropdownlink.forEach(function (item) {
        item.addEventListener('click', function () {
          var parent = this.parentElement;
          parent.classList.toggle('open');
          var submenu = parent.querySelector('.submenuItems');
          submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';

          if (!multiple) {
            var siblings = parent.parentElement.children;
            for (var i = 0; i < siblings.length; i++) {
              var sibling = siblings[i];
              if (sibling !== parent) {
                sibling.classList.remove('open');
                sibling.querySelector('.submenuItems').style.display = 'none';
              }
            }
          }
        });
      });
    };
    // var accordion = new Accordion(document.querySelector('.accordion-menu'), false);