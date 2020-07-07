/* Start Initial libry Scroll */
var myFullpage = new fullpage('#fullpage', {

    anchors: ['horttas', 'o-que-e-horttas', 'alimentos-organicos', 'faca-parte', 'formulario'],
    menu: '#menu',
    responsiveWidth: 1024,
    css3: true
});

$('#whatsapp').mask('(00) 9 0000-0000');

$("#bar").click(() => {
    $(".menu").css({ "height": "100vh" });
});

$("#close").click(() => {
    $(".menu").css({ "height": "0vh" });
});

$("ul > li").click(() => {
    $(".menu").css({ "height": "0vh" });
});


$(document).ready(() => {
    $(".info_form-content__load").hide();

    $("#form-contact").submit(e => {
        e.preventDefault();
        $(".info_form-content__load").show();
        $("#form-contact").css({ 'opacity': "0.3" });
        $("#form-contact > button").prop('disabled', true);

        const name = $("#name").val();
        const email = $("#email").val();
        const whatsapp = $("#whatsapp").val();

        if (name == null || name == "") {
            alert("Preencha o seu nome");
            $(".info_form-content__load").hide();
            $("#form-contact").css({ 'opacity': "1" });
            $("#form-contact > button").prop('disabled', false);
            return false
        } else if (email == null || email == "") {
            alert("Preencha o seu e-mail");
            $(".info_form-content__load").hide();
            $("#form-contact").css({ 'opacity': "1" });
            $("#form-contact > button").prop('disabled', false);
            return false;
        } else if (whatsapp == null || whatsapp == "") {
            alert("Preencha o seu whatsapp");
            $(".info_form-content__load").hide();
            $("#form-contact").css({ 'opacity': "1" });
            $("#form-contact > button").prop('disabled', false);
            return false;
        }

        $.post("src/php/contact.php", { name, email, whatsapp }, function (data) {
            if (data == "success") {
                $(".info_form-content__load").hide();
                $("#form-contact").css({ 'opacity': "1" });
                window.location.href = "success.html"
                
            } else if (data == "error") {
                $(".info_form-content__load").hide();
                $("#form-contact").css({ 'opacity': "1" });
                $("#form-contact > button").prop('disabled', false);
            }
        });

    });
});

$(document).ready(() => {
    var el = document.getElementById("menu"); // elemento alvo
    var numPx = "80"; 
    var menu = document.getElementById("menu");

    window.addEventListener("scroll", function () {
        if (window.scrollY > numPx) {
            $("#menu").css({'background': '#225627', "transition": "background .8s", "transition": "padding .8s", "padding": "4% 15px"});
        } else {
            $("#menu").css({'background': 'transparent', "transition": "background .8s", "transition": "padding .8s", "padding": "10% 15px"});
        }
    });

});


