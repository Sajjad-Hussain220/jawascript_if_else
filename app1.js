// ?Chapter 12 - 13 

// !q1
// var input_num_alph = prompt("Input any Letter")
// var NUMBER1 = input_num_alph.charCodeAt(0)

// if (input_num_alph.length == 1) {
//     if (NUMBER1 >= 65 && NUMBER1 <= 90) {
//         document.write("(" + input_num_alph + ") In ASCII : " + NUMBER1 + " and " + "(" + input_num_alph + ") it is Upper_case Letter");
//     } else if (NUMBER1 >= 97 && NUMBER1 <= 122) {
//         document.write("(" + input_num_alph + ") In ASCII : " + NUMBER1 + " and " + "(" + input_num_alph + ") it is Lower_case Letter");
//     } else if (NUMBER1 >= 48 && NUMBER1 <= 57) {
//         document.write("(" + input_num_alph + ") In ASCII : " + NUMBER1 + " and " + "(" + input_num_alph + ") It is Number");
//     }
// } else {
//     alert("input any single letter")
// }

//!q2
// var input1 = +prompt("input any number for data 1")
// var input2 = +prompt("input any number for data 2")

// if (input1 > input2) {
//     document.write(input1 + " is greter than " + input2)
// } else if (input1 == input2) {
//     document.write(input1 + " equal to " + input1)
// } else {
//     document.write(input2 + " is greter than " + input1)
// }

//!q3
// var input1 = +prompt("input any number ")
// if (input1 == 0)
// {
//     document.write("number is zero") 
// }else if (input1 > 0)
// {
//     document.write("number is positive")
// }else if((input1 < 0)){
//     document.write("number is negative")
// }else{
//     document.write("Wrong Input")
// }

//! q4
// var input1 = prompt("input any single alphabate")
// var input2 = input1.toUpperCase()
// if (input1.length == 1)
// {
//     if (input2 =="A" || input2 =="E" || input2 =="I" || input2 =="O" || input2 =="U")
//     {
//         document.write(input2 + " is a Vowel")
//     }else{
//         document.write(input2 + " is not a Vowel")
//     }
// }else 
// {
//     document.write("Wrong Input")
// }

// !q5
// var pass = "abc"
// var input_pass = prompt("input password alphabate")

// if (input_pass.length > 0){
//     if (input_pass == pass)
//     {
//         document.write("Correct Password")
//     }else{
//         document.write("Incorrect Password")
//     }
// }else{
//     document.write("Please enter Your password")
// }

//!q6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

//!q7
// var time = prompt("input time 24 hours formate","1325")
// var time_re = time[2]
// var time_hour = time.split(time_re)[0]
// if (time.length == 4) {
//     if (time_hour > 0 && time_hour <= 24) {
//         if (time_hour > 0 && time_hour <= 12) {
//             document.write(time_hour + ":" + time[2]+"" +time[3] +" AM "+ " you input this time")
//         }else if (time_hour>12 && time_hour <= 24)
//         {   a = 0
//             if (time_hour == 13)
//             {
//             document.write(a+1+ ":" + time[2]+"" +time[3] +" PM " + " you input this time")
//             }else 
//             if (time_hour == 14)
//             {
//             document.write(a+2 + ":" + time[2]+"" +time[3] +" PM " + " you input this time")
//             }else 
//             if (time_hour == 15)
//             {
//             document.write(a+3 + ":" + time[2]+"" +time[3] +" PM " + " you input this time")
//             }else 
//             if (time_hour == 16)
//             {
//             document.write(a+4 + ":" + time[2]+"" +time[3]  +" PM "+ " you input this time")
//             }else 
//             if (time_hour == 17)
//             {
//             document.write(a+5 + ":" + time[2]+"" +time[3] +" PM " + " you input this time")
//             }else 
//             if (time_hour == 18)
//             {
//             document.write(a+6 + ":" + time[2]+"" +time[3]  +" PM "+ " you input this time")
//             }else 
//             if (time_hour == 19)
//             {
//             document.write(a+7 + ":" + time[2]+"" +time[3] +" PM " + " you input this time")
//             }else 
//             if (time_hour == 20)
//             {
//             document.write(a+8 + ":" + time[2]+"" +time[3]  +" PM "+ " you input this time")
//             }else 
//             if (time_hour == 21)
//             {
//             document.write(a+9 + ":" + time[2]+"" +time[3]  +" PM "+ " you input this time")
//             }else 
//             if (time_hour == 22)
//             {
//             document.write(a+10 + ":" + time[2]+"" +time[3]  +" PM "+ " you input this time")
//             }else 
//             if (time_hour == 23)
//             {
//             document.write(a+11 + ":" + time[2]+"" +time[3] +" PM " + " you input this time")
//             }else 
//             if (time_hour == 24)
//             {
//             document.write(a+12 + ":" + time[2]+"" +time[3] +" PM " + " you input this time")
//             }
//         }
//     }    
//      else 
//     {
//         document.write("You input wrong time")
//     }

// }else{
//     document.write("you input wrong time")
// }