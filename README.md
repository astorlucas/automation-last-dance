# automation-last-dance
## CONTEXT
#Appium's Functionality on Android and iOS Platforms
Is achieved by utilizing the Mobile JSON Wire/W3C Protocol. This protocol facilitates the transformation of test commands into REST API requests by the Appium client libraries. The Appium server then transmits these requests to the connected Android device or emulator.
#Android
The crucial bootstrap.jar files come into play. These files enable the device to execute the commands using automation frameworks like Selendroid or UI Automator. Subsequently, the test results are returned to the Appium server, relaying an HTTP response containing relevant status codes to the Appium client. With the right Appium Android tutorial, you can explore how this mechanism allows testers to analyze the outcomes of their Android automation tests effectively.

#iOS
Similarly, Appium leverages the JSON wire protocol for iOS devices, interacting with them through Apple's UIAutomation API. Within iOS devices, the WebDriverAgent.app files are instrumental in interpreting the received test commands. Utilizing XCUITest, the WebDriverAgent.app effectively executes requests on iOS devices, enabling seamless automation and testing of iOS applications.

#What are the Prerequisites for Appium Automation?
Setting the foundation for the Appium automation framework requires essential prerequisites to ensure a seamless mobile app automation journey:

1. Programming Language Proficiency: A fundamental understanding of at least one programming language (Python, Java, JavaScript, etc.) is crucial to effectively working with Appium.

2. Access to Mobile Devices: Appium necessitates access to physical mobile devices or emulators/simulators to perform automation testing.

3. Appium Server Installation: To interact with mobile devices and execute automation scripts, installing the Appium server on your system or accessing remote Appium servers like HeadSpin is essential.

4. Application for Testing: To begin automation testing with Appium, you will need the mobile application you intend to test.

5. Platform-Specific SDK: Depending on the platform you wish to automate (Android or iOS), installing the respective Software Development Kit (SDK) on your machine is necessary.

6. Appium Client Library: Depending on your chosen programming language, you must include the Appium client library in your project to facilitate automation.

7. Appium Inspector: For element identification, location on the screen, property viewing, and generating automation code snippets for your mobile application, you will need Appium Inspector.

8. Device or Emulator Configuration: Configuring additional settings on the device or emulator may be required. This could involve enabling developer mode, USB debugging, or granting necessary app permissions.

9. Optional Development Environment: For optimal utilization of Appium, consider setting up a development environment tailored to your chosen programming language.

By addressing these prerequisites, you lay a solid groundwork for seamless and successful mobile app automation with this Appium testing tutorial.

###INSTALLING 

`npm install -g appium`

#Set up Android automation requirements
According to the driver, in addition to a working Appium server, we also need to set up the following:

#Android SDK
The easiest way to set up the Android SDK requirements is by downloading Android Studio. We need to use its SDK manager (Settings -> Appearance & Behavior -> System Settings -> Android SDK) to download the following items:
Android SDK Platform (select whichever Android platform we want to automate, for example, API level 30)
Android SDK Platform-Tools
If you wish, you can also download these items without Android Studio:
Android SDK Platform can be downloaded using sdkmanager included in Android command-line tools
Android SDK Platform-Tools
Set up the ANDROID_HOME environment variable to point to the directory where the Android SDK is installed. You can usually find the path to this directory in the Android Studio SDK manager. It will contain the platform-tools and other directories.
#Java JDK
Install the Java JDK (for the most recent Android API levels, JDK 9 is required, otherwise JDK 8 is required). You can download this from Oracle or Adoptium. Make sure you get the JDK and not the JRE.
Set up the JAVA_HOME environment variable to point to the JDK home directory. It will contain the bin, include, and other directories.
#Prepare the Device
If using an emulator, use Android Studio to create and launch an Android Virtual Device (AVD). You may need to download the system images for the API level of the emulator you want to create. Using the AVD creation wizard in Android Studio is generally the easiest way to do all of this.
If using a real device, you should set it up for development and enable USB Debugging.
With the emulator or device connected, you can run adb devices (via the binary located at $ANDROID_HOME/platform-tools/adb) to verify that your device shows up as connected.
Once your device shows up as connected in adb, and you've verified that the environment variables are set up correctly, you should be good to go! If you ran into problems with any of these steps, refer to the driver documentation, or the various Android or Java documentation sites as necessary.

#Driver install

`appium driver install uiautomator2`
