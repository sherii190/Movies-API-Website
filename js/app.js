//SIDE NAV BAR//////////////////////////////////
let navWidth = $(".navMenu").outerWidth(true);
$("#options-container").css("left", `-${navWidth}px`);

$("#toggleNav").click(function () {
    $(".fa-align-justify").toggleClass("fa-times");

    if ($("#options-container").css("left") == "0px") {
        $("#options-container").animate({ left: `-${navWidth}px` }, 500);
        $(".navMenu li").animate({ opacity: "0", marginTop: "500px" });
    }
    else {
        $("#options-container").animate({ left: `0px` }, 500);
        $(".navMenu .li1").animate({ opacity: "1", marginTop: "8px" }, 1200);
        $(".navMenu .li2").animate({ opacity: "1", marginTop: "8px" }, 1300);
        $(".navMenu .li3").animate({ opacity: "1", marginTop: "8px" }, 1400);
        $(".navMenu .li4").animate({ opacity: "1", marginTop: "8px" }, 1500);
        $(".navMenu .li5").animate({ opacity: "1", marginTop: "8px" }, 1600);
        $(".navMenu .li6").animate({ opacity: "1", marginTop: "8px" }, 1700);
    }
})
//END SIDE NAV BAR///////////////////////////////////////////////