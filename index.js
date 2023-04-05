// 

let heads = document.querySelectorAll(".sub-head");

heads.forEach(function(head){

    head.addEventListener('click', function(e) {
        mytogggle(e.target)
    });
    
})

function mytogggle(element) {
    const subhead = element.parentElement.querySelector(".sub-text");
    const texts = document.querySelectorAll(".sub-text");
        texts.forEach(function(el) {
            if (el !== subhead && el.classList.contains("active")) {
                el.classList.remove("active");
            }
        })
    subhead.classList.toggle('active')
}





    