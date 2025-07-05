// API utility for football (soccer) and basketball results via backend proxy
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api';

// List all leagues (soccer, basketball, etc.)
export async function fetchSoccerLeagues() {
  const res = await fetch(`${BASE_URL}/all_leagues`);
  const data = await res.json();
  // Filter for soccer/football only
  return data.leagues.filter((l: any) => l.strSport === 'Soccer' || l.strSport === 'Basketball');
}

// Get events for a league by name and date (YYYY-MM-DD)
export async function fetchLeagueEventsByDate(leagueName: string, date: string) {
  const url = `${BASE_URL}/eventsday?d=${date}&l=${encodeURIComponent(leagueName)}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.events || [];
}
