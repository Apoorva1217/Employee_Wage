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
let totEmpWage = 0;
let dailyCntr = 0;
let empDailyWageArr = new Array();

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
//UC6 Store the Daily Wage along with the Total Wage
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
empWage = calcDailyWage(totalEmpHrs);
console.log("Total Days : " + totalWorkingDays + "\t\tTotal Hours : " + totalEmpHrs + "\tEmployee Wage : " + empWage);

//UC7 Use the Daily Wage Array perform following operations using Array Helper Functions
//UC 7A Calc total Wage using Array forEach or reduce method
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A-> Total Days : " + totalWorkingDays + "\t\tTotal Hours : " + totalEmpHrs + "\tEmployee Wage : " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A-> Employee Wage with Reduce : " + empDailyWageArr.reduce(totalWages, 0));

//UC 7B Show the Day along with Daily Wage using Array map helper function
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + "=" + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B-> Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C Show Days when Full time wage of 160 were earned using filter function
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C-> Daily Wage Filter when Fulltime Wage Earned");
console.log(fullDayWageArr);

//UC 7D Find the first occurrence when Full Time Wage was earned using find function
function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D-> First time Fulltime Wage was Earned on Day : " + mapDayWithWageArr.find(findFulltimeWage));

//UC 7E Check if Every Element of Full Time Wage is truly holding Full time wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7E-> Check All Element have Full Time Wage : " + fullDayWageArr.every(isAllFulltimeWage));

//UC 7F Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7F-> Check if Any Part Time Wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}
console.log("UC7G-> Number of Days Employee Worked : " + empDailyWageArr.reduce(totalDaysWorked, 0));