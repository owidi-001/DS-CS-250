// CS 235
$( document ).ready( function() {
    
    firstMondayOfClass = new Date( 2021, 07, 23 );
    
    // JS really doesn't store this info?
    freakingMonths = [ "Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];
    
    weekInfo = [
        {   "week" : "1", 
            "units" : [ "Unit 1" ],
            "notes" : "Aug 23: First day of fall semester<br>23-24 Late registration: after these dates, students must be enrolled in a course no later than the first day the course meets."
        },
        {   "week" : "2", 
            "units" : [ "Unit 2" ],
            "notes" : "Aug 30: Last day to drop a full-semester course and receive a 100 percent refund."
        },
        {   "week" : "3", 
            "units" : [ "Unit 3" ],
            "notes" : "Sep 6: Labor Day holiday. College closed."
        },
        {   "week" : "4", 
            "units" : [ "Break 1" ],
            "notes" : ""
        },
        {   "week" : "5", 
            "units" : [ "Unit 4" ],
            "notes" : ""
        },
        {   "week" : "6", 
            "units" : [ "Unit 5" ],
            "notes" : ""
        },
        {   "week" : "7", 
            "units" : [ "Unit 6" ],
            "notes" : ""
        },
        {   "week" : "8", 
            "units" : [ "Break 2" ],
            "notes" : "Oct 15: Application deadline for fall graduation."
        },
        {   "week" : "9", 
            "units" : [ "Unit 7" ],
            "notes" : ""
        },
        {   "week" : "10", 
            "units" : [ "Unit 8" ],
            "notes" : ""
        },
        {   "week" : "11", 
            "units" : [ "Unit 9" ],
            "notes" : ""
        },
        {   "week" : "12", 
            "units" : [ "Break 3" ],
            "notes" : ""
        },
        {   "week" : "13", 
            "units" : [ "Unit 10" ],
            "notes" : "Nov 15: Last day to request a pass/fail grade option or to withdraw with a 'W' from a full-semester course."
        },
        {   "week" : "14", 
            "units" : [ "Unit 11" ],
            "notes" : "Nov 24-26: Thanksgiving Day holiday. Classes not in session. College offices closed."
        },
        {   "week" : "15", 
            "units" : [ "Unit 12" ],
            "notes" : ""
        },
        {   "week" : "16", 
            "units" : [ "Unit 12" ],
            "notes" : "Dec 7-13: Scheduled final exams for students. See <a href='https://www.jccc.edu/calendars/_files/fall-final-exam-schedule.pdf'>Fall 2021 Final Exam Schedule</a>."
        },
        {   "week" : "17", 
            "units" : [ "SEMESTER OVER" ],
            "notes" : "Dec 14: Grades entered online by professors by 5 p.m.<br>Dec 16: Grades available to students by noon on the web."
        },
    ];
} );
