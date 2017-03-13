module.exports={


	employee: function(name, role, dept, salary){

		this.name = name;
		this.role= role;
		this.dept=dept;
		this.salary=salary;




		
	employee.prototype.baseSalary= 50000;

	employee.prototype.salary= function(name){

		return salary+baseSalary ;

	}


	}



	



}


	
