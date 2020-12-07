// Ability to Check Employee is Present or Absent
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is ABSENT");
}
else {
    console.log("Employee is PRESENT");
}

// Ability to Calculate Daily Employee Wage based on part time or full time work
// Refactor the Code to write a function to get work hours
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
let totEmpWage = 0;
let dailyCntr = 0;
let count = 0;
let empDailyHrsAndWageArr = new Array();
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

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

// Calculating Wages for a Month assuming 20 Working Days in a Month
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hours : " + empHrs + "\tEmployee Wage : " + empWage);

// Calculate Daily Wages 
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

//UC10 Ability to store the Day, Hours Worked and Wage Earned in a single object.
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString() {
                return '\nDay : ' + this.dayNum + ' => Working Hours : ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage;
            },
        }
    );
}
console.log("UC10-> Showing Daily Hours Worked and Wage Earned : " + empDailyHrsAndWageArr);

//UC11 Perform following Object operations using Arrow Functions
//UC 11A Calc total Wage and total hours worked
let totalWages = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let totalHours = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);

console.log("UC11A-> Total Hours : " + totalHours + "\tTotal Wage : " + totalWages);

//UC 11B Show the full workings days using foreach
process.stdout.write("UC11B-> Logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
    .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

//UC 11C Show Part working days using Map by reducing to String Array
let partWorkingDayStrArr = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());

console.log("\nUC11C-> Part Working Days Strings : " + partWorkingDayStrArr);

//UC 11D No working days only using Map function
let nonWorkingDayNums = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);

console.log("UC11D-> Non Working Day Nums : " + nonWorkingDayNums);