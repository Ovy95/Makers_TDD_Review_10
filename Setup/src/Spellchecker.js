class Megasoft {

  SpellChecker(text){
    let spellingBank = ["dog"]

    if(spellingBank[0] != text){
      return "~" + text + "~"
    }
    return text
  }

  

}