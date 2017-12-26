There are many many many testing related NPM packages out there. This table provides an insight into what each package does.

Note: Anything that is marked `?` is still being filled out. 

| Concept                   | Meaning    |
| ---                       | ---     |
| **Test Runner**           | Allows you to run tests from the CLI or programmatically through an API. Test runners provide may provide plugins like xUnit and json reporters, test coverage plugins and more. |
| **Test Framework**        | Provides with an interface to write tests in provides test lifecycle features such 'beforeEach' and 'afterAll' hooks, and may include other general features like snapshot testing. |
| **UI Access API**         | Allows you to traverse, interact with and manipulate a user interface. With these abilities you can find elements you're interested in, interact with them like clicking and typing, and even manipulate them so that you can setup test conditions. |
| **Assertion Library**     | Used to verify if the outcome of a test is as expected. These libraries can be as simple as true/false assertions and can get advanced with custom matchers that assert on complex scenarios. |
| **Test Double Library**   | Creates test doubles such as mocks, spies, fakes and stubs to allow you to isolate and control a system under test. |
| **Remote Server**         | A server that allows you to create remote instances of browsers and mobile devices. Such servers often support grids where you can have multiple browsers and devices that may be too cumbersome and resource hungry to setup for local development. There are options such as SauceLabs, BrowserStack and others that provide this functionality as a service in the cloud. |
| **Platform**              | The platform that the module is intended for. This can be "Server Only", "Web Only", Mobile Only", "Web & Mobile" or "All". It is possible to have more, such as API, Speech UI or VR, but these platforms are out of scope for this data table. |


|                                          | Test Runner | Test Framework                           | UI Testing API                   | Assertion Library       | Test Double Library      | Remote Server | Platform     | Notes                              |
| ---                                      | :---:       | :---:                                    | :---:                            | :---:                   | :---:                    | :---:         | :---:        | :---                               |
| **[Chimp 2.0](goo.gl/rtYaby)**           |             |                                          | ✓                                |                         |                          |               | Web & Mobile |                                    |
| **[WebdriverIO](goo.gl/EtpVjD)**         |             |                                          | ✓ <br/>*Webdriver protocol*</br> |                         |                          |               | Web & Mobile |                                    |
| **[WD.js](goo.gl/tVLxwh)**               |             |                                          | ✓ <br/>*Webdriver protocol*</br> |                         |                          |               | Web & Mobile |                                    |
| **[Selenium-Webdriver](goo.gl/mtJ4XX)**  |             |                                          | ✓ <br/>*Webdriver protocol*</br> |                         |                          |               | Web & Mobile |                                    |
| **[Chromeless](goo.gl/T41J83)**          | ?           | ?                                        | ?                                | ?                       | ?                        |               | Web Only     |                                    |
| **[Puppeteer](goo.gl/3E4b1y)**           | ?           | ?                                        | ✓                                | ?                       | ?                        |               | Web Only     |                                    |
||                                         
| **[Chimp](goo.gl/5oenwf)**               | ✓           | ✓ <br/>*Mocha, Jasmine or Cucumber*</br> | ✓ <br/>*WebdriverIO*</br>        |                         |                          |               | Web & Mobile | Uses fibers                        |
| **[WDIO](goo.gl/qBqoKs)**                | ✓           | ✓ <br/>*Mocha, Jasmine or Cucumber*</br> | ✓ <br/>*WebdriverIO*</br>        |                         |                          |               | Web & Mobile | Uses fibers                        |
| **[NightwatchJS](goo.gl/WnQxtu)**        | ✓           | ✓                                        | ✓ <br/>*Webdriver protocol*</br> | ✓ <br/>*uses Chai*</br> |                          |               | Server & Web |                                    |
| **[Protractor](goo.gl/fqYUJx)**          | ✓           | ✓ <br/>*Mocha, Jasmine or Custom*</br>   | ✓ <br/>*Webdriver protocol*</br> | ✓                       |                          |               | Web Only     | Angular only                       |
| **[Cypress](goo.gl/sHh1CW)**             | ✓           | ✓ <br/>*uses Mocha*</br>                 | ✓                                | ✓ <br/>*uses Chai*</br> | ✓ <br/>*uses Sinon*</br> | ✓             | Web Only     | Chrome based browsers only for now |
||
| **[Karma](goo.gl/nKJqB7)**               | ✓           |                                          |                                  |                         |                          | ✓             | Web & Mobile |                                    |
||
| **[Jest](goo.gl/6jCk68)**                | ✓           | ✓                                        |                                  | ✓                       | ✓                        |               | All          |                                    |
| **[Mocha](goo.gl/piuECZ)**               | ✓           | ✓                                        |                                  |                         |                          |               | All          |                                    |
| **[Jasmine](goo.gl/jKdDa4)**             | ✓           | ✓                                        |                                  | ✓                       | ✓                        |               | All          |                                    |
| **[CucumberJS](goo.gl/B1wQrf)**          | ✓           | ✓                                        |                                  |                         |                          |               | All          |                                    |
| **[AVA](goo.gl/utYh23)**                 | ✓           | ✓                                        |                                  |                         |                          |               | All          |                                    |
| **[TAP](goo.gl/ht727A)**                 | ✓           | ✓                                        | ?                                | ✓                       | ?                        |               | ?            |                                    |
| **[TAPE](goo.gl/ToSZEW)**                | ✓           | ✓ <br/>*TAP based*</br>                  | ?                                | ?                       | ?                        |               | ?            |                                    |
| **[QUnit](goo.gl/oq7TBy)**               | ?           | ?                                        | ?                                | ?                       | ?                        | ?             | ?            |                                    |
||
| **[CasperJS](goo.gl/UwQVVh)**            | ✓           | ?                                        | ✓                                | ✓                       |                          |               | Server & Web | PhantomJS / SlimerJS only          |
||
| **[Unexpected](goo.gl/dMGZxj)**          |             |                                          |                                  | ✓                       |                          |               | All          |                                    |
| **[Expect](goo.gl/vsNqJh)**              |             |                                          |                                  | ✓                       |                          |               | All          |                                    |
| **[Chai](goo.gl/1dbdjp)**                |             |                                          |                                  | ✓                       |                          |               | All          |                                    |
||
| **[NightmareJS](goo.gl/o3qj73)**         | ?           | ?                                        | ?                                | ?                       | ?                        |               | ?            |                                    |
| **[TestCafe](goo.gl/TyM6iz)**            | ?           | ?                                        | ?                                | ?                       | ?                        |               | ?            |                                    |
| **[CodeceptJS](goo.gl/oc9uoX)**          | ?           | ?                                        | ?                                | ?                       | ?                        |               | ?            |                                    |
| **[Enzyme](goo.gl/3Hnkz3)**              | ?           | ?                                        | ?                                | ?                       | ?                        |               | Web & Mobile |                                    |
| **[Detox](goo.gl/rmgnjM)**               | ?           | ?                                        | ?                                | ?                       | ?                        |               | Mobile Only  |                                    |
| **[Cheerio](goo.gl/RNvd6U)**             | ?           | ?                                        | ?                                | ?                       | ?                        |               | Web Only     |                                    |
| **[jQuery](goo.gl/VJfM3y)**              | ?           | ?                                        | ?                                | ?                       | ?                        |               | Web Only     |                                    |
| **[Sinon](goo.gl/ex5RY2)**               | ?           | ?                                        | ?                                | ?                       | ?                        | ?             | ?            |                                    |
| **[Nemo.js](goo.gl/Ehi5PK)**             | ?           | ?                                        | ?                                | ?                       | ?                        | ?             | ?            |                                    |
| **[Nock](goo.gl/TyoSq4)**                | ?           | ?                                        | ?                                | ?                       | ?                        | ?             | ?            |                                    |
| **[Istanbul](goo.gl/PsmMzv)**            | ?           | ?                                        | ?                                | ?                       | ?                        | ?             | ?            |                                    |
| **[Appium](goo.gl/yvBRuj)**              | ?           | ?                                        | ?                                | ?                       | ?                        | ?             | Mobile Only  |                                    |
| **[SerenityJs](goo.gl/Qe1j59)**          | ?           | ?                                        | ?                                | ?                       | ?                        | ?             | ?            |                                    |


.

.

.


medium.com/powtoon-engineering/a-complete-guide-to-testing-javascript-in-2017-a217b4cd5a2a

docs.google.com/spreadsheets/d/17UAmGGOetuccWwJHKKVd3E_eMiOwUAMzTYRAp3s3b9w/edit#gid=0