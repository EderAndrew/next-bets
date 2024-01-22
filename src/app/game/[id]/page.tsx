'use client'
import Image from 'next/image'
import CardGame from "@/components/cardGame/page"
import TeamA from '../../../../public/images/barcelona.png'
import RealMadrid from '../../../../public/images/realMadrid.png'
import { useState } from 'react'


const Game = ({params}:{ params: { id: string } }) => {
    const [teamA, setTeamA] = useState(true)
    const [teamB, setTeamB] = useState(false)

    const [bnb, setBnB] = useState(true)
    const [usdt, setUsdt] = useState(false)
    const [banus, setBanus] = useState(false)
    const [ritz, setRitz] = useState(false)

    const handleTeamA = () => {
        setTeamA(true)
        setTeamB(false)
    }

    const handleTeamB = () => {
        setTeamA(false)
        setTeamB(true)
    }

    const handlerBnb = () => {
        setBnB(true)
        setUsdt(false)
        setBanus(false)
        setRitz(false)
    }
    const handlerUsdt = () => {
        setBnB(false)
        setUsdt(true)
        setBanus(false)
        setRitz(false)
    }
    const handlerBanus = () => {
        setBnB(false)
        setUsdt(false)
        setBanus(true)
        setRitz(false)
    }
    const handlerRitz = () => {
        setBnB(false)
        setUsdt(false)
        setBanus(false)
        setRitz(true)
    }

    return(
        <main className="w-full flex flex-col items-center bg-gray-100 shadow-md">
            <header className="mt-10">
                <h1 className="text-2xl font-extrabold text-gray-600">Place a Bet</h1>
            </header>
            <section className="w-full grid grid-cols-2 gap-10 px-10">
                <CardGame />
                <div className="border border-gray-200 w-[42rem] mt-10 rounded-md bg-white">
                    <header className="w-full flex items-center px-4 h-12 border-b border-slate-300 bg-slate-200">
                        <span className="text-slate-500 text-lg">BET</span>
                    </header>
                    <section className="m-5 flex flex-col gap-4 border-b border-slate-300">
                        <h2 className="text-lg text-slate-600">Bet on:</h2>
                        <div className="flex justify-around mb-4">
                            <button
                                onClick={handleTeamA}
                                className={`${teamA ? "bg-purple-700 text-white": "text-purple-700"} border w-72 p-3 rounded-md border-purple-700 
                                text-lg`}>Real Madrid</button>
                            <button
                            onClick={handleTeamB}
                                className={`${teamB ? "bg-purple-700 text-white": "text-purple-700"} border w-72 p-3 rounded-md border-purple-700 
                                text-lg`}>Barcelona</button>
                        </div>
                    </section>
                    <section className="m-5 flex flex-col gap-4 border-b border-slate-300">
                        <h2 className="text-lg text-slate-600">Bet type:</h2>
                        <div className="flex justify-around mb-4 flex-wrap gap-2">
                            <button
                                onClick={handlerBnb}
                                className={`${bnb ? "bg-purple-700 text-white" : "text-purple-700"} border w-72 p-3 rounded-md border-purple-700 
                                text-lg`}>BNB</button>
                            <button
                                onClick={handlerUsdt}
                                className={`${usdt ? "bg-purple-700 text-white" : "text-purple-700"} border w-72 p-3 rounded-md border-purple-700 
                                text-lg`}>USDT</button>
                            <button
                                onClick={handlerBanus}
                                className={`${banus ? "bg-purple-700 text-white" : "text-purple-700"} border w-72 p-3 rounded-md border-purple-700 
                                text-lg`}>BANUS</button>
                            <button
                                onClick={handlerRitz}
                                className={`${ritz ? "bg-purple-700 text-white" : "text-purple-700"} border w-72 p-3 rounded-md border-purple-700 
                                text-lg`}>RITZ</button>
                        </div>
                    </section>
                    <section className="m-5 flex flex-col gap-4 border-slate-300">
                        <h2 className="text-lg text-slate-600">Bet amount:</h2>
                        <label className="flex border h-12 items-center rounded-md border-slate-400">
                            <div className="bg-sky-500 w-20 h-full rounded-tl-md rounded-bl-md
                                flex justify-center items-center text-sky-50">{bnb ? "BNB" : usdt ? "USDT" : banus ? "BANUS" : "RITZ"}</div>
                            <input type="text" placeholder="amount 0" className="w-full h-full px-2
                                rounded-tr-md rounded-br-md" />
                        </label>
                        <input type="text" value="Bet Now" className="bg-purple-700 h-12 rounded-md flex text-center text-lg text-white"/>
                    </section>
                </div>
            </section>
            <footer className="w-full p-10">
                <header className="border-b border-slate-300">
                    <h1 className="text-2xl font-light mb-5">Your Bets</h1>
                </header>
                <table className="w-full table-auto">
                    <thead className="border-b h-12">
                        <tr>
                            <th className="text-center">Team</th>
                            <th className="text-center">Amount</th>
                            <th className="text-center">Potential Payout</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">
                                <div className="flex justify-center w-full">
                                    <Image
                                        src={TeamA}
                                        width={64}
                                        height={64}
                                        alt="Team A"
                                    />
                                </div>
                                </td>
                            <td className="text-center">USDT</td>
                            <td className="text-center">
                                <span className="text-purple-700 font-bold text-xl">
                                    0.00 USDT
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center border-b">
                                <div className="flex justify-center w-full">
                                    <Image
                                        src={RealMadrid}
                                        width={64}
                                        height={64}
                                        alt="Team A"
                                    />
                                </div>
                                </td>
                                <td className="text-center">USDT</td>
                            <td className="text-center">
                                <span className="text-purple-700 font-bold text-xl">
                                    0.00 USDT
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </footer>
        </main>
    )
}

export default Game