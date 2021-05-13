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
