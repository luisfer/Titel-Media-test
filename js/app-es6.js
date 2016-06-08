if (typeof window !== 'undefined') {
    window.onload = () => {
             const myButton = document.getElementById("myb");
             myButton.addEventListener('click', formatDate, false);
    }
}

// The main method

var formatDate = (a) => {

        let mydate = "";
        let date2 = null;
        
        if (typeof document !== 'undefined') {
            mydate = document.getElementById("unfordate").value;
        } else {
            mydate = a;
        }
        
        console.log(mydate);
        const date1 = mydate.split('/');
        if (dateIsRight(date1)) {
            date2 = convertDate(date1);
            formatSuccessAlert(date2);
        } else {
            date2 = "19700101";
            formatWrongAlert();
        }
        return date2;
    };

    // Adding zeros if necessary and converting the date into the desired format

    var convertDate = (myDate) => {
        if (myDate[1] < 10) {
            myDate[1] = "0" + myDate[1];
        }
        if (myDate[0] < 10) {
            myDate[0] = "0" + myDate[0];
        }
        return myDate[2] + myDate[0] + myDate[1];
    };


    // Date validator from the input

    var dateIsRight = c => {
        let b = true;
        console.log(c);
        const month = Number(c[0]);
        if (month > 12 || month < 1) {
            b = false;
        }
        const day = Number(c[1]);
        if (day > 31 || day < 1) {
            b = false;
        }
        const year = Number(c[2]);
        if (isNaN(year)) {
            b = false;
        }
        return b;
    }

    // Something for the fancy Bootstrap alerts content

    var formatSuccessAlert = (myDate) => {
        if (typeof document !== 'undefined') {
            let myAlert = document.getElementById("myalert");
            myAlert.classList.remove('hidden');
            myAlert.classList.remove('alert-danger');
            myAlert.classList.add('alert-success');
            myAlert.innerHTML = "Date is right and converted to: " + myDate;
        }
       
    };

    var formatWrongAlert = () => {
        if (typeof document !== 'undefined') {
            let myAlert = document.getElementById("myalert");
            myAlert.classList.remove('hidden');
            myAlert.classList.remove('alert-success');
            myAlert.classList.add('alert-danger');
            myAlert.innerHTML = "Date is not right";
        }
    };

if (typeof module !== 'undefined' && module.exports != null) {
    exports.formatDate = formatDate;
    exports.convertDate = convertDate;
    exports.dateIsRight = dateIsRight;
};