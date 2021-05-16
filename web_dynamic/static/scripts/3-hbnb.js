$(document).ready(function () {
  // this is the api status check
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

  // new post function
  let i = 0;
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    method: 'POST',
    contentType: 'application/json',
    data: '{}',
    success: function (data) {
      $.each(data, function () {
        const structure = [
          '<article>',
          '  <div class="title_box">',
          '    <h2>' + data[i].name + '</h2>',
          '  <div class="price_by_night">$' + data[i].price_by_night + '</div>',
          '  </div>',
          '  <div class="information">',
          '    <div class="max_guest">' + data[i].max_guest + '</div>',
          '    <div class="number_rooms">' + data[i].number_rooms + '</div>',
          '    <div class="number_bathrooms">' + data[i].number_bathrooms + '</div>',
          '  </div>',
          '  <div class="user">',
          '    <b>Owner:</b>' + data[i].first_name + ' ' + data[i].last_name,
          '  </div>',
          '  <div class="description">',
          '    ' + data[i].description,
          '  </div>',
          '</article>'].join('\n');
        $('section.places').append(structure);
        i += 1;
      });
    }
  });

  // this is the amenity filter
  const list = [];
  const listId = [];
  $('input:checkbox').click(function () {
    if ($(this).is(':checked')) {
      if ($(this).val() === 'on') {
        list.push(' ' + $(this).attr('data-name'));
        listId.push($(this).attr('data-id'));
        $('DIV.amenities h4').text(list);
      }
    } else {
      list.pop($(this).attr('data-name'));
      listId.pop($(this).attr('data-id'));
      $('DIV.amenities h4').text(list);
    }
  });
});
