$( document ).ready( function()
{    
    var sectionNumbers = ["350", "351", "376", "378"];
  
    // Populate view by topic screen (#topic-list)
    if ( $( "#topic-list" ).length > 0 )
    {
        //console.log( "unitInfo.length", unitInfo.length );
        //console.log( "unitInfo", unitInfo );
        $.each( unitInfo, function( key, info ) {
                        
            if ( key != "TEMPLATE" )
            {
                
                var tableRow = "";
                tableRow += "<tr>";
                tableRow += "<td><p><a href='" + info["link"] + "'>" + key + " " + info["topic"] + "</a></p>";
                
                // Lectures
                if ( ThisAintEmpty( info["lectures"] ) )
                {
                  tableRow += "<p>Lectures</p><ul>";
                  $.each( info["lectures"], function( index, item ) {
                      tableRow += "<li><a href='" + item["url"] + "'>🎥 " + item["name"] + "</a></li>";
                  } );
                  tableRow += "</ul>";
                }
                
                // Reading
                if ( ThisAintEmpty( info["reading"] ) )
                {
                  tableRow += "<p>Reading</p><ul>";
                  $.each( info["reading"], function( index, item ) {
                      tableRow += "<li><a href='" + item["url"] + "'>📘 " + item["name"] + "</a></li>";
                  } );
                  tableRow += "</ul></td>";
                }
                
                // Exercises
                tableRow += "<td><ul>";
                $.each( info["exercises"], function( index, item ) {
                    tableRow += "<li>[" + item["key"] + "] 🏋️ " + item["name"];
                    tableRow += "<ul>";
                    
                    if ( ThisExists( item["docs"] ) ) // item["docs"] !== undefined && item["docs"] != "" )
                    {
                      tableRow += "<li><a href='" + item["docs"] + "'>📋 Docs</a>";
                    }
                    
                    for ( var i = 0; i < sectionNumbers.length; i++ )
                    {
                      var sec = sectionNumbers[i];                      
                      if ( ThisExists( item[ sec ] ) )
                      {
                        tableRow += "<li><a href='" + item[ sec ] + "'><img src='../web-assets/graphics/canvas-icon.png'> Section " + sec + "</a></li>";
                      }
                    }
                    
                    tableRow += "</ul>";
                    tableRow += "</li>";
                } );
                tableRow += "</ul></td>";
                
                // Quizzes
                tableRow += "<td><ul>";
                $.each( info["quizzes"], function( index, item ) {
                    tableRow += "<li>[" + item["key"] + "] ✅ " + item["name"];
                    tableRow += "<ul>";

                    for ( var i = 0; i < sectionNumbers.length; i++ )
                    {
                      var sec = sectionNumbers[i];           
                      if ( ThisExists( item[ sec ] ) )
                      {
                        tableRow += "<li><a href='" + item[ sec ] + "'><img src='../web-assets/graphics/canvas-icon.png'> Section " + sec + "</a></li>";
                      }
                    }

                    tableRow += "</ul>";
                    tableRow += "</li>";
                } );
                tableRow += "</ul></td>";
                
                // Tech literacy
                tableRow += "<td><ul>";
                $.each( info["tech-literacy"], function( index, item ) {
                    tableRow += "<li>[" + item["key"] + "] 🧠 " + item["name"];
                    
                    tableRow += "<ul>";
                    
                    if ( ThisExists( item["docs"] ) )
                    {
                      tableRow += "<li><a href='" + item["docs"] + "'>📋 Docs</a>";
                    }

                    for ( var i = 0; i < sectionNumbers.length; i++ )
                    {
                      var sec = sectionNumbers[i];
                      if ( ThisExists( item[ sec ] ) )
                      {
                        tableRow += "<li><a href='" + item[ sec ] + "'><img src='../web-assets/graphics/canvas-icon.png'> Section " + sec + "</a></li>";
                      }
                    }

                    tableRow += "</ul>";
                    tableRow += "</li>";
                    
                } );
                tableRow += "</ul></td>";
                
                // Projects
                tableRow += "<td><ul>";
                $.each( info["projects"], function( index, item ) {
                    tableRow += "<li>[" + item["key"] + "] 💻 " + item["name"];
                    tableRow += "<ul>";
                    for ( var i = 0; i < sectionNumbers.length; i++ )
                    {
                      var sec = sectionNumbers[i];
                      if ( ThisExists( item[ sec ] ) )
                      {
                        tableRow += "<li><a href='" + item[ sec ] + "'><img src='../web-assets/graphics/canvas-icon.png'> Section " + sec + "</a></li>";
                      }
                    }
                    tableRow += "</ul>";
                    tableRow += "</li>";
                } );
                tableRow += "</ul></td>";
                
                // Exam
                tableRow += "<td><ul>";
                $.each( info["exams"], function( index, item ) {
                    tableRow += "<li>[" + item["key"] + "] 💯 " + item["name"];
                    tableRow += "<ul>";
                    for ( var i = 0; i < sectionNumbers.length; i++ )
                    {
                      var sec = sectionNumbers[i];
                      if ( ThisExists( item[ sec ] ) )
                      {
                        tableRow += "<li><a href='" + item[ sec ] + "'><img src='../web-assets/graphics/canvas-icon.png'> Section " + sec + "</a></li>";
                      }
                    }
                    tableRow += "</ul>";
                    tableRow += "</li>";
                } );
                tableRow += "</ul></td>";
                
                tableRow += "</tr>";
                
                $( "#topic-list" ).append( tableRow );
            }
            
        } );
        
        
            /*
            <th class="col-1">Unit</th>
            <th class="col-2">Topic</th>
            <th class="col-1">Lectures</th>
            <th class="col-1">Reading</th>
            <th class="col-1">Exercises</th>
            <th class="col-1">Quizzes</th>
            <th class="col-1">Tech literacy</th>
            <th class="col-1">Exams</th>
            * */
    }
    
    if ( $( "#weekly-schedule" ).length > 0 )
    {
        // Populate the weekly schedule table (#weekly-schedule)
        for ( var i = 0; i < weekInfo.length; i++ )
        {
            /*
            {   "week" : "1", 
                "units" : [ 
                    { "unit" : "Unit 1", "link" : "unit01.html", "topic" : "Introduction and setup" },
                ],
                "notes" : ""
            },
             * */
             
            // Get the date
            var date = new Date( firstMondayOfClass );
            if ( i > 0 ) { date.setDate( firstMondayOfClass.getDate() + 7 * i ); }
            
            var dayString   = "Week of " + freakingMonths[ date.getMonth() ] + " " + date.getDate().toString();
            var whichWeek   = weekInfo[i]["week"];
            var notes       = weekInfo[i]["notes"];
            
            var tableHtml = "<tr class='d-flex'>";
            tableHtml       += "<td class='col-1 week'> " + whichWeek + "</td>";     // Week
            tableHtml       += "<td class='col-2 date'> " + dayString + " </td>";    // Date
            tableHtml       += "<td class='col-6 link'><ul>";                        // Unit
        
            for ( var j = 0; j < weekInfo[i]["units"].length; j++ )
            {
                var unitKey = weekInfo[i]["units"][j];
                
                if ( unitKey.indexOf( "Unit" ) != -1 )
                {
                    var unit = unitInfo[unitKey];
                    tableHtml += "<li><a href='" + unit["link"] + "'>" + unitKey + ": " + unit["topic"] + "</a></li>";
                }
                else
                {
                    tableHtml += "<li>" + unitKey + "</li>";
                }
            }
        
            tableHtml       += "</ul></td>";
            tableHtml       += "<td class='col-3 notes'> " + notes + " </td>";       // Notes
            
            tableHtml       += "</tr>\n";
            $( "#weekly-schedule" ).append( tableHtml );
        }
    }
} 
);
