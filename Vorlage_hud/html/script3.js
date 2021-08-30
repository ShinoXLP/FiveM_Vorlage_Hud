var blackmoney = false;


$(document).ready(function() {


    window.addEventListener("message", function(event) {

        if (event.data.action == "setMoney") {
            setAnzahl(event.data.money);
            $(".money").show();
            $("money").show();
        };
        if (event.data.action == "show") {
            if (!blackmoney) {

                $(".funk").show();
                $(".funke").hide();
            } else {

                $(".funk").hide();
                $(".funke").hide();
            }

        };
        if (event.data.action == "hide") {

            if (!blackmoney) {
                $(".funk").hide();
                $(".funke").show();
            } else {

                $(".funk").hide();
                $(".funke").hide();
            }

        };
        if (event.data.action == "weg") {
            $(".funk").hide();
            $(".funke").hide();

        };
        if (event.data.action == "muted") {
            if (event.data.muted == true) {
                if (!blackmoney) {
                    $(".voice1").hide();
                    $(".voice2").hide();
                    $(".voice3").hide();
                    $(".voice4").hide();
                    $(".voicemuted").show();
                } else {
                    $(".voice1").hide();
                    $(".voice2").hide();
                    $(".voice3").hide();
                    $(".voice4").hide();
                    $(".voicemuted").hide();
                }

            }
            if (event.data.muted == false) {
                $(".voicemuted").hide();

            }

        };
        if (event.data.action == "nomuted") {
            $(".voicemuted").hide();



        };

        if (event.data.action == "setVoiceLevel") {
            if (!blackmoney) {
                $(".voice1").hide();
                $(".voice2").hide();
                $(".voice3").hide();
                $(".voice4").hide();
                $(".voice" + event.data.level).show();
            } else {
                $(".voice1").hide();
                $(".voice2").hide();
                $(".voice3").hide();
                $(".voice4").hide();
                $(".voice" + event.data.level + "black").show();

            }
        };
    });
});

function setAnzahl(anzahl) {
    document.getElementById("content").innerHTML = new Intl.NumberFormat('de-DE').format(anzahl) + "$";

}