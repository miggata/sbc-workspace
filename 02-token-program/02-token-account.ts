import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("H1pPA52Avo2qRr49NWoLx62JJVvTZaHpCp5N1hVRU9Zw") // PUBKEY of person you want to create the token account

const decoded = base58.decode('2peUc2ziiG21Ww2Ew7kCJBBcEz46sJuuNNDHa7wmk1G2BpAgVU4JEmR7FmawQrzCY4MBoVwbBtLMM6vo4pFQ6avz')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "QVVacsXmakViZSmpfS3Mg5g5VXfrsGhF8q97AQBxcjQ"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();