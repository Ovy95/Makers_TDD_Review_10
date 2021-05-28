describe("Megasoft", function() {
  var megasoft;

  beforeEach (function () {
    megasoft = new Megasoft();
  });

  describe('SpellChecker for one value', function() {
      it ("Correct spelling of dog harcoded",function() {
        expect(megasoft.SpellChecker("dog")).toEqual("dog");
      })

      it ("InCorrect spelling of dog // doog",function() {
        expect(megasoft.SpellChecker("doog")).toEqual("~doog~");
      })
  })
  describe('SpellChecker for two value', function() {
    it ("Correct spelling of dog harcoded",function() {
      expect(megasoft.SpellChecker("walked dog")).toEqual("walked dog");
    })

    // it ("InCorrect spelling of dog // doog",function() {
    //   expect(megasoft.SpellChecker("wlk doog")).toEqual("~wlk~ ~doog~");
    // })
})
  

  

});

