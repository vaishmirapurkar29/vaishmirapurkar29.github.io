var bio = {
    "name": "Vaishanavi Mirapurkar",
    "role": "Front-end Web Developer",
    "contacts": {
        "email": "vaishanavi.mirapurkar@gmail.com",
        "phone": "+1(682)-225-9764",
        "github": "vaishmirapurkar29",
        "LinkedIn": "https://www.linkedin.com/in/vaishmirapurkar",
        "location": "400 S. Oak St. Arlington, TX, USA"
    },
    "skills": ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    "welcomeMessage": "Welcome to my Resume!",
    "biopic": "images/mypic.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);


    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);




    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
    $("#topContacts,#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts,#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts,#footerContacts").append(formattedGithub);

    var formattedLinkedIn = HTMLLinkedIn.split("%data%").join(bio.contacts.LinkedIn);
    $("#topContacts,#footerContacts").append(formattedLinkedIn);


    var formmattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formmattedWelcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);



    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var x = 0; x < bio.skills.length; x++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[x]);
            $("#skills").append(formattedSkills);

        }
    }

};




var work = {
    "jobs": [{
            "employer": "University of Texas at Arlington",
            "title": "Resident Assistant",
            "location": "Arlington, TX",
            "dates": "2016-future",
            "description": "Develop a sense of community among the residents. Facilitate social, economic, and personal adjustment and well-being of residents to university life.Enforce the rules and policies of residence life and housing, and responsible for good conduct in the residential area.Serve as a positive role-model for the residents and peer staff members."

        },

        {
            "employer": "University of Texas at Arlington",
            "title": "Peer Leader",
            "location": "Arlington, TX",
            "dates": "August, 2016-December, 2016",
            "description": "Assist with class activities and teaching with lead instructor.Help freshmen students by serving as a resource and answering their questions.Develop a positive relationship with students. Share a love for UT Arlington and encourage campus involvement."

        },

        {
            "employer": "University of Texas at Arlington",
            "title": "Research Assistant",
            "location": "Arlington, TX",
            "dates": "May, 2016-August, 2016",
            "description": "Conduct research on system-assigned recognition-based passwords as an alternative to user-chosen passwords for better security.Conduct research on the use of various cues (graphical, spatial etc.) to boost password memorability.Devise an authentication system based on system-assigned passwords for users with learning disabilities."

        }


    ]

};

work.display = function() { //or function displayWork(){}
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);


        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

        var concat = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(concat);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);

    });
};



var projects = {
    "projects": [{
            "title": "My Responsive Blog",
            "dates": "2016",
            "description": "Front-end of a responsive web blog developed using HTML5, CSS3, and responsive images.",
            "url": "https://github.com/vaishmirapurkar29/Responsive-Web-Blog",
            "images": ["images/responsiveBlog2.png"]

        },

        {
            "title": "FEND responsive website ",
            "dates": "2016",
            "description": "Front-end of a responsive website developed using HTML5, CSS3, Bootstrap and responsive images.",
            "images": ["images/portfolio.png"]

        },



        {
            "title": "University Bazaar System",
            "dates": "2016",
            "description": "An Android application with multiple functions to facilitate easy networking between the students of UT Arlington",
            "images": []
        }
    ]

};

projects.display = function() {
    projects.projects.forEach(function(proj) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", proj.title);
        $(".project-entry:last").append(formattedTitle);



        var formattedDate = HTMLprojectDates.replace("%data%", proj.dates);
        $(".project-entry:last").append(formattedDate);


        var formattedDescription = HTMLprojectDescription.replace("%data%", proj.description);
        $(".project-entry:last").append(formattedDescription);



        if (proj.images.length > 0) {
            for (var i = 0; i < proj.images.length; i++) {
                var formattedImage = HTMLprojectImage.replace("%data%", proj.images[i]);
                $(".project-entry:last").append(formattedImage);


            }
        }


    });
};


var education = {
    "schools": [{
            "name": "University of Texas at Arlington",
            "degree": "Bachelor of Science",
            "location": "Arlington,TX",
            "dates": "2014 - 2018",
            "majors": ["Software Engineering"],
            "GPA": 3.963,
            "url": "http://www.uta.edu/uta/"

        }

    ],


    "onlineCourses": [{
        "title": "Front-end Web Development",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/nanodegree"

    }]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);

    education.schools.forEach(function(school) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry:last").append(formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedSchoolDates);


        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedSchoolLocation);

        for (var m = 0; m < school.majors.length; m++) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors[m]);
            $(".education-entry:last").append(formattedSchoolMajor);

        }

        var formattedSchoolGPA = HTMLschoolGPA.replace("%data%", school.GPA);
        $(".education-entry:last").append(formattedSchoolGPA);


    });
    $(".education-entry:last").append(HTMLonlineClasses);



    education.onlineCourses.forEach(function(course) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
        $(".education-entry").append(formattedTitle);

        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        $(".education-entry").append(formattedSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        $(".education-entry").append(formattedDates);

    });

};



//for collecting clicks
$(document).click(function(loc) {
    var x, y;
    x = loc.pageX;
    y = loc.pageY;
    logClicks(x, y);

});



//to internationalize
function inName(string) {
    var name = string;
    var array = name.trim().split(" ");
    name = array[0][0].toUpperCase() + array[0].slice(1).toLowerCase() + " " + array[1].toUpperCase();

    return name;

}
//function calls

bio.display();
work.display();
projects.display();
education.display();


$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap); //for the interactive map
