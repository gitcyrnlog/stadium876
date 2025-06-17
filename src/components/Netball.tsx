import React from 'react';

const Netball = () => (
  <div className="bg-gray-50 min-h-screen w-full">
    {/* Hero Section */}
    <div className="w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1500&q=80"
          alt="Netball court"
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
          Jamaican & World Netball
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Discover the latest news, competitions, and highlights from Jamaica and the global netball scene.
        </p>
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-3xl mx-auto py-10 px-4">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-green-700 dark:text-yellow-400">About Netball</h2>
        <p className="mb-2 text-gray-700">Netball is a fast-paced team sport, primarily played by women, with over 20 million players in more than 80 countries. It is especially popular in Commonwealth nations, including Jamaica, Australia, New Zealand, and England.</p>
        <p className="mb-2 text-gray-700">The game is played between two teams of seven players, aiming to score goals by passing a ball and shooting it through a raised hoop. Netball is known for its speed, skill, and teamwork.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Jamaican Netball Highlights</h2>
        <ul className="list-disc ml-6 mb-2 text-gray-700">
          <li>Sunshine Girls: Jamaica’s national team, consistently ranked among the world’s best, with multiple World Cup and Commonwealth Games medals.</li>
          <li>Local Leagues: Netball is played at schools and clubs across Jamaica, developing top talent for the national team.</li>
          <li>Youth & Development: Grassroots programs nurture the next generation of netball stars.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Major Competitions</h2>
        <ul className="list-disc ml-6 mb-2 text-gray-700">
          <li><strong>Netball World Cup:</strong> The premier international tournament, held every four years.</li>
          <li><strong>Commonwealth Games:</strong> Netball is a core sport, with Jamaica regularly contending for medals.</li>
          <li><strong>Fast5 Netball World Series:</strong> A fast-paced, modified version of the game featuring top nations.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Stay Updated</h2>
        <p className="mb-2 text-gray-700">Get the latest news, scores, and fixtures from trusted sources:</p>
        <ul className="list-disc ml-6 text-green-700">
          <li><a href="https://netballjamaica.com/" className="underline" target="_blank" rel="noopener noreferrer">Netball Jamaica</a></li>
          <li><a href="https://www.bbc.com/sport/netball" className="underline" target="_blank" rel="noopener noreferrer">BBC Sport Netball</a></li>
          <li><a href="https://netball.sport/" className="underline" target="_blank" rel="noopener noreferrer">World Netball</a></li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Learn More</h2>
        <ul className="list-disc ml-6">
          <li><a href="https://en.wikipedia.org/wiki/Netball" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">Wikipedia: Netball</a></li>
          <li><a href="https://netball.sport/" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">World Netball Official Site</a></li>
          <li><a href="https://www.britannica.com/sports/netball" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">Britannica: Netball</a></li>
        </ul>
      </section>
    </div>
  </div>
);

export default Netball;
