Feature: Go to the home
  Display the title

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title

  Scenario: Default User is "lasellers"
    Given I am on the home page
    When I do nothing
    Then I should see the user "lasellers"

  Scenario: Default User is "lasellers"
    Given I am on the home page
    When I clear the user field
    When I fill out the user field with "test"
    Then I should see the user "test"
