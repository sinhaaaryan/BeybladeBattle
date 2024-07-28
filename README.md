# Beyblade Battle NFT Platform

This project demonstrates how to create and manage a Beyblade battle NFT platform using nested tokens within the Unique Network.

### Before we start

- Create a Substrate account
- Get `OPL` (testnet) tokens: https://t.me/unique2faucet_opal_bot
- Create `.env` from `.env-example` and set your mnemonic phrase
- Run `npm install`

## Legend

Let's dive into our exciting Beyblade battle NFT game! In this game, users can mint NFTs that represent powerful Beyblades. Each NFT starts with an empty battle record—no wins, no losses.



Players can then engage in thrilling Beyblade battles against each other. When a Beyblade wins a battle, its `Victories` counter increases. If it loses, the `Defeats` counter increments accordingly.



Epic achievements can be awarded as well, and these achievements are also NFTs owned by the original Beyblade NFTs!



### Talking about restrictions

- All Beyblade NFTs are owned by individual users
- The application can modify NFT properties (battle records, achievements)
- Users cannot directly modify the properties of their Beyblade NFTs

---

## 1. Create a Beyblade collection

```sh
node ./src/1-collection-beyblades.js
```

## 2. Create Achievements collection

```sh
node ./src/2-collection-achievement.js
```

## 3. Create at least two Beyblade NFTs

Pass the following arguments to the function
- collectionId (step 1)
- owner Substrate address
- owner nickname

For example:

```sh
node ./src/3-create-beyblade.js 3135 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY BladeBreaker
node ./src/3-create-beyblade.js 3135 5CPuU98SimxwoHZRZCi8hezgnfBwATs8vKo6haqkaP3hUj7X SpinMaster
```

## 4. Battle!

Pass the following arguments to the function
- Beyblade collectionId (step 1)
- Achievements collectionId (step 2)
- First player's tokenId 
- Second player's tokenId

```sh
node ./src/4-battle.js 3132 3133 1 2
```

Enjoy your Beyblade battles and may the best spinner win!