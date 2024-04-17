# Introduction to Substrate Assignment 6
In this assignment, we are supposed to subscribe 1) the updates, i.e., `something`, in the template pallet and 2) the events.
For the second part, the script was written with reference to the lecture demo.

To get the script running, the repository of the substrate node template must be cloned, followed by starting the blockchain. The user-friendly Polkadot JS UI should also be opened in the browser. After setting up the environment (getting `yarn`  from `npm` which is installed from `nvm`; retrieving the polkadot/api from `yarn`), the script is run with `yarn start` within the project directory.

## Part 1
In the developer section of the Polkadot JS UI, we modified the value of `something` to 33 by selecting the value in `doSomething(something)` function among the `templateModule`, which is successfully tracked as shown in the following figure

<img width="633" alt="Screenshot 2024-04-18 at 00 17 41" src="https://github.com/YADengUU/Substrate_A6/assets/131147818/9de2adb5-74ac-4e20-8016-22fb259787a6">

## Part 2
To test the subscription of events, we made Alice to send 25 units to Bob, which the script has also managed to track:

<img width="495" alt="Screenshot 2024-04-18 at 00 18 57" src="https://github.com/YADengUU/Substrate_A6/assets/131147818/d37dd017-16da-48e1-a4a6-430a12752ba9">
