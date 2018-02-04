
describe('myService tests', function() {
    var myService, $httpBackend, $rootScope;

    beforeEach(function() {
        module('myApp');
        inject(function($injector, _$httpBackend_, _$rootScope_) {
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_;
            myService = $injector.get('myService');
        });
    });
    
    it('should be defined', function() {
        expect(myService).toBeDefined();
    });

    it('should check the name property', function() {
        expect(myService.name).toEqual('Joe');
    });

    it('should check the getName function', function() {
        expect(myService.getName()).toEqual('Jack');
    });

    it('should call getNames', function() {
        var prefix = 'TLOU';
        var data = [{id:1, name:'Joel'},{id:2, name:'Ellie'}];
        $httpBackend.expectGET('api/get/names.json').respond(data);
        
        var names;
        myService.getNames(prefix)
            .then(function(data) {
                names = data;
            });
        
        $httpBackend.flush();
        $rootScope.$digest();
        
        dump(names);

        expect(names).toEqual([{id:1, name:'Joel', uuid: prefix},{id:2, name:'Ellie', uuid:prefix}]);
    });

});
    