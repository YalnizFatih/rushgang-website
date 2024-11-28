import React from 'react';

const ScoreboardImage = ({ teams }) => {
    const sortedTeams = [...teams].sort((a, b) => b.totalScore - a.totalScore);
    const firstHalf = sortedTeams.slice(0, 9);
    const secondHalf = sortedTeams.slice(9, 18);

    const TableContent = ({ teams, startIndex = 0 }) => (
        <table className="w-full">
            <thead>
                <tr className="bg-[#1a1a1a]">
                    <th className="p-[15px] text-left text-[#ff4500] text-[50px] font-bold">RANK</th>
                    <th className="p-[15px] text-left text-[#ff4500] text-[50px] font-bold">TEAM NAME</th>
                    <th className="p-[15px] text-center text-[#ff4500] text-[50px] font-bold">MATCHES PLAYED</th>
                    <th className="p-[15px] text-center text-[#ff4500] text-[50px] font-bold">WWCD</th>
                    <th className="p-[15px] text-center text-[#ff4500] text-[50px] font-bold">PLACE</th>
                    <th className="p-[15px] text-center text-[#ff4500] text-[50px] font-bold">KILLS PTS.</th>
                    <th className="p-[15px] text-center text-[#ff4500] text-[50px] font-bold">TOTAL PTS.</th>
                </tr>
            </thead>
            <tbody>
                {teams.map((team, index) => {
                    const matchesPlayed = Object.keys(team)
                        .filter(key => key.startsWith('match'))
                        .filter(match => team[match].rank > 0 || team[match].kills > 0).length;

                    const wwcd = Object.keys(team)
                        .filter(key => key.startsWith('match'))
                        .filter(match => team[match].rank === 1).length;

                    const placementPoints = Object.keys(team)
                        .filter(key => key.startsWith('match'))
                        .reduce((sum, match) => {
                            const rank = team[match].rank;
                            return sum + (rank === 1 ? 10 :
                                rank === 2 ? 6 :
                                    rank === 3 ? 5 :
                                        rank === 4 ? 4 :
                                            rank === 5 ? 3 :
                                                rank === 6 ? 2 :
                                                    rank === 7 || rank === 8 ? 1 : 0);
                        }, 0);

                    const killPoints = Object.keys(team)
                        .filter(key => key.startsWith('match'))
                        .reduce((sum, match) => sum + (team[match].kills || 0), 0);

                    return (
                        <tr key={team.id} className="border-b border-[#333]">
                            <td className="p-[15px] text-left text-white text-[50px]">{startIndex + index + 1}</td>
                            <td className="p-[15px] text-left text-white text-[50px]">{team.name}</td>
                            <td className="p-[15px] text-center text-white text-[50px]">{matchesPlayed}</td>
                            <td className="p-[15px] text-center text-white text-[50px]">{wwcd}</td>
                            <td className="p-[15px] text-center text-white text-[50px]">{placementPoints}</td>
                            <td className="p-[15px] text-center text-white text-[50px]">{killPoints}</td>
                            <td className="p-[15px] text-center text-white text-[50px]">{team.totalScore}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );

    return (
        <div style={{
            width: '1920px',
            height: '1080px',
            backgroundColor: '#111',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1 className="text-[#ff4500] text-[25px] font-bold text-center py-[10px]">
                WEEK 1 DAY 1 MATCH
            </h1>

            <div className="flex-1 grid grid-cols-2 gap-[10px] px-[10px]" style={{ minHeight: 0 }}>
                <div className="bg-[#1a1a1a] p-[5px]">
                    <TableContent teams={firstHalf} startIndex={0} />
                </div>
                <div className="bg-[#1a1a1a] p-[5px]">
                    <TableContent teams={secondHalf} startIndex={9} />
                </div>
            </div>
        </div>
    );
};

export default ScoreboardImage; 