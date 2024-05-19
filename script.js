let deleteButton1 = document.querySelector(".button1");

deleteButton1.addEventListener('click', function(){
  document.querySelector(".button_EC1").style.display = "none"
  document.querySelector(".sl").style.display = "block"
  document.querySelector(".slnametop1").style.display = "flex"
  document.querySelector(".slnametop2").style.display = "flex"
  document.querySelector(".slnametop3").style.display = "flex"
  
document.querySelector(".allbuttonsans").style.display = "none"
});

let deleteButton2 = document.querySelector(".button2");

deleteButton2.addEventListener('click', function(){
  document.querySelector(".button_EC1").style.display = "none"
  document.querySelector(".fl").style.display = "block"
  document.querySelector(".flnametop1").style.display = "flex"
  document.querySelector(".flnametop2").style.display = "flex"
  document.querySelector(".flnametop3").style.display = "flex"
  
document.querySelector(".allbuttonsans").style.display = "none"
});

let deleteButton3 = document.querySelector(".button3");

deleteButton3.addEventListener('click', function(){
  document.querySelector(".button_EC1").style.display = "none"
  document.querySelector(".cl").style.display = "block"
  document.querySelector(".clnametop1").style.display = "flex"
  document.querySelector(".clnametop2").style.display = "flex"
  document.querySelector(".clnametop3").style.display = "flex"
  
document.querySelector(".allbuttonsans").style.display = "none"
});


let exitt = document.querySelector(".exitt");
exitt.addEventListener('click', function(){

  document.querySelector(".button_EC1").style.display = "flex"
  document.querySelector(".sl").style.display = "none"
  document.querySelector(".slnametop1").style.display = "none"
  document.querySelector(".slnametop2").style.display = "none"
  document.querySelector(".slnametop3").style.display = "none"
  
document.querySelector(".allbuttonsans").style.display = "block"

});



let exittt = document.querySelector(".exittt");
exittt.addEventListener('click', function(){

  document.querySelector(".button_EC1").style.display = "flex"
  document.querySelector(".fl").style.display = "none"
  document.querySelector(".flnametop1").style.display = "none"
  document.querySelector(".flnametop2").style.display = "none"
  document.querySelector(".flnametop3").style.display = "none"
  
  document.querySelector(".allbuttonsans").style.display = "block"
});


let exitttt = document.querySelector(".exitttt");
exitttt.addEventListener('click', function(){

  document.querySelector(".button_EC1").style.display = "flex"
  document.querySelector(".cl").style.display = "none"
  document.querySelector(".clnametop1").style.display = "none"
  document.querySelector(".clnametop2").style.display = "none"
  document.querySelector(".clnametop3").style.display = "none"
  
  document.querySelector(".allbuttonsans").style.display = "block"
});


let svyazbutton = document.querySelector(".svyazbutton");

svyazbutton.addEventListener('click', function(){
  svyazbutton.style.display = "none"
  document.querySelector(".phonenumber").style.display = "flex"

});




let button_sl_ans = document.querySelector(".button_sl_ans");

button_sl_ans.addEventListener('click', function(){
  button_sl_ans.style.display = "none"
  document.querySelector(".button_fl_ans").style.display = "none"
  document.querySelector(".button_cl_ans").style.display = "none"
  document.querySelector(".slquest").style.display = "block"
  document.querySelector(".exit1").style.display = "block"

});






let exit1 = document.querySelector(".exit1");

exit1.addEventListener('click', function(){
  button_sl_ans.style.display = "block"
  document.querySelector(".button_fl_ans").style.display = "block"
  document.querySelector(".button_cl_ans").style.display = "block"
  document.querySelector(".slquest").style.display = "none"
  document.querySelector(".exit1").style.display = "none"

});



let button_fl_ans = document.querySelector(".button_fl_ans");

button_fl_ans.addEventListener('click', function(){
  button_fl_ans.style.display = "none"
  document.querySelector(".button_sl_ans").style.display = "none"
  document.querySelector(".button_cl_ans").style.display = "none"
  document.querySelector(".flquest").style.display = "block"
  document.querySelector(".exit2").style.display = "block"

});






let exit2 = document.querySelector(".exit2");

exit2.addEventListener('click', function(){
  button_fl_ans.style.display = "block"
  document.querySelector(".button_sl_ans").style.display = "block"
  document.querySelector(".button_cl_ans").style.display = "block"
  document.querySelector(".flquest").style.display = "none"
  document.querySelector(".exit2").style.display = "none"

});



let button_cl_ans = document.querySelector(".button_cl_ans");

button_cl_ans.addEventListener('click', function(){
  button_cl_ans.style.display = "none"
  document.querySelector(".button_sl_ans").style.display = "none"
  document.querySelector(".button_fl_ans").style.display = "none"
  document.querySelector(".clquest").style.display = "block"
  document.querySelector(".exit3").style.display = "block"

});






let exit3 = document.querySelector(".exit3");

exit3.addEventListener('click', function(){
  button_cl_ans.style.display = "block"
  document.querySelector(".button_sl_ans").style.display = "block"
  document.querySelector(".button_fl_ans").style.display = "block"
  document.querySelector(".clquest").style.display = "none"
  document.querySelector(".exit3").style.display = "none"

});





