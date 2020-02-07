//global variables

//global functions

function showHomePage() {
    $("#home").show(750);
    $("#about").hide();
    $("#projects").hide();
    $("#contact").hide();

    localStorage.setItem("pageHolder", "home");
}

function showAboutPage() {
    $("#about").show(750);
    $("#home").hide();
    $("#projects").hide();
    $("#contact").hide();

    localStorage.setItem("pageHolder", "about");
}

function showProjectsPage() {
    $("#projects").show(750);
    $("#home").hide();
    $("#about").hide();
    $("#contact").hide();

    localStorage.setItem("pageHolder", "projects");
}

function showContactPage() {
    $("#contact").show(750);
    $("#home").hide();
    $("#about").hide();
    $("#projects").hide();

    localStorage.setItem("pageHolder", "contact");
}




$(document).ready(function () {
    if (performance.navigation.type == 1) {
        console.info("Page was reloaded");
        console.info(localStorage.pageHolder);
        if (localStorage.pageHolder == "home") {
            showHomePage();
        }
        else if (localStorage.pageHolder == "about") {
            showAboutPage();
        }
        else if (localStorage.pageHolder == "projects") {
            showProjectsPage();
        }
        else if (localStorage.pageHolder == "contact") {
            showContactPage();
        }

    }
    else
        console.info("Page was normally loaded");

    $(".homelink").click(function () {
        showHomePage();
    });

    $(".aboutlink").click(function () {
        showAboutPage();
    });

    $(".projectslink").click(function () {
        showProjectsPage();
    });

    $(".contactlink").click(function () {
        showContactPage();
    });
});

