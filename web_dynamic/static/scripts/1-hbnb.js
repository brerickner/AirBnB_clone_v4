$(document).ready( function () {
  let list = []
  let list_id = []
  $("input:checkbox").click(function () {
    if($(this).is(":checked")){
      if($(this).val() === "on") {
        list.push(" " + $(this).attr('data-name'));
        list_id.push($(this).attr('data-id'))
        $("DIV.amenities h4").text(list);
      }} else {
        list.pop($(this).attr('data-name'));
        list_id.pop($(this).attr('data-id'))
        $("DIV.amenities h4").text(list);
    };
  });
});


/*
$( document ).ready( function () {
  $( "DIV.amenities li input" ).click(function( event ) {
  var target = $( event.target );
  if ( target.is( ":checked" ) ) {
    alert(target.attr("data-name"));
  } else {
    $( 'DIV.amenities h4' ).text("removed");
  }
  });
});
*/
