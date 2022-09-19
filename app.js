//오브젝트
const player = {
    name : "user",
    points : 10,
    fat : true
};
/*
alert(player);
player.points = 20;
alert(player.points);
console.log(player);
*/

//펑션
function sayHello(name) { //argument
    console.log("Hello! My name is " + name);
}

/*
sayHello("red");
sayHello("yellow");
sayHello("blue");
sayHello("purple");
*/

function plus(a, b) {
    console.log(a + b);
}

//plus(2,5);


//return값
function calculationKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculationKrAge(96);

console.log(krAge);
