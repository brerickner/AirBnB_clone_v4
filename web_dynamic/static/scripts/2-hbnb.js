$(document).ready(function () {
  // this is the api status check
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
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
