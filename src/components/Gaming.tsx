import React from 'react';

const Gaming = () => (
  <div className="bg-gray-50 min-h-screen w-full">
    {/* Hero Section */}
    <div className="w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1500&q=80"
          alt="Gaming setup"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 flex space-x-1">
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <div className="w-4 h-4 bg-green-600 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Jamaican & World Gaming
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Dive into the latest news, tournaments, and highlights from Jamaica and the global gaming community.
        </p>
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-3xl mx-auto py-10 px-4">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-green-700 dark:text-yellow-400">About Gaming</h2>
        <p className="mb-2 text-gray-700">Gaming is a global phenomenon, spanning video games, esports, and tabletop games. With billions of players worldwide, gaming is a major part of youth culture and entertainment.</p>
        <p className="mb-2 text-gray-700">Jamaica’s gaming scene is growing, with local tournaments, esports teams, and a vibrant community of gamers and streamers.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Jamaican Gaming Highlights</h2>
        <ul className="list-disc ml-6 mb-2 text-gray-700">
          <li>Esports Jamaica: Local teams and players compete in FIFA, Call of Duty, League of Legends, and more.</li>
          <li>Events: Gaming tournaments and conventions are held in Kingston and across the island.</li>
          <li>Community: Jamaican gamers connect through social media, streaming, and clubs.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Major Competitions</h2>
        <ul className="list-disc ml-6 mb-2 text-gray-700">
          <li><strong>Esports World Championships:</strong> International tournaments for games like League of Legends, Dota 2, and Counter-Strike.</li>
          <li><strong>FIFAe World Cup:</strong> The top global competition for FIFA video game players.</li>
          <li><strong>Local Tournaments:</strong> Jamaican events for FIFA, Mortal Kombat, and more.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Stay Updated</h2>
        <p className="mb-2 text-gray-700">Get the latest news, events, and streams from trusted sources:</p>
        <ul className="list-disc ml-6 text-green-700">
          <li><a href="https://www.esportsjamaica.org/" className="underline" target="_blank" rel="noopener noreferrer">Esports Jamaica</a></li>
          <li><a href="https://www.bbc.com/news/technology" className="underline" target="_blank" rel="noopener noreferrer">BBC Gaming & Tech</a></li>
          <li><a href="https://www.esports.com/en" className="underline" target="_blank" rel="noopener noreferrer">Esports.com</a></li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Learn More</h2>
        <ul className="list-disc ml-6">
          <li><a href="https://en.wikipedia.org/wiki/Video_game" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">Wikipedia: Video Game</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Esports" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">Wikipedia: Esports</a></li>
          <li><a href="https://www.britannica.com/topic/electronic-sports" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">Britannica: Electronic Sports</a></li>
        </ul>
      </section>
    </div>
  </div>
);

export default Gaming;
