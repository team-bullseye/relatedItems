# Target Reviews
> Related Items module of a mock up version of Target product page.
## Table of Contents
1. [API](#API)
1. [Setup](#Setup)
## API
Endpoints:
- GET '/api/games' gets all products
- GET ''/api/games/one' gets random games
- GET '/api/games/:id/together' gets 3 games freq bought together
- GET '/api/games/:id/similar' gets 20 similar games based on system
- POST '/api/games' posts a new game 
- PUT '/api/games/:id' updates a games info
- DELETE '/api/games/:id' deletes an existing game
## Setup
From within the root directory:
```sh
npm install
```
