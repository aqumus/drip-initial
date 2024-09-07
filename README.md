



## Drip Initial round setup
This is rough implementation of the given below use case

### Use case:
> How can you design an A/B testing module using Redis that efficiently distributes three layouts (namely layout1, layout2, and layout3) equally among users? The solution should cater to guest users for whom we don't have any pre-existing identifiers. The goal is to implement an API that serves these layouts uniformly (Code it in 1hr)

#### Identified Actions: 
* Tracking quest user mechanism w/o sign in/register
* UserId detection in server
* Rolling Layout mechanism 

### Prequiste:
* Docker and running docker daemon
* Node.js 20.x
* GIT


### Installation:
* `npm i`

### Run UI:
```sh
npm run dev:client
```

### Run server:
```sh
npm run dev:server
```
