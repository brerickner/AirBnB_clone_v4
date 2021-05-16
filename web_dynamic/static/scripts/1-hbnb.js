$(document).ready(function () {
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
