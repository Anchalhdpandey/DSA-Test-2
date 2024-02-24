// Create a function that takes a string and returns a count of unique words. (, . are not words)
// String = “Hi, My name is Awdiz, I  am located at Vashi.” 

// Output :  { Hi : 1, My : 1, name : 1, is : 1 …   }

function  getUniqueWords(str){
    let words = str.split(" ");
    let  result = {};
    for(var word of words){
        word=word.replace(/[,]/,"");
        if(!result[word]){
            result[word]=1
        }else{
            result[word]++;
        }
    }
    return result;
}
console.log(getUniqueWords("Hi, My name is Awdiz, I  am located at Vashi."))


