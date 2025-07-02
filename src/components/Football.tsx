import React, { useEffect, useState } from 'react';
import { fetchSoccerLeagues, fetchLeagueEventsByDate } from './apiFootball';
import { Header } from './football/Header';
import { HeroSection } from './football/HeroSection';
import { MatchesSection } from './football/MatchesSection';
import CategoryArticles from './CategoryArticles';

const DEFAULT_DATE = '2025-05-25';

const Football = () => {
  const [leagues, setLeagues] = useState<{ idLeague: string; strLeague: string }[]>([]);
  const [selectedLeague, setSelectedLeague] = useState('');
  const [searchDate, setSearchDate] = useState(DEFAULT_DATE);
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch leagues on mount
  useEffect(() => {
    fetchSoccerLeagues().then((leagues) => {
      setLeagues(leagues);
      if (leagues.length > 0) setSelectedLeague(leagues[0].strLeague);
    });
  }, []);

  // Fetch events when league or date changes
  useEffect(() => {
    if (!selectedLeague) return;
    setLoading(true);
    setError('');
    fetchLeagueEventsByDate(selectedLeague, searchDate)
      .then((events) => {
        setMatches(
          (events || []).map((ev: any) => ({
            homeTeam: ev.strHomeTeam,
            awayTeam: ev.strAwayTeam,
            homeScore: ev.intHomeScore ?? '-',
            awayScore: ev.intAwayScore ?? '-',
            date: ev.dateEvent + ' ' + (ev.strTime || ''),
          }))
        );
      })
      .catch(() => setError('Failed to load results'))
      .finally(() => setLoading(false));
  }, [selectedLeague, searchDate]);

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <Header />
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
        {/* Modern Articles & Videos Section - stacked vertically */}
        <div className="flex flex-col gap-8 mt-8">
          {/* Removed Florian Wirtz and Rayan Cherki articles */}
        </div>
        {/* What to Watch Next Table removed */}
        <div className="max-w-3xl mx-auto py-10 px-4">
          <CategoryArticles category="Football" />
        </div>
      </div>
    </div>
  );
};

export default Football;
