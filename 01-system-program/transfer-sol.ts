import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('2peUc2ziiG21Ww2Ew7kCJBBcEz46sJuuNNDHa7wmk1G2BpAgVU4JEmR7FmawQrzCY4MBoVwbBtLMM6vo4pFQ6avz')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('89hUmaDYNJiNmRCpiukob283LiJz9UwcmPBsvjZa43dY');
    const publicKeyTo = new Web3.PublicKey('H1pPA52Avo2qRr49NWoLx62JJVvTZaHpCp5N1hVRU9Zw');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 1,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature)
}

main();