$(document).ready(function() {
    $("form").submit(function(event) {
      var sm = parseInt($("option#sm").val());
      var md = parseInt($("option#md").val());
      var lg = parseInt($("option#lg").val());
      var crispy = parseInt($("option#crispy").val());
      var stuffed = parseInt($("option#stuffed").val());
      var glutenfree = parseInt($("option#glutenfree").val());
      var mushrooms = parseInt($("option#mushrooms").val());
      var beef = parseInt($("option#beef").val());
      var chicken = parseInt($("option#chicken").val());
      var deliver = parseInt($("input#deliver").val());
      var collect = parseInt($("input#collect").val());

      if (sm && crispy && mushrooms && deliver) {
        alert (sm + crispy + mushrooms + deliver);
       }else if (md && stuffed && beef && deliver) {
        alert (md + stuffed + beef + deliver);
      } else if (lg && glutenfree && chicken && deliver) {
        alert (lg + glutenfree + chicken + deliver);
      }

      $("p").show();
      $('p').css('background-color', 'white');
      event.preventDefault();
    });
});
