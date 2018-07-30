class PhoneListController {
  static $inject = ['Phone'];

  phones: any[];
  orderProp: string;
  query: string;

  constructor(Phone: any) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
}

angular
  .module('phoneList')
  .component('phoneList', {
    templateUrl:  'phone-list/phone-list.template.html',
    controller: PhoneListController
  });

/*
// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  });
*/