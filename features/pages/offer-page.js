
class OfferPage {

    constructor() {
        this.url= 'http://www.amazon.es/gp/goldbox/'
        this.tittle='Las ofertas por tiempo limitado de Amazon.es.'
    }

    go(context) {
        let {driver, By, until} = context
        return driver.get(this.url)
    }

}

module.exports = OfferPage