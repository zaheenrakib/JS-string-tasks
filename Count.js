const str = "I am a Webdeveloper a";
const count = "a";

let counted = 0 ;

for (i = 0;i < str.length ;i++){
    if(str[i] === count){
        counted++
    }
}

console.log(`The Letter ${count} appers ${counted} Times`);
