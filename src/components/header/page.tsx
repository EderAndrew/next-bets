'use client'
import { useWeb3Modal } from "@web3modal/wagmi1/react"
import Link from "next/link"

const Header = () => {
    const { open } = useWeb3Modal()
    return(
        <header className="flex items-center justify-between w-full h-16 bg-slate-900 text-white px-10 shadow-md">
            <div className="flex gap-6">
            <h1 className="font-semibold text-2xl">Next-Bets</h1>
            <ul className="flex h-full gap-4 mt-1">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/login"}>Claim</Link></li>
            </ul>
            </div>
            <button onClick={() => open()} className="border text-sm px-2 py-1 rounded-md cursor-pointer">Connect</button>
        </header>
    )
}

export default Header