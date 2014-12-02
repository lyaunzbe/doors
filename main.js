$(function(){
  function getQS(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  function rndm(max, min) {
    return (Math.floor(Math.random() * (max - min)) + min);
  }

  function init() {
    var darkness = parseFloat(getQS('dark'));
    if (!darkness) {
      darkness = 0.125;
    } else {
      darkness += 0.125;
    }


    $('ul').each(function(k,v){
      for (var i = 0; i < 10; i++) {

        var door = "door" + rndm(11, 1) +".png";
        $(v).append('<li><a href="'+rndm(1,4)+'.html?dark='+darkness+'"><img src="'+door+'" /></a></li>');
      }     
    });

    if (darkness >= 0.5 && rndm(0, 101) > 50) {
      var row = rndm(0,3);
      var rowMember = rndm(0,10);
      console.log(row, rowMember);
      $($($('ul')[row]).children()[rowMember]).attr('class', 'fin').find('a').attr('href', 'fin.html');
    }
    $( "#wrapper" ).fadeIn( "slow", function() {});
  }

  function setDarkness () {
    var darkness = parseFloat(getQS('dark'));
    $('#wrapper').css('background-color', 'rgba(0,0,0,'+darkness+')');
  }

  function setEnding () {
    console.log('yo');
    $('#wrapper #background').attr('style', 'background-image:url(bg/'+rndm(0,5)+'.gif)');
    $('#wrapper #center').attr('style', 'background-image:url(center/'+rndm(0,7)+'.gif)');
    $( "#wrapper" ).fadeIn( "slow", function() {});
  }

  var arr = window.location.pathname.split('/'),
      page = arr[arr.length-1];

  if (page !== 'fin.html'){
    init();
  } else {
    setEnding();
  }

  setDarkness();
});