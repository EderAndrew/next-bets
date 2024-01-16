'use client'
import Card from "@/components/cards/page"

const App = () => {
  return(
    <main className="w-full h-screen bg-gray-100">
      <div className="w-screen h-screen flex justify-center ">
        <section className="container w-[80%] h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-400">Place a Bet</h1>
          <Card />
        </section>
      </div>
    </main>
  )
}

export default App