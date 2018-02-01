// require('chromedriver')
const {Builder, By, until} = require('selenium-webdriver');

new Builder()
    .forBrowser('chrome')
    .build()
    .then(driver => { // By.xpath("//*[@test-id='test-username']"
      return driver.get('http://www.amazon.es/')
        // <a href="/gp/goldbox/ref=nav_cs_gb" class="nav-a" tabindex="17">Ofertas</a>
        .then(_ => driver.findElement(By.xpath('//div[@id="nav-xshop"]/a[@class="nav-a"]')).click())
        .then(_ => driver.findElement(By.xpath('//div[@id="100_dealView_0"]//span[@data-action="gbdeal-addtocart"]//button')).click())
        .then(_ => driver.findElement(By.xpath('//*[@id="nav-cart"]')).click())
        .then(_ => driver.findElement(By.xpath('//*[@id="sc-buy-box-ptc-button"]/span/input')).click())
        .then(_ => driver.wait(until.titleIs('Iniciar sesión en Amazon'), 1000))
        .then(_ => driver.quit())
    }).catch(function(reason) {
        // rejection
        console.log(reason);        
    })

