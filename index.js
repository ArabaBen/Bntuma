window.onload = function() {
    var progress = document.querySelector('.progress');
    var loadingBar = document.querySelector('.loading-bar');
    progress.addEventListener('animationend', function() {
        loadingBar.style.display = 'none';
        window.location.href = 'home.html';
    });
};
