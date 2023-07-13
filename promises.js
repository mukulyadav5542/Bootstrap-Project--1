const posts = [
    {title: 'Post One', body:'This is post one'},
    {title: 'Post Two', body:'This is post two'}
]

// function getPosts() {
//     setTimeout(() => {
//         let output='';
//         posts.forEach((post, index) => {
//             output+=`<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output;
//     }, 1000)
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);

//             const error = false;

//             if(!error) {
//                 resolve();
//             } else {
//                 reject('Error: Something went wrong')
//             }
//         },2000)
//     })
//

// function deletePost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(posts.values !== 0) {
//                 resolve(posts.pop())
//             } else {
//                 reject('Array is empty mow')
//             }
//         }, 1000)
//     })
// }

// createPost({title:'Post Three', body:'This is post three'}).then(getPosts).catch(err => console.log(err));


// Promise.all

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
// setTimeout(resolve, 2000, 'Goodbye'));

//Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {})
}

function createPost(userPost) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(userPost)
            resolve();
        }, 1000)
    })
}

function lastActivity() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let createdAt = new Date().getHours();
            let createdAt2 = new Date().getMinutes();
            let createdAt3 = new Date().getSeconds();

            resolve("Last seen at:" + createdAt + ":" + createdAt2 + ":" + createdAt3)
        }, 1000)
    })
}

function deletePost() {
    return new Promise((resolve, reject) => {
       posts.pop();
       resolve();
    })
}

Promise.all([createPost({title:'Post Three', body:'This is post three'}), lastActivity()]).then(() => {
    console.log(posts);

    lastActivity().then((time) => {
        console.log(time);
    })
    .then(deletePost)
    .then(() => {
        console.log(posts);
        lastActivity().then((time) => {
            console.log(time);
        })
    })
})


