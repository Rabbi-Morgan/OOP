///////////////////////////////// Object ///////////////////////////////

/////// Constructors //////////

// A Factory function: it is called to creste 
function createTimer(value){
    return {
        value,
        def: function(){
            console.log(this.value+10)
            this.value += 10
        }
    }
}

let Timer = createTimer(30)

// Constuctor Function

function Circle(radius){
    console.log(this)
    this.radius = radius
    this.draw = ()=>{console.log('draw')}
}
// so this is how the new operator works, when we call thje new operator on a constructor function, it interpretes itm in this form Circle.call({},3). This means new Circle(3) === Circle.call({},3)
const newCircle = new Circle(3)

// Note that if you don't use the 'new' operator to create the newCircle i.e using just Circle(3), the this keyword in the constructor function will be pointing to the window object, hence the way this will be created will be Circle.call(window, 3). Hence the first argument of the call function targets of this, and the rest of the arguments specifies the parameters for the constructor function 
// Another way of Creating a new object using the Constructor function is using the apply method, this is very similar to using the call method but the only difference in the apply method is that when you have parameters of the Constructor function to be more than one, you use an array i.e Circle.apply({}, [param1, param2, param2]) which is equvalent to Circle.call({}, param1, param2, param3)

// In javascript, function are objects

// to create an object using the object literal notation, we do let x = {}, but Javascript interpretes it as let x = new Object();, same as string let y = 'yummy', Js interpretes it as let y = new String(yummy) , same as booleans, new Boolean(), number, new Nunber(). You get the gist now right? The main gist (the big picture) is that every object has a constructor property and that references the functiion that was used to create that object. new Function (), function constructor



///////// Values and Reference Types ////////////

// Value Types(primitives): string, numbers, undefined, booleans, null, symbol. Primitives are completely independent of each other
// In conclusion; primitives are copied by value
let x = 10
let y = x

x=20

console.log(x) // 20
console.log(y) // 10

let number = 10 
function increase(number){
    number++
}
increase(number)
console.log(number) // 10

// Reference Types(non primitives): Object, Function and Arrays. Now, unlike the primitive types, the reference type are dependent on each other. So here's how it works, when we assign an object to a particular variable, that object is not store in that variable, it is stored somewhere in the machine, the only thing that's stored in that variable is the reference to that object, so when we then assign that variable holding the object to another variable, it doesn't give that variable the object but the refence to the object, so if a modification is made to the object, all the variable holding the object or holding a variable holding the object will have access to the modification since they are just accessing the reference number of the object on the machine.
// In conclusion; non-primitives are copied by thier reference

let xx = {'val': 10}
let yy = xx

xx.val=20

console.log(xx) // 20
console.log(yy) // 20

let obj = {number: 10} 
function increase(obj){
    obj.number++
}
increase(obj)
console.log(obj.number) // 11

/////////////// Adding or Removing Properties ////////////////
function Circle(radius){
    let length = 343
    let direction = {
        x:0,
        y:10
    }
    this.radius = radius
    this.draw = function(){
        console.log(`draw ${length} ${direction.y}`);
    }
}

const circle = new Circle(10);

// to access the property of that the object we can use the dot notation and the []. But if you are uncertain what that attribute will be, it is best to use [], because the attribute migth contain a specia;l character or space like the constant propertyName below
circle.location = {x:1}
const propertyName = 'center location';
circle[propertyName]
delete circle.location

// Enumirating properties

Object.keys(circle).forEach(key=>{
    if(typeof circle[key] !== 'function')
    console.log(`${key} .....`)
})
// check if this radius is in circle
if ('radius' in circle){
    console.log('Circle has a radius')
}

///////////// Abstraction /////////////
//abstraction basically means we hide the details and complexity and only show the essentials and important