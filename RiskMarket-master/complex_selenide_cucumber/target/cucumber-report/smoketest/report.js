$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("smoketest#1.feature");
formatter.feature({
  "line": 2,
  "name": "smoke test #1, go through the service to button \"Купить\"",
  "description": "",
  "id": "smoke-test-#1,-go-through-the-service-to-button-\"купить\"",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoketest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "go through the service to button \"Купить\"",
  "description": "",
  "id": "smoke-test-#1,-go-through-the-service-to-button-\"купить\";go-through-the-service-to-button-\"купить\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#actions at first page"
    }
  ],
  "line": 7,
  "name": "open riskmarket.ru",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "check that element with name \"Вход в кабинет\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "press button with text \"Вход в кабинет\" on \"первая страница\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "type to input with name \"Логин\" text: \"riskmarket.testoviy2016@yandex.ru\" on \"первая страница\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "type to input with name \"Пароль\" text: \"l0dcfJMB\" on \"первая страница\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "press button with text \"Войти\" on \"первая страница\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "wait until login frame disappears",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select countries: Шенген, Финляндия, Китай",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "specify dates of journey, any available dates",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "specify birthday of tourists: 08.12.1945",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "press button with text \"Рассчитать полис\" on \"первая страница\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#actions at second page"
    }
  ],
  "line": 19,
  "name": "spinner should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "wait until spinner disappears",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "collection of \"Результаты поиска\" should not be empty",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.openRiskmarketRu()"
});
formatter.result({
  "duration": 7434295677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Вход в кабинет",
      "offset": 30
    }
  ],
  "location": "MyStepdefs.checkThatElementWithNameIsDisplayed(String)"
});
formatter.result({
  "duration": 11803127519,
  "error_message": "Element not found {By.xpath: //button[.\u003d\u0027Вход в кабинет\u0027]}\nExpected: visible\nScreenshot: file:/C:/Users/Konstantin/IdeaProjects/mavenSeleniumCucmber/RiskMarket-master/complex_selenide_cucumber/build/reports/tests/1500821326147.0.png\nTimeout: 10 s.\nCaused by: NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[.\u003d\u0027Вход в кабинет\u0027]\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:59)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:136)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:82)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:58)\r\n\tat com.sun.proxy.$Proxy17.shouldBe(Unknown Source)\r\n\tat ru.riskmarket.steps.MyStepdefs.checkThatElementWithNameIsDisplayed(MyStepdefs.java:140)\r\n\tat ✽.And check that element with name \"Вход в кабинет\" is displayed(smoketest#1.feature:8)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[.\u003d\u0027Вход в кабинет\u0027]\"}\nCommand duration or timeout: 11 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027MSI\u0027, ip: \u0027192.168.1.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, pageLoadStrategy\u003dnone, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d40.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, pageLoadingStrategy\u003dnone, cssSelectorsEnabled\u003dtrue}]\nSession ID: e5497cf5-28f4-4592-b8ad-104fe07cd1e7\n*** Element info: {Using\u003dxpath, value\u003d//button[.\u003d\u0027Вход в кабинет\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor14.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:44)\r\n\tat com.codeborne.selenide.commands.Should.should(Should.java:35)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:29)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:12)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:136)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:82)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:58)\r\n\tat com.sun.proxy.$Proxy17.shouldBe(Unknown Source)\r\n\tat ru.riskmarket.steps.MyStepdefs.checkThatElementWithNameIsDisplayed(MyStepdefs.java:140)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:53)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:123)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:104)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:164)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:110)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:175)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcessWhenForked(SurefireStarter.java:107)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:68)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[.\u003d\u0027Вход в кабинет\u0027]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027MSI\u0027, ip: \u0027192.168.1.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/KONSTA~1/AppData/Local/Temp/anonymous1750768838867543551webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/KONSTA~1/AppData/Local/Temp/anonymous1750768838867543551webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/KONSTA~1/AppData/Local/Temp/anonymous1750768838867543551webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/KONSTA~1/AppData/Local/Temp/anonymous1750768838867543551webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/KONSTA~1/AppData/Local/Temp/anonymous1750768838867543551webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Вход в кабинет",
      "offset": 24
    },
    {
      "val": "первая страница",
      "offset": 44
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Логин",
      "offset": 25
    },
    {
      "val": "riskmarket.testoviy2016@yandex.ru",
      "offset": 39
    },
    {
      "val": "первая страница",
      "offset": 78
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Пароль",
      "offset": 25
    },
    {
      "val": "l0dcfJMB",
      "offset": 40
    },
    {
      "val": "первая страница",
      "offset": 54
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Войти",
      "offset": 24
    },
    {
      "val": "первая страница",
      "offset": 35
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.waitUntilLoginFrameDisappears()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Шенген, Финляндия, Китай",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.selectCountries(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.specifyDatesOfJourneyDepartureDateTomorrowReturnDateOneWeek()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "08",
      "offset": 30
    },
    {
      "val": "12",
      "offset": 33
    },
    {
      "val": "1945",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.specifyBirthdayOfTourists(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Рассчитать полис",
      "offset": 24
    },
    {
      "val": "первая страница",
      "offset": 46
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.spinnerShouldBeDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.waitUntilSpinnerDisappears()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Результаты поиска",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.collectionOfShouldNotBeEmpty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "go through service to yandex pay-page",
  "description": "",
  "id": "smoke-test-#1,-go-through-the-service-to-button-\"купить\";go-through-service-to-yandex-pay-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "press button with text \"КУПИТЬ\" on \"вторая страница\"",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#actions at third page"
    }
  ],
  "line": 27,
  "name": "type to input with name \"lastName\" text: \"TESTOVIY\" on \"третья страница\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "type to input with name \"firstName\" text: \"TEST\" on \"третья страница\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "press button with text \"Принимаю\" on \"третья страница\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "press element with value \"Оформить\" and it should be enabled",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "press button with text \"Оплатить\" and it should be enabled",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "verify that page with url \"https://money.yandex.ru/cashdesk\" is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "КУПИТЬ",
      "offset": 24
    },
    {
      "val": "вторая страница",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "duration": 11717816216,
  "error_message": "Element not found {By.xpath: .//button[.\u003d\u0027КУПИТЬ\u0027]}\nExpected: visible\nScreenshot: file:/C:/Users/Konstantin/IdeaProjects/mavenSeleniumCucmber/RiskMarket-master/complex_selenide_cucumber/build/reports/tests/1500821337932.1.png\nTimeout: 10 s.\nCaused by: NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//button[.\u003d\u0027КУПИТЬ\u0027]\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:31)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:82)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:59)\r\n\tat com.codeborne.selenide.impl.WebElementSource.findAndAssertElementIsVisible(WebElementSource.java:72)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:14)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:11)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:136)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:82)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:58)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat ru.riskmarket.steps.MyStepdefs.press(MyStepdefs.java:64)\r\n\tat ✽.Given press button with text \"КУПИТЬ\" on \"вторая страница\"(smoketest#1.feature:25)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//button[.\u003d\u0027КУПИТЬ\u0027]\"}\nCommand duration or timeout: 11 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027MSI\u0027, ip: \u0027192.168.1.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, pageLoadStrategy\u003dnone, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d40.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, pageLoadingStrategy\u003dnone, cssSelectorsEnabled\u003dtrue}]\nSession ID: e5497cf5-28f4-4592-b8ad-104fe07cd1e7\n*** Element info: {Using\u003dxpath, value\u003d.//button[.\u003d\u0027КУПИТЬ\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor14.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:28)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:56)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:44)\r\n\tat com.codeborne.selenide.impl.WebElementSource.findAndAssertElementIsVisible(WebElementSource.java:72)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:14)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:11)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:136)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:82)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:58)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat ru.riskmarket.steps.MyStepdefs.press(MyStepdefs.java:64)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:53)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:123)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:104)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:164)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:110)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:175)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcessWhenForked(SurefireStarter.java:107)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:68)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//button[.\u003d\u0027КУПИТЬ\u0027]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027MSI\u0027, ip: \u0027192.168.1.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/KONSTA~1/AppData/Local/Temp/anonymous1750768838867543551webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/KONSTA~1/AppData/Local/Temp/anonymous1750768838867543551webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/KONSTA~1/AppData/Local/Temp/anonymous1750768838867543551webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/KONSTA~1/AppData/Local/Temp/anonymous1750768838867543551webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/KONSTA~1/AppData/Local/Temp/anonymous1750768838867543551webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 25
    },
    {
      "val": "TESTOVIY",
      "offset": 42
    },
    {
      "val": "третья страница",
      "offset": 56
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "firstName",
      "offset": 25
    },
    {
      "val": "TEST",
      "offset": 43
    },
    {
      "val": "третья страница",
      "offset": 53
    }
  ],
  "location": "MyStepdefs.typeToInputWithNameText(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Принимаю",
      "offset": 24
    },
    {
      "val": "третья страница",
      "offset": 38
    }
  ],
  "location": "MyStepdefs.press(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Оформить",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.pressElementWithTextAndItShouldBe(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Оплатить",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.pressButtonWithTextAndItShouldBeEnabled(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://money.yandex.ru/cashdesk",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.verifyThatPageWithUrlIsOpened(String)"
});
formatter.result({
  "status": "skipped"
});
});