// features/support/steps.js
const { AfterAll, BeforeAll, Given, When, Then } = require('cucumber')
const { expect } = require('chai')
// var assert = require('assert');

let OfferPage = require('../pages/offer-page.js');
let offerPage = new OfferPage()
// offerpage.browser = this.driver

// Given with PageObject pattern
Given(/^I visit amazon in the offer section$/, function(callback) {
  offerPage.go(this) // I pass the context here, maybe cucumber have another to config this
  .then(callback)
});

// We could follow applying the same PO pattern
// it could use {string} to pass data from feature file
When(/^I add the first item to the list$/, function(callback) {   // return promise or callback
  let {driver, By, until} = this
  //return 
  driver 
  .then(_ => driver.wait(until.titleIs(offerPage.tittle), 4000)) // ofertas amazon
  .then(_ => driver.findElement(By.xpath('//div//span[@data-action="gbdeal-addtocart"]//button')).click()) // add specfic [@id="100_dealView_0"]
  .then(callback)
});

Then(/^The Amazon list contains a single item$/, function() {
  let {driver, By, until} = this
  driver
  .then(_ => driver.wait(until.titleIs('Cesta de compra Amazon.es'), 1000)) //cesta page
  .then(_ => driver.findElement(By.xpath('//span[@id="nav-cart-count"]')).getText() )
  .then( data => {
    expect(data).to.eql('1')
  }) 
});

Then(/^I should able to start process to buy the Amazon list$/, function() {
  let {driver, By, until} = this
  driver  
  .then(_ => driver.findElement(By.xpath('//*[@id="nav-cart"]')).click()) //ir a cesta
  .then(_ => driver.wait(until.titleIs('Cesta de compra Amazon.es'), 1000)) //cesta page
  .then(_ => driver.findElement(By.xpath('//*[@id="sc-buy-box-ptc-button"]/span/input')).click())
  .then(_ => driver.wait(until.titleIs('Iniciar sesión en Amazon'), 1000))
  .then(_ => driver.quit())  
});

