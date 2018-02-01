// features/support/steps.js
const { AfterAll, BeforeAll, Given, When, Then } = require('cucumber')
const { expect } = require('chai')
// var assert = require('assert');

let {driver, By} = this
let {} = require('../support/world')

Given(/^I visit the page and go to the offer section$/, function(callback) {
  let {driver, By, until} = this
  //driver.get('http://www.amazon.es/')
  //.then(_ => driver.findElement(By.xpath('//div[@id="nav-xshop"]/a[@class="nav-a"]')).click())
  driver.get('https://www.amazon.es/gp/goldbox/')  
  .then(_ => callback())
});

// Given('a variable set to {int}', function(number) {
When(/^I add an item to the list$/, function() {
  let {driver, By, until} = this
  // <a href="/gp/goldbox/ref=nav_cs_gb" class="nav-a" tabindex="17">Ofertas</a>
  // return 
  return driver
  //.then(_ => driver.wait(until.titleIs('Las ofertas por tiempo limitado de Amazon.es.'), 1000))
  .then(_ => driver.wait(until.titleIs('Las ofertas por tiempo limitado de Amazon.es.'), 4000)) // ofertas amazon
  .then(_ => driver.findElement(By.xpath('//div[@id="100_dealView_0"]//span[@data-action="gbdeal-addtocart"]//button')).click()) // add
  //.then(_ => callback())
});

Then(/^The Amazon list contains a single item$/, function() {
  let {driver, By, until} = this
  //let data = 
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

