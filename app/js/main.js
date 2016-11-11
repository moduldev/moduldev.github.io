function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
document.getElementById('open_menu').addEventListener('click', openNav, false);

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
document.getElementById('close_menu').addEventListener('click', closeNav, false);

document.getElementById('feedback-form').addEventListener('submit', function (evt) {
    var http = new XMLHttpRequest(), f = this;
    evt.preventDefault();
    http.open("POST", "contacts.php", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            document.getElementById('form_contact').style.display = "none";
            f.messageFF.removeAttribute('value');
            f.messageFF.value = '';
            document.getElementById("send_ok_mess").style.height = "100%";
        }

    };
    http.onerror = function () {
        alert('sorry, but your message is not sent');
    };

}, false);

function close() {
    document.getElementById('send_ok_mess').style.display = 'none';
}
document.getElementById('close_form').addEventListener('click', close, false);

function openForm() {
    document.getElementById('form_contact').style.display = 'block'
}
document.getElementById('btn_open_contact_form').addEventListener('click', openForm, false);

function closeFormBox() {
    document.getElementById("form_contact").style.display = "none";
}
document.getElementById('close_form_box').addEventListener('click', closeFormBox, false);
// function send_form_btn() {
//     document.getElementsByName('form_contact').style.display = "none";
// }
// document.getElementById('btn_send_form').addEventListener('click', send_form_btn, false);
//=============================================================================================
(function () {
var linkNav = document.querySelectorAll('[href^="#nav"]'),
    V = 0.2;  // скорость, может иметь дробное значение через точку
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
        e.preventDefault();
        var w = window.pageYOffset,  // прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top, start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
            window.scrollTo(0, r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash;  // URL с хэшем
            }
        }
    }, false);
}
}());

window.onscroll = function upBtn() {
    document.getElementById('up_btn').style.display = (window.pageYOffset > '200' ? 'block' : 'none');
};

//=======================================================================================================
var hoverMenuElem = document.getElementById('close_menu_onclick');
function close_menu() {
    document.getElementById('myNav').style.height = "0%";
}
hoverMenuElem.addEventListener('click', close_menu, false);