import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Airdrop } from './Airdrop';

function App() {
  

  return (
    <ConnectionProvider endpoint={"https://solana-mainnet.g.alchemy.com/v2/DYyvI9e_5ACR66yuRcAJDd6SD56O67Uu"}>
        <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <WalletMultiButton/>
              <WalletDisconnectButton/>
              <Airdrop/>
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
