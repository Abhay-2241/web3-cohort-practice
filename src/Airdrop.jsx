import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Connection } from "@solana/web3.js";

export const Airdrop = () => {

    const wallet = useWallet();
    const {connection} = useConnection();

    async function Airdropsol() {
       await connection.requestAirdrop(wallet.publicKey , 1000000000);
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