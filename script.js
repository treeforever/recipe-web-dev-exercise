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


  $('ol#directions-list li').click(function(){
    var numStep = $('ol#directions-list input[type=radio]:checked').val();

    var progressMessage;
    if(numStep<3){
      progressMessage = 'You are at step ' + numStep + '.';
    }
    else {
      progressMessage = 'Congratulations! You are just one last step away from a tasty dish!'
    }
    $('#step-reminder').text(progressMessage);
  });

  $('button#hide-photos').click(function(){
    $('img').hide();
    $('button#hide-photos').hide();
    $('button#show-photos').show();
  });

  $('button#show-photos').click(function(){
    $('img').show();
    $('button#show-photos').hide();
    $('button#hide-photos').show();
  })
});
