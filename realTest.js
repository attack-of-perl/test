//created by Zachary Perlman
//usage: make sure to increment runNum before running test 
var webdriver = require ('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;
Keys = webdriver.Key;
const time = 5000;
var runNum = 22; //MUST INCREMENT BEFORE RUNNING AGAIN
var driver = new webdriver.Builder().forBrowser('chrome').build();




driver.get('https://staging.hive.com/');

driver.wait(until.elementLocated(By.id("join-hive")),time).then(driver.findElement(By.id("join-hive")).click());


//driver.wait(until.elementLocated(By.className("hv btn btn-primary js-ob-video-continue")),time).then(click());
driver.sleep(4000);
driver.findElement(By.className("hv btn btn-primary js-ob-video-continue")).click();

//driver.wait(until.elementIsEnabled(By.id("firstName")),time).then(fill);
driver.sleep(2000).then(fill);
function fill(){    //fills in fields
    driver.findElement(By.id("firstName")).sendKeys("John");
    driver.findElement(By.id("lastName")).sendKeys("Doe");
    driver.findElement(By.id("phone")).sendKeys("3051231234");
    driver.findElement(By.id("email")).sendKeys("user"+runNum+"@example.com");
    driver.findElement(By.id("password")).sendKeys("abcdef123456");
}

driver.sleep(500);
driver.findElement(By.className("hv btn btn-primary ladda-button")).click();

//now fill in organization name
driver.sleep(2000);
driver.findElement(By.className("js-workspace-input input__field")).sendKeys("My Organization");

//continue
driver.sleep(1000);
driver.findElement(By.className("hv btn btn-primary js-complete-step ladda-button")).click();

//continue
driver.sleep(3000);
driver.findElement(By.className("js-action-input")).submit();

//skip
driver.sleep(1000);
driver.findElement(By.className("hv btn btn-default js-skip-step")).click();

//skip
driver.sleep(1000);
driver.findElement(By.className("hv btn btn-default js-complete-step")).click();

console.log("made it!")

//driver.quit();