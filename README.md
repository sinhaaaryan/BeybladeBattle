# Beyblade NFT Platform

Create and manage unique Beyblade NFTs on the Polkadot ecosystem using Unique Network.

## Short Summary (150 chars)
Beyblade NFT platform leveraging Unique Network on Polkadot for creating, managing, and potentially battling unique digital Beyblades.

## Full Description
The Beyblade NFT Platform solves the problem of bringing the exciting world of Beyblade battles into the digital realm using blockchain technology. By leveraging the Unique Network, a Polkadot parachain, we've created a system where users can mint, own, and potentially battle with unique Beyblade NFTs.

Our platform utilizes the advanced NFT capabilities of Unique Network, including nested NFTs and customizable attributes. This allows us to create Beyblades with detailed characteristics such as attack power, defense, stamina, and special moves, all securely stored on the blockchain.

The use of Polkadot's ecosystem, specifically the Unique Network parachain, enables us to achieve:
1. High throughput and low transaction costs, essential for an interactive NFT platform.
2. Cross-chain interoperability, allowing potential future integration with other Polkadot parachains.
3. Advanced NFT features not available on many other blockchains.

## Technical Description
Our platform is built using the following technologies:
- Unique Network SDK: For creating and managing NFTs with complex attributes.
- Polkadot.js: For interacting with the Unique Network parachain.
- Node.js: For our backend scripts that handle NFT creation and management.

Key features of Polkadot and Unique Network that made this project possible:
1. Nested NFTs: Allowing for complex NFT structures (e.g., Beyblades owning achievement NFTs).
2. Customizable NFT attributes: Enabling detailed Beyblade characteristics.
3. Substrate framework: Providing a flexible and upgradeable blockchain architecture.

## Canva Presentation
[Link to Canva slides used in the presentation]

## Custom Smart Contract / NFT Minting Integration
Our project includes a custom NFT minting integration on Unique Network. The `3-create-beyblade.js` script demonstrates this functionality, creating Beyblade NFTs with unique attributes.

## Setup and Usage

### Prerequisites
- Node.js installed
- A Substrate account
- OPL (testnet) tokens: https://t.me/unique2faucet_opal_bot

### Installation
1. Clone the repository:
   ```
   git clone [repository URL]
   cd beyblade-nft-platform
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create `.env` from `.env-example` and set your mnemonic phrase.

### Running the Application
1. Create a Beyblade collection:
   ```
   node ./src/1-collection-beyblades.js
   ```
2. Create an Achievements collection:
   ```
   node ./src/2-collection-achievement.js
   ```
3. Create Beyblade NFTs:
   ```
   node ./src/3-create-beyblade.js [collectionId] [ownerAddress] [nickname]
   ```
   Example:
   ```
   node ./src/3-create-beyblade.js 3135 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY DragonStorm
   ```

## Demo Video
https://www.loom.com/share/67eb6a95ccba41c9abc2d47f74105cf4?sid=6aedf4a8-20d2-4ecc-87a9-246ff9958049

## Screenshots
<img width="1440" alt="Screenshot 2024-07-28 at 11 43 07 AM" src="https://github.com/user-attachments/assets/bd9584c7-278b-4a02-859f-11ad40aa48da">
<img width="1439" alt="Screenshot 2024-07-28 at 11 43 15 AM" src="https://github.com/user-attachments/assets/16fa749b-7471-4717-87a5-9ef3f9eab304">
<img width="1288" alt="Screenshot 2024-07-28 at 11 43 22 AM" src="https://github.com/user-attachments/assets/e0c2c018-b631-47e7-82d3-77ce311c22c1">




## Project Explanation Video
https://www.loom.com/share/22a0b3ed18c5434399bc94cc26d793c3?sid=8fd8bf9f-f2be-4407-a2fa-879d6617d9ef


## Canva
https://www.canva.com/design/DAGMN-iZr7I/phNFEg2qz5UInRVYw2B--Q/edit?utm_content=DAGMN-iZr7I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton 
## Restrictions
- All Beyblade NFTs are owned by individual users
- The application can modify NFT properties
- Users cannot directly modify the properties of their Beyblade NFTs

## Current Functionality
At present, this application focuses on generating unique Beyblade NFTs. Each NFT comes with pre-set attributes that could be used for future battle mechanics.

## Viewing Your NFTs
After creating your Beyblade NFT, you can view it on UniquerScan using the link provided in the console output.

## Future Development
- Implement battle mechanics using the NFT attributes
- Create a user interface for minting and managing Beyblades
- Develop cross-chain functionality with other Polkadot parachains

## License
MIT Open Source

Enjoy creating your unique Beyblade NFTs!
