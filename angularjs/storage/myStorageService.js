angular.module('myApp')
    .factory('myStorage', function ($window) {

        function set(storage, key, value) {
            storage.setItem(key, value);
        }

        function get(storage, key, defaultValue) {
            var value = storage.getItem(key);
            return value ? value : defaultValue;
        }

        function remove(storage, key) {
            storage.removeItem(key);
        }

        return {
            local: {
                set: function(key, value) {
                    set($window.localStorage, key, value);
                },
                get: function(key, defaultValue) {
                    return get($window.localStorage, key, defaultValue);
                },
                delete: function(key) {
                    remove($window.localStorage, key);
                }
            },
            session: {
                set: function(key, value) {
                    set($window.sessionStorage, key, value);
                },
                get: function(key, defaultValue) {
                    return get($window.sessionStorage, key, defaultValue);
                },
                delete: function(key) {
                    remove($window.sessionStorage, key);
                }
            }
        };
    });