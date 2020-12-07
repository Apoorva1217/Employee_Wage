// UC1 Ability to Check Employee is Present or Absent
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is ABSENT");
}
else {
    console.log("Employee is PRESENT");
}