//for 3 or more promises
const p1 = Promise.resolve("ok !");
const p2 = 1234;
const p3 = new Promise((resolve , reject) => {
    setTimeout(() => {
        resolve("Hello !");
    },1000);
});
Promise.all([p1 , p2 , p3]).then((values) =>{
    console.log(values);
});
