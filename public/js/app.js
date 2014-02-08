var showRecipes = function(data) {
  var matches = data.matches;
  for(var i = 0; i < matches.length; i++) {
    var pic = matches[i].smallImageUrls[0];
    var ingredients = matches[i].ingredients;
    var name = matches[i].recipeName;
    var ul = $('<ul>');
    var li1 = $('<li>').text(pic);
    var li2 = $('<li>').text(ingredients);
    var li3 = $('<li>').text(name);
    li1.prependTo(ul);
    li2.prependTo(ul);
    li3.prependTo(ul);
    ul.prependTo('body');
  }

};




$(document).ready(function() {
  $("button").on('click', function(e) {
    e.preventDefault();
    var val = $('input').val();
    $.ajax({
      url: 'http://localhost:3000/' + val,
      method: 'GET',
      success: function(data) {
        showRecipes(data);
      },
      error: function() {
        console.log('error');
      }
    });
  });
});