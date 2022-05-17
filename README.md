# Game of Life!

This project is a code kata. You need to implement the basic rules of game of life. 
More info on the concept can be found here: [https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

## Basic Rules
There are 4 basic rules for game of life:
* Any live cell with fewer than two live neighbours dies, as if by underpopulation.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any live cell with more than three live neighbours dies, as if by overpopulation.
* Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## Starting the code kata
1. Clone this repo
1. Install dependencies with `npm i`
1. run `npm start` and goto http://localhost:3000

## Implementation
In order to complete the code kata you need to:
* implement the tests needed in `/src/logic/logic.test.ts` file
* implement the logic in the `calculateNextState` inside `/src/logic/logic.ts` file

## Observation
After observation you can start the simultion and observe the result on screen


Goodluck!