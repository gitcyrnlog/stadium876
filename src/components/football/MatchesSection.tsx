import React from 'react';
import { MatchCard } from './MatchCard';
type Match = {
  homeTeam: string;
  awayTeam: string;
  homeScore: number | string;
  awayScore: number | string;
  date: string;
};
type MatchesSectionProps = {
  leagueName: string;
  matches: Match[];
  matchweek?: string;
};
export const MatchesSection = ({ leagueName, matches, matchweek }: MatchesSectionProps) => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <h2 className="font-bold text-sm">{leagueName}</h2>
            {matchweek && <span className="text-xs text-gray-500">{matchweek}</span>}
          </div>
          <button className="text-xs text-gray-600 hover:text-gray-900">View All</button>
        </div>
        <div className="divide-y divide-gray-100">
          {matches.map((match, index) => (
            <MatchCard
              key={index}
              homeTeam={match.homeTeam}
              awayTeam={match.awayTeam}
              homeScore={match.homeScore}
              awayScore={match.awayScore}
              date={match.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
