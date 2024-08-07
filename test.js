import { remote } from 'webdriverio';
import { DATAcapabilities } from './utils/capabilities.js';
import { getUserData } from './utils/excelReader.js';

const capabilities = {
  ...DATAcapabilities
};

console.log(capabilities);

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {

  const driver = await remote(wdOpts);

  // Read user data from Excel
  const userData = await getUserData('user-data');
  const { username, token, password } = userData[0]; // Assuming you want the first row of data

  try {
    // Click on the button with the specified ID
    const permissionButton1 = await driver.$('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_foreground_only_button")');
    await permissionButton1.click();

    // Click on the second permission button if present
    const permissionButton2 = await driver.$('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")');
    if (await permissionButton2.isDisplayed()) {
      await permissionButton2.click();
    }

    // Click on the third permission button if present
    const permissionButton3 = await driver.$('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")');
    if (await permissionButton3.isDisplayed()) {
      await permissionButton3.click();
    }

    // Click on "Acceda a iBanca"
    const accedaAiBancaButton = await driver.$('//android.view.View[@content-desc="Acceda a iBanca"]/android.view.View/android.view.View')
    await accedaAiBancaButton.click();

    // Input user
    const userInput = await driver.$('//android.view.View[@resource-id="ExternalDash__u9jmq4q"]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.EditText');
    await userInput.setValue(username);

    // Input token
    const tokenInput = await driver.$('//android.widget.EditText[@resource-id="otp"]');
    await tokenInput.click();
    await tokenInput.setValue(token);

    // Click on continuar
    const buttonContinuar = await driver.$('//android.widget.Button[@text="CONTINUAR"]');
    await buttonContinuar.click();

    // Wait until the password field is visible
    const inputContrasena = await driver.$('//android.widget.EditText');
    await driver.waitUntil(
      async () => (await inputContrasena.isDisplayed()),
      {
        timeout: 10000, // Adjust timeout as needed
        timeoutMsg: 'Password input field not visible after 10 seconds'
      }
    );

    // Focus and input password
    await inputContrasena.click(); // Ensure the field is focused
    await inputContrasena.clearValue(); // Clear any existing text
    await inputContrasena.setValue(password); // Input the password

    // Click on ingresar
    const buttonIngresar = await driver.$('//android.widget.Button[@text="INGRESAR"]');
    await buttonIngresar.click();


    //TO DESKTOP DONE

  } finally {
    //await driver.pause(1000);
    //await driver.deleteSession();
  }
}

runTest().catch(console.error);
