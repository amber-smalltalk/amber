HelloAmber Android Amber Smalltalk Example

Introduction
============

This example shows how to create an Android application that is partially
written in Amber Smalltalk. The Android Java code uses a WebView to load
and execute the JavaScript code produced by the Amber Smalltalk amberc
compiler.

You could modify this example to create your own Android Amber Smalltalk
examples.

Prerequisites
=============

Install the Android SDK from http://developer.android.com/sdk/index.html

(Tested with Android SDK version 17, should work with any SDK that
supports Android SDK 8 or above.)

Make sure your PATH includes the android sdk tools and platform-tools
directories.

If you want to run on a real Android device you will need a phone running
Android 2.2 (Froyo) or newer. (With some work this restriction could
be relaxed to support back to Android 1.6, although JavaScript performance
is not good on earlier Android phones.)

Building
========

    cd helloamber
    make

Testing on a Desktop Browser
============================

If the build is successful, you should be able to use your desktop computer's
web browser to run the HTML5 part of the Android application. Simply open
assets/index.html

Installing on an Android Device
===============================

Check that ADB can see your android device or emulator:

    adb devices

If your device is visible:

    cd helloamber
    make install

Building, Installing and Running on an Android Device
=====================================================

    make run

Tips
====

Javascript errors and console log messages are sent to the Android log.
Use the adb logcat command to view the Android log.


Known Issues
============

The amberc compiler does not stop the "make" process when a smalltalk
error is detected. You have to manually scan the build log to see if there
are any smalltalk errors.

The makefile only supports making "debug" versions of Android applications.
A release version would be the same, except that it is "signed", which is
needed in order to publish on Android Market.

The app would start running more quickly if a lighter-weight version of
JQuery was used.

