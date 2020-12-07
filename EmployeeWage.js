// UC1 Ability to Check Employee is Present or Absent
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is ABSENT");
}
else {
    console.log("Employee is PRESENT");
}

//UC2 Ability to Calculate Daily Employee Wage based on part time or full time work
//UC3 Refactor the Code to write a function to get work hours
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;

empCheck = Math.floor(Math.random() * 10) % 3;
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
empHrs = getWorkingHours(empCheck);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage is : " + empWage);

//UC4 Calculating Wages for a Month assuming 20 Working Days in a Month
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hours : " + empHrs + "\tEmployee Wage : " + empWage);

//UC5 Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days : " + totalWorkingDays + "\t\tTotal Hours : " + totalEmpHrs + "\tEmployee Wage : " + empWage);