import React, { useEffect, useState } from 'react';
import { fetchSoccerLeagues, fetchLeagueEventsByDate } from './apiFootball';
import { Header } from './football/Header';
import { HeroSection } from './football/HeroSection';
import { MatchesSection } from './football/MatchesSection';
import CategoryArticles from './CategoryArticles';

const DEFAULT_DATE = '2025-05-25';

const Basketball = () => {
  const [leagues, setLeagues] = useState<{ idLeague: string; strLeague: string }[]>([]);
  const [selectedLeague, setSelectedLeague] = useState('');
  const [searchDate, setSearchDate] = useState(DEFAULT_DATE);
  const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {
    fetchSoccerLeagues().then((leagues) => {
      // Filter for basketball leagues
      const basketballLeagues = leagues.filter((l: any) => l.strSport === 'Basketball');
      setLeagues(basketballLeagues);
      if (basketballLeagues.length > 0) setSelectedLeague(basketballLeagues[0].strLeague);
    });
  }, []);

  useEffect(() => {
    if (!selectedLeague) return;
    fetchLeagueEventsByDate(selectedLeague, searchDate).then((events) => {
      setMatches(
        (events || []).map((ev: any) => ({
          homeTeam: ev.strHomeTeam,
          awayTeam: ev.strAwayTeam,
          homeScore: ev.intHomeScore ?? '-',
          awayScore: ev.intAwayScore ?? '-',
          date: ev.dateEvent + ' ' + (ev.strTime || ''),
        }))
      );
    });
  }, [selectedLeague, searchDate]);

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
      {/* NBA Banner Nav Bar */}
      <div className="w-full bg-gradient-to-r from-black via-yellow-500 to-green-600 py-2 flex justify-center items-center shadow-md">
        <button
          type="button"
          className={`flex items-center gap-2 px-6 py-1 rounded-full font-bold text-lg shadow transition bg-white/90 hover:bg-white text-black
            ${selectedLeague === 'NBA' ? 'ring-4 ring-green-700 ring-opacity-60 scale-105' : ''}`}
          onClick={() => setSelectedLeague('NBA')}
        >
          <img src="https://images.ctfassets.net/h8q6lxmb5akt/5qXnOINbPrHKXWa42m6NOa/421ab176b501f5bdae71290a8002545c/nba-logo_2x.png" alt="NBA Logo" className="h-7 w-auto" />
          NBA
        </button>
      </div>
      <HeroSection>
        {leagues.slice(0, 5).map((l) => (
          <button
            key={l.idLeague}
            className={`text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200 ${selectedLeague === l.strLeague ? 'bg-green-700 text-white' : 'bg-gray-800 hover:bg-green-600 text-white'}`}
            onClick={() => setSelectedLeague(l.strLeague)}
          >
            {l.strLeague}
          </button>
        ))}
        <div className="ml-4">
          <input
            type="date"
            className="border-0 rounded-full px-4 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600 bg-white shadow transition-all duration-200 hover:ring-2 hover:ring-green-400 cursor-pointer"
            value={searchDate}
            onChange={e => setSearchDate(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
            style={{ minWidth: 140 }}
          />
        </div>
      </HeroSection>
      <div className="container mx-auto px-4">
        <MatchesSection
          leagueName={selectedLeague}
          matches={matches}
          matchweek={undefined}
        />
        <div className="max-w-3xl mx-auto py-10 px-4">
          <CategoryArticles category="Basketball" />
        </div>
      </div>
    </div>
  );
};

export default Basketball;
