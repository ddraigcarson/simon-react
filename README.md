This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `yarn start`
### `yarn test`
### `yarn build`
### `yarn run eject`

## Future Changes

* Middleware approach
  * ~~logger core middleware~~
  * fake api call for highscore
  * transition to a poker game
  * https://www.instructables.com/id/Learn-To-Play-Poker---Texas-Hold-Em-aka-Texas-Ho/

* Move the prod parts into an app folder, keep the tests out and separate.
* Need shallow tests for at minimum:
  * GameButton - check it flashes, click handlers,
  * Controls - actions are dispatched, buttons are disabled,
  * Scores - draws correct message,
  * Game - draws all the buttons.
* actions/simon, each method is doing too much and is messy to test
  * good opportunity for feature middleware
