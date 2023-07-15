// console.log('person1: shows ticket ');
// console.log('person2: shows ticket ');

// const preMovie = async () => {
//     const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('ticket'), 3000);
//     });

//     const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

//     const addButter = new Promise((resolve, reject) => resolve(`butter`));

//     const getColdDrinks = new Promise((resolve, reject) => resolve(`coldDrink`));

//     const createPost = new Promise((resolve, reject) => resolve(`userPost`));

//     const deletePost = new Promise((resolve, reject) => resolve(`lastPost`));

//     let ticket = await promiseWifeBringingTicks;

//     let [popcorn, butter, coldDrink, userPost, lastPost] = await Promise.all([getPopcorn, addButter, getColdDrinks, createPost, deletePost])
    
//     console.log(`${popcorn}, ${butter}, ${coldDrink}, ${userPost}, ${lastPost}`);
    // console.log(`wife: i have the ${ticket}`);
    // console.log('husband: we should go in');
    // console.log('wife: no i am hungry');

    // let popcorn = await getPopcorn;
    // console.log(`husband: i got some ${popcorn}`);
    // console.log('husband: we should go in');
    // console.log('wife: I need butter on my popcorn');

    // let butter = await addButter;
    // console.log(`husband: i got some ${butter} on popcorn`);
    // console.log(`husband: anything else darling?`);
    // console.log(`wife: lets go we are getting late`);
    // console.log(`husband: thank you for the reminder *grins*`);

    // let coldDrink = await getColdDrinks;
    // console.log(`wife: i need ${coldDrink} with popcorn`);
    // console.log(`husband: ok i will get it`);
    // console.log(`husband: now can we go in`);
    
//     return ticket;
// }

// preMovie().then((m) => console.log(`person3: shows ${m}`));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');


async function dadmakesapromise() {
    try{
        const dadspromise = await new Promise ((resolve, reject) => {
            setTimeout(() => {
                let salaryCredited = true;
                let salary = 3400;
                let costofPs5 = 40000;
                let costofPs4 = 30000;
    
                if (salaryCredited === true && salary > costofPs5) {
                    resolve('Buy him a Ps5');
                } else if (salaryCredited === true && salary > costofPs4) {
                    reject({success: false, message:'should i buy you a Ps4 instead'});
                } else {
                    reject('Sorry son, i will try next month');
                }
            }, 1000)
        })
        console.log(dadspromise);
    } catch(error) {
        console.log(error);
    }
}

dadmakesapromise();

