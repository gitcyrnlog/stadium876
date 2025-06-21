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
          {/* Article 1: Florian Wirtz to Liverpool */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <a href="https://liverpooloffside.sbnation.com/2025/6/20/24452735/liverpool-fc-transfer-news-official-florian-wirtz-is-a-liverpool-player-milos-kerkez" target="_blank" rel="noopener noreferrer">
              <img src="https://th.bing.com/th/id/OIP.Po7FTlw1YY0uMJJKlgbyBAHaE8?rs=1&pid=ImgDetMain&cb=idpwebpc2" alt="Florian Wirtz Liverpool" className="w-full h-56 object-cover" />
            </a>
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">🎙️ Florian Wirtz Moves to Liverpool in Record-Breaking Deal</h2>
              <p className="text-gray-700 mb-2">Liverpool have sealed the signing of <b>Florian Wirtz</b>, the prodigious German attacking midfielder, from Bayer Leverkusen in a monumental transfer valued at <b>£100 million plus up to £16 million in add-ons</b>—making him the club’s most expensive acquisition ever.</p>
              <ul className="text-gray-600 text-sm mb-2 list-disc ml-5">
                <li><b>Tactical boost:</b> Wirtz brings flair, vision, and goal threat—10 goals and 12 assists last season.</li>
                <li><b>Long-term succession:</b> Could be a creative centerpiece as Salah’s era winds down.</li>
                <li><b>Strategic clarity:</b> Liverpool’s clear vision for Wirtz’s role was key to the move.</li>
              </ul>
              <blockquote className="italic text-green-700 border-l-4 border-green-400 pl-3 mb-2">“I feel very happy and very proud… looking forward to playing my first game.”</blockquote>
              <div className="flex flex-wrap gap-2 text-xs text-blue-700 mb-2">
                <a href="https://www.reuters.com/sports/soccer/liverpool-shatter-club-transfer-record-sign-germany-midfielder-wirtz-2025-06-20/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Reuters</a>
                <a href="https://www.liverpoolfc.com/news/liverpool-agree-signing-florian-wirtz-bayer-leverkusen?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">LiverpoolFC.com</a>
                <a href="https://www.theguardian.com/football/2025/jun/20/florian-wirtz-liverpool-bayer-leverkusen-club-record-116m-deal?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">The Guardian</a>
              </div>
              <a href="https://www.youtube.com/watch?v=QrA1hF7rBq4&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-red-600 hover:underline font-semibold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8.001a2.752 2.752 0 0 0-1.936-1.945C18.003 6 12 6 12 6s-6.003 0-7.864.056A2.752 2.752 0 0 0 2.2 8.001 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.752 2.752 0 0 0 1.936 1.945C5.997 18 12 18 12 18s6.003 0 7.864-.056A2.752 2.752 0 0 0 21.8 15.999 28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15V9l6 3-6 3z"/></svg>
                Watch: Transfer Show
              </a>
            </div>
          </div>
          {/* Article 2: Rayan Cherki to Manchester City */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <a href="https://mancitysquare.com/this-is-a-dream-says-rayan-cherki-as-he-talks-about-his-move-to-manchester-city?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
              <img src="https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_18,w_2845,h_1600/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F347%2F01jxz7k9p9x0s6jhp25e.jpg" alt="Rayan Cherki Manchester City" className="w-full h-56 object-cover" />
            </a>
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">🌟 Rayan Cherki: A French Phenom Heads to Manchester City</h2>
              <p className="text-gray-700 mb-2">Manchester City have secured <b>Rayan Cherki</b>, the dynamic French attacking midfielder, from Lyon on a <b>£34 million deal</b> plus potential add-ons. Cherki, 21, signed a five-year contract and is expected to integrate into Pep Guardiola’s system for upcoming campaigns.</p>
              <ul className="text-gray-600 text-sm mb-2 list-disc ml-5">
                <li><b>Versatility:</b> 12 goals and 20 assists last season, can play various attacking roles.</li>
                <li><b>Early disappointment:</b> Club World Cup debut was underwhelming, but potential is high.</li>
                <li><b>Future pathway:</b> Development depends on tactical fit and competition at City.</li>
              </ul>
              <blockquote className="italic text-blue-700 border-l-4 border-blue-400 pl-3 mb-2">“I’m very excited… They’re the biggest club in Europe. I love the style of play… Guardiola is the best coach in history.”</blockquote>
              <div className="flex flex-wrap gap-2 text-xs text-blue-700 mb-2">
                <a href="https://www.espn.com/football/story/_/id/45479903/man-city-transfer-news-rayan-cherki-lyon-france?utm_campaign=Bundle&utm_medium=referral&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">ESPN</a>
                <a href="https://mancitysquare.com/this-is-a-dream-says-rayan-cherki-as-he-talks-about-his-move-to-manchester-city?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">ManCitySquare</a>
              </div>
              <a href="https://www.youtube.com/watch?v=3oVQ7qVSgnA&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-blue-600 hover:underline font-semibold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8.001a2.752 2.752 0 0 0-1.936-1.945C18.003 6 12 6 12 6s-6.003 0-7.864.056A2.752 2.752 0 0 0 2.2 8.001 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.752 2.752 0 0 0 1.936 1.945C5.997 18 12 18 12 18s6.003 0 7.864-.056A2.752 2.752 0 0 0 21.8 15.999 28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15V9l6 3-6 3z"/></svg>
                Watch: Cherki Interview
              </a>
            </div>
          </div>
        </div>
        {/* What to Watch Next Table */}
        <div className="mt-8 bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">🧭 What to Watch Next</h3>
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-700 border-b">
                <th className="py-2">Player</th>
                <th className="py-2">Next Steps</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-semibold">Wirtz</td>
                <td className="py-2">Official shirt number, pre-season form, impact in Premier League</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Cherki</td>
                <td className="py-2">Adaptation to City’s style, minutes allocation, first Premier League goal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="max-w-3xl mx-auto py-10 px-4">
          <CategoryArticles category="Football" />
        </div>
      </div>
    </div>
  );
};

export default Football;
