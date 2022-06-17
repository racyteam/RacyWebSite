window.onload = function () {
    $('body').append('<div class="zloader hidden" id="loader"><img src="/LockScreen/loading2.svg" alt="Loading..." /></div>');
}

function UnLockScreen() {
    const loader = document.querySelector(".zloader");
    loader.className = "zloader hidden";
}

function LockScreen() {
    const loader = document.querySelector(".zloader");
    loader.className = "zloader show";
}