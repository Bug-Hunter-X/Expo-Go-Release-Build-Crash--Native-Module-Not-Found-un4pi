# Expo Go Release Build Crash: Native Module Not Found

This repository demonstrates a bug where a custom native module works correctly in Expo Go development mode but causes a crash in the release build. The crash is accompanied by a generic "native module not found" error, making debugging challenging.

## Setup

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `expo start`
4. Test the app in Expo Go (development mode).
5. Build the app for release (e.g., using `expo build:ios` or `expo build:android`).
6. Observe the crash when running the release build in Expo Go.

## Problem

The core issue is a missing link or configuration step specific to release builds that prevents the native module from being properly loaded. The error message is unhelpful in pinpointing the root cause.

## Solution

The solution will depend on the specific native module and its implementation. This example provides a possible solution for an error occurring because of missing build configuration steps.