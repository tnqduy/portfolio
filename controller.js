app.controller("controller", function ($scope) {
  $scope.personal = {
    name: "Duy Tran",
    title: "Game Developer",
    facebook: "https://www.facebook.com/duytr.22/",
    email: "tnqduy@gmail.com",
    phone: "+84 367649934",
    skype: "ak.duy",
  };
  $scope.career = getCareerData();
  $scope.skills = getSkillsData();
  $scope.portfolio = getPortfolioData();
});

function getPortfolioData() {
  var pRegisterRace = {
    icon: "images/port_registerace_01.png",
    background: "images/port_registerace_01.png",
    storeLink: "#",
    title: "Register Race",
    content: "test",
  };
  return [pRegisterRace];
}

function getCareerData() {
  var cGraduate = {
    date: "03/17",
    content: "graduated from university",
  };

  var cAppsCyclone = {
    date: "06/17",
    content: "Apps Cyclone CO.LTD",
  };

  var cEyeclick = {
    date: "09/18",
    content: "Eyeclick CO.LTD",
  };

  var cGoodia = {
    date: "03/20",
    content: "Goodia Inc.",
  };
  var cGoodia1 = {
    date: "03/20",
    content: "Goodia Inc.",
  };

  var cGoodia2 = {
    date: "03/20",
    content: "Goodia Inc.",
  };
  return [cGraduate, cAppsCyclone, cEyeclick, cGoodia];
}

function getSkillsData() {
  return [
    "Major language: C#",
    "Major engine: Unity",
    "Major types of games: 2D / 3D casual, rpg ",
    "Strong about SE principles: OOP, SOLID, Design patterns",
    "Strong about C# elements: LinQ, Generics, Callbacks (delegates, action, func, predicate), etc",
    "Strong about Unity elements: 2D, 3D graphics, particle systems, physics, materials, shader, UGUI, NGUI, environment lighting, animations, etc",
    "Strong about game optimization: game fps, game build size, in-game memory caching.",
    "Having experienced in integrating third-party plugins: Firebase, Ads, Facebook sdk",
    "Having experienced in integrating popular algorithm to projects: DFS, Path finding, etc",
    "Having experienced in creating coding modules for reusing, team collaborating, improving the production progress",
    "Having experienced in using task management tools: Jira, Trello",
    "Having experienced in using source control tools: Bitbucket, Github.",
    "Having researched about new Unity techinques: DOTS (Jobs system, Burst compiler, ECS)",
    "Confident in English Verbal",
  ];
}
