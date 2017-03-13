
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




  


