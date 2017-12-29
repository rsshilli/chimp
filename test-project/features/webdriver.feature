Feature: Use driver inside steps

  In order to focus on writing ui based acceptance tests
  As a developer
  I want a configured web-based driver available to me in my steps

  Scenario: Driver is available in Cucumber.js steps
    When  I use the driver to navigate to a site like http://xolv.io
    Then  I see assert on things like it's title like Xolv.io
