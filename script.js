$(document).ready(function() {
  $('img').click(function(){
    $("img").hide();
  });
});

$(document).ready(function() {
  $('ul#ingredients-list li').click(function() {
    var $this = $(this);
    var numCheckedCheckbox = $this.find('input[type=checkbox]:checkbox:checked').length;
    var checked = (numCheckedCheckbox === 1);
    if(checked) {
      $this.css('background-color', 'yellow');
    }
    else {
      $this.css('background-color', '');
    }
  });

  $('ul#ingredients-list li').click(function() {
    var numChecked = $('ul#ingredients-list').find('input[type=checkbox]:checkbox:checked').length;
    var ingredientCounterMessage;
    if(numChecked > 0) {
      ingredientCounterMessage = numChecked + ' ingredients selected.';
    }
    else {
      ingredientCounterMessage = 'No ingreident selected.';
    }
    $('#ingredient-counter').text(ingredientCounterMessage);
  });
});
