# React 2048

A game of 2048 built with React, TypeScript and Styled Components.

[Demo](https://neilhsmith.github.io/react-2048/)

# Todo

- animations not working when cells combine
- cells don't move all the way when multiple cells combine
- fade in / fade out animations when cells are created/destroyed
- cells are combining multiple times in a single pass
  - **wrong** 2, 2, 2, 2 => 0, 0, 0, 8
  - **right** 2, 2, 2, 2 => 0, 0, 4, 4
- add win condition
- keep track of score & high score
- add move timer
  - a 3 - 5 second timer which adds a random cell to the board if a move is not made before the timer runs out
