'use client'
import { createWeb3Modal } from '@web3modal/wagmi1/react'
import { walletConnectProvider, EIP6963Connector } from '@web3modal/wagmi1'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet } from 'viem/chains'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { ReactNode } from 'react'

const projectId = 'YOUR_PROJECT_ID'

const { chains, publicClient } = configureChains(
    [mainnet],
    [walletConnectProvider({ projectId }), publicProvider()]
  )

const metadata = {
    name:'Web3Modal',
    description: 'Web3Modal example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const wagmiConfig: any = createConfig({ 
    autoConnect: true,
    connectors: [
        new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
        new EIP6963Connector({ chains }),
        new InjectedConnector({ chains, options: { shimDisconnect: true } }),
        new CoinbaseWalletConnector({ chains, options: { appName: metadata.name } })
      ],
      publicClient
 })

createWeb3Modal({ wagmiConfig, projectId, chains})

export const Web3Modal = ({children}: {children: ReactNode}) => {
    return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}