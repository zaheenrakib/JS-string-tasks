const str = "I am a A A A A A A a a a a a a Webdeveloper a";
const count = "a";

let counted = 0 ;

for (let i = 0;i < str.length ;i++){
    if(str[i] === count){
        counted++;
       
    }
}
console.log(`The Letter ${count} appers ${counted} Times`);
