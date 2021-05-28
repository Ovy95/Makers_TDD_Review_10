class Megasoft {

  SpellChecker(text){
    let spellingBank = ["dog","walked"]

    let textarray = text.split(" ")

    for (let index = 0; index < textarray.length; index++) {
     if (spellingBank.includes(textarray[index]) == false){
      textarray[index] = "~" + textarray[index] + "~"
     }

    }
    let correctedtext = textarray.join(" ")

    return correctedtext
  }

}