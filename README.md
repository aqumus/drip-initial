## Drip Initial round setup

This is rough implementation of the given below use case

### Use case:

> How can you design an A/B testing module using Redis that efficiently distributes three layouts (namely layout1, layout2, and layout3) equally among users? The solution should cater to guest users for whom we don't have any pre-existing identifiers. The goal is to implement an API that serves these layouts uniformly (Code it in 1hr)

#### Identified Actions:

-   Tracking quest user mechanism w/o sign in/register
-   UserId detection in server
-   Rolling Layout mechanism

#### Solution:

-   generate a user ID on client and save the ID in localstorage
-   Pass the userId to server for getting layout
-   Server then,
    -   pulls in the userId from request
    -   pull the previous layout for a given userId from storage provider
    -   Send the next Layout Id
-   Based on next layoutId received by client it renders corresponding (Lazy Loaded) UI Layout

**TODO:**

-   Instead of sending layoutId, server could send the layout template to client (Server side rendered layout).

### Prequisite:

-   Docker and running docker daemon
-   Node.js 20.x
-   GIT

### Installation:

-   Clone [repository](https://github.com/aqumus/drip-initial)
-   `npm i`

### Run UI:

```sh
npm run dev:client
```

### Run server:

(Make sure docker daemon is running)
Using docker compose

```sh
docker compose up --build
```
