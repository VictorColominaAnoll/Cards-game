# ♥♠ Cards game ♣♦

## Inspiration 🕵️‍♂️

This game is based on the Super Mario 64 Luigi's Minigame: Pair-a-Gone And On.

## Objectives 📃

The project's main objectives were:

- Develop the game using **TDD** ✅
- Test the front-end using [Cypress](https://www.cypress.io/) to learn more about this technology ✅
- Use automatic releases with **Github Actions** to deploy new features ✅

# About the project

## Which technologies are used?

The project consist of two different parts:

- Frontend - [React](https://es.reactjs.org)
- Backend - [Java Spring ](https://spring.io)

## Testing: TDD using Cypress 🔥

### My experience during the development 

These were two of the challenges when I started the project. The idea was to use Cypress to test the front-end and to develop all the functionalities using TDD principle. 

Now that I look back, I'm super happy to say that it was a complete success. The development process was easier, because I focused only on a small feature at a time. And having tested all over the application allowed me to continue with new features without caring if the code was or not working.

Fun fact about it, while I was developing the possible movements, I realized that I didn't need to check both diagonals. Checking only one of both was enough. That was awesome, because if I wouldn't implement the code using TDD, I would have implemented this step on the code, having more production code that needs it maintenance.

## CI/CD: Heroku + Github Actions ♾

I used Github Actions to do automatic releases each time I pushed a commit to the `main` branch. The releases were uploaded to a Heroku host.
