$( document ).ready( function()
{    
  var sectionNumbers = ["350", "351", "376", "378"];
  
  var assignmentInfoDiv = "";
  assignmentInfoDiv += "  <div class='card assignment-info'>";
  assignmentInfoDiv += "      <div class='card-header'>Assignment info</div>";
  assignmentInfoDiv += "      <div class='card-body'>";
  assignmentInfoDiv += "          <section class='due-dates'>";
  assignmentInfoDiv += "            Due: <span class='due' id='insert-duedate'></span>";
  assignmentInfoDiv += "            End: <span class='end' id='insert-enddate'></span>";
  assignmentInfoDiv += "          </section>";
  assignmentInfoDiv += "          <section class='canvas-links'>";
  assignmentInfoDiv += "            <img src='../web-assets/graphics/canvas-icon.png'> Canvas links: ";
  assignmentInfoDiv += "            <ul id='insert-canvas-links'></ul>";
  assignmentInfoDiv += "          </section>";
  assignmentInfoDiv += "      </div>";
  assignmentInfoDiv += "  </div><br>";
  
  $( "#insert-assignment-info" ).append( assignmentInfoDiv );

  var unitKey   = $( "#unit-key" ).val();
  var assnKey   = $( "#assignment-key" ).val();
  var assnType  = $( "#assignment-type" ).val();   // exercises, projects
  
  var assignmentList = unitInfo[ unitKey ][ assnType ];
  
  console.log( "Unit key", unitKey );
  console.log( "Assignment key", assnKey );
  console.log( "Assignment type", assnType );
  console.log( "Assignment list", assignmentList );
  
  // Search for the assignment's data
  var assn = undefined;
  for ( var i = 0; i < assignmentList.length; i++ )
  {
    if ( assignmentList[i]["key"] == assnKey )
    {
      assn = assignmentList[i];
      break;
    }
  }
  
  // Update assignment info
  if ( assn !== undefined )
  {
    $( "#insert-duedate" ).html( assn[ "due" ] );
    $( "#insert-enddate" ).html( assn[ "end" ] );
    
    var sectionList = "";
    
    for ( var i = 0; i < sectionNumbers.length; i++ )
    {
      var sec = sectionNumbers[i];                      
      if ( assn[ sec ] !== undefined )
      {
        sectionList += "<li><a href='" + assn[ sec ] + "'>Section " + sec + "</a></li>";
      }
    }
    
    $( "#insert-canvas-links" ).append( sectionList );
  }
  
  // Fill in assignment name
  var assignmentString = "[" + assnKey + "] ";
  if      ( assnType == "exercises" )     { assignmentString += "🏋️ "; }
  else if ( assnType == "projects" )      { assignmentString += "💻 "; }
  else if ( assnType == "tech-literacy" ) { assignmentString += "🧠 "; }
  assignmentString += assn["name"];
  $.each( $( ".insert-assignment-name" ), function() {
    $( this ).html( assignmentString );
  } );
  
} );
