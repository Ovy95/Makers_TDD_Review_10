describe("Megasoft", function() {
  var megasoft;

  beforeEach (function () {
    megasoft = new Megasoft();
  });

  describe('SpellChecker', function() {
      it ("Correct spelling of dog harcoded",function() {
        expect(megasoft.SpellChecker("dog")).toEqual("dog");
      })

      it ("InCorrect spelling of dog // doog",function() {
        expect(megasoft.SpellChecker("doog")).toEqual("~doog~");
      })
      
  })
  

  

});

