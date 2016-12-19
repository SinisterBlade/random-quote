$(function() {
  getNewQuote();
  $('#myButton').on('click', function() {
    getNewQuote();
  })
})

function getNewQuote() {
  var red = Math.floor(((Math.random() * 256) + 255) / 2)
    var blue = Math.floor(((Math.random() * 256) + 255) / 2)
    var green = Math.floor(((Math.random() * 256) + 255) / 2)
    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com//?cat=famous',
      type: 'POST',
      dataType: 'json',
      success: function(data) {
        $('body').css('background-color', "rgb(" + red + "," + green + "," + blue + ")");
        $('.btn').css('background-color', "rgb(" + red + "," + green + "," + blue + ")");
        $('#leftquote').css('color', "rgb(" + red + "," + green + "," + blue + ")");
        $('#message').css('color', "rgb(" + red + "," + green + "," + blue + ")");
        $('#author').css('color', "rgb(" + red + "," + green + "," + blue + ")");
        $("#message").fadeOut(function() {
          $(this).text(" " + data['quote'])
        }).fadeIn();
        $("#author").fadeOut(function() {
          $(this).text(data['author'])
        }).fadeIn();
        $("#leftquote").fadeOut().fadeIn();
        $('#tweet').attr('href', "https://twitter.com/intent/tweet?hashtags=AwesomeQuotes&text=" + data['quote'] + ' - ' + data['author']);
      },
      error: function(err) { alert(err); },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "9UT15PjE6umshWkAzq4XVmiMrPQmp1Gosmtjsn08mGPef6qGrN");
      }
    });
}