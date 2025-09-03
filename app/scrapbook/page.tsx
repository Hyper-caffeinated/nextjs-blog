import { HeroBanner } from "../components/HeroBanner";
import React from "react";

const Entries = [
  { imageUrl: "https://i.imgur.com/njHroyT.jpeg" , caption: "Duck 1", author: "Thomas", date: "4/2/2025" },
  { imageUrl: "https://i.imgur.com/njHroyT.jpeg" , caption: "Duck 2", author: "Also Thomas", date: "4/2/2025"}
]

// date will go with author (ex: "sigma boy, Jan 2024")
const ScrapbookEntry = ({ imageUrl, caption, author, date }: { imageUrl: string; caption: string; author: string; date: string }) => (
  <div className="m-4 p-4 border-2 border-stone-600 bg-white rounded-lg shadow-lg max-w-xs">
    <img
      src={ imageUrl }
      alt={ caption }
      
      className="w-full h-64 object-cover rounded-md"
    />
    <p className="mt-3 text-center text-sm text-stone-800 font-serif font-medium">{ caption }</p>
    <p className="mt-3 text-center text-sm text-stone-600 font-serif font-medium">{ author }, { date }</p>
  </div>
);

const Scrapbook = () => {
  return (
    <main>
      <HeroBanner
        title="Scrapbook"
        subtitle="A collection of bird and wildlife community photographs."
        imageUrl="https://i.imgur.com/Rhtg6Os.jpeg"
        height={40}
      />
      <section id="scrapbook" className="py-20 bg-stone-100 flex min-h-[50vh] items-center">
        <div className="container mx-auto px-6">
          { Entries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center">
              {Entries.map(({ imageUrl, caption, author, date }, index) => (
                <ScrapbookEntry key={ index } imageUrl={ imageUrl } caption={ caption } author={ author } date={ date }/>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No scrapbook entries at the moment. Please check back later!</p>
          ) }
        </div>
      </section>
    </main>
  )
}

export default Scrapbook;
