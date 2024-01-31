## About TOOLSHOP :
TOOLSHOP is a software testing application,  
Created by Roy De Kleijn

### Test Cases:
1. regitration 
2. login
3. logout
4. add item
5. search item
6. filter items
7. checkout

### Scenarios :
1. registration and login 
2. search items and add it  
3. filter items and add second item 
4. checkout
5. logout

### Report HTML:


### Technology used:
1. Cypress

### Tests execution:
1. Run the tests
    npx cypress open
    npx cypress run

2. Run only one test
    npx cypress run --spec test-file

3. Specify the browser to use
    npx cypress run --browser chrome