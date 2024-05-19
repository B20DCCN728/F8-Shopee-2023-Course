//Created by Campus


//Check function
function isCheck(fullname, phonenumber, email, password, repassword) {
    const reGex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var check = true;

    if(fullname.length < 5) {
        console.log("Name is too short!!");
        check = false;
    } else {
        console.log("Name is valid!");
    }

    if(phonenumber.length != 10) {
        console.log("Phone number is not enought 10 numbers!!");
        check = false;
    } else {
        console.log("Phone Number is valid!");
        alert
    }

    if(!reGex.test(password)) {
        console.log("Password invalid!!");
        check = false;
    } else {
        if(password != repassword) {
            console.log("Password incorrect!!");
            check = false;
        } else {
            console.log("Password is valid");
        }
    }

    return check;
}

//Validate
function singUp() {
    var fullname = "Nguyễn Hoàng Việt";
    var phonenumber = "0337176055";
    var email = "nvit80@gmail.com";
    var password = "Viet1235";
    var repassword = "Viet123";
    
    if(isCheck(fullname, phonenumber, email, password, repassword)) {
        console.log("Done");
    }
    else {
        console.log("False");
    }
}

singUp();