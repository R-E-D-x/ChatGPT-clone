const sideBarBtn = document.querySelector('.side-bar-btn');
const closeBtn = document.querySelector('#side-bar-close');
const sideBar = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side')

function extendSideBar() {
    sideBar.classList.add('side-bar');
}

function collapseSideBar() {
    sideBar.classList.remove('side-bar');
}

rightSide.addEventListener('click', (event) => {
    if (event.target === sideBarBtn || sideBarBtn.contains(event.target)) return
    collapseSideBar()
});
closeBtn.addEventListener('click', collapseSideBar);
sideBarBtn.addEventListener('click', extendSideBar);
