// Smooth scroll to a selected anchor tag on the page
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    const $target = $(this.hash);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        2000,
        "swing"
      );
  });
});
