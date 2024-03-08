src = "/Scripts/jquery.js"


//The Mechanism of the cart items, trigger and the modal

const cartTrigger = document.getElementById("nav-cart-trigger")
const cartBubble = document.getElementById("cart-bubble")

const cartOL = document.getElementById("cart-items")
const EmptySpan = document.getElementById("cart-empty-span")
const cartItemRemovalBTN = document.getElementById("cart-item-removal-btn")
let i = 0

function AddToCart() {
    cartItemRemovalBTN.classList.remove("d-none")
    cartBubble.classList.remove("d-none")
    cartBubble.textContent = cartOL.children.length + i;
    i = 1

    $("#cart-empty-span").remove()

    event.preventDefault
    let li = document.createElement("li")
    li.classList.add("cart-li")
    setTimeout(() => {
        li.textContent = window.location.href ? window.location.href.split("#")[1].replace(/%20/g, " ") : "";
        li.setAttribute("onclick", "GoToItem()")
        cartOL.appendChild(li)
    }, 300)
}

function GoToItem() {
    $(".cart-li").click(() => {
        window.location.href = this.textContent ? this.textContent.split(" ")[0] : "";
    })
}

function RemoveFromCart() {
    cartOL.lastChild.remove()
    i = 0
    cartBubble.textContent = cartOL.children.length - i;

    if(cartOL.children.length == 0) {
        cartOL.append(EmptySpan)
        $("#cart-item-removal-btn").remove()
    }
}


$(document).ready(() => {
    $("#sa1").css("opacity", "0")
    $("#sa2").css("opacity", "0")
    $("#sa3").css("opacity", "0")
    $("#sa4").css("opacity", "0")
    $("#sa5").css("opacity", "0")
    $("#sa6").css("opacity", "0")
    $("#sa7").css("opacity", "0")
    $("#sa8").css("opacity", "0")
    $("#sa9").css("opacity", "0")

    $("#side-tabs-toggler").click(() => {
        if (!$("side-tabs").css("width", "30%")) {
            $("#side-tabs").css("width", "30%")
        }
        else {
            $("#side-tabs").css("width", "")
        }
        
    })
})


window.addEventListener('resize' , () => {

    $(".col-12").addClass("col").removeClass("col-12")
})