// const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "Raghav";
tinderUser.age = 22;
tinderUser.isLoggedIn = false;

// 

const regularUser = {

    email: "raghav@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Raghav",
            lastName: "Dev"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);

const users = [
    {
        id : "123abc",
        email: "raghavdev31@gmail.com",
    },
    {
        id : "123abc",
        email: "raghavdev31@gmail.com",
    },
    {
        id : "123abc",
        email: "raghavdev31@gmail.com",
    },
    {
        id : "123abc",
        email: "raghavdev31@gmail.com",
    },

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",

}

// course.courseInstructor

const {courseInstructor: instructor} = course;

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Raghav",
//     "coursename": "js in hindi",
//     "price": "free", 

// }

[
    {},
    {},
    {}
]
