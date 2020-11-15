
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
    },1500);
}

// callback function //
function createPosts(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}


createPosts({title: "post three", body: "king ragnar did not want to be a king at of ambition"},getPosts)



function createNew_pos(pos,callToFunc) {
    setTimeout(() => {
        posts.push(pos);
        callToFunc();
    },1500);
}


createNew_pos({title: 'dominant post', body: 'dominant thoughts an belifs'},getPosts)

// var scope is global_scope let scope is a block_scope;
// for ( i = 0 ; i < 3; i++) {
//     ((i) => {setTimeout(() => {
//           console.log(i);
//       },1500);})(i);
//   }
