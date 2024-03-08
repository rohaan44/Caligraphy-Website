src = "/Scripts/jquery.js"

const inputs = document.querySelectorAll("input")
inputs.forEach(input => {
    input.setAttribute("title", `title${Math.random()}`)
})


const nav_bar = document.querySelector(".navbar");
const foo_ter = document.querySelector("footer");
const sideTabs = document.getElementById("side-tabs")
const centralContainer = document.querySelector(".central-container")
const heroSection = document.getElementById("HeroSection")
const sideTabsToggler = document.createElement("a")

window.addEventListener('resize', () => {

    let DPI = window.innerWidth;

    if (nav_bar && foo_ter) {


        if (DPI <= 486) {
            nav_bar.classList.remove("bg-grey-gradient");
            nav_bar.classList.add("bg-mobile");
        }
        else {
            nav_bar.classList.remove("bg-mobile");
            nav_bar.classList.add("bg-grey-gradient");
        }

        if (DPI <= 486) {
            foo_ter.classList.remove("bg-grey-gradient");
            foo_ter.classList.add("bg-mobile");
        }
        else {
            foo_ter.classList.remove("bg-mobile");
            foo_ter.classList.add("bg-grey-gradient");
        }
    }
})

window.addEventListener('load', () => {

    const shopIconn = document.createElement("i")
    shopIconn.classList.add("bi-bag-fill")
    $(shopIconn).prependTo(".p-shop")
    
    const sideTabsToggler = document.getElementById("side-tabs-toggler")
    const sideTabs = document.getElementById("side-tabs")
    const centralContainer = document.getElementById("central-container")
        $(".guide1").text("")
        $(".guide2").text("")
        $(".guide3").text("")
        $(".guide4").text("")
        $(".guide4").text("")


    //To toggle Opening and Closing of side Tab
    sideTabsToggler.addEventListener('mousedown', () => {
        sideTabs.classList.toggle("side-tab-open")

        if (sideTabs.classList.contains("side-tab-open")) {
            $(".filters-li").addClass("filters-w-stable")
            setTimeout (() => {

                $(".guide1").text("For Beginners")
                $(".guide2").text("For Amateurs")
                $(".guide3").text("Complex")
                $(".guide4").text("Advanced")
                $(".guide1").css("opacity", "100")
                $(".guide2").css("opacity", "100")
                $(".guide3").css("opacity", "100")
                $(".guide4").css("opacity", "100")

                $(".fe-shop").css("opacity", "100")
    
                $(".fe-learn").text(" Learn")
                $(".fe-learn").addClass("bi-book-fill")

                $(".fe-shop").text(" Store")
    
                $(".fe-overview").text(" Overview")
                $(".fe-overview").addClass("bi-clock-history")
    
                $(".fe-reg").text(" Register/Login")
                $(".fe-reg").addClass("bi-box-arrow-in-left")
    
                $(".fe-feedback").text(" Feedback")
                $(".fe-feedback").addClass("bi-chat-right")
    
                $(".fe-contact").text(" Contact Us")
                $(".fe-contact").addClass("bi-telephone-fill")

                $(".topp").text("Top Picks")
                $(".arabicc").text("Arabic")
                $(".greekk").text("Greek")
                $(".indicc").text("Indic")
                $(".islamicc").text("Islamic")
                $(".latinn").text("Latin")
                $(".mangoo").text("Mangolian")
                $(".orientall").text("Oriental")
                $(".urduu").text("Urdu")

                $(".topp").css("opacity", "100")
                $(".arabicc").css("opacity", "100")
                $(".greekk").css("opacity", "100")
                $(".indicc").css("opacity", "100")
                $(".islamicc").css("opacity", "100")
                $(".latinn").css("opacity", "100")
                $(".mangoo").css("opacity", "100")
                $(".orientall").css("opacity", "100")
                $(".urduu").css("opacity", "100")
                
            }, 100)
            
        }
        else {

            $(".guide1").css("opacity", "0")
            $(".guide2").css("opacity", "0")
            $(".guide3").css("opacity", "0")
            $(".guide4").css("opacity", "0")
            $(".guide4").css("opacity", "0")

            $(".fe-shop").css("opacity", "0")
            $(".topp").css("opacity", "0")
            $(".arabicc").css("opacity", "0")
            $(".greekk").css("opacity", "0")
            $(".indicc").css("opacity", "0")
            $(".islamicc").css("opacity", "0")
            $(".latinn").css("opacity", "0")
            $(".mangoo").css("opacity", "0")
            $(".orientall").css("opacity", "0")
            $(".urduu").css("opacity", "0")

            setTimeout ( () => {
                $(".filters-li").removeClass("filters-w-stable")

                $(".guide1").text("")
                $(".guide2").text("")
                $(".guide3").text("")
                $(".guide4").text("")
                $(".guide4").text("")
    
                $(".topp").text("")
                $(".arabicc").text("")
                $(".greekk").text("")
                $(".indicc").text("")
                $(".islamicc").text("")
                $(".latinn").text("")
                $(".mangoo").text("")
                $(".orientall").text("")
                $(".urduu").text("")
    
                $(".fe-shop").text("")
                    
                $(".fe-learn").text("")
                $(".fe-learn").addClass("bi-book-fill")
                    
                $(".fe-overview").text("")
                $(".fe-overview").addClass("bi-clock-history")
                    
                $(".fe-reg").text("")
                $(".fe-reg").addClass("bi-box-arrow-in-left")
                    
                $(".fe-feedback").text("")
                $(".fe-feedback").addClass("bi-chat-right")
                    
                $(".fe-contact").text("")
                $(".fe-contact").addClass("bi-telephone-fill")
            }, 100)

        }
    })

    let DPI = window.innerWidth;

    if (nav_bar && foo_ter) {


        if (DPI <= 486) {
            nav_bar.classList.remove("bg-grey-gradient");
            nav_bar.classList.add("bg-mobile");
        }
        else {
            nav_bar.classList.remove("bg-mobile");
            nav_bar.classList.add("bg-grey-gradient");
        }

        if (DPI <= 486) {
            foo_ter.classList.remove("bg-grey-gradient");
            foo_ter.classList.add("bg-mobile");
        }
        else {
            foo_ter.classList.remove("bg-mobile");
            foo_ter.classList.add("bg-grey-gradient");
        }
    }
    
})




//Make he search bar div appear and dissappear upon clicking anywhere in the box of central container element
function TriggerSearchBar() {
    $("#search-btn").addClass("d-none");
    $("#login-reg").addClass("d-none");
    $("#SearchBarDiv").removeClass("d-none");
    $("#SearchBarDiv").removeClass("slide-in");
    $("#SearchBarDiv").addClass("slide-out");

    setTimeout(() => {
        if (!$("header").hasClass("scrolledForHeader")) {
            document.querySelector("header").classList.add("scrolledForHeader")
        }
    }, 100)
}
$(".central-container").mousedown(() => {
    $("#SearchBarDiv").addClass("slide-in");
    $("#SearchBarDiv").removeClass("slide-out");
    setTimeout(() => {
        $("#search-btn").removeClass("d-none");
        $("#login-reg").removeClass("d-none");
        $("#SearchBarDiv").addClass("d-none");
    }, 300)
})


// Scrolling up makes the header sticky while scrolling down removes the class that did it
let scrollPosition2;
let scrollTimeout;

function scrollingForHeader() {
    window.addEventListener("scroll", () => {
        let scrollPosition1 = window.scrollY;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            scrollPosition2 = scrollPosition1
        }, 20);


        if (scrollPosition1 < scrollPosition2) {
            $("header").addClass("scrolledForHeader")
            $("header").css(
                {
                    "top": "0",
                    "opacity": "90%",
                })
            $("#side-tabs").css({ "top": "60px" })
        }
        else if (scrollPosition1 > scrollPosition2) {
            $("header").removeClass("scrolledForHeader")
            $("#side-tabs").css({ "top": "0" })
        }
    })
}
scrollingForHeader()


// Load and unload contents of different html files upon clicking their anchors and highlighting the clicked anchor
function NavLinkClick() {
    const Target = event.target;

    if ($("*").hasClass("activee")) {
        $("*").removeClass("activee")
    }
    Target.classList.add("activee");

    if (!$(".filterElements").hasClass("inactivee")) {
        $(".filterElements").addClass("inactivee")
        Target.classList.remove("inactivee")
    }
    else $(".filterElements").removeClass("inactivee")
}


//This function has been added to the search button in the Nav Bar to search anything(currently unfinished)
function SearchContent() {
    let searchText = $("#search-input")
    const searchSection = $("#search-section")

    const searchQuery = event.target.value.toLowerCase();
    const result = searchCalligraphy(searchQuery);

    $("#seearch-section").html("")

    if (!result) {
        searchSection.textContent = "No results found"
    }
}


//This function makes the filter div pop up when the filter button is clicked
function FilterPopups() {

    const filterPopup = document.getElementById("filter-popup")
    const centralContainer = document.querySelector(".central-container")
    if (!filterPopup.classList.contains("popup-active")) {
        filterPopup.removeAttribute("hidden", "")
        filterPopup.style.display = "block"
        filterPopup.classList.add("popup-active")
        filterPopup.classList.remove("popup-inactive")
        filterPopup.classList.remove("d-none")
    }
    else if (filterPopup.classList.contains("popup-active") || centralContainer.event.mousedown) {
        filterPopup.classList.remove("popup-active")
        filterPopup.classList.add("popup-inactive")
        setTimeout(() => {
            filterPopup.style.display = "none"
            filterPopup.setAttribute("hidden", "")
        }, 300)

    }
}



// Submit the feedback
let selectedOptionText;
function FeedbackSubmit() {
    if ($("#form-name-input").val() == "" && $("#form-email-input").val() == "") {
        $("#form-alert").removeClass("d-none")
    }
    else if (!$("#form-name-input").val() == "") {
        $("#form-container").css({ "display": "none" })
        $("#feedback-submit-container").css({ "display": "flex" })
        $("#feedback-submit-container").removeClass("d-none")
        $("#feedback-submit-container").addClass("d-flex")


        $(".email-chosen").text(`From: ${$("#form-email-input").val()}`)
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const selectedText = document.getElementById('section-chosen');


        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const li = checkbox.closest('li');
                selectedOptionText = li.textContent;
            }
        });

        selectedText.textContent = selectedOptionText;
        $("#date-submitted").text(`On: ${new Date().toLocaleDateString()}`)
    }
    const buttonn = document.querySelector("#submit-btn");
    const anchorr = buttonn.querySelector("a");
    if (anchorr) {
        anchorr.click
    }



}

function goBack() {
    history.back;
}

function loadProfilePic() {
    const loginInput = document.getElementById("login-profile-input");
    loginInput.click();
}







function registerAccount() {
    let loginName = ""
    if ($("input").val() == "") {
        $("#form-alert").removeClass("d-none")
    }
    else {
        $("#form-alert").addClass("d-none")
        $("#login-form").addClass("d-none")
        $("#login-form2").removeClass("d-none")
        setTimeout(() => {
            loginName = `${$("#form-fn-input")} ${$("#form-ln-input")}`
            window.location.href = "index.html"
        }, 3000)
    }

}





$(document).ready(() => {

    $(".fe-shop").text("")

    $(".fe-learn").text("")
    $(".fe-learn").addClass("bi-book-fill")

    $(".fe-overview").text("")
    $(".fe-overview").addClass("bi-clock-history")

    $(".fe-reg").text("")
    $(".fe-reg").addClass("bi-box-arrow-in-left")

    $(".fe-feedback").text("")
    $(".fe-feedback").addClass("bi-chat-right")

    $(".fe-contact").text("")
    $(".fe-contact").addClass("bi-telephone-fill")

    $(".buy-now-btn").click((productName, price) => {
        event.target.classList.add("thiss")
        const Targetv = document.querySelector(".thiss")
        const card = Targetv.parentElement.parentElement.parentElement
        card.setAttribute("id", "selectedCard")

        setTimeout (() => {
            window.location.href = "buy.html" + "#"
        }, 2000)
    })


    
})


