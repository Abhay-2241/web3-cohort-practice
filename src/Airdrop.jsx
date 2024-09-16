import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Connection } from "@solana/web3.js";
import { Buffer } from "buffer";


export const Airdrop = () => {

    window.Buffer = Buffer;
    const wallet = useWallet();
    const {connection} = useConnection();
    

    async function Airdropsol() {
        
            console.log("okie")
            await connection.requestAirdrop(wallet.publicKey , 1000000000);
            console.log("dokie")
            alert("airdrop done");        
    }
     return (
        <>
        <div>
            Hey Mr 
            <input type="text" placeholder="enter amount"></input>
            <button onClick={Airdropsol}> Req Airdrop </button>
        </div>
        </>
    )
}