/**
 * Test for getting started with Selenium.
 */
"use strict";



const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = webdriver.By;

let browser;


// Does not work with WSL!! Use cygwin



// Test suite
test.describe("Me-Vue", function() {
    test.beforeEach(function(done) {
        this.timeout(10000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://localhost:8082/");
        done();
    });

    test.afterEach(function(done) {
        this.timeout(0);
        browser.quit();
        done();
    });


    function goToNavLink(target) {
        browser.findElement(By.linkText(target)).then(function(element) {
            element.click();
        });
    }

    function matchUrl(target) {
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("/#" + target));
        });
    }

    function assertH1(target) {
        browser.findElement(By.css("h1")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, target);
            });
        });
    }


    //Test cases
    test.it("Test index", function(done) {
        this.timeout(20000);
        browser.sleep(1000);

        browser.getTitle().then(function(title) {
            assert.equal(title, "me-vue");
        });

        assertH1("Me");
        matchUrl("/");

        done();
    });


    test.it("Test go to kmom1-kmom6", function(done) {
        this.timeout(20000);
        browser.sleep(1000);
        goToNavLink("kmom1");
        assertH1("Kmom1");
        matchUrl("/reports/week/1");
        browser.sleep(1000);
        goToNavLink("kmom2");
        assertH1("Kmom2");
        matchUrl("/reports/week/2");
        browser.sleep(1000);
        goToNavLink("kmom3");
        assertH1("Kmom3");
        matchUrl("/reports/week/3");
        browser.sleep(1000);
        goToNavLink("kmom4");
        assertH1("Kmom4");
        matchUrl("/reports/week/4");
        browser.sleep(1000);
        goToNavLink("kmom5");
        assertH1("Kmom5");
        matchUrl("/reports/week/5");
        browser.sleep(1000);
        goToNavLink("kmom6");
        assertH1("Kmom6");
        matchUrl("/reports/week/6");
        browser.sleep(1000);

        done();
    });


    test.it("Test login and edit week 6", function(done) {
        this.timeout(20000);
        goToNavLink("Login");
        assertH1("Login");
        matchUrl("/login");
        browser.sleep(1000);
        browser.findElement(By.id("email-field")).sendKeys("Jonas@Testsson.se");
        browser.sleep(1000);
        browser.findElement(By.id("password-field")).sendKeys("HEJsan123");
        browser.sleep(1000);
        browser.findElement(By.id("login-button")).click();
        browser.sleep(1000);
        goToNavLink("Editera");
        browser.sleep(1000);
        browser.findElement(By.id("week-field")).click();
        browser.sleep(1000);
        browser.findElement(By.xpath('//option[text()="Kmom6"]')).click();
        browser.sleep(1000);
        browser.findElement(By.id("report-field")).sendKeys(webdriver.Key
            .chord(webdriver.Key.CONTROL, "a"));
        browser.sleep(1000);
        browser.findElement(By.id("report-field")).sendKeys("<p>Ny testrapport för vecka 6.</p>");
        browser.sleep(1000);
        browser.findElement(By.id("submit")).click();
        browser.sleep(1000);

        done();
    });
});
