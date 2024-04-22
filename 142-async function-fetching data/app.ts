//
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Hello, World");
    },2000);   
});
myPromise.then((result) =>{
    console.log(result);
});


