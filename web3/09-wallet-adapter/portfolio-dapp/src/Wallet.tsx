import { FC, useEffect, useMemo, useState } from 'react';
import { ConnectionProvider, useConnection, useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl, SystemProgram, Transaction, PublicKey } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';

const WalletContent: FC = () => {
    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        async function callIt() {
            if (publicKey) {
                const bal = await connection.getBalance(publicKey);
                setBalance(bal);
            }
        }
        callIt()
    }, [publicKey, connection])

    const [amt, setAmt] = useState<number>(0);
    const [address, setAddress] = useState("");

    const sendAmt = async () => {
        if (!publicKey || !address || !amt) {
            alert("Please fill in all fields");
            return;
        }
        try {
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: new PublicKey(address),
                    lamports: Number(amt) * 1000000000,
                })
            );
            const signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature);
            alert("Transaction successful! Signature: " + signature);
            setAmt(0);
            setAddress("");
        } catch (error) {
            console.error("Transaction failed:", error);
            alert("Transaction failed: " + (error instanceof Error ? error.message : "Unknown error"));
        }
    }
    return (
        <>
            {!publicKey ?
                <WalletMultiButton />
                :
                <>
                    <WalletDisconnectButton />
                    <p>
                        public key: {publicKey.toString()}
                    </p>
                    <p>
                        balance: {(balance / 1000000000).toFixed(2)} SOL
                    </p>

                    <div>
                        <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)} />
                        <input type="text" name="amt" id="amt" onChange={(e) => setAmt(parseFloat(e.target.value))} />
                        <button onClick={sendAmt}>send</button>
                    </div>
                </>
            }
        </>
    );
};

export const Wallet: FC = () => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new UnsafeBurnerWalletAdapter(),
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <WalletContent />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};