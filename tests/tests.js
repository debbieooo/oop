
  'use strict';

  var app = require('../app/index.js');

  describe("Employee class to show list of company employees", function() {

    it("The employee should be an object type of `object`, and an instance of the `Employee` class", function() {
      var Joshua= new employee('Joshua','Accounts lead','Accounts',200000);
      expect(typeof Joshua).toEqual(typeof {});
      expect(app.Joshua instanceof Employee).toBeTruthy();
    });

  });



  describe(" The base salaries should be added to the main salary", function() {

    it("The function salary should add the 'base salary' to 'salary' ", function() {
      var Joshua= new employee('Joshua','Accounts lead','Accounts',200000);
      expect(app.Joshua.salary(20000)).toEqual(250000);
      expect(app.Joshua.role).toBeTruthy('Accounts lead');
    });

  });

  describe(" Expect all the object instances to inherit the base salary", function() {

    it("The 'Base salary' to be applied to all instances ", function() {
      var Joshua= new employee('Joshua','Accounts lead','Accounts',200000);
      expect(app.Jane.basesalary).toEqual(250000);
      expect(app.Joshua.role).toBeTruthy('Accounts lead');
    });

  });






