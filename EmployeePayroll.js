//UC12 Ability to create Employee Payroll Data with id, name and salary
//UC13 Ability to extend Employee Payroll Data to store gender and start date

class EmployeepayrollData {
    //property
    id;
    salary;
    gender;
    startDate;

    //constrctor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter method
    get name() { return this._name; }
    set name(name) {
        this._name = name;
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "Id : " + this.id + ", Name : " + this.name + ", Salary : " + this.salary + ", Gender : " + this.gender + ", Start Date : " + empDate;
    }
}

let employeepayrollData = new EmployeepayrollData(1, "Mark", 300000);
console.log(employeepayrollData.toString());
employeepayrollData.name = "john";
console.log(employeepayrollData.toString());
employeepayrollData = new EmployeepayrollData(1, "Terisa", 400000, "F", new Date());
console.log(employeepayrollData.toString());