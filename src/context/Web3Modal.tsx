'use client'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi1/react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'
import { ReactNode } from 'react'

const projectId = 'YOUR_PROJECT_ID'

const metadata = {
    name:'Web3Modal',
    description: 'Web3Modal example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [arbitrum, mainnet]
const wagmiConfig: any = defaultWagmiConfig({ projectId, chains, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains})

export const Web3Modal = ({children}: {children: ReactNode}) => {
    return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}