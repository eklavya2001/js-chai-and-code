// function Vehicle(make, model) {
//     this.make = make;
//     this.model = model;
//     this.displayInfo = function() {
//         console.log('This vehicle is a ' + this.make + ' ' + this.model);
//     };
// }
// let car=  new Vehicle('toyota','fortuner')
// car.displayInfo()


// // var car = Vehicle('Toyota', 'Camry'); // aise nahi hoga because of 'new' keyword
// // car.displayInfo();

// for (var i = 0; i < 3; i++) {
//     setTimeout((function(x) {
//         return function() {
//             console.log(x);
//         };
//     })(i), 1000);
// }

        function outer() {
            var arr = [];
            for (var i = 0; i < 3; i++) {
                arr.push(function() {
                    console.log(i);
                });
            }
            return arr;
        }
        
        var functions = outer();
        functions[0]();
        functions[1]();
        functions[2]();
        
     



