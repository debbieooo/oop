
  'use strict';

  var app = require('../app/index.js');

   describe("A game with players as users", function() {

    it("The player should be a type of `object`, and an instance of the `User` class", function() {
      var mary= new app.User('mary');
      expect(mary instanceof app.User).toBeTruthy();
      expect(typeof mary).toEqual(typeof {});
    });

    it("The player name should be the argument passed", function() {
      var john  = new app.User('john');
      expect(john.name).toBe('john');
    });

    
  });


  describe("A game with players as users who have default lives 100", function() {

    it("The player should be a type of `object`, and an instance of the `User` class", function() {
      var mary= new app.User('mary');
      expect(mary instanceof app.User).toBeTruthy();
      expect(typeof mary).toEqual(typeof {});
    });

    it("The player name should be the argument passed", function() {
      var john  = new app.User('john');
      expect(john.name).toBe('john');
    });

    
  });


  it("Each user should have 100 lives by default", function() {
      var james  = new app.User('james');
      expect(james.life).toBe(100);

      var wendy = new app.User('wendy');
      expect(wendy.life).toBe(100);
      wendy.giveLife(james);
      expect(wendy.life).toBe(99);
      expect(james.life).toBe(101);
      
    });

  it("Each user should have luck of 30, if life is stolen from a user, 2 lucks from the user is given to the target player", function() {
      var james  = new app.User('james');
      expect(james.luck).toBe(30);

      var wendy = new app.User('wendy');
      expect(wendy.luck).toBe(30);
      wendy.stealLife(james);
      expect(wendy.luck).toBe(32);
      expect(james.luck).toBe(28);
      
    });

  it("Each user should have life of 100, if life is stolen from a user, 1 life is given  to the target player", function() {
      var james  = new app.User('james');
      expect(james.life).toBe(100);

      var wendy = new app.User('wendy');
      expect(wendy.life).toBe(100);
      wendy.stealLife(james);
      expect(wendy.life).toBe(101);
      expect(james.life).toBe(99);
      

    });







  


