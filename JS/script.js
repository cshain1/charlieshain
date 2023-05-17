// Change the background color of the body
document.body.style.backgroundColor = "#F5EBE0";

// Change the color of h2 and h3 elements
var headings = document.querySelectorAll("h2, h3");
headings.forEach(function(heading) {
   heading.style.color = "#9D8771";
});

// Style the hr element
var hr = document.querySelectorAll("hr");
hr.forEach(function(element) {
   element.style.borderStyle = "none";
   element.style.borderTopStyle = "dotted";
   element.style.borderColor = "#9D8771";
   element.style.borderWidth = "5px";
   element.style.width = "5%";
});

// Style the section-1 and section-2 classes
var section1 = document.querySelector(".section-1");
section1.style.backgroundColor = "#F5EBE0";
section1.style.fontSize = "medium";
section1.style.fontFamily = "'Times New Roman', Times, serif";
section1.style.fontWeight = "bold";
section1.style.textAlign = "center";

var section2 = document.querySelector(".section-2");
section2.style.backgroundColor = "#F5EBE0";
section2.style.fontSize = "medium";
section2.style.fontFamily = "'Times New Roman', Times, serif";
section2.style.fontWeight = "bold";
section2.style.textAlign = "center";
section2.style.listStylePosition = "inside";

// Style the table, th, and td elements
var table = document.querySelector("table");
table.style.border = "1px solid #9D8771";
table.style.borderCollapse = "collapse";
table.style.fontFamily = "'Times New Roman', Times, serif";
table.style.fontSize = "medium";
table.style.fontWeight = "bold";
table.style.padding = "5px";
table.style.textAlign = "center";
table.style.marginLeft = "auto";
table.style.marginRight = "auto";
table.style.backgroundColor = "#F5EBE0";

// Center align the section-3 and section-4 classes
var section3 = document.querySelector(".section-3");
section3.style.textAlign = "center";

var section4 = document.querySelector(".section-4");
section4.style.textAlign = "center";
