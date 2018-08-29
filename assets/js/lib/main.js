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
  updateLocalStorage();
});

// Create new todo
$('input[type="text"]').keypress(function(e) {
  if (e.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append(
      `<li> <span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`
    );
    updateLocalStorage();
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});

// Localstorage functions
function updateLocalStorage() {
  var todoItems = document.querySelectorAll("li");
  var myTodoList = [];
  todoItems.forEach(function(e) {
    let item = e.textContent.replace(/^\s/, "");
    myTodoList.push(item);
  });

  localStorage.setItem("myTodoList", JSON.stringify(myTodoList));
}

function loadPage() {
  var getItems = localStorage.getItem("myTodoList");
  var items = JSON.parse(getItems);
  console.log(items);
  items.forEach(function(e) {
    $("ul").append(
      `<li> <span><i class="fas fa-trash-alt"></i></span> ${e}</li>`
    );
  });
}

loadPage();
