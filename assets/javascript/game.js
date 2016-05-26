$( document ).ready(function() {
    var numberToGuess = 53;
    var counter = 0;
    var numbers = [10, 5, 3, 7];

    $('#computer-number').text(numberToGuess);
    
    for (var i=0; i< numbers.length; i++){
      var imageCrystal = $(gems1);
   
      
      imageCrystal.attr('data-num', numbers[i]);
      
    }
    
    $('#gems1').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      
      $('#user-number').text(counter);
      if (counter == numberToGuess){
        alert('You won!!!!');
      }else if( counter > numberToGuess){
        alert('You lost!');
      }
    });
});


