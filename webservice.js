$(document).ready(function () {
    $.ajax({
        url: "https://www.mizzouit.com/2830/challenge9/classInfo.php?content=info",
        success: function (json) {
            $("#webService").html(json);
        }
    });
});