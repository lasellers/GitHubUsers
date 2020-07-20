Feature: Go to the home
  Display the title

  Background:
    Given I am on the home page
    # Given Cache Only is on

  Scenario: Home Page
    When I do nothing
    Then I should see the title

  Scenario: Default login is "lasellers"
    When I do nothing
    Then I should see the login field has "lasellers"

  Scenario: Default Filter String is blank
    Then I should see the filter field is blank

  Scenario Outline: Fill login input with "<login>"
    When I clear the login field
    When I fill out the login field with "<login>"
    Then I should see the login field has "<login>"

    Examples:
      | login     |
      | lasellers |
      | test      |
      | Han055    |

  Scenario Outline: Change User to "<login>" AKA "<name>"
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
      | login     | name             | id      | company                  |
      | lasellers | Lewis A. Sellers | 2235644 | Intrafoundation Software |
      | Hanzo55   | Shawn Holmes     | 816391  |                          |

  Scenario: Gists for "lasellers" is 13
    When I do nothing
    Then I should see "13" gists
    Then I should count "13" gists

  Scenario: Followers for "lasellers" is 11
    When I do nothing
    Then I should count "11" followers

  Scenario: Followings for "lasellers" is 26
    When I do nothing
    Then I should count "26" followings

  Scenario: Change User to "chadwicktdailey" with cache only off
    Given Cache Only is off
    Given I clear user cache for "chadwicktdailey"
    Given I find user "chadwicktdailey" not in cache
    When I clear the login field
    When I fill out the login field with "chadwicktdailey"
    When Click User
    Then I should see the login field has "chadwicktdailey"
    Then I should see the detail login is "chadwicktdailey"

#  Scenario: Change User to "chadwicktdailey" with cache only on
#    Given Cache Only is on
#    Given I find user "chadwicktdailey" in cache
#    When I clear the login field
#    When I fill out the login field with "chadwicktdailey"
#    When Click User
#    Then I should see the login field has "chadwicktdailey"
#    Then I should see the detail login is "chadwicktdailey"
