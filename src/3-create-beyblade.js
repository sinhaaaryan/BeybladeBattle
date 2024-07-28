import { connectSdk } from "./utils/connect-sdk.js";
import { getRandomInt } from "./utils/random.js";

// node ./src/3-create-beyblade.js {collectionId} {address} {nickname}
// i.e. node ./src/3-create-beyblade.js 3131 5HRADyd2sEVtpqh3cCdTdvfshMV7oK4xXJyM48i4r9S3TNGH DragonStorm
const createBeyblade = async () => {
  const args = process.argv.slice(2);
  if (args.length < 3) {
    console.error("run this command: node ./src/3-create-beyblade.js {collectionId} {address} {nickname}");
    process.exit(1);
  }

  const [collectionId, owner, nickname] = args;

  const {account, sdk} = await connectSdk();

  const beybladeImages = [
    "https://i.ebayimg.com/images/g/KAgAAOSwBKxmPdkM/s-l1600.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-pZb_rVZRUgSnKoFdPX5_cE7JEaoXypjww&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVhWlsF_SeNyfevqR7kMJ8WHAb2YOIdfYxg&s",
    "https://m.media-amazon.com/images/I/81qN4eX2kkL._AC_UF894,1000_QL80_.jpg"
  ];

  // Get pseudo-random Beyblade image
  const tokenImage = beybladeImages[getRandomInt(beybladeImages.length)];

  // Generate random stats for the Beyblade
  const attack = getRandomInt(100) + 1;
  const defense = getRandomInt(100) + 1;
  const stamina = getRandomInt(100) + 1;
  const speed = getRandomInt(100) + 1;

  // Generate a random special move
  const specialMoves = [
    "Galaxy Nova Strike",
    "Cosmic Tornado Blast",
    "Phoenix Inferno Surge",
    "Dragon Fury Assault",
    "Pegasus Star Breaker",
    "Lightning Vortex Crash"
  ];
  const specialMove = specialMoves[getRandomInt(specialMoves.length)];

  // Generate a random type
  const types = ["Attack", "Defense", "Stamina", "Balance"];
  const type = types[getRandomInt(types.length)];

  const tokenTx = await sdk.token.createV2({
    collectionId,
    image: tokenImage,
    owner,
    attributes: [
      {
        trait_type: "Nickname",
        value: nickname,
      },
      {
        trait_type: "Type",
        value: type,
      },
      {
        trait_type: "Attack",
        value: attack,
      },
      {
        trait_type: "Defense",
        value: defense,
      },
      {
        trait_type: "Stamina",
        value: stamina,
      },
      {
        trait_type: "Speed",
        value: speed,
      },
      {
        trait_type: "Special Move",
        value: specialMove,
      },
      {
        trait_type: "Victories",
        value: 0,
      },
      {
        trait_type: "Defeats",
        value: 0,
      },
      {
        trait_type: "Level",
        value: 1,
      },
      {
        trait_type: "Experience",
        value: 0,
      }
    ],
  });

  const token = tokenTx.parsed;
  if (!token) throw Error("Cannot parse token");

  console.log(`Beyblade "${nickname}" created successfully!`);
  console.log(`Type: ${type}`);
  console.log(`Attack: ${attack}`);
  console.log(`Defense: ${defense}`);
  console.log(`Stamina: ${stamina}`);
  console.log(`Speed: ${speed}`);
  console.log(`Special Move: ${specialMove}`);
  console.log(`Explore your NFT: https://uniquescan.io/opal/tokens/${token.collectionId}/${token.tokenId}`);
 
  process.exit(0);
}

createBeyblade().catch(e => {
  console.log('Something went wrong during Beyblade creation');
  throw e;
});