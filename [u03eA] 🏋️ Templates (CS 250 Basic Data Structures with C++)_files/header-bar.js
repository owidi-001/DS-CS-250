$( document ).ready( function()
{    
    
    if ( typeof headerInfo !== 'undefined' )
    {
        
        var headerHtml = "";
        headerHtml +=  "<div class='row header-information'>";
        headerHtml += "                    <div class='col-md-9'>";
        headerHtml += "                        <section class='course-information'>";
        headerHtml += "                            <div class='row'>";
        headerHtml += "                                <div class='col-md-4 col-sm-8'>";
        headerHtml += "                                     <table class='section-info'>";
        headerHtml += "                                         <tr><th>Course:</th><td id='course'>" + headerInfo["course"] + "</td></tr>";
        headerHtml += "                                         <tr><th>Semester:</th><td id='semester'>" + headerInfo["semester"] + "</td></tr>";
        headerHtml += "                                         <tr><th>Dates:</th><td id='dates'>" + headerInfo["dates"] + "</td></tr>";
        headerHtml += "                                         <tr><th>Instructor:</th><td>Rachel Singh <sub>(they/them)</sub></td></tr>";
        headerHtml += "                                         <tr><th>Email:</th><td>rsingh13@jccc.edu</td></tr>";
        headerHtml += "                                         <tr><th>Discord:</th><td>RachelThePotato#0085</td></tr>";
        headerHtml += "                                     </table>";
        headerHtml += "                                </div> <!-- half col -->";
        
        headerHtml += "                                <!-- SECTION INFORMATION START -->"
        headerHtml += "                                <div class='col-md-8 col-sm-4 row'>";
        for ( var i = 0; i < sectionInfo.length; i++ )
        {
            var info = sectionInfo[i];
            headerHtml += "                                    <div class='col-md-6'>";
            headerHtml += "                                        <div class='section-info-box info-box " + info["background"] + "'>";
            headerHtml += "                                            <div class='info-box-header'>";
            headerHtml += "                                                Section          <strong class='section'>" + info["section"] + "</strong>";
            headerHtml += "                                            </div>";
            headerHtml += "                                            <div class='info-box-body bg-light'>";
            headerHtml += "                                             <table class='section-info'>";
            headerHtml += "                                                 <tr><th>CRN:</th><td class='crn'>" + info["crn"] + "</td></tr>";
            headerHtml += "                                                 <tr><th>Method:</th><td class='method'>" + info["method"] + "</td></tr>";
            headerHtml += "                                                 <tr><th>Times:</th><td class='times'>" + info["times"] + "</td></tr>";
            headerHtml += "                                                 <tr><th>Semester:</th><td class='semester'>" + info["semester"] + "</td></tr>";
            headerHtml += "                                             </table>";
            headerHtml += "                                            </div>";
            headerHtml += "                                        </div>";
            headerHtml += "                                    </div> <!-- section -->";
        }
        headerHtml += "                                </div> <!-- half col -->      ";  
        headerHtml += "                                <!-- SECTION INFORMATION END -->"
                        
        headerHtml += "                            </div> <!-- row -->";
        headerHtml += "                        </section> <!-- course-information -->";
        headerHtml += "                    </div> <!-- course-information col -->";
        headerHtml += "                    <div class='col-md-3'>";
        headerHtml += "                        <section class='quick-nav border border-primary bg-light'>";
        headerHtml += "                            <div class='container-fluid' id='nav-box'>";
        headerHtml += "                            </div>";
        headerHtml += "                        </section> <!-- quick-nav -->";
        headerHtml += "                    </div> <!-- quick-nav col -->";
        headerHtml += "                </div> <!-- row -->";
        headerHtml += "                <hr>";
        
        $( "#header-container" ).append( headerHtml );
        
        var navHtml = "<ul>"+
                        "<li><a href='" + headerInfo["homepage"] + "' id='homepage'>Homepage 🏠</a></li>"+
                        "<li><a href='" + headerInfo["syllabus"] + "'>Syllabus 📝</a></li>"+
                        "<li><a href=\"" + headerInfo["textbook1"] + "\">Core C++ book 📘</a></li>"+
                        "<li><a href=\"" + headerInfo["textbook2"] + "\">Data Structures book 📘</a></li>"+
                        "<li><a href='" + headerInfo["exampleCode"] + "'>Example code 💾</a></li>"+
                        "<li><a href='" + headerInfo["catalog"] + "'>Course catalog 📖</a></li>"+
                        "<li><a href='http://canvas.jccc.edu'>Canvas <img src='../web-assets/graphics/canvas-icon.png'></a></li>"+
                    "</ul>";
        
        $( "#nav-box" ).append( navHtml );
        
        $( "#class-info" ).html( headerInfo["course"] );
        
        
        
    }
    
    // Top links to other classes / quick reference and stuff    
    var courseCode = "Quick reference";
    
    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log( "Page:", page );
    
    if ( typeof headerInfo !== 'undefined' )
    {
        courseCode = headerInfo["courseCode"];
    }
    else if ( page == "review.html" )
    {
        courseCode = "Resource list";
    }
    
    
    var links = [
        { "text" : "Home",                  "url" : "https://rachels-courses.gitlab.io/webpage/" },
        { "text" : "CS 200",                "url" : "https://rachels-courses.gitlab.io/webpage/cs200/" },
        { "text" : "CS 235",                "url" : "https://rachels-courses.gitlab.io/webpage/cs235/" },
        { "text" : "CS 250",                "url" : "https://rachels-courses.gitlab.io/webpage/cs250/" },
        { "text" : "Quick reference",       "url" : "https://rachels-courses.gitlab.io/webpage/ref/reference.html" },
        { "text" : "Resource list",         "url" : "https://rachels-courses.gitlab.io/webpage/ref/review.html" },
    ];
    
    var otherLinks = "";
    
    otherLinks += "<!-- Header links to other classes -->                                                                                                           ";
    otherLinks += "<div class='row'> <div class='col-md-12'> <nav class='navbar navbar-expand-lg navbar-light bg-light'> <ul class='navbar-nav mr-auto'>            ";
    
    for ( var i = 0; i < links.length; i++ )
    {
        var cl = "nav-item";
        if ( links[i]["text"] == courseCode )
        {
            cl += " active";
        }
        
        otherLinks += "<li class='" + cl + "'>";
        otherLinks += "<a href='" + links[i]["url"] + "' class='nav-link'>" + links[i]["text"] + "</a>";
        otherLinks += "</li>";
    }

    otherLinks += "</ul> </nav> </div> <!-- col-md-12 --> </div> <!-- row --> <hr>                                                                                  ";
    otherLinks += "<!-- Header links to other classes -->                                                                                                           ";
        
    $( "#course-links" ).html( otherLinks );
} 
);
