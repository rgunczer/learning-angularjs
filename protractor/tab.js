
describe('Tes tab switching', function() {

    it('should interact with a new tab', function() {
        
        browser.ignoreSynchronization = true;

        browser.get('http://www.protractortest.org/testapp/');

        browser.sleep(5000);

        browser.actions().keyDown(protractor.Key.CONTROL).perform();

        element(by.css('a')).click();

        browser.sleep(2000);

        browser.getAllWindowHandles().then(function(handles) {
             browser.switchTo().window(handles[1]);
             browser.sleep(2000);

             element(by.css('select')).click();
             element.all(by.css('option')).get(2).click();

             browser.sleep(2000);
        });

    });
        
});
    