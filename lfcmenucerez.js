

//uni idsine tıkladığında uni merkeze tıkladında merkez yazacak
document.getElementById("unimenu").addEventListener('click', function (event) {
    localStorage.setItem('menu', 'uni');
});
document.getElementById("merkezmenu").addEventListener('click', function (event) {
    localStorage.setItem('menu', 'merkez');
});


window.onload = function () {
    if (localStorage.getItem("menu") == "merkez") {
        // Eğer element mevcutsa, silme 9 5merkez 7 6 uni
        if (document.querySelector('[data-id="1007"]')) {
            document.querySelector('[data-id="1007"]').remove();
        }
        if (document.querySelector('[data-id="1006"]')) {
            document.querySelector('[data-id="1006"]').remove();
        }
    }
    else if (localStorage.getItem("menu") == "uni") {
        if (document.querySelector('[data-id="1009"]')) {
            document.querySelector('[data-id="1009"]').remove();
        }
        if (document.querySelector('[data-id="1005"]')) {
            document.querySelector('[data-id="1005"]').remove();
        }
    }
    else {
        window.location.href = "https://lattefotografcafe.com/index.php/qr-menu/";
    }
};


history.pushState(null, null, location.href);
var myBool = true;
var aptProductScreen = document.getElementById("apt_product_screen");
window.onpopstate = function () {
    if (aptProductScreen && aptProductScreen.style.top === "0px") {
        myBool = false;
        var headerCloseButton = document.getElementsByClassName("round_nav header_close_btn");
        headerCloseButton[0].click();
        history.forward();
    }
    else if (myBool) {
        console.log(2)
        setTimeout(function() {
            if (aptProductScreen.style.top !== "0px") {
                window.location.href = "https://lattefotografcafe.com/index.php/qr-menu/";
                console.log(3)
            }
            else{
                console.log(33)
                myBool = false;
                history.forward();
            }
          }, 300);
    }
    else {
        myBool = true;
        console.log(4)
    }
};
window.onunload = function () { null };





