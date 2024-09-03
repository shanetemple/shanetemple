$(function(){
  var max = 61;
  var possibleOuts = {
    61 : ['T15 D8','T7 D20'],
    62 : ['T10 D16'],
    63 : ['T13 D12'],
    64 : ['T16 D8'],
    65 : ['25 D20','T11 D16'],
    66 : ['T10 D18'],
    67 : ['T17 D8'],
    68 : ['T20 D4','T16 D10'],
    69 : ['T19 D6','T15 D12'],
    70 : ['T18 D8'],
    71 : ['T13 D16','T17 D10'],
    72 : ['T16 D12','T12 D18'],
    73 : ['T19 D8'],
    74 : ['T14 D16'],
    75 : ['T17 D12'],
    76 : ['T20 D8'],
    77 : ['T19 D10'],
    78 : ['T18 D12'],
    79 : ['T19 D11','T13 D20'],
    80 : ['T20 D10','T16 D16'],
    81 : ['T15 D18','T19 D12'],
    82 : ['BULL D16','T14 D20'],
    83 : ['T17 D16'],
    84 : ['T20 D12','T16 D18'],
    85 : ['T15 D20'],
    86 : ['T18 D16'],
    87 : ['T17 D18'],
    88 : ['T16 D20'],
    89 : ['T19 D16'],
    90 : ['T18 D18'],
    91 : ['T17 D20'],
    92 : ['T20 D16'],
    93 : ['T19 D18'],
    94 : ['T18 D20'],
    95 : ['T19 D19'],
    96 : ['T20 D18'],
    97 : ['T19 D20'],
    98 : ['T20 D19'],
    99 : ['T20 7 D16'],
    100 : ['T20 D20']
};

  $('#js-start').on('click', function(){
    var scoreColumns = $('.column--score');
    scoreColumns.removeClass('column--active').find('.score').text('61');
    scoreColumns.eq(0).addClass('column--active');

    var rounds = $('.list--rounds').hide();
    rounds.find('.list__items').empty();

    $('.num-pad__display').val('');
    $('.list--outs').hide();
  });

  $('.num-pad__button--numeric').on('click', function() {
      $('.num-pad__display').val($('.num-pad__display').val() + $(this).text());
  });

   $('.num-pad__button--clear').on('click', function() {
     $('.num-pad__display').val('');
   });

  $('.num-pad__button--delete').on('click', function() {
     var score = $('.num-pad__display').val();
     if(score) {
       score = score.toString().substring(0, score.length - 1);
       $('.num-pad__display').val(score);
     }
   });

   $('.num-pad__button--submit').on('click', function() {
      var score = $('.num-pad__display').val();

      $('.num-pad__display').val('');

      if (!score) {
        alert('Please enter a score');
        return;
      }

      if(score > 61) {
        alert('Score cannot be higher than 180');
        return;
      }

      var sets = $('.last__scores');
      var totalSum = 0;
      for(var i in sets) {
        totalSum += sets[i];
      }

      var numsCnt = sets.length;
      var average = $('.average');
      var calculateAverage = totalSum / numsCnt;

      sets.append(calculateAverage);

      var currentplayer = $('.column--score.column--active');
      var otherPlayer = $('.column--score').not('.column--active');
      var previousScore = currentplayer.find('.score');
      var previousScoreText = parseInt(previousScore.text());
      var scoreRemaining = previousScoreText - score;
      var rounds = currentplayer.find('.list--rounds').show();
      var outs = currentplayer.find('.list--outs').hide();
      var scoreColumns = $('.column--score');
      var lastScore = $('.num-pad__display').val();

      if (possibleOuts[scoreRemaining]) {
        var outslist = outs.find('.list__items');
        outslist.empty();
        outslist.append('<li>' + possibleOuts[scoreRemaining].join('</li><li>') + '</li>');
        outs.show();
      }

      if (scoreRemaining > 1) {
        previousScore.text(scoreRemaining);
        rounds.find('.list__items').append('<li>' + score + '<li>');
      } else if(scoreRemaining === 0) {
        scoreColumns.removeClass('column--active').find('.score').text('61');
        scoreColumns.eq(0).addClass('column--active');
        var rounds = $('.list--rounds').hide();
        rounds.find('.list__items').empty();
        $('.num-pad__display').val('');
        $('.list--outs').hide();
      } else {
        rounds.find('.list__items').append('<li>Bust<li>');
      }
   });

   $('.num-pad__button--submit').on('return', function() {
      var score = $('.num-pad__display').val();

      $('.num-pad__display').val('');

      if (!score) {
        alert('Please enter a score');
        return;
      }

      if(score > 61) {
        alert('Score cannot be higher than 180');
        return;
      }

      var currentplayer = $('.column--score.column--active');
      var otherPlayer = $('.column--score').not('.column--active');
      var previousScore = currentplayer.find('.score');
      var previousScoreText = parseInt(previousScore.text());
      var scoreRemaining = previousScoreText - score;
      var rounds = currentplayer.find('.list--rounds').show();
      var outs = currentplayer.find('.list--outs').hide();
      var scoreColumns = $('.column--score');
      var lastScore = $('.num-pad__display').val();

      if (possibleOuts[scoreRemaining]) {
        var outslist = outs.find('.list__items');
        outslist.empty();
        outslist.append('<li>' + possibleOuts[scoreRemaining].join('</li><li>') + '</li>');
        outs.show();
      }

      if (scoreRemaining > 1) {
        previousScore.text(scoreRemaining);
        rounds.find('.list__items').append('<li>' + score + '<li>');
      } else if(scoreRemaining === 0) {
        scoreColumns.removeClass('column--active').find('.score').text('61');
        scoreColumns.eq(0).addClass('column--active');
        var rounds = $('.list--rounds').hide();
        rounds.find('.list__items').empty();
        $('.num-pad__display').val('');
        $('.list--outs').hide();
      } else {
        rounds.find('.list__items').append('<li>Bust<li>');
      }
   });

   $("#scoreInput").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#submitButton").click();
    }
});
});
