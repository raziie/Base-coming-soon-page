$(".btn").click(function () {
    var email = $("input").val();

    if (IsEmail(email) == false) {
        $("input").addClass("wrong");
        $(".msg").addClass("error-msg");
        $(".msg").text("Please provide a valid email!");
    } else {
        $("input").addClass("correct");
        $(".msg").addClass("correct-msg");
        $(".msg").text("Done!");
    }
});

$("input").focus(function() {
    $("input").removeClass("wrong");
    $(".msg").removeClass("error-msg");
    $("input").removeClass("correct");
    $(".msg").removeClass("correct-msg");
    $(".msg").text("");
});

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regex.test(email)) {
        return true;
    }else {
        return false;
    }
}