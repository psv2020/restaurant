$(function() {
    $("#hamburger").click((e) => {
        e.preventDefault();

        $("#hamburger").toggleClass('is-active');

        $("#mobile__nav").fadeToggle(300);
    });
});