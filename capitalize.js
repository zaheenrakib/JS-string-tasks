const values = "i am a full stack web developer. i work with javascript and React";

const capitalization = values.split(' ').map(sentence => {
    const words = sentence.split(' ');
    if(words.length > 0 ){
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }
    return words.join( ' ' );
}).join(' ');


console.log(capitalization);




// const values = "i am a full stack web developer. i work with javascript and react";

// const capitalizedValues = values.split(' ').map(sentence => {
//     const words = sentence.split(' ');
//     if (words.length > 0) {
//         words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
//     }
//     return words.join(' ');
// }).join(' ');

// console.log(capitalizedValues);



