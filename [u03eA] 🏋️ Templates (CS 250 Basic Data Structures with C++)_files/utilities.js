function ThisExists( obj )
{
  return ( obj !== undefined && obj != "" );
}

function ThisAintEmpty( obj )
{
  return ( obj !== undefined && obj.length > 0 );
}



$( document ).ready( function()
{
  // Section information
  sectionNumbers = ["350", "351", "376", "378"];
  
  // Hint expander
  $( ".click-to-expand" ).click( function() {
      
      if ( $( this ).next( ".hint-contents" ).css( "display" ) == "none" ) {
          $( this ).next( ".hint-contents" ).slideDown( "fast", function() {} );
      }
      else {
          $( this ).next( ".hint-contents" ).slideUp( "fast", function() {} );
      }
  } );
  
  
}
);
