/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

function applyIt(func, args) {

    console.log(args.length);
    function func (arr) {
        console.log(arr.length);
        console.log(arr);
        if (arr.length === 1) {
            return "We don't know how old " + arr[0] + " is!";
        } else if (arr.length === 3) {
            return arr[0] + " is " + arr[1] + " and he/she lives in " + arr[2];
        } else if (arr.length === 2) {
            return arr[0] + " is " + arr[1] + " years old!";
        } else {
            return "No input!";
        }
    }
    console.log(func(args));
    //return func(args);
}

// func (name, age, location)
// return name + " is " + age + " and he lives in " + location;

//console.log(applyIt(jae, args));

var jae = function(name, age, location) {
    return name + " is " + age + " and he lives in " + location;
};
var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
console.log(jaero()); //Returns "Jae is 19 and he lives in South Carolina"

module.exports = applyIt;

function applyIt(func, args) {
    var functionCall = 'func' + "(";

    for (let i = 0; i < args.length; i++) {
        functionCall += "\"" + args[i] + "\"";

        if (i < args.length - 1) functionCall += ",";
    }

    functionCall += ")";

    return () => eval(functionCall);
}
