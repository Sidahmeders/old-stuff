
const posts = [
    {title: "post one", body: "this is post one"},
    {title: "post two", body: "this is post two"}
];

function getPosts() {
    setTimeout(() => {
        output = "";
        posts.forEach(post => {
            output += `<li>${post.body}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

//Async with fetch // 
// async function fetchdata() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     console.log(data);
// }

// fetchdata();


// function createPosts(post) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         posts.push(post);
//         resolve();
//     }, 2000);
//   });
// }

//Async await //
// async function inWait() {
//     await createPosts({title: 'async await post', body: 'if you want to be successful then you must push through it'});

//     getPosts();
// }

// inWait();

//promise resolve | reject //
function createPosts(post) {
  return new Promise((resolve_p, reject_p) => {
        setTimeout(() => {
            posts.push(post);

            const err = false;

            if(!err) {
                resolve_p();
            } else{
                reject_p('Error: something is not only wrong but unpredictable as well ');
            }

        }, 2000);
    });
}


createPosts({title: "post three", body: "king arlan want to revange his fathers death"})
           .then(getPosts)
           .catch(error => console.log(error))


//promise.all //
// oath1 = new Promise((res, rej) =>{
//     setTimeout(res,1000,'just wait','why waiting')
// });
// oath2 = 34;
// oath3 = ['sing','dance','play'];
// oath4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(res => res[2].name);

// Promise.all([oath1,oath2,oath3,oath4]).then(val => console.log(val))


