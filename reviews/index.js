

// Hoisting => functions


// name function

// console.log(myname()); returns 'Fazliddin'
// function myname() {
// var name='Fazliddin';

// return name;
    
// }



// anonymous function

// console.log(myname()); returns error

var myname=function () {


    var name='Fazliddin';
    return `${name}`

    
}

// console.log(myname()); returns 'Fazliddin'