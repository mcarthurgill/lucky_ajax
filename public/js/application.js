$(document).ready(function () {
  function generateRandom()
    {
      return Math.ceil((Math.random()*6));
    }

  $('form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/rolls',
      data: { value: generateRandom() }
    }).done(function(data) {
      $('#die').html('<img src="/' + data + '.png"></img>');
    });
  });
});
