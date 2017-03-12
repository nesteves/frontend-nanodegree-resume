var bio = {
  "name": "Nuno Esteves",
  "role": "Software Developer",
  "contacts": {
    "location": "Lisbon, Portugal",
    "email": "nuno@email.com",
    "twitter": "@nunoesteves",
    "github": "nesteves",
  },
  "pictureURL": "images/me.jpg",
  "welcomeMessage": "Welcome to my javascript generated resumé.",
  "skills": ["HTML", "CSS", "javascript", "JQuery", "d3", "Ruby",
             "Ruby on Rails", "RSpec"],
  "display": function() {
    
    var formattedName = HTMLheaderName.replace("%data%", this.name),
      formattedRole = HTMLheaderRole.replace("%data%", this.role),
      formattedPhoto = HTMLbioPic.replace("%data%", this.pictureURL),
      formattedEmail = HTMLemail.replace("%data%", this.contacts.email),
      formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter),
      formattedGithub = HTMLgithub.replace("%data%", this.contacts.github),
      formattedPicture = HTMLbioPic.replace("%data%", this.pictureURL),
      formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

    $("#header").prepend(formattedRole)
      .prepend(formattedName);

    $("#header").append(formattedPhoto);

    $("#topContacts").append(formattedEmail)
      .append(formattedTwitter)
      .append(formattedGithub);

    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
  
      for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
      }
    }
  },
};

var work = {
  "jobs": [
    {
      "employer": "INESC Porto",
      "title": "Junior Researcher",
      "location": "Porto, Portugal",
      "dates": "2012 - 2013",
      "description": "Build an application leveraging Excel, VBA, R and SQL Server that " +
                     "received a forecast of weekly sales, deagregatted it by store-sku " +
                     "and determined replenishment quantities down to the item size.",
    },
    {
      "employer": "Sonae SDSR",
      "title": "Supply Chain Analyst",
      "location": "Maia, Portugal",
      "dates": "2014 - 2016",
      "description": "Development and maintenance of supply chain reporting applications " +
                     "based in MS Access, Pentaho Kettle and MS Excel. Perform ad hoc " +
                     "analysis on supply chain data. Provide support for development projects " +
                     "targeting the supply chain.",
    },
  ],
  "display": function() {
    for (var i = 0; i < this.jobs.length; i++) {
      $("#workExperience").append(HTMLworkStart);
   
      formattedWork = HTMLworkEmployer.replace("%data%", this.jobs[i].employer) +
        HTMLworkTitle.replace("%data%", this.jobs[i].title) +
        HTMLworkDates.replace("%data%", this.jobs[i].dates) +
        HTMLworkLocation.replace("%data%", this.jobs[i].location) +
        HTMLworkDescription.replace("%data%", this.jobs[i].description);

      $(".work-entry:last").append(formattedWork);
    }
  }
};

var projects = {
  "projects": [
    {
      "title": "Personal blog",
      "description": "A small blog built on Jekyll and hosted in github pages.",
      "dates": 2017,
      "images": [],
    },
    {
      "title": "A New Project",
      "description": "An awesome project that will blow your mind right off its " +
                     "handles!",
      "dates": 2017,
      "images": [],
    }
  ],
  "display": function() {
    for (var i = 0; i < this.length; i++) {
      $("#projects").append(HTMLprojectStart);
    
      formattedProject = HTMLprojectTitle.replace("%data%", this[i].title) +
        HTMLprojectDates.replace("%data%", this[i].dates) +
        HTMLprojectDescription.replace("%data%", this[i].description);
    
      $(".project-entry:last").append(formattedProject);
    
      if (this[i].images.length > 0) {
        for (var j = 0; i < this[i].images.length; j++) {
          formattedImage = HTMLprojectImage.replace("%data%", this[i].images[j]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  },
};

var education = {
  "schools": [
    {
      "name": "Faculdade de Engenharia da Universidade do Porto.",
      "location": "Porto, Portugal",
      "degree": "Integrated Masters in Idustrial Engineering and Management",
      "dates": "2005 - 2012",
      "url": "https://sigarra.up.pt/feup/en/cur_geral.cur_view?pv_curso_id=725",
      "majors": [],
    },
  ],
  "onlineCourses": [
    {
      "title": "Machine Learning",
      "school": "Coursera",
      "dates": 2013,
      "url": "https://www.coursera.org/learn/machine-learning",
    },
    {
      "title": "Introduction to Computational Thinking and Data Science",
      "school": "edX",
      "dates": "Dec 2014",
      "url": "https://www.edx.org/course/introduction-computational-thinking-data-mitx-6-00-2x-5",
    },
    {
      "title": "Introduction to Computer Science and Programming using Python",
      "school": "edX",
      "dates": "Oct 2014",
      "url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-9",
    },
  ],
  "display": function() {
    for (var i = 0; i < this.schools.length; i++) {
      $("#education").append(HTMLschoolStart);
      
      formattedEducation = HTMLschoolName.replace("%data%", this.schools[i].name).replace("#", this.schools[i].url) +
        HTMLschoolDegree.replace("%data%", this.schools[i].degree) +
        HTMLschoolDates.replace("%data%", this.schools[i].dates) +
        HTMLschoolLocation.replace("%data%", this.schools[i].location);

      $(".education-entry:last").append(formattedEducation);
    }
    
    $("#education").append(HTMLonlineClasses);

    for (var i = 0; i < this.onlineCourses.length; i++) {
      $("#education").append(HTMLschoolStart);

      formattedOnlineEducation = HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title) +
        HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school) +
        HTMLonlineDates.replace("%data%", this.onlineCourses[i].dates) +
        HTMLonlineURL.replace("%data%", this.onlineCourses[i].url);

      $(".education-entry:last").append(formattedOnlineEducation);
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
