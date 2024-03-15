var Fullname = 'xác nhận bạn đã đủ 18+';

confirm(Fullname);
function enlargeCard(element) {
    element.classList.toggle('enlarged');
}
function playVideo() {
    var video = document.getElementById('myVideo');
    video.play();
}
function toggleSubMenu() {
    var subMenu = document.querySelector('.Menu-Icon ul.sub-menu');
    subMenu.classList.toggle('active');
}
