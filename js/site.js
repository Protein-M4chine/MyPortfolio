//global variables

//global functions

function showHomePage() {
    $("#home").show(750);
    $("#services").hide();
    $("#projects").hide();
    $("#contact").hide();

    localStorage.setItem("pageHolder", "home");
}

function showServicesPage() {
    $("#services").show(750);
    $("#home").hide();
    $("#projects").hide();
    $("#contact").hide();

    localStorage.setItem("pageHolder", "services");
}

function showProjectsPage() {
    $("#projects").show(750);
    $("#home").hide();
    $("#services").hide();
    $("#contact").hide();

    localStorage.setItem("pageHolder", "projects");
}

function showContactPage() {
    $("#contact").show(750);
    $("#home").hide();
    $("#services").hide();
    $("#projects").hide();

    localStorage.setItem("pageHolder", "contact");
}

/*function mouseOver(x) {
  x.style.height = "17%";
  x.style.width = "17%";
}

function mouseOut(x) {
  x.style.height = "15%";
  x.style.width = "15%";
    
}*/

$(document).ready(function () {
    if (performance.navigation.type == 1) {
        console.info("Page was reloaded");
        console.info(localStorage.pageHolder);
        if (localStorage.pageHolder == "home") {
            showHomePage();
        }
        else if (localStorage.pageHolder == "services") {
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

    $(".serviceslink").click(function () {
        showServicesPage();
    });

    $(".projectslink").click(function () {
        showProjectsPage();
    });

    $(".contactlink").click(function () {
        showContactPage();
    });
    
});

