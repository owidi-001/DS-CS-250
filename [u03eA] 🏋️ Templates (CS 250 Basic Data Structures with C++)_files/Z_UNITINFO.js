// CS 250
$( document ).ready( function() {

unitInfo = {
  "Unit 1" : {
    "link" : "unit01.html",
    "topic" : "Introduction and setup",
    "reminders" : [
    "If you have trouble setting anything up, send me an email via Canvas! We can work together via email or schedule a Zoom meeting to step through everything."
    ],
    //"lectures" :        [ 
      //{ "name" : "", "url" : "" },
      //{ "name" : "", "url" : "" },
    //],
    "reading" :         [   
      { "name" : "Testing",       "url" : "https://gitlab.com/RachelWilShaSingh/Rachels-Computer-Science-Notes/-/blob/master/LaTeX/Core%20Programming%20Concepts/standalone-chapter19-testing.pdf" },
      { "name" : "Debugging",     "url" : "" },
    ],
    "archives" :        [   
      { "name" : "Aug 23rd class", "url" : "http://lectures.moosader.com/cs250/2021-08_Fall/2021-08-23_cs250_lecture_intro.mp4" },
    ],
    "exercises" :       [   
      { "key" : "u01eA", 
          "name" : "Git/GitLab Setup (part 1)",            
          "docs" : "u01eA_GitSetup.html", 
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966795" ,
          "due" : "Sept 1",
          "end" : "Sept 4",
      },
      { "key" : "u01eA", 
          "name" : "Git/GitLab Setup (part 2)",            
          "docs" : "u01eA_GitSetup.html", 
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966796" ,
          "due" : "Sept 1",
          "end" : "Sept 4",
      },
      { "key" : "u01eB", 
          "name" : "IDE Setup",                            
          "docs" : "u01eB_IDESetup.html", 
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966797" ,
          "due" : "Sept 1",
          "end" : "Sept 4",
      },
      { "key" : "u01eC", 
          "name" : "Debugging Tools",                      
          "docs" : "u01eC_DebuggingTools.html", 
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966798" ,
          "due" : "Sept 1",
          "end" : "Sept 4",
      },
      { "key" : "u01eD", 
          "name" : "Testing",                              
          "docs" : "u01eD_Testing.html", 
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966799" ,
          "due" : "Sept 1",
          "end" : "Sept 4",
      },
    ],
    "quizzes" :         [   
      { "key" : "u01sA", 
          "name" : "👋 Introductions! ",                   
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966773" ,
          "due" : "Aug 28",
          "end" : "",
      },
      { "key" : "u01sB", 
          "name" : "📜 Syllabus highlights ",              
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966779" ,
          "due" : "Aug 28",
          "end" : "",
      },
      { "key" : "u01sC", 
          "name" : "‼️ Attendance Quiz ",                  
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966766" ,
          "due" : "Aug 28",
          "end" : "Aug 29",
      },
      { "key" : "u01sD", 
          "name" : "❓ Availability - Survey  ",           
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966770" ,
          "due" : "Aug 28",
          "end" : "",
      },
    ],
  },

  "Unit 2" : {
    "link" : "unit02.html",
    "topic" : "C++ Review",
    "reading" :         [   
      { "name" : "Resource list", "url" : "https://rachels-courses.gitlab.io/webpage/ref/review.html" },
    ],
    "archives" :        [   
      { "name" : "Aug 30th class", "url" : "http://lectures.moosader.com/cs250/2021-08_Fall/2021-08-30_cs250_lecture_review.mp4" },
    ],
    "exercises" :       [   
      { "key" : "u02eA", 
          "name" : "C++ Review",            
          "docs" : "u02eA_CPPReview.html", 
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/989799", 
            "due" : "Sept 8",
            "end" : "Sept 15",
      },
    ],
    "quizzes" :         [   
      { "key" : "u02rA", 
          "name" : "⭐ Review: C++ Basics",                   
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966775",
          "due" : "Sept 19",
          "end" : "Sept 26", 
      },
      { "key" : "u02rB", 
          "name" : "⭐ Review: Control flow",                 
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966785", 
          "due" : "Sept 19",
          "end" : "Sept 26",
      },
      { "key" : "u02rC", 
          "name" : "⭐ Review: Functions",                    
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966784", 
          "due" : "Sept 19",
          "end" : "Sept 26",
      },
      { "key" : "u02rD", 
          "name" : "⭐ Review: Arrays",                       
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966783", 
          "due" : "Sept 19",
          "end" : "Sept 26",
      },
      { "key" : "u02rE", 
          "name" : "⭐ Review: Classes",                      
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966780", 
          "due" : "Sept 19",
          "end" : "Sept 26",
      },
      { "key" : "u02rF", 
          "name" : "⭐ Review: Pointers and memory",    
          "376" : "https://canvas.jccc.edu/courses/49331/quizzes/229582",
          "due" : "Sept 19",
          "end" : "Sept 26", 
      },
      { "key" : "c1",  
          "name" : "🧑‍🏫 Check-in (September)",                   
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966790", 
          "due" : "Sept 1",
          "end" : "Sept 30",
      },
    ],
    "tech-literacy" :   [   
      { "key" : "u02tl", "name" : "Case study: GitHub AI Copilot",      
          "376" : "https://canvas.jccc.edu/courses/49331/quizzes/229585",
          "due" : "Sept 8",
          "end" : "Sept 15",
      },
    ],
  },

  "Unit 3" : {
    "link" : "unit03.html",
    "topic" : "Templates, exception handling",
    "lectures" :        [   
      { "name" : "Templates",                                             "url" : "http://lectures.moosader.com/cs200/26-Templates.mp4" },
      { "name" : "Exception handling",                                    "url" : "http://lectures.moosader.com/cs200/06-Exceptions.mp4" },
    ],
    "reading" :         [   
      { "name" : "CC - Chapter 12: Advanced Object Oriented Programming (12.2 Templates)",  "url" : "https://gitlab.com/RachelWilShaSingh/Rachels-Computer-Science-Notes/-/blob/master/LaTeX/Core%20Programming%20Concepts/standalone-chapter12-oop3.pdf" },
      { "name" : "CC - Chapter 15: Exception handling with try/catch",                      "url" : "https://gitlab.com/RachelWilShaSingh/Rachels-Computer-Science-Notes/-/blob/master/LaTeX/Core%20Programming%20Concepts/standalone-chapter15-exceptions.pdf" },
    ],
    "exercises" :       [   
      { "key" : "u03eA", "name" : "Templates",                            
          "docs" : "u03eA_Templates.html", 
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966800",
          "due" : "Sept 15",
          "end" : "Sept 22", 
      },
      { "key" : "u03eB", "name" : "Exception handling",             
        "docs" : "u03eB_Exceptions.html", 
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966801",
          "due" : "Sept 15",
          "end" : "Sept 22", 
      },
    ],
    "quizzes" :         [   
      { "key" : "u03qA", "name" : "Templates",                            
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966763",
          "due" : "Sept 15",
          "end" : "Sept 22", 
      },
      { "key" : "u03qB", "name" : "Exception handling",                  
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966777",
          "due" : "Sept 15",
          "end" : "Sept 22", 
      },
    ],
    "exams" :           [   
      { "key" : "u03t", "name" : "Test 1: Testing, debugging, templates, exceptions", 
          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966768",
          //"due" : "Sept 1",
          //"end" : "Sept 30", 
      },
    ],
  },

  "Unit 4" : {
    "link" : "unit04.html",
    "topic" : "(WIP) Intro to Data Structures",
    "lectures" :        [   
      { "name" : "Intro to Data Structures",                              "url" : "http://lectures.moosader.com/cs250/cs250-00-introduction.mp4" },
    ],
    "reading" :         [   
      { "name" : "DS - Chapter 1: Intro to Data Structures",              "url" : "https://gitlab.com/RachelWilShaSingh/Rachels-Computer-Science-Notes/-/blob/master/LaTeX/Data%20Structures%20-%20Multilingual/standalone-chapter1-intro_to_data_structures.pdf" },
      { "name" : "DS - Chapter 2: Our first data structures",             "url" : "https://gitlab.com/RachelWilShaSingh/Rachels-Computer-Science-Notes/-/blob/master/LaTeX/Data%20Structures%20-%20Multilingual/standalone-first-data-structure.pdf" },
    ],
    "exercises" :       [   
      { "key" : "u04eA", "name" : "(WIP) Intro to Data Structures (Paper)",      "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966802" },
      { "key" : "u04eB", "name" : "Coding a Fixed-length array structure",       "docs" : "u04eB_FixedArrayStructure.html", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966803" },
      { "key" : "u04eC", "name" : "(WIP) Coding a Dynamic array structure",      "docs" : "u04eC_DynamicArrayStructure.html", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966804" },
    ],
    "quizzes" :         [   
      { "key" : "u04qA", "name" : "(WIP) Intro to Data Structures",             "376" : "https://canvas.jccc.edu/courses/49331/assignments/966776" },
    ],
    "tech-literacy" :   [   
      { "key" : "u04tl", "name" : "(WIP) Case study: Rohrer and NFTs",    "376" : "https://canvas.jccc.edu/courses/49331/assignments/966787" },
    ],
    },

    "Unit 5" : {
    "link" : "unit05.html",
    "topic" : "(WIP) Linked Lists",
    "lectures" :        [   
      { "name" : "Linked Lists (WIP, Coming soon)", "url" : "#" },
    ],
    "reading" :         [   
      { "name" : "DS - Chapter 3: Linked Lists",                          "url" : "https://gitlab.com/RachelWilShaSingh/Rachels-Computer-Science-Notes/-/blob/master/LaTeX/Data%20Structures%20-%20Multilingual/standalone-linked_lists.pdf" },
    ],
    "exercises" :       [   
      { "key" : "u05eA", "name" : "(WIP) Intro to Linked Lists (Paper)",        "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966806" },
      { "key" : "u05eB", "name" : "(WIP) Coding a Linked List",                 "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966804" },
    ],
    "quizzes" :         [   
      { "key" : "u05qA", "name" : "(WIP) Linked Lists",                         "376" : "https://canvas.jccc.edu/courses/49331/assignments/966786" },
    ],
  },

  "Unit 6" : {
    "link" : "unit06.html",
    "topic" : "(WIP) Stacks and Queues",
    "lectures" :        [   
      { "name" : "Stacks (WIP, Coming soon)", "url" : "#" },
      { "name" : "Queues (WIP, Coming soon)", "url" : "#" },
    ],
    "reading" :         [   
      { "name" : "DS - Chapter 4: Queues",                                "url" : "https://gitlab.com/RachelWilShaSingh/Rachels-Computer-Science-Notes/-/blob/master/LaTeX/Data%20Structures%20-%20Multilingual/standalone-queue.pdf" },
      { "name" : "DS - Chapter 5: Stacks",                                "url" : "https://gitlab.com/RachelWilShaSingh/Rachels-Computer-Science-Notes/-/blob/master/LaTeX/Data%20Structures%20-%20Multilingual/standalone-stack.pdf" },
    ],
    "exercises" :       [   
      { "key" : "u06eA", "name" : "(WIP) Intro to Stacks and Queues (Paper)",   "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966807" },
      { "key" : "u06eB", "name" : "(WIP) Coding a Stack",                       "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966810" },
      { "key" : "u06eC", "name" : "(WIP) Coding a Queue",                       "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966808" },
    ],
    "quizzes" :         [   
      { "key" : "u06qA", "name" : "(WIP) Stacks and Queues",                   "376" : "https://canvas.jccc.edu/courses/49331/assignments/966782" },
      { "key" : "c2",  "name" : "🧑‍🏫 Check-in (October)",                 "376" : "https://canvas.jccc.edu/courses/49331/assignments/966791" },
    ],
    "tech-literacy" :   [   
      { "key" : "u06tl", "name" : "(WIP) Case study: Crypto currency",  "376" : "https://canvas.jccc.edu/courses/49331/assignments/966767" },
    ],
    "exams" :           [   
      { "key" : "u06t", "name" : "(WIP) Test 2: Intro to data structures, Linked lists, Stacks, Queues", "url" : "https://canvas.jccc.edu/courses/49331/assignments/966772",                    "376" : "" },
    ]
    },

    "Unit 7" : {
    "link" : "unit07.html",
    "topic" : "(WIP) Algorithm efficiency, Big-O notation",
    "lectures" :        [   
      { "name" : "Algorithm efficiency (WIP, Coming soon)", "url" : "#" },
    ],
    "reading" :         [   
      { "name" : "CC - Chapter 16: Algorithm Efficiency",                         "url" : "https://gitlab.com/RachelWilShaSingh/Rachels-Computer-Science-Notes/-/blob/master/LaTeX/Core%20Programming%20Concepts/standalone-chapter16-algorithm_efficiency.pdf" },
    ],
    "exercises" :       [   
      { "key" : "u07eA", "name" : "(WIP) Intro to algorithm efficiency (WIP, paper)",   "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966809" },
      { "key" : "u07eB", "name" : "(WIP) Coding and Algorithm Efficiency (WIP)",        "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966760" },
      { "key" : "u07eC", "name" : "(WIP) Observing algorithm efficiency (WIP)",         "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966811" },
    ],
    "quizzes" :         [   
      { "key" : "u07qA", "name" : "(WIP)Algorithm efficiency",                         "376" : "https://canvas.jccc.edu/courses/49331/assignments/966765" },
    ],
    },

    "Unit 8" : {
    "link" : "unit08.html",
    "topic" : "(WIP) Recursion",
    "lectures" :        [   
      { "name" : "Recursion",                                             "url" : "" },
    ],
    "reading" :         [   
      { "name" : "CC - Chapter 17: Recursion",                            "url" : "https://gitlab.com/RachelWilShaSingh/Rachels-Computer-Science-Notes/-/blob/master/LaTeX/Core%20Programming%20Concepts/standalone-chapter17-recursion.pdf" },
    ],
    "exercises" :       [   
      { "key" : "u08eA", "name" : "(WIP) Intro to Recursion",      "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966812" },
      { "key" : "u08eB", "name" : "(WIP) Recursion in code",                    "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966873" },
    ],
    "quizzes" :         [   
      { "key" : "u08qA", "name" : "(WIP) Recursion",                            "376" : "https://canvas.jccc.edu/courses/49331/assignments/966778" },
    ],
    "tech-literacy" :   [   
      { "key" : "u08tl", "name" : "(WIP) Case study: Activion/Blizzard",  "376" : "https://canvas.jccc.edu/courses/49331/assignments/966788" },
    ],
  },

  "Unit 9" : {
    "link" : "unit09.html",
    "topic" : "(WIP) Trees, binary search trees",
    "lectures" :        [   
      { "name" : "Trees (WIP, Coming soon)", "url" : "#" },
      { "name" : "Binary Search Trees (WIP, Coming soon)", "url" : "#" },
    ],
    "reading" :         [   
      { "name" : "DS - Chapter 6: Trees",                                 "url" : "https://gitlab.com/RachelWilShaSingh/Rachels-Computer-Science-Notes/-/blob/master/LaTeX/Data%20Structures%20-%20Multilingual/standalone-tree.pdf" },
      { "name" : "DS - Chapter 7: Binary Search Trees",                   "url" : "" },
    ],
    "exercises" :       [   
      { "key" : "u09eA", "name" : "(WIP) Intro to Trees (Paper)",               "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966813" },
      { "key" : "u09eB", "name" : "(WIP) Intro to Binary Search Trees (Paper)", "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966815" },
      { "key" : "u09eC", "name" : "(WIP) Coding a Binary Search Tree",          "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966814" },
    ],
    "quizzes" :         [   
      { "key" : "u09qA", "name" : "(WIP) Trees",                                "376" : "https://canvas.jccc.edu/courses/49331/assignments/966771" },
      { "key" : "u09qB", "name" : "(WIP) Binary Search Trees",                  "376" : "https://canvas.jccc.edu/courses/49331/assignments/966774" },
      { "key" : "c3",  "name" : "🧑‍🏫 Check-in (November)",                 "376" : "https://canvas.jccc.edu/courses/49331/assignments/966792" },
    ],
    "exams" :           [   
      { "key" : "u09t",  "name" : "(WIP) Test 3: Algorithm efficiency, Recursion, Trees, Binary Search Trees", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966781" },
    ]
  },

  "Unit 10" : {
    "link" : "unit10.html",
    "topic" : "(WIP) Hash tables",
    "lectures" :        [   
      { "name" : "Hash Tables (WIP, Coming soon)", "url" : "#" },
    ],
    "reading" :         [   
      { "name" : "DS - Chapter 8: Hash Tables", "url" : "https://gitlab.com/RachelWilShaSingh/Rachels-Computer-Science-Notes/-/blob/master/LaTeX/Data%20Structures%20-%20Multilingual/standalone-dictionary.pdf" },
    ],
    "exercises" :       [   
      { "key" : "u10eA", "name" : "Intro to Hash Tables (Paper)",         "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966816" },
      { "key" : "u10eB", "name" : "Coding a Hash Table",                  "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966817" },
    ],
    "quizzes" :         [   
      { "key" : "u10qA", "name" : "Hash tables",                          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966769" },
    ],
    "tech-literacy" :   [   
      { "key" : "u10tl", "name" : "(WIP) Case study: Lootboxes",          "376" : "https://canvas.jccc.edu/courses/49331/assignments/966758" },
    ],
    "projects" :        [   
      { "key" : "p1", "name" : "Student project",                         "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966794" },
    ],
  },

  "Unit 11" : {
    "link" : "unit11.html",
    "topic" : "Heaps and Balanced Search Trees",
    "lectures" :        [   
      //{ "name" : "Heaps (WIP)", "url" : "" },
      //{ "name" : "Balanced Search Trees (WIP)", "url" : "" },
    ],
    "reading" :         [   
      //{ "name" : "(WIP)", "url" : "" },
    ],
    "exercises" :       [   
      { "key" : "u11eA", "name" : "Intro to Heaps (Paper)",               "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966818" },
      { "key" : "u11eB", "name" : "Balanced Search Trees (Paper)",        "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966819" },
    ],
    "projects" :        [   
      { "key" : "p1", "name" : "Student project",                       "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966794" },
    ],
  },

  "Unit 12" : {
    "link" : "unit12.html",
    "topic" : "Student project",
    "projects" :        [   
      { "key" : "p1", "name" : "Student project",                       "docs" : "", "376" : "https://canvas.jccc.edu/courses/49331/assignments/966794" },
    ],
    "quizzes" :         [
      { "key" : "c4",  "name" : "🧑‍🏫 Check-in (December)",               "376" : "https://canvas.jccc.edu/courses/49331/assignments/966793" },
    ],
    "tech-literacy" :   [   
      { "key" : "u12tl", "name" : "(WIP) Resumes",                      "376" : "https://canvas.jccc.edu/courses/49331/assignments/966759" },
    ],
  },

  "TEMPLATE" : {
    "lectures" :        [   
      { "name" : "", "url" : "" },
      { "name" : "", "url" : "" },
    ],
    "reading" :         [   
      { "name" : "", "url" : "" },
      { "name" : "", "url" : "" },
    ],
    "archives" :        [   
      { "name" : "", "url" : "" },
    ],
    "exercises" :       [   
      { "key" : "", "name" : "", "docs" : "", "376" : "" },
      { "key" : "", "name" : "", "docs" : "", "376" : "" },
    ],
    "quizzes" :         [   
      { "key" : "", "name" : "", "376" : "" },
      { "key" : "", "name" : "", "376" : "" },
    ],
    "tech-literacy" :   [   
      { "key" : "", "name" : "", "docs" : "", "376" : "" },
    ],
    "projects" :        [   
      { "key" : "", "name" : "", "docs" : "", "376" : "" },
    ],
    "exams" :           [   
      { "key" : "", "name" : "", "url" : "" },
    ]
    },
  };

} );
