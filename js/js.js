/*
 COMP 4610 91.61 GUI Programming I
 Erika Spehlmann erika_spehlmann@student.uml.edu
 Last updated: November 11, 2018
 Copyright (c) 2018 by Erika Spehlmann. All rights reserved.
This webpage createds a dynamic Multiplcation Table given four valid inputs using js.
*/
  
//Fundtion for when submit button is pressed
function myFunction(){
  //check if there is already a table, delete it
  if (document.getElementsByTagName('TABLE').length > 0)
  {
    document.getElementsByTagName("body")[0].removeChild(document.getElementsByTagName("table")[0]);
  }

//get numbers from form and make sure they are valid, throw errors if not
var h1 = Number(document.forms["getNums"]["one"].value);
   if (h1 < -1000 || h1 > 1000)
   {
     alert("Invalid Number - enter a number between -1000 and 1000");
   }
var h2= Number(document.forms["getNums"]["two"].value);
  if (h2 < -1000 || h2 > 1000)
  {
    alert("Invalid Number - enter a number between -1000 and 1000");
  }
  if (h2 < h1)
  {
    alert("Invalid Number - must be larger than first number");
  }
var v1 = Number(document.forms["getNums"]["three"].value);
  if (v1 < -1000 || v1 > 1000)
  {
    alert("Invalid Number - enter a number between -1000 and 1000");
  }
var v2= Number(document.forms["getNums"]["four"].value);
  if (v2 < -1000 || v2 > 1000)
  {
    alert("Invalid Number - enter a number between -1000 and 1000");
  }
  if (v2 < v1)
  {
    alert("Invalid Number - must be larger than first number");
  }

  // Make a table
  var body = document.getElementsByTagName("body")[0];
  var table = document.createElement('TABLE');
  var tblbody = document.createElement('TBODY');

  // append the body to the table
  table.appendChild(tblbody);

 // choose number of cols and rows to be the difference plus two
 var cols = h2-h1 + 2;
 var rows = v2-v1 + 2;

  //use v2 and v1 for rows
  for (var i=0; i<rows; i++){
    var tr =document.createElement('TR');
    tblbody.appendChild(tr);

    //make enough columns for each row
    for (var j = 0; j < cols; j++)
    {
      var td =document.createElement('TD');
      tr.appendChild(td);
      var jOffset = j-1;
      var iOffset = i-1;
      var vert = Number(h1)+jOffset;
      var horiz = Number(v1)+iOffset;

      //these will be the first row and first column
      if (i == 0 || j == 0)
        {
          if (i == 0)
          {
            //top left corner add mult symbol
            if (j == 0)
            {
              td.innerHTML = "X";
            }
            else {
                td.innerHTML = Number(vert);
            }
          }
          if (j == 0)
          {
            if (i > 0)
            {
              td.innerHTML = Number(horiz);
            }
          }
          td.style.fontWeight = "900";
          td.style.backgroundColor = "grey";
        }
      else
      {
        //inner cells - multiply
        td.innerHTML = vert * horiz;
      }
    }
  }
  body.appendChild(table);
  return false;
}

// on click call fundtion aboce
document.getElementById("button").onclick = myFunction;
