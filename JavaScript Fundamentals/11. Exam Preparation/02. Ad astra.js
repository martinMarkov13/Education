function adAstra(input) {
    let text = input[0]
    let regex = /(#|\|)(?<food>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g
    let matches = regex.exec(text);
    let calories = 0;
      let result = []
    while (matches != null) {
      calories += Number(matches.groups.calories);
      result.push(`Item: ${matches[2]}, Best before: ${matches[3]}, Nutrition: ${matches[4]}`)
      matches = regex.exec(text)
    }
    let days = Math.trunc(calories / 2000);
    console.log(`You have food to last you for: ${days} days!`)
    console.log(result.join("\n"))
  }