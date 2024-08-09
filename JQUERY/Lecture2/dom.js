/* jquery */


/* fade effect */

/* fadeIn , fadeOut , fadeToggle*/

// $(function(){
//      $('button').click(function(){
//         $('#div1').fadeIn()
//         $('#div2').fadeIn('slow')
//         $('#div3').fadeIn(3000)
//         $('#div4').fadeIn(5000)
//         $('#div5').fadeIn(6000)
//         $('#div6').fadeIn(8000)
//      })
// })

// $(function(){
//      $('#btn').click(function(){
//         $('#div1').fadeOut()
//         $('#div2').fadeOut('slow')
//         $('#div3').fadeOut(3000)
//         $('#div4').fadeOut(5000)
//         $('#div5').fadeOut(6000)
//         $('#div6').fadeOut(8000)
//      })
// })

// $(function(){
//      $('#btn1').click(function(){
//         $('#div1').fadeToggle()
//         $('#div2').fadeToggle('slow')
//         $('#div3').fadeToggle(3000)
//         $('#div4').fadeToggle(5000)
//         $('#div5').fadeToggle(6000)
//         $('#div6').fadeToggle(8000)
//      })
// })

// $(function(){
//      $('#btn2').click(function(){
//         $('#div1').fadeTo('slow',0.2)
//         $('#div2').fadeTo(1000,0.3)
//         $('#div3').fadeTo(3000,0.5)
//         $('#div4').fadeTo(5000,0.7)
//         $('#div5').fadeTo(6000,0.2)
//         $('#div6').fadeTo(8000,0.1)
//      })
// })

/* slide effect*/
 

/* slide up*/

// $(function(){
//   $('#slide').click(function(){
//     $('#slidecontent').slideDown(5000)
//   })
// })



/* slide down*/

// $(function(){
//     $('#slide').click(function(){
//       $('#slidecontent').slideup(5000)
//     })
//   })


/* slide toggle*/

  // $(function(){
  //   $('#slide').click(function(){
  //     $('#slidecontent').slideToggle(2000)
  //     $('#slidecontent').slideDown(3000)
  //     $('#slidecontent').slideUp(4000)
  //   })
  // })  

  /* animate */


// $(document).ready(function(){
//   $("button").click(function(){
//     $("div").animate({
//          left:'250px',
//          opacity: '0.5',
//          height: '350px',
//          width: '350px'
//     });
//   });
// });

/* toggle*/

// $(document).ready(function(){
//   $("button").click(function(){
//     $("div").animate({
//        height:'toggle'
//     });
//   });
// });

// use queue functonality

// $(document).ready(function(){
//   $("button").click(function(){
//     var div=$("div"); 
//           div.animate({height:'300px',opacity:'0.4'},"fast");
//           div.animate({width:'300px',opacity:'0.8'},"slow");
//           div.animate({height:'100px',opacity:'0.4'},"slow");
//           div.animate({width:'100px',opacity:'0.4'},"slow");
//   });
// });

/* word */

$(document).ready(function(){
 $("button").click(function(){
  var div=$("div");
  div.animate({left:'100px'},"slow");
  div.animate({fontSize:'3rem'},"slow");

 });
});


