import React from 'react';

const Football = () => (
  <div className="bg-gray-50 min-h-screen w-full">
    {/* Hero Section */}
    <div className="w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Football stadium"
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
          Jamaican & World Football
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Explore the latest news, competitions, and highlights from Jamaica and the global football scene.
        </p>
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-3xl mx-auto py-10 px-4">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-green-700 dark:text-yellow-400">About Football</h2>
        <p className="mb-2 text-gray-700">Football (soccer) is the world’s most popular sport, played by over 250 million people in more than 200 countries. In Jamaica, football is a source of national pride, with the Reggae Boyz and local leagues inspiring fans across the island.</p>
        <p className="mb-2 text-gray-700">The game is played between two teams of 11 players, aiming to score more goals than the opponent. Governed globally by FIFA, football unites people through its simplicity, passion, and drama.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Jamaican Football Highlights</h2>
        <ul className="list-disc ml-6 mb-2 text-gray-700">
          <li>Reggae Boyz: Jamaica’s national team, famous for their 1998 World Cup appearance and strong CONCACAF showings.</li>
          <li>Jamaica Premier League: The top domestic league, featuring clubs like Arnett Gardens, Waterhouse, and Harbour View.</li>
          <li>Youth & Development: Grassroots programs and academies are growing the next generation of Jamaican stars.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Major Competitions</h2>
        <ul className="list-disc ml-6 mb-2 text-gray-700">
          <li><strong>FIFA World Cup:</strong> The world’s biggest international tournament, held every four years.</li>
          <li><strong>CONCACAF Gold Cup:</strong> The top competition for national teams in North America, Central America, and the Caribbean.</li>
          <li><strong>FIFA Club World Cup 2025:</strong> Currently taking place in the United States, featuring top clubs from every continent, including Chelsea, Real Madrid, Boca Juniors, and more.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Stay Updated</h2>
        <p className="mb-2 text-gray-700">Get the latest news, scores, and fixtures from trusted sources:</p>
        <ul className="list-disc ml-6 text-green-700">
          <li><a href="https://www.bbc.com/sport/football" className="underline" target="_blank" rel="noopener noreferrer">BBC Sport Football</a></li>
          <li><a href="https://www.espn.com/soccer/" className="underline" target="_blank" rel="noopener noreferrer">ESPN Soccer</a></li>
          <li><a href="https://www.jamaicafootballfederation.com/" className="underline" target="_blank" rel="noopener noreferrer">Jamaica Football Federation</a></li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Learn More</h2>
        <ul className="list-disc ml-6">
          <li><a href="https://en.wikipedia.org/wiki/Association_football" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">Wikipedia: Association Football</a></li>
          <li><a href="https://www.fifa.com/" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">FIFA Official Site</a></li>
          <li><a href="https://www.britannica.com/sports/football-soccer" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">Britannica: Football</a></li>
        </ul>
      </section>
    </div>
  </div>
);

export default Football;
