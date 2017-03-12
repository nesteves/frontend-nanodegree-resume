var bio = {
  "name": "Nuno Esteves",
  "role": "Software Developer",
  "contacts": {
    "email": "nuno@email.com",
    "twitter": "@nunoesteves",
    "github": "nesteves",
  },
  "pictureURL": "images/me.jpg",
  "welcomeMessage": "Welcome to my javascript generated resumé.",
  "skills": ["HTML", "CSS", "javascript", "JQuery", "d3", "Ruby",
             "Ruby on Rails", "RSpec", "Capistrano", "Python", "MySQL",
             "PostgreSQL"]
};

var education = {
  "schools": [
    {
      "name": "Faculdade de Engenharia da Universidade do Porto.",
      "city": "Porto, Portugal",
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
      "dates": 2014,
      "url": "https://www.edx.org/course/introduction-computational-thinking-data-mitx-6-00-2x-5",
    },
    {
      "title": "Introduction to Computer Science and Programming using Python",
      "school": "edX",
      "dates": 2014,
      "url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-9",
    },
  ]
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
      "location": "Porto, Portugal",
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

var projects = [
  {
    "title": "Personal blog",
    "description": "A small blog built on Jekyll and hosted in github pages.",
    "dates": 2017,
  },
  {
    "title": "A New Project",
    "description": "An awesome project that will blow your mind right off its " +
                   "handles!",
    "dates": 2017,
  }
];
projects.display = function() {
  for (var i = 0; i < this.length; i++) {
    $("#projects").append(HTMLprojectStart);
    
    formattedProject = HTMLprojectTitle.replace("%data%", this[i].title) +
      HTMLprojectDates.replace("%data%", this[i].dates) +
      HTMLprojectDescription.replace("%data%", this[i].description);
    
    $(".project-entry:last").append(formattedProject);
  }
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").prepend(formattedRole)
  .prepend(formattedName);

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

work.display();
projects.display();

$("#main").append(internationalizeButton);
