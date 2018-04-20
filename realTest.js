var webdriver = require ('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;
const time = 5000;

var driver = new webdriver.Builder().forBrowser('chrome').build();



driver.get('https://staging.hive.com/');

driver.wait(until.elementLocated(By.id("join-hive")),time).then(driver.findElement(By.id("join-hive")).click());


//driver.wait(until.elementLocated(By.className("hv btn btn-primary js-ob-video-continue")),time).then(click());
driver.sleep(4000);
driver.findElement(By.className("hv btn btn-primary js-ob-video-continue")).click();

//driver.wait(until.elementIsEnabled(By.id("firstName")),time).then(fill);
driver.sleep(3000).then(fill);
function fill(){
    driver.findElement(By.id("firstName")).sendKeys("John");
    driver.findElement(By.id("lastName")).sendKeys("Doe");
    driver.findElement(By.id("phone")).sendKeys("3051231234");
    driver.findElement(By.id("email")).sendKeys("user@example.com");
    driver.findElement(By.id("password")).sendKeys("abcdef123456");
}

driver.sleep(500).then(driver.findElement(By.className("hv btn btn-primary ladda-button")).click());



console.log("made it!")

//driver.quit();