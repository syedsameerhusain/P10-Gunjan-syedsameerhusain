// Exercise5.2:
// Write a function called vowelCount which accepts a string and returns a map where the keys arenumbers and the values are the count of the vowels in the string
function isVowel(char){
    return"aeiou".includes(char);
}
function vowelCount(str){
    const vowelMap=new Map();
    for(let char of str){//n
        let lowerCaseChar=char.toLowerCase();
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1)
            }else{
                vowelMap.set(lowerCaseChar,1);
            }
        }
    }
    return vowelMap;
}
//Time Complexity -O(n)
//Space Complexity -O(5)
console.log(vowelCount('syedsameerhusain'));
// Output Map(4) { 'e' => 3, 'a' => 2, 'u' => 1, 'i' => 1 }