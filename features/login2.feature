Feature: Demo Project - Login2
  In order to order products
  As a person
  I want to be able to login

  Scenario: Login as Standard User2
    Given I use credentials as standard user
    When I try to login
    Then I should be able to login

  Scenario: Login as Locked Out User2
    Given I user credentials as locked out user
    When I try to login
    Then I should not be able to login

  Scenario: Login as Problem User2
    Given I use credentials as as problem user
    When I try to login
    Then I should be able to login