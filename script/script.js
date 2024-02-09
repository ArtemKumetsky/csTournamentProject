$(document).on("scroll", window, function () {
    if ($(window).scrollTop()>300)
    {
        $(".link-marker-second").removeClass("active-slide")
        $(".link-marker-first").addClass("active-slide")
    }
    if ($(window).scrollTop()>800)
    {
        $(".link-marker-first").removeClass("active-slide")
        $(".link-marker-third").removeClass("active-slide")
        $(".link-marker-second").addClass("active-slide")
    }
    if ($(window).scrollTop()>1400)
    {
        $(".link-marker-second").removeClass("active-slide")
        $(".link-marker-fourth").removeClass("active-slide")
        $(".link-marker-third").addClass("active-slide")
    }
    if ($(window).scrollTop()>2000)
    {
        $(".link-marker-third").removeClass("active-slide")
        $(".link-marker-fourth").addClass("active-slide")
    }
});
document.onscroll = function() {console.log(document.documentElement.scrollTop)};

function myFunction() {
    // if (document.body.scrollTop > 50) {
    //     // console.log("sas")
    // } else {
    //     // console.log("ebb")
    //
    // }
}


function cover_settings(i_c,i_n,c_curr,c_next) {
    i_c.addClass("cover-hide")
    setTimeout(function (){
        i_c.addClass("cover-hidden")
        i_c.removeClass("cover-hide")
        i_c.removeClass("cover-active")

        i_n.removeClass("cover-hide")
        i_n.removeClass("cover-hidden")
        i_n.addClass("cover-active")

        c_curr.removeClass("active-slide")
        c_next.addClass("active-slide")
    },1000)
}

function change_cover(){
    let fimg = $(".f-bg")
    let simg = $('.s-bg')
    let timg = $('.t-bg')
    let cc1 = $(".cover-slider-marker-first")
    let cc2 = $(".cover-slider-marker-second")
    let cc3 = $(".cover-slider-marker-third")
    if (fimg[0].classList.contains("cover-active")) {
        cover_settings(fimg,simg,cc1,cc2)
    }
    if (simg[0].classList.contains("cover-active")) {
        cover_settings(simg,timg,cc2,cc3)
    }
    if (timg[0].classList.contains("cover-active")) {
        cover_settings(timg,fimg,cc3,cc1)
    }
}
setInterval(change_cover,1*1000)


alert(window.offsetWidth)





var rg1 = $('.results-blocks-g1')
var rg2 = $('.results-blocks-g2')
var rg3 = $('.results-blocks-g3')
var bg1 = $('.results-battles-blocks-g1')
var bg2 = $('.results-battles-blocks-g2')
var bg3 = $('.results-battles-blocks-g3')
var rc1 = $("#rc1")
var rc2 = $("#rc2")
var rc3 = $("#rc3")
var rg_active = 'results-active-slide'
var rg_hidden = 'results-hidden-slide'
var rc_active = 'active-slide'

function clear_data(name) {
    if (name==="b") {
        rg1.removeClass(rg_active).addClass(rg_hidden)
        rg2.removeClass(rg_active).addClass(rg_hidden)
        rg3.removeClass(rg_active).addClass(rg_hidden)
    } else {
        bg1.removeClass(rg_active).addClass(rg_hidden)
        bg2.removeClass(rg_active).addClass(rg_hidden)
        bg3.removeClass(rg_active).addClass(rg_hidden)
    }
    rc1.addClass(rc_active)
    rc2.removeClass(rc_active)
    rc3.removeClass(rc_active)
}


function results_change(type) {
    let matches = rg1
    let battles = bg1
    let matches_b = $('.m-btn')
    let battles_b = $('.b-btn')
    if (window.matchMedia("(min-width: 1280px)").matches){
        if (type === 'm') {
            matches.removeClass(rg_hidden)
            battles_b.removeClass("active-btn")
            matches_b.addClass("active-btn")
            battles.addClass(rg_hidden)
            matches.addClass(rg_active)
            clear_data("m")
        } else {
            battles.removeClass(rg_hidden)
            matches_b.removeClass("active-btn")
            matches.removeClass(rg_active)
            battles_b.addClass("active-btn")
            matches.addClass(rg_hidden)
            battles.addClass(rg_active)
            clear_data("b")
        }
    }
    if (window.matchMedia("(max-width: 1024px)").matches) {
        if (type === 'm') {
            rg1.removeClass(rg_hidden)
            rg2.removeClass(rg_hidden)
            rg3.removeClass(rg_hidden)
            battles_b.removeClass("active-btn")
            matches_b.addClass("active-btn")
            battles.addClass(rg_hidden)
            rg1.addClass(rg_active)
            rg2.addClass(rg_active)
            rg3.addClass(rg_active)
            clear_data("m")
        } else {
            bg1.removeClass(rg_hidden)
            bg2.removeClass(rg_hidden)
            bg3.removeClass(rg_hidden)
            bg1.addClass(rg_active)
            bg2.addClass(rg_active)
            bg3.addClass(rg_active)
            matches_b.removeClass("active-btn")
            matches.removeClass(rg_active)
            battles_b.addClass("active-btn")
            matches.addClass(rg_hidden)
            clear_data("b")
        }
    }
}

function result_slider(index_curr,index_next,c_curr,c_next) {
    index_curr.removeClass(rg_active)
    index_curr.addClass('results-hide-slide')
    setTimeout(function() {
        index_curr.removeClass('results-hide-slide')
        index_curr.addClass(rg_hidden)
        index_next.removeClass(rg_hidden)
    },300)
    setTimeout(function () {
        index_next.addClass(rg_active)
    },400)

    c_curr.removeClass(rc_active)
    c_next.addClass(rc_active)
}

function slide_results(direction) {
    console.log(rg1.length + " + " + rg2.length + " + " +  rg2.length)
    if ($('.m-btn')[0].classList.contains('active-btn')) {
        if (direction==="left") {
            if (rg1[0].classList.contains(rg_active)) {
                //skip
            }
            else if (rg2[0].classList.contains(rg_active)) {
                result_slider(rg2,rg1,rc2,rc1)
            }
            else if (rg3[0].classList.contains(rg_active)) {
                result_slider(rg3,rg2,rc3,rc2)
            }
        }
        if (direction==="right") {
            if (rg1[0].classList.contains(rg_active)) {
                result_slider(rg1,rg2,rc1,rc2)
            }
            else if (rg2[0].classList.contains(rg_active)) {
                result_slider(rg2,rg3,rc2,rc3)
            }
            else if (rg3[0].classList.contains(rg_active)) {
                //skip
            }
        }
    }
    if ($('.b-btn')[0].classList.contains('active-btn')) {
        if (direction==="left") {
            if (bg1[0].classList.contains(rg_active)) {
                //skip
            }
            else if (bg2[0].classList.contains(rg_active)) {
                result_slider(bg2,bg1,rc2,rc1)
            }
            else if (bg3[0].classList.contains(rg_active)) {
                result_slider(bg3,bg2,rc3,rc2)
            }
        }
        if (direction==="right") {
            if (bg1[0].classList.contains(rg_active)) {
                result_slider(bg1,bg2,rc1,rc2)
            }
            else if (bg2[0].classList.contains(rg_active)) {
                result_slider(bg2,bg3,rc2,rc3)
            }
            else if (bg3[0].classList.contains(rg_active)) {
                //skip
            }
        }
    }
}

if (window.matchMedia("(max-width: 1024px)").matches) {
    rg2.addClass(rg_active)
    rg2.removeClass(rg_hidden)
    rg3.addClass(rg_active)
    rg3.removeClass(rg_hidden)
}


function timer() {

    let timerShow = document.getElementById("timer");
    time = 15
    timeMinut = time * 60
    timer = setInterval(function () {
        seconds = timeMinut%60
        minutes = timeMinut/60%60
        hour = timeMinut/60/60%60
        if (timeMinut <= 0) {
            clearInterval(timer);
            alert("Время на регистрацию вышло");
            timerShow.innerHTML = "Время вышло";
        } else {
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            timerShow.innerHTML = strTimer;
        }
        --timeMinut;
    }, 1000)
} timer()