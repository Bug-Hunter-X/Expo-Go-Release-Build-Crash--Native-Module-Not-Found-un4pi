While building an Expo project, I encountered an unusual error related to the interaction between Expo Go and a custom native module.  The app worked fine in development mode but crashed consistently when built for release. The error logs from the device were unhelpful, providing only a generic "native module not found" message.  Debugging this was very difficult because the error only surfaced in the release build, not in development.