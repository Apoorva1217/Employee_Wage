//UC12 Ability to create Employee Payroll Data with id, name and salary
//UC13 Ability to extend Employee Payroll Data to store gender and start date
//UC14 Ability to check the name starts with capital and has at least 3 characters
//UC15 Ability to check the employee id and salary are non zero positive number, the gender is M or F and date is not a future date 
// - Use Regex Pattern 
// - Use Try Catch in case of Error

class EmployeepayrollData {
    //constrctor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter method
    get id() { return this._id; }
    set id(id) {
        let idRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (idRegex.test(id))
            this._id = id;
        else throw 'Id is Incorrect!';
    }
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }
    get salary() { return this._salary; }
    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]*$');
        if (salaryRegex.test(salary))
            this._salary = salary;
        else throw 'Invalid Salary!';
    }
    get gender() { return this._gender; }
    set gender(gender) {
        let genderRegex = RegExp('^[MFmf]{1}$');
        if (genderRegex.test(gender))
            this._gender = gender;
        else throw 'Invalid Gender Input!';
    }
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        if (startDate <= new Date())
            this._startDate = startDate;
        else throw 'Date is Incorrect!';
    }


    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "Id : " + this.id + ", Name : " + this.name + ", Salary : " + this.salary + ", Gender : " + this.gender + ", Start Date : " + empDate;
    }
}

let employeepayrollData = new EmployeepayrollData(1, "Mark", 300000, "M", new Date());
console.log(employeepayrollData.toString());

try {
    employeepayrollData.id = "-121";
    console.log(employeepayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    employeepayrollData.name = "john";
    console.log(employeepayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    employeepayrollData.salary = "-300000";
    console.log(employeepayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    employeepayrollData.gender = " ";
    console.log(employeepayrollData.toString());
} catch (e) {
    console.error(e);
}

try {
    employeepayrollData.startDate = "December 12,2021";
    console.log(employeepayrollData.toString());
} catch (e) {
    console.error(e);
}