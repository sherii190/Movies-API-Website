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

//VALIDATE DATA ////////////////////////////////////////////////
function validateName(inputValue) {
  var nameRegex = /^[a-z][a-z ]{1,20}$/i;
  if (nameRegex.test(inputValue) == false) {
      $("#nameAlert").css("display", "block");
  }
  else {
      $("#nameAlert").css("display", "none");
  }
}

function validateEmail(inputValue) {
  var emailRegex = /^([a-zA-Z][a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (emailRegex.test(inputValue) == false) {
      $("#emailAlert").css("display", "block");
  }
  else {
      $("#emailAlert").css("display", "none");
  }
}

function validatePhone(inputValue) {
  var phoneRegex = /^(\+02)?(01)[0125][0-9]{8}$/;
  if (phoneRegex.test(inputValue) == false) {
      $("#phoneAlert").css("display", "block");
  }
  else {
      $("#phoneAlert").css("display", "none");
  }
}

function validateAge(inputValue) {
  var ageRegex = /([1-9][0-9]{1,2})$/;
  if (ageRegex.test(inputValue) == false) {
      $("#ageAlert").css("display", "block");
  }
  else {
      $("#ageAlert").css("display", "none");
  }
}

function validatePw(inputValue) {
  var pwRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
  if (pwRegex.test(inputValue) == false) {
      $("#pwAlert").css("display", "block");
  }
  else {
      $("#pwAlert").css("display", "none");
  }
}

function validateRePw(inputValue) {
  let pw = $("#pwInp").val();
  let rePw = $("#rePwInp").val();
  if (pw != rePw) {
      $("#rePwAlert").css("display", "block");
      return false;
  }
  else {
      $("#rePwAlert").css("display", "none");
      return true;
  }
}

$("#nameAlert").css("marginTop", `-15px`);
$("#emailAlert").css("marginTop", `-15px`);
$("#phoneAlert").css("marginTop", `-15px`);
$("#ageAlert").css("marginTop", `-15px`);
$("#pwAlert").css("marginTop", `-15px`);
$("#rePwAlert").css("marginTop", `-15px`);

//END VALIDATION////////////////////////////////