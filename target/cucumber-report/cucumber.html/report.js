$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register",
  "description": "",
  "id": "register",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6267929200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should create account successfully",
  "description": "",
  "id": "register;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enters following users details",
  "rows": [
    {
      "cells": [
        "Jay",
        "Vaghani",
        "jay@gmail.com",
        "07878451263",
        "Harrow"
      ],
      "line": 7
    },
    {
      "cells": [
        "Amit",
        "Kathrotiya",
        "amit@gmail.com",
        "07878451285",
        "Luton"
      ],
      "line": 8
    },
    {
      "cells": [
        "Aum",
        "Vaghani",
        "aum@gmail.com",
        "07878454585",
        "Harrow"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "registration successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 172084800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iEntersFollowingUsersDetails(DataTable)"
});
formatter.result({
  "duration": 4770700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.registrationSuccessful()"
});
formatter.result({
  "duration": 24100,
  "status": "passed"
});
formatter.after({
  "duration": 829124700,
  "status": "passed"
});
});