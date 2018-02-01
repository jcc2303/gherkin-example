// features/support/world.js
const { setWorldConstructor } = require('cucumber')

const {Builder, By, until} = require('selenium-webdriver');


class CustomWorld {
  constructor() {
    debugger
    this.variable = 0
    this.By = By
    this.until = until
    this.driver = new Builder()
        .forBrowser('chrome')
        .build()
  }

  setTo(number) {
    this.variable = number
  }

  incrementBy(number) {
    this.variable += number
  }
}

setWorldConstructor(CustomWorld)