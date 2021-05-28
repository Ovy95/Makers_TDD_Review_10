# Makers TDD Review Number 10

Update this with the TDD Review task

Spell checker Megasoft werid spellcheckers function 

Input       ||          Output 
//1st test
dog               dog
"doog"          "~doog~"


// 2nd test 
"walked dog" || "walked dog" 
"wlk doog" ||  "~wlk~ ~doog~"

// 3rd test 
"I walked dog." ||  "I walked dog." 
"I walked doog."   "I walked ~doog~."


We would like to be able to handle inputs with full-stops at the end of a sentence.

// 4th test commas only test 
"bird,cat and dog" ||  "bird, cat and dog" correct

"bid,cat and dog"   "~bid~,cat and dog" 

We would like to be able to handle commas within a sentence.

// 5th test would be all together 
bird,cat and dog.
commas and full stops 

Edge cases
More then one White space inbetween letters 
Anytype that isn't a string value passed // Raise an argument error  ' Input needs to be a valid string"
