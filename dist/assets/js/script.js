'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
  _classCallCheck(this, Shared);
};

if (document.querySelector('.partners__slick')) {
  $('.partners__slick').slick({
    variableWidth: true,
    prevArrow: '<button class="partners__slick-btn partners__slick-prev"><img src="assets/images/arrow-prev.png"></button>',
    nextArrow: '<button class="partners__slick-btn partners__slick-next"><img src="assets/images/arrow-next.png"></button>'
  });
}
//# sourceMappingURL=script.js.map
