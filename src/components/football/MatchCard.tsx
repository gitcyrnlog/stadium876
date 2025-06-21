import React from 'react';
type MatchCardProps = {
  homeTeam: string;
  awayTeam: string;
  homeScore: number | string;
  awayScore: number | string;
  date: string;
};
export const MatchCard = ({ homeTeam, awayTeam, homeScore, awayScore, date }: MatchCardProps) => {
  return (
    <div className="bg-white border-b border-gray-200 py-2 px-4 hover:bg-gray-50 cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 flex-1">
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
          <span className="font-medium text-sm">{homeTeam}</span>
        </div>
        <div className="flex items-center justify-center space-x-2 w-16">
          <span className="font-medium text-sm">{homeScore}</span>
          <span className="text-xs text-gray-500">-</span>
          <span className="font-medium text-sm">{awayScore}</span>
        </div>
        <div className="flex items-center space-x-3 flex-1 justify-end">
          <span className="font-medium text-sm">{awayTeam}</span>
          <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div className="text-xs text-gray-500 text-center mt-1">
        {new Date(date).toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        })}
      </div>
    </div>
  );
};
