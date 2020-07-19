Feature: Go to the home
  Display the title

  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title

  Scenario: Default login is "lasellers"
    Given I am on the home page
    When I do nothing
    Then I should see the login field has "lasellers"

  Scenario: Default Filter String is blank
    Given I am on the home page
    Then I should see the filter field is blank

  Scenario Outline: Fill login input with "<login>"
    Given I am on the home page
    When I clear the login field
    When I fill out the login field with "<login>"
    Then I should see the login field has "<login>"

    Examples:
      | login |
      | lasellers |
      | test      |
      | Han055    |

  Scenario Outline: Change User to "<login>" AKA "<name>"
    Given I am on the home page
    When I clear the login field
    When I fill out the login field with "<login>"
    When Click User
    Then I should see the login field has "<login>"
    Then I should see the detail login is "<login>"
    Then I should see the detail photo name is "<name>"
    Then I should see the detail name is "<name>"
    Then I should see the detail id is "<id>"
    Then I should see the detail company is "<company>"

    Examples:
      | login | name | id | company |
      | lasellers | Lewis A. Sellers |  2235644 | Intrafoundation Software  |
      | Hanzo55    | Shawn Holmes     | 816391  |                           |

