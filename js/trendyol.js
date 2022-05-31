// =======================================
// =============== Slider ================
const slider = [document.querySelector('.slider0'), document.querySelector('.slider1')];
let mouseDown = false;
let startX = [], scrollLeft = [];

let start_evnt = function (e) {
    mouseDown = true;
    // ============= 0 =============
    startX[0] = e.pageX - slider[0].offsetLeft;
    scrollLeft[0] = slider[0].scrollLeft;
    // ============= 1 =============
    startX[1] = e.pageX - slider[1].offsetLeft;
    scrollLeft[1] = slider[1].scrollLeft;
    
};
let stop_evnt = function (event) {
    mouseDown = false;
};
// ============= 0 =============
slider[0].addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!mouseDown) { return; }
    let x1 = e.pageX - slider[0].offsetLeft;
    const scroll = x1 - startX[0];
    slider[0].scrollLeft = scrollLeft[0] - scroll;
});
// ============= 1 =============
slider[1].addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!mouseDown) { return; }
    let x2 = e.pageX - slider[1].offsetLeft;
    const scroll = x2 - startX[1];
    slider[1].scrollLeft = scrollLeft[1] - scroll;
});
// ============= 0 =============
slider[0].addEventListener('mousedown', start_evnt, false);
slider[0].addEventListener('mouseup', stop_evnt, false);
slider[0].addEventListener('mouseleave', stop_evnt, false);
// ============= 1 =============
slider[1].addEventListener('mousedown', start_evnt, false);
slider[1].addEventListener('mouseup', stop_evnt, false);
slider[1].addEventListener('mouseleave', stop_evnt, false);
// =======================================
// ========= Right Left Button ===========

function leftbut() {
    var element = document.getElementById("mystory");
    for(let i=0; i<300 ;i+=50){
        element.scrollLeft -= i;
        
    }
}
const myscoll_left = document.getElementById("left_but");
myscoll_left.addEventListener("click",leftbut );

function rightbut() {
    var element = document.getElementById("mystory");
    
    element.scrollLeft += 500;
} 
const myscoll_right = document.getElementById("right_but");
myscoll_right.addEventListener("click", rightbut);
// =======================================



// ==============================================
// ============ DONT WORKING JQUERY =============
// =================== WHY ?? ===================
// =============== YES, I FOUND  ================
// ==== $("") LIST BUT THİS $("")[0] ARTICLE ====
// ==============================================
// 
// $(".story_arrow_left").click(function (){
//     var element = $("#mystory")[0];
    
    
//     // element.scrollLeft +=50;
    
// })
// 
// ==============================================