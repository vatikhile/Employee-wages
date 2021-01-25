class Utility {
    // Function for checking the employee is absent or present
    attendance_check() {

        var empCheck = Math.floor(Math.random() * 3);
        // console.log("employee",Math.floor(Math.random() * 3));

        switch (empCheck) {
            case 0:
                {

                    console.log("Employee is absent");
                    break;
                }
            case 1:
                {
                    console.log("Employee is half day present");
                    break;
                }
            default:
                {
                    console.log("Employee is Present");

                    break;
                }
        }


    }
}
module.exports = new Utility();
