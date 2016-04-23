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

        /**var bingoJackpots = this;
        bingoJackpots.list = [
            { category: 'Mini Matinee', label: 'Hotball', amount: '129' },
            { category: 'Matinee', label: 'Pick 8', amount: '6937' },
            { category: 'Evening', label: 'Super JP', amount: '4312' },
            { category: 'Pot of Gold', label: 'Match 3', amount: '1994' },
            { category: 'Night Owl', label: 'Hotball', amount: '603' },
            { category: 'Mini Matinee', label: 'Bonanza', amount: '1531' }
        ];
        bingoJackpots.addJackpots = function() {
            bingoJackpots.list.push({
                category: bingoJackpots.category,
                label: bingoJackpots.label,
                amount: bingoJackpots.amount
            });
            bingoJackpots.category = '';
            bingoJackpots.label = '';
            bingoJackpots.amount = 0;
        };*/
    });
