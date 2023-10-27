import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("89hUmaDYNJiNmRCpiukob283LiJz9UwcmPBsvjZa43dY")
const decoded = base58.decode('2peUc2ziiG21Ww2Ew7kCJBBcEz46sJuuNNDHa7wmk1G2BpAgVU4JEmR7FmawQrzCY4MBoVwbBtLMM6vo4pFQ6avz')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();