// const str = "I am a A A A A A A a a a a a a Webdeveloper a";
// const count = "a";
// const upper= "A";

// let counted = 0 ;
// let newCount = 0;

// for (let i = 0;i < str.length ;i++){
//     if(str[i] === count){
//         counted++;
       
//     }
// }
// for(let j = 0;j <str.length;j++){
//     if(str[j] === upper){
//         newCount++;
//     }
// }

// console.log(`The Letter ${count} appers ${counted} Times and ${upper} appers ${newCount}`);


//Another Ways

const str = "I am a A A A A A A a a a a a a Webdeveloper a";

const count = "a";
const upper= "A";

let counted = 0 ;
let newCount = 0;
for (i = 0; i < str.length ; i++){
    if (str[i] === count){
        counted++;
    }
    else if(str[i] === upper){
        newCount++;
    }
}

console.log(`the a count ${counted} times and The A coundet ${newCount}`);