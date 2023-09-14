// ?Chapter 13 - 15

// !q1
// var future_student_names = [];

// !q2
// var future_student_names = new Array();

// !q3 
// var inti_string = ["apple" , "Mango", "banana"]

// !q4 
// var inti_num = [5 , 25 , 14]

//!q5
// var inti_bool = [true, false, true, true, false];

// !q6 
// var inti_mixed = ["mango" , 12 , "oraange" , 101 , true , 50]

//!q7
// var education_qualification = ["SSC" , "HSC" , "BCS","BS","BCOM","MS" , "M.phile" , "PHD"]
// var qualification1 = "qualification"
// document.write(qualification1.toUpperCase()+"<br><br>")

// for(let i = 0; i < education_qualification.length ; i++ ){
//     document.write("<br>"+ (i+1) + " ) " + education_qualification[i])
// }

// !q8
// var students_name = []
// var student_marks = []
// for (let i = 1; i <= 3; i++) {
//     var name1 = prompt("inpyt student " + i + " name ");
//     students_name.push(name1);

//     if (i == 3) {
//         for (let j = 1; j <= 3; j++) {
//             var marks = +prompt("inpyt student " + j + " marks ");
//             student_marks.push(marks);

//             if (j == 3) {
//                 for (let k = 0; k < 3; k++) {
//                     var percentage = (student_marks[k] / 500) * 100;
//                     document.write("Score of " + students_name[k] + " is " + student_marks[k] + ". Percentage: " + percentage + "%<br>");
//                 }
//             }

//         }
//     }
// }

// !q9
// var colors = ["red" , "yellow" , "black"]

// document.write("array : " + colors.join(", ")+ "<br>")

// var add_in_first = prompt("Enter a color to add to the beginning:");
// colors.unshift(add_in_first)

// document.write("adding in start one color : " + colors.join(", ")+ "<br>")

// var add_in_last = prompt("Enter a color to add to the Ending:");
// colors.push(add_in_first)

// document.write("adding in end one color: " + colors.join(", ") + "<br>")

// colors.unshift("white" , "blue")
// document.write("adding in start  two colors : " + colors.join(", ") + "<br>")

// colors.shift()
// document.write("removing in start one color : " + colors.join(", ") + "<br>")

// colors.pop()
// document.write("removing in end one color : " + colors.join(", ") + "<br>")

// var userIndex = +(prompt("Enter the index where you want to add a color:"));
// var userColor = prompt("Enter the color you want to add:");
// colors.splice(userIndex, 0, userColor);

// document.write("adding in "+ userIndex + "index : " + colors.join(", ") + "<br>")

// var deleteIndex = +(prompt("Enter the index from where you want to delete colors:"));
// var deleteCount = +(prompt("Enter how many colors you want to delete:"));
// colors.splice(deleteIndex, deleteCount);

// document.write("removing from "+ deleteIndex + " index and "+ deleteCount + " colors : " + colors.join(", ") + "<br>")

// !q10
// var score = [22 , 14 , 25 , 36 , 11];
// var score_sort = score.slice().sort();

// document.write("Scores of students: " + score.join(", ") + "<br>");
// document.write("Ordered Scores of students: " + score_sort.join(", "));

// !q11
// var array1 = ["Karachi" , "Lahore" , "Islamabad" , "Hyderbad", "Quetta"];

// var array2 = [];

// array2 = array1.slice(0,3);

// document.write("Cities list : <br>"+ array1.join(", "));
// document.write("<br><br><br>Selected Cities list :<br>"+ array2.join(", "));

// !q12
// var arr = ["This" , "is" , "My" ,"Cat"];
// var arr_res = arr.join(" ")
// document.write("Array :<br>"+arr)
// document.write("<br><br>String :<br> "+arr_res)

// !q13
// var fifo = [];

// fifo.push("Karchi");
// fifo.push("Lahore");
// fifo.push("Quetta");
// fifo.push("Hyderabad");

// document.write("PUSH : <br>"+fifo)

// let a  = fifo.shift()
// let b = fifo.shift()
// let c = fifo.shift()
// let d = fifo.shift()

// document.write("<br><br>out : <br>"+a)
// document.write("<br>out : <br>"+b)
// document.write("<br>out : <br>"+c)
// document.write("<br>out : <br>"+d)

// !q14
// var fifo = [];

// fifo.push("Karchi");
// fifo.push("Lahore");
// fifo.push("Quetta");
// fifo.push("Hyderabad");
// document.write("PUSH : <br>"+fifo)


// let a  = fifo.pop()
// let b = fifo.pop()
// let c = fifo.pop()
// let d = fifo.pop()

// document.write("<br><br>out : <br>"+a)
// document.write("<br>out : <br>"+b)
// document.write("<br>out : <br>"+c)
// document.write("<br>out : <br>"+d)


// !q15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<br><br><select>");
var select_opt = "Select"
document.write("<option>" + select_opt + "</option>");

for (let i = 0; i < manufacturers.length; i++) {
    document.write("<option>" + manufacturers[i]+ "</option>");
}

document.write("</select>");