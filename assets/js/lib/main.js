// Check off todo by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Remove todo when remove button is clicked'
$("ul").on("click", "span", function(e) {
  e.stopPropagation();
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
});

// Create new todo
$('input[type="text"]').keypress(function(e) {
  if (e.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append(`<li><span>X</span> ${todoText}</li>`);
  }
});
