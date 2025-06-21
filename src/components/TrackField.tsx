import React from 'react';
import CategoryArticles from './CategoryArticles';

const TrackField = () => (
  <div className="bg-gray-50 min-h-screen w-full">
    {/* Hero Section */}
    <div className="w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Track and field stadium"
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
          Jamaican & World Track & Field
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Follow the latest news, competitions, and highlights from Jamaica and the global athletics stage.
        </p>
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-3xl mx-auto py-10 px-4">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-green-700 dark:text-yellow-400">About Track & Field</h2>
        <p className="mb-2 text-gray-700">Track and field is a collection of athletic contests based on running, jumping, and throwing. It is one of the oldest sports, with roots in ancient Olympic Games, and is a major part of the modern Olympics.</p>
        <p className="mb-2 text-gray-700">Jamaica is world-renowned for its sprinters, producing legends like Usain Bolt, Shelly-Ann Fraser-Pryce, and Elaine Thompson-Herah.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Jamaican Track & Field Highlights</h2>
        <ul className="list-disc ml-6 mb-2 text-gray-700">
          <li>Olympic & World Champions: Jamaica has won dozens of Olympic and World Championship medals, especially in sprint events.</li>
          <li>Champs: The ISSA/Grace Kennedy Boys and Girls' Athletics Championships is the premier high school meet, showcasing future stars.</li>
          <li>Development: Clubs and school programs nurture talent from a young age.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Major Competitions</h2>
        <ul className="list-disc ml-6 mb-2 text-gray-700">
          <li><strong>Olympic Games:</strong> The pinnacle of track and field, held every four years.</li>
          <li><strong>World Athletics Championships:</strong> The top global event for athletics, held biennially.</li>
          <li><strong>Diamond League:</strong> Annual series of elite track and field meetings around the world.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Stay Updated</h2>
        <p className="mb-2 text-gray-700">Get the latest news, results, and schedules from trusted sources:</p>
        <ul className="list-disc ml-6 text-green-700">
          <li><a href="https://worldathletics.org/" className="underline" target="_blank" rel="noopener noreferrer">World Athletics</a></li>
          <li><a href="https://www.bbc.com/sport/athletics" className="underline" target="_blank" rel="noopener noreferrer">BBC Sport Athletics</a></li>
          <li><a href="https://www.trackalerts.com/" className="underline" target="_blank" rel="noopener noreferrer">TrackAlerts (Caribbean)</a></li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Learn More</h2>
        <ul className="list-disc ml-6">
          <li><a href="https://en.wikipedia.org/wiki/Track_and_field" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">Wikipedia: Track and Field</a></li>
          <li><a href="https://worldathletics.org/" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">World Athletics Official Site</a></li>
          <li><a href="https://www.britannica.com/sports/track-and-field-sports" className="text-green-700 underline" target="_blank" rel="noopener noreferrer">Britannica: Track and Field</a></li>
        </ul>
      </section>
      <CategoryArticles category="Track and Field" />
    </div>
  </div>
);

export default TrackField;
