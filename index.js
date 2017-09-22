alert("Welcome to JS class")

var student="frank"

var student_1 = "Cynthia"

var student_2 = "Christel"

var welcome_msg = "Hi, let's be friends! " + student_1 + " , " + student_2
console.log(welcome_msg)

function greet(nameOfPerson) {
    var greeting_message = "Welcome, Mr " + nameOfPerson
    console.log(greeting_message)
}

greet("Cynthia")

greet("Christel")

greet("YinYong")

function joinName(name1,name2) {
    var joined_string = name1 + space + name1 + " | " + name2 + space + name2
    var space = " "
    console.log(joined_string);
    return joined_string
}

joinName("Christel","YinYong");

function multiple(a,b){
    var output = a * b
    console.log(output)
    return output
}

multiple(5,2);

var days = 5;
var fullTime = false;

if (days < 8) {
    fullTime = true
    console.log(fullTime)
} 

var favDrink = "Red Wine";
var order = "Whiskey"
var rightChoice;

function determineFavDrink(my_order) {
    var rc;

    if (my_order == "Red Wine") {
        rc = true;    
    } else {
        rc = false;
    }
    return rc
}

rightChoice = determineFavDrink(order)
console.log(rightChoice)

console.log(typeof determineFavDrink)

for (var index = 0; index < 10; index++) {
    console.log(index)  
}

var index = 0
while (index < 10) {
    console.log(index)
    index ++
}

for (loop = 90; loop > 69; loop--) {
    console.log(loop)
}

var index1 = 90
while (index1 > 69) {
    index1 --
    console.log(index1)
}

for (var item in [1,2,3]){
    console.log(item);
}

for (var numOfBottles = 99; numOfBottles > 1; numOfBottles--) {
    console.log(numOfBottles + " bottles of beer on the wall, " + numOfBottles + " bottles of beer.")
    var numOfBottlesleft = numOfBottles - 1
    console.log("Take one down and pass it around, " + numOfBottlesleft + " bottles of beer on the wall.")
}
    numOfBottles = 1
    console.log(numOfBottles + " bottle of beer on the wall, " + numOfBottles + " bottle of beer.")
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")


var student = {
    name: "Ken",
    age: 20,
    marks: [80, 89, 67, 90, 100]
    avg: 0,
    welcome_function: function () {
        console.log("Welcome World!")
    }
}

console.log(student.name)

student.marks[3]

var mymarks_list = student.marks
var no_of_items = mymarks_list.length
var index = 0
var total = 0
// for (var num in mymarks_list) {
//     total = total + num
//     }
// }

// for (var index = 0; index < mymarks_list.length; index++) {
//     var num = mymarks_list[index];
//     total = total + num;
// }

while (index < mymarks_list.length) {
    total = total + mymarks_list[index]
    index++
}

var average = total / mymarks_list.length
student.avg = average

student.welcome_function()