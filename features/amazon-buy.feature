Feature: User start process on Amazon List
  As a User
  I want to add an item to my Amazon list
  So that I can start process to buy that item at the Amazon store

  Scenario: Item added to Amazon list
    Given I visit amazon in the offer section
    When I add the first item to the list
    Then The Amazon list contains a single item
    Then I should able to start process to buy the Amazon list  