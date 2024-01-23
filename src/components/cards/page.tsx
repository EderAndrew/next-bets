'use client'
import Link from "next/link"
import { useState } from "react"
import Image from 'next/image'
import real from '@/../public/images/realmadrid.png'
import barca from '@/../public/images/barcelona.png'
import laliga from '@/../public/images/laliga.png'


const Card = () => {
    const [day, setDay] = useState(new Date())
    return(
        <Link href={`/game/${1}`} className="w-[30rem] h-96 border bg-white rounded-md mt-10 shadow-md">
            <header className="w-full h-12 flex justify-between px-4 items-center bg-gray-200">
                <span className="text-sm text-gray-500">{day.toDateString()}</span>
                <span className="text-sm font-bold text-gray-600">4D 23H 57M 36S</span>
            </header>
            <section className="w-full h-full flex flex-col items-center gap-2 p-4 mt-4">
                <h1 className="text-sm font-bold">Real Madrid vs Barcelona</h1>
                <span className="text-sm font-bold text-purple-500">La Liga</span>
                <div>
                  <Image
                    src={laliga}
                    width={42}
                    height={42}
                    alt="La liga picture"
                  /> 
                </div>
                <div className="grid grid-cols-3 grid-flow-row gap-12 w-full mt-6">
                    <span className="flex flex-col items-center justify-center h-full">
                        <div>
                        <Image
                            src={real}
                            width={38}
                            height={38}
                            alt="La liga picture"
                        /> 
                        </div>
                        <span className="text-sm">Real Madrid</span>
                        <div className="mt-2 flex flex-col items-center gap-1">
                            <h1 className="text-xl font-extrabold text-green-800">34.28%</h1>
                            <span className="text-sm text-orange-500">x2.92</span>
                        </div>
                    </span>
                    <span className="flex justify-center">
                        <h1 className="w-16 h-16 rounded-full text-center bg-gray-400 flex 
                        justify-center items-center text-white text-lg font-bold">01</h1>
                    </span>
                    <span className="flex flex-col items-center justify-center h-full">
                        <div>
                            <Image
                                src={barca}
                                width={38}
                                height={38}
                                alt="La liga picture"
                            />
                        </div>
                        <span className="text-sm">Barcelona</span>
                        <div className="mt-2 flex flex-col items-center gap-1">
                            <h1 className="text-xl font-extrabold text-green-800">65.72%</h1>
                            <span className="text-sm text-orange-500">x1.52</span>
                        </div>
                    </span>
                </div>
            </section>
        </Link>
    )
}

export default Card