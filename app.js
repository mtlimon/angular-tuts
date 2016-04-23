angular.module('myApp', ['ngAnimate'])
    .controller('appController', function() {

        var dirList = this;
        dirList.toggle = false;

        dirList.list = [
            { name: 'Sal', age: 28, img:'images/1.jpg' },
            { name: 'Maria', age: 35, img:'images/2.jpg'},
            { name: 'Ella', age: 30, img:'images/3.jpg' },
            { name: 'Carol', age: 31, img:'images/4.jpg' }
        ];

        dirList.addPerson = function() {
            dirList.list.push({ name: dirList.name, age: dirList.age });
            dirList.name = '';
            dirList.age = 0;
        };
    });
