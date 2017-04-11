describe('Javabuzz', function() {
  var javabuzz;
  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(6)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(10)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(30)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(4)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(6)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(22)).toBe(false);
    });
  });

  describe('when playing, says', function() {
    it('Java when divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual('Java');
    });

    it('Buzz when divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual('Buzz');
    });

    it('FizzBuzz when divisible by 15', function() {
      expect(javabuzz.says(15)).toEqual('JavaBuzz');
    });

    it('number when not divisible by 3, 5 or 15', function() {
      expect(javabuzz.says(14)).toEqual(14);
    });
  });
});
