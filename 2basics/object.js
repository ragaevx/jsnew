// singleton
// Object.Create

// object literals

const mySym = Symbol("key1");

const JsUSer ={
        name: "Sharda",
        age: 22,
        "full name": "Raghav Dev",
        [mySym]: "mykey1",
        location: "Jammu",
        email: "raghavdve31@google.com",
        isLoggedIn: false,
        lastLoginDays: ["Sunday", "Monday", "Tuesday"],
}

// console.log(JsUSer.email);
// console.log(JsUSer["email"]);
// console.log(JsUSer["full name"]);
// console.log(JsUSer[mySym]);

JsUSer.email = "raghavdev31@gmail.com"
// Object.freeze(JsUSer);
JsUSer.email = "raghavdev31@microsoft.com";
// console.log(JsUSer);

JsUSer.greeting = function() {

        console.log("Hello js user");
        
}

JsUSer.greetingtwo = function() {

        console.log(`Hello js user ${this.name}`);
}


console.log(JsUSer.greeting());
console.log(JsUSer.greetingtwo());


