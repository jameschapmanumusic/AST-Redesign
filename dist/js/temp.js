document.getElementById("toggleModal").onclick = function () { activateWiz() };
function activateWiz() {
    document.getElementById("wiz").classList.toggle("show-wizard");
}

document.getElementById("uploads").onclick = function () { toggleUploadsDrawer() };
function toggleUploadsDrawer() {
    document.getElementById("uploads").classList.toggle("open");
}

document.getElementById("rotate").onclick = function () { toggleRotation() };
function toggleRotation() {
    document.getElementById("rotate").classList.toggle("rotate");
}

// toggle active class
function toggleActiveClass(e) {
    var elems = document.querySelectorAll(".selected");
    [].forEach.call(elems, function (el) {
        el.classList.remove("selected");
    });
    e.target.className = "selected";
}

// Show Form
document.getElementById("showForm").onclick = function () { displayForm() };
function displayForm() {
    document.getElementById("toggleForm").classList.toggle("show-form");
}

// Cancel Form
document.getElementById("cancelForm").onclick = function () { cancelForm() };
function cancelForm() {
    document.getElementById("toggleForm").classList.toggle("show-form");
}

// MK - toggle row open and closed
$(".main-table-section .table-striped tbody tr.details-row td:first-child").each(function () {
    var $thisRow = $(this);
    $thisRow.click(function () {
        $thisRow.parent().toggleClass("row-open");
    });
});
