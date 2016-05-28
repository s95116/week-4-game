$( document ).ready(function() {
    
    //declare variables
    var numberToGuess;
    var total = 0;
    var numbers = [10, 5, 3, 7];
    var wins = 0;
    var losses = 0;

    //Randomly generates a number that the user must match
    numberToGuess = Math.floor(Math.random() * 120) + 19;
    
    //Randomly generates a number that is attached to each crystal image
    // numbers = Math.floor(Math.random() * 12) + 1;

    //Takes the number generated and plugs it into #computer-number div in the html
    $('#computer-number').text(numberToGuess);

      console.log(numbers)
      numbers[0]= Math.floor(Math.random() * 12) + 1;
      numbers[1]= Math.floor(Math.random() * 12) + 1;
      numbers[2]= Math.floor(Math.random() * 12) + 1;
      numbers[3]= Math.floor(Math.random() * 12) + 1;
      console.log(numbers)

    for (var i=0; i <numbers.length; i++){
      var crystals = $('.gems');
      
   		crystals.attr('value', numbers[i]);

      
      console.log(crystals[i]);
   		// $('#gems1').html('#user-number');
      // $('#gems1').append(total);
      $('#crystals').append(crystals);
    }

    console.log(numbers)
    
    $('.gems').on('click', function(){
      // console.log("this is working")
       console.log(numbers)

      total = total + parseInt($(this).attr('value'));
      console.log(total);
      $('#user-number').text(total);


    //function to update wins counter
    function updateWins(){
      wins++
      $('#wins').text(wins)
      // alert("You Won!");
      // updateScreen();
    }

    //function to update losses counter
    function updateLosses(){
      losses++
      $('#losses').text(losses);
      // alert("You Lost!");
      // updateScreen();
    }

      if (total == numberToGuess){
        updateWins();
      }else if( total > numberToGuess){
        updateLosses();
      }

      // function updateScreen(){
      // $('#computer-number').html(numberToGuess);
      // $('#')// var total = 0;
      // var numbers;
      // var wins = 0;
      // var losses = 0;
    });
});


