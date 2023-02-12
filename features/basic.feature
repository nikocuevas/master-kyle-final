Feature: Demo Project - Login
  In order to order products
  As a person
  I want to be able to login

  Scenario: Login as Standard User
    Given I use credentials as standard user
    When I try to login
    Then I should be able to login

  Scenario: Login as Locked Out User
    Given I user credentials as locked out user
    When I try to login
    Then I should not be able to login

  Scenario: Login as Problem User
    Given I use credentials as as problem user
    When I try to login
    Then I should be able to login