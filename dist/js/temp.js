document.getElementById("toggleModal").onclick = function () { activateWiz() };
function activateWiz() {
    document.getElementById("wiz").classList.toggle("show-wizard");
}


document.getElementById("uploads").onclick = function () { toggleUploadsDrawer() };
function toggleUploadsDrawer() {
    document.getElementById("uploads").classList.toggle("open");
}