// Telephone Number Validator

// Codedamn Exercise - 

// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as 
// it has the format of a valid US number. The following are examples of 
// valid formats for US numbers (refer to the tests below for other 
// variants):

// 555-555-5555

// (555)555-5555

// (555) 555-5555

// 555 555 5555

// 5555555555

// 1 555 555 5555

// For this challenge, you will be presented with a string 
// such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is 
// to validate or reject the US phone number based on any combination 
// of the formats provided above. The area code is required. If 
// the country code is provided, you must confirm that the country 
// code is 1. Return true if the string is a valid US phone number; 
// otherwise return false.



// Approach 1 : There should be only 10 digits number and 1 digit countrycode 
// keeping a count of digits 

function telephoneCheck(str) {
    var digitCount = 0;
    var toggle = 0;
    var count = 0;
    var dcount = 0;
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (element == '(') {
            if (toggle == 0) {
                toggle = 1;
                count = 0;
            }
            else {
                console.log("1 L");
                return false;
            }
        }
        else if (element == ')') {
            if (toggle == 1) {
                if (count > 2 && count < 5) {
                    toggle = 0;
                    count = 0;
                    dcount = 0;
                }
                else {
                    console.log("2 L");
                    return false;
                }
            }
            else {
                console.log("3 L");
                return false;
            }
        }
        else if (element == '-') {
            if (dcount > 2 && dcount < 5) {
                dcount = 0;
            }
            else {
                console.log("4 L");
                return false;
            }
        }
        else if (element == ' ') {
            dcount = 0;
        }
        else if (element < 10 && element >= 0) {
            digitCount++;
            count++;
            dcount++;
            console.log(digitCount);
        }
        else {
            console.log("5 L");
            return false;
        }
    }
    if (toggle) {
        return false ;
    }
    if (digitCount != 10 && digitCount != 11) {
        console.log("6 L");
        return false;
    }
    if (digitCount == 11 ) {
        if (str[0] == 1) {
            return true;
        }
        return false;
    }
    return true
}

var result = telephoneCheck('10 (757) 622-7382');
console.log(result);
