var PhoneDetailController = /** @class */ (function () {
    function PhoneDetailController($routeParams, Phone) {
        var _this = this;
        var phoneId = $routeParams['phoneId'];
        this.phone = Phone.get({ phoneId: phoneId }, function (phone) {
            _this.setImage(phone.images[0]);
        });
    }
    PhoneDetailController.prototype.setImage = function (imageUrl) {
        this.mainImageUrl = imageUrl;
    };
    PhoneDetailController.$inject = ['$routeParams', 'Phone'];
    return PhoneDetailController;
}());
angular
    .module('phoneDetail')
    .component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
});
/*
// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        var self = this;
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
          self.setImage(phone.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
*/ 
//# sourceMappingURL=phone-detail.component.js.map