var obj = [
  { 
label:"Data Structures & Algorithms  Using Jav",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
{ 
label:"html and css",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
{ 
label:"Data Structures & Algorithms  Using Jav",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
{ 
label:"Data Structures & Algorithms  Using Jav",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
{ 
label:"Data Structures & Algorithms  Using Jav",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
{ 
label:"html and css part",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
{ 
label:"Data Structures & Algorithms  Using Jav",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
{ 
label:"Data Structures & Algorithms  Using Jav",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
{ 
label:"Data Structures & Algorithms  Using Jav",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
{ 
label:"Data Structures & Algorithms  Using Jav",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
{ 
label:"Data Structures & Algorithms  Using Jav",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
{ 
label:"Data Structures & Algorithms  Using Jav",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
{ 
label:"Data Structures & Algorithms  Using Jav",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
{ 
label:"Data Structures & Algorithms  Using Jav",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
{ 
label:"Data Structures & Algorithms  Using Jav",
span:"5 HOUR",
desc:`So you've worked with the basics of data structures and algorithms in Java (or another OO programming language) but feel like you need a deeper knowledge of how this work. 
if you are looking for a course that focus on the implementations to give you a complete understanding of how things work, then this is the course for you.
This course goes over the theory of how things work, but only to give you what you need to know to understand the implementation covered`


},
  
  ];
  var current_page = 1;
  var obj_per_page = 5;
  function totNumPages()
  {
      return Math.ceil(obj.length / obj_per_page);
  }
  
  function prevPage()
  {
      if (current_page > 1) {
          current_page--;
          change(current_page);
      }
  }
  function nextPage()
  {
      if (current_page < totNumPages()) {
          current_page++;
          change(current_page);
      }
  }
  function change(page)
  {
      var btn_next = document.getElementById("btn_next");
      var btn_prev = document.getElementById("btn_prev");
      var main_div = document.getElementById("TableList");

  
      var page_span = document.getElementById("page");
      if (page < 1) page = 1;
      if (page > totNumPages()) page = totNumPages();
      main_div.innerHTML = "";
      for (var i = (page-1) * obj_per_page; i < (page * obj_per_page); i++) {
        var inside_div = document.createElement("div");
        var outside_div = document.createElement("div");


        var label = document.createElement("label");
        var span = document.createElement("span");
        var p = document.createElement("p");
        // main_div.className = "pages"
        inside_div.className = "inside-div"
        outside_div.className = "outside-div pages"


          label.innerHTML += obj[i].label + "<br>";   
          span.innerHTML += obj[i].span + "<br>";   
          p.innerHTML += obj[i].desc + "<br>"; 
         inside_div.appendChild(label)
         inside_div.appendChild(span)
         outside_div.appendChild(inside_div)
         outside_div.appendChild(p)
         main_div.appendChild(outside_div)






      }
      page_span.innerHTML = page;
      if (page == 1) {
          btn_prev.style.visibility = "hidden";
      } else {
          btn_prev.style.visibility = "visible";
      }
      if (page == totNumPages()) {
          btn_next.style.visibility = "hidden";
      } else {
          btn_next.style.visibility = "visible";
      }
  }
  window.onload = function() {
      change(1);
  };