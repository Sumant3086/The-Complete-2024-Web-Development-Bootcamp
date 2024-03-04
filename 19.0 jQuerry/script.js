$("h1").addClass("big-title margin-50");
$("h1").text("Bye"); //This will change the h1 value(Hello) to new value(Bye); 

$("button").text("Don't ClickMe"); //This will change all the button value(Click Me) to new value(Don't CLick Me); 

 //Another Method using HTML;
 //$("button").html("<em>Hey</em>")

 //jQuerry Method;
 //$("button").text("<em>Hello</em>")


 console.log($("img").attr("src"));

//  $("h1").click(function(){
//     $("h1").css("color","purple");
//  });

 $("input").keypress(function(event){
    console.log(event.key);
 });//we can select anything like body,document etc..

// This is a simple js code to change the color
// for(var i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="red";
//     });
//  }


$(document).keypress(function(event){
    $("h1").text(event.key);
 });

 $("h1").on("mouseover",function(){
    $("h1").css("color","purple");
 }); 

 //To hide any element by clicking on button;
//   $("button").on("click",function(){
//     $("h1").hide();
//   });

 //To fadeOut any element by clicking on button;
//   $("button").on("click",function(){
//     $("h1").fadeOut();
//   });


//Changing three methods in one;
  $("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});//Inside {} only numeric value should be written;
  });
