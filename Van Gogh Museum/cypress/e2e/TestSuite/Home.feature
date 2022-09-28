Feature:End to End testing of  Van Gogh Museum website

    Testing functionalities of Van Gogh Museum.

    Scenario: Verify that user gets in to the collection page after clicking on -> Ontdek de collectie
    Given user is on home page
    When user clicks on Ontdek de collectie
    Then verifying user is on collection page 


    Scenario: Verify that search reult for Het Gele Huis is more than 700 results

    Given user is on collection search page
    When user enter Het Gele Huis in to search filed and clicks on search button
    Then verifying that search reult for Het Gele Huis is more than 700 results or not


    Scenario: Verify the details of painting selected from search list of Het Gele Huis

    Given user is on collection search page
    When user enter Het Gele Huis in to search filed and clicks on search button
    Then user selects first item from search list 
    Then user is on paintig details page and then clicks on Objectgegevens
    Then user verying deatils of selected painting from from search list of Het Gele Huis