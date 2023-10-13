var express = require("express");
var router = express.Router();

/* GET projects listing. */
router.get("/", function (req, res, next) {
  // projects data object
  res.render("projects", {
    projects: [
      {
        projectName: "Weather Application",
        projectDescription:
          "A web-app based on Express and React which have beautiful graphis to show weather.",
        projectImage: "/images/laptop-g07bca914f_1280.png",
      },
      {
        projectName: "ToDo Web app",
        projectDescription:
          "A web-app based on Express and React which stores the tasks you have todo.",
        projectImage: "/images/laptop-g07bca914f_1280.png",
      },
      {
        projectName: "Shopping Website",
        projectDescription:
          "Build with node and react with a fully scalable architecture and customizable dashboard.",
        projectImage: "/images/laptop-g07bca914f_1280.png",
      },
    ],
  });
});

module.exports = router;
