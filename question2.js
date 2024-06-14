
function manipulateString(str) {
  
    function toUpperCase(str) {
        return str.toUpperCase();
    }


    function logString() {
        console.log("The manipulated string is:", toUpperCase(str));
    }


    return logString;
}


const logManipulatedString = manipulateString("hello world");


logManipulatedString();
