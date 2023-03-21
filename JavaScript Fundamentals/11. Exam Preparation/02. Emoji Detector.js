function emojiDetector(input) {
    let text = input[0];
    let regexEmoji = /(:{2}|\*{2})[A-Z][a-z]{2,}\1/g;
    let emojis = text.match(regexEmoji);
    let regexNums = /\d{1}/g;
    let nums = text.match(regexNums);
    let coolTreshold = 1;
  
    for (let n of nums) {
      coolTreshold *= n;
    }
    
    let coolEmojis = [];
  
    for (let emoji of emojis) {
      let split = emoji.split(":").join("").split("*").join("")
      let emojiTreshold = 0;
      for (let char of split) {
        emojiTreshold += char.charCodeAt()
      }
      if (emojiTreshold > coolTreshold) {
        coolEmojis.push(emoji)
      }
    }
    console.log(`Cool threshold: ${coolTreshold}`)
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`)
    for (let em of coolEmojis) {
      console.log(em)
    }
  }