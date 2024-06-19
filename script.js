var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(details){
    var rectangleLocation = rect.getBoundingClientRect();
    var insiderectValue = details.clientX - rectangleLocation.left;
    var midpoint = rectangleLocation.width / 2;

//     if(insiderectValue < rectangleLocation.width / 2)
//         {
//             var redColor = gsap.utils.mapRange(
//                 0, 
//                 rectangleLocation.width / 2,
//                 255, 
//                 0, 
//                 insiderectValue);
//             gsap.to(rect, {
//                 backgroundColor: `rgb(${redColor}, 0, 0`,
//                 ease: Power4,
//             });
//         }
//         else
//         {
//             var blueColor = gsap.utils.mapRange(
//                 rectangleLocation.width / 2, 
//                 rectangleLocation.width,
//                 0, 
//                 255, 
//                 insiderectValue);
//             gsap.to(rect, {
//                 backgroundColor: `rgb(0, 0, ${blueColor})`,
//                 ease: Power4,
//             }); 
//         }
// })



// if (Math.abs(insiderectValue - midpoint) < 125) { 
//     gsap.to(rect, {
//         backgroundColor: `rgb(255, 0, 255)`, 
//         ease: Power4.out,
//     });
// } else if (insiderectValue < midpoint) {
//     var redColor = gsap.utils.mapRange(
//         0, 
//         midpoint,
//         255, 
//         0, 
//         insiderectValue
//     );
//     gsap.to(rect, {
//         backgroundColor: `rgb(${redColor}, 0, 0)`,
//         ease: Power4.out,
//     });
// } else {
//     var blueColor = gsap.utils.mapRange(
//         midpoint, 
//         rectangleLocation.width,
//         0, 
//         255, 
//         insiderectValue
//     );
//     gsap.to(rect, {
//         backgroundColor: `rgb(0, 0, ${blueColor})`,
//         ease: Power4.out,
//     }); 
// }
// });

var red = 255;
var green = 0;
var blue = 0;

if (insiderectValue < midpoint) {
    blue = gsap.utils.mapRange(0, midpoint, 0, 255, insiderectValue);
} else {
    red = gsap.utils.mapRange(midpoint, rectangleLocation.width, 255, 0, insiderectValue);
    blue = 255;
}

var color = `rgb(${red}, ${green}, ${blue})`;

gsap.to(rect, {
    backgroundColor: color,
    boxShadow: `0 0 50px 10px ${color}`,
    ease: "power4.out",
    duration: 0.1 
});

rect.addEventListener("mouseleave", function(){
gsap.to(rect, {
    backgroundColor: "white",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
    ease: "power4.out",
    duration: 0.5
});
});
})