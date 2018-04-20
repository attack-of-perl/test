var webdriver = require ('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;
const time = 5000;

var driver = new webdriver.Builder().forBrowser('chrome').build();



driver.get('https://staging.hive.com/');

driver.wait(until.elementLocated(By.id("join-hive")),time).then(driver.findElement(By.id("join-hive")).click());


driver.wait(until.elementLocated(By.className("hv btn btn-primary js-ob-video-continue")),time).then(driver.findElement(By.className("hv btn btn-primary js-ob-video-continue")).click());
// driver.findElement(By.className("hv btn btn-primary js-ob-video-continue")).click();

driver.wait(until.elementLocated(By.id("firstName")),time).then(fill);

function fill(){
    driver.findElement(By.id("firstName")).sendKeys("John");
    driver.findElement(By.id("lastName")).sendKeys("Doe");
    driver.findElement(By.id("phone")).sendKeys("3051231234");
    driver.findElement(By.id("email")).sendKeys("user@example.com");
}



console.log("made it!")

//driver.quit();