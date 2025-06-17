import React from 'react';

const Basketball = () => (
  <div className="bg-gray-50 min-h-screen w-full">
    {/* Hero Section */}
    <div className="w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1500&q=80"
          alt="Basketball court"
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
          Jamaican & World Basketball
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Explore the latest news, competitions, and highlights from Jamaica and the global basketball scene.
        </p>
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-3xl mx-auto py-10 px-4">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-green-700 dark:text-yellow-400">About Basketball</h2>
        <p className="mb-2 text-gray-700">Basketball is a dynamic team sport played by two teams of five players, aiming to score by shooting a ball through the opponent’s hoop. Invented in 1891, it is now one of the world’s most popular sports, played in over 200 countries.</p>
        <p className="mb-2 text-gray-700">Jamaica has a growing basketball culture, with local leagues and players making their mark internationally, including in the NBA and college basketball.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Jamaican Basketball Highlights</h2>
        <ul className="list-disc ml-6 mb-2 text-gray-700">
          <li>Jamaica National Teams: Compete in FIBA Americas and Caribbean tournaments, with both men’s and women’s squads.</li>
          <li>Local Leagues: The National Basketball League (NBL) and school competitions develop homegrown talent.</li>
          <li>Notable Players: Jamaicans have played in the NBA and overseas, including Samardo Samuels and Kimani Ffriend.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Major Competitions</h2>
        <ul className="list-disc ml-6 mb-2 text-gray-700">
          <li><strong>NBA:</strong> The premier professional basketball league in the world, based in the United States.</li>
          <li><strong>FIBA Basketball World Cup:</strong> The top international tournament for national teams, held every four years.</li>
          <li><strong>Olympic Basketball:</strong> Basketball has been an Olympic sport since 1936 (men) and 1976 (women).</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Stay Updated</h2>
        <p className="mb-2 text-gray-700">Get the latest news, scores, and fixtures from trusted sources:</p>
        <ul className="list-disc ml-6 text-green-700">
          <li><a href="https://www.fiba.basketball/" className="underline" target="_blank" rel="noopener noreferrer">FIBA Official Site</a></li>
          <li><a href="https://www.nba.com/" className="underline" target="_blank" rel="noopener noreferrer">NBA</a></li>
          <li><a href="https://www.jamaicabasketball.org/" className="underline" target="_blank" rel="noopener noreferrer">Jamaica Basketball Association</a></li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Learn More</h2>
        <ul className="list-disc ml-6">
          <li><a href="https://en.wikipedia.org/wiki/Basketball" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">Wikipedia: Basketball</a></li>
          <li><a href="https://www.britannica.com/sports/basketball" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">Britannica: Basketball</a></li>
          <li><a href="https://www.fiba.basketball/" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">FIBA Official Site</a></li>
        </ul>
      </section>
    </div>
  </div>
);

export default Basketball;
