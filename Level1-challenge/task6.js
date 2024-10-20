function longest(words) {
    let max = 0;
    for(let i = 0;i < words.length;i++) {
        if(words[i].length>max) {
            max = words[i].length;
        }
    }
    for(let i = 0;i < words.length;i++) {
        if(words[i].length === max) {
            console.log(words[i])
        }
    }
}

longest(["the", "quick", "brown", "fox", "ate", "my", "chickens"])
module.exports = { longest };