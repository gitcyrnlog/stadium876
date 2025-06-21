// TheSportsDB API utility for football (soccer) results
const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/123';

// List all soccer/football leagues
export async function fetchSoccerLeagues() {
  const res = await fetch(`${BASE_URL}/all_leagues.php`);
  const data = await res.json();
  // Filter for soccer/football only
  return data.leagues.filter((l: any) => l.strSport === 'Soccer');
}

// Get events for a league by name and date (YYYY-MM-DD)
export async function fetchLeagueEventsByDate(leagueName: string, date: string) {
  const url = `${BASE_URL}/eventsday.php?d=${date}&l=${encodeURIComponent(leagueName)}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.events || [];
}
