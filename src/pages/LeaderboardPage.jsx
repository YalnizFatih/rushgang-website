import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import html2canvas from 'html2canvas';
import ScoreboardImage from '../components/ScoreboardImage';

const LeaderboardPage = () => {
    const [teams, setTeams] = useState(() => {
        const savedTeams = localStorage.getItem('teams');
        return savedTeams ? JSON.parse(savedTeams) : [
            {
                id: 1,
                name: 'Takım A',
                match1: { rank: 0, kills: 0 },
                match2: { rank: 0, kills: 0 },
                match3: { rank: 0, kills: 0 },
                match4: { rank: 0, kills: 0 },
                match5: { rank: 0, kills: 0 },
                totalScore: 0
            }
        ];
    });

    useEffect(() => {
        localStorage.setItem('teams', JSON.stringify(teams));
    }, [teams]);

    const [editingId, setEditingId] = useState(null);
    const [editingValues, setEditingValues] = useState({});
    const [showBulkAdd, setShowBulkAdd] = useState(false);
    const [bulkTeams, setBulkTeams] = useState('');
    const [selectedTeams, setSelectedTeams] = useState([]);

    const handleEdit = (team) => {
        setEditingId(team.id);
        setEditingValues({ ...team });
    };

    const handleSave = () => {
        setTeams(teams.map(t => t.id === editingId ? editingValues : t));
        setEditingId(null);
        setEditingValues({});
    };

    const handleCancel = () => {
        setEditingId(null);
        setEditingValues({});
    };

    const calculateScore = (team) => {
        let totalScore = 0;
        for (let i = 1; i <= 5; i++) {
            const match = team[`match${i}`];
            if (!match) continue;

            const rankPoints =
                match.rank === 1 ? 10 :
                    match.rank === 2 ? 6 :
                        match.rank === 3 ? 5 :
                            match.rank === 4 ? 4 :
                                match.rank === 5 ? 3 :
                                    match.rank === 6 ? 2 :
                                        match.rank === 7 || match.rank === 8 ? 1 : 0;

            const killPoints = match.kills || 0;

            totalScore += rankPoints + killPoints;
        }
        return totalScore;
    };

    const handleInputChange = (team, matchNum, field, value) => {
        const updatedTeam = { ...team };
        const parsedValue = parseInt(value) || 0;

        if (field === 'name') {
            updatedTeam.name = value;
        } else {
            updatedTeam[`match${matchNum}`] = {
                ...updatedTeam[`match${matchNum}`],
                [field]: parsedValue
            };
        }

        updatedTeam.totalScore = calculateScore(updatedTeam);

        const updatedTeams = teams.map(t => t.id === team.id ? updatedTeam : t);
        setTeams(updatedTeams);
        localStorage.setItem('teams', JSON.stringify(updatedTeams));
    };

    const addNewTeam = () => {
        const maxId = Math.max(...teams.map(team => team.id), 0);
        const newTeam = {
            id: maxId + 1,
            name: `Yeni Takım ${maxId + 1}`,
            match1: { rank: 0, kills: 0 },
            match2: { rank: 0, kills: 0 },
            match3: { rank: 0, kills: 0 },
            match4: { rank: 0, kills: 0 },
            match5: { rank: 0, kills: 0 },
            totalScore: 0
        };
        setTeams([...teams, newTeam]);
    };

    const handleBulkAdd = () => {
        const teamNames = bulkTeams
            .split('\n')
            .map(name => name.trim())
            .filter(name => name !== '');

        if (teamNames.length === 0) {
            alert('Lütfen en az bir takım ismi girin');
            return;
        }

        const maxId = Math.max(...teams.map(team => team.id), 0);

        const newTeams = teamNames.map((name, index) => ({
            id: maxId + index + 1,
            name: name,
            match1: { rank: 0, kills: 0 },
            match2: { rank: 0, kills: 0 },
            match3: { rank: 0, kills: 0 },
            match4: { rank: 0, kills: 0 },
            match5: { rank: 0, kills: 0 },
            totalScore: 0
        }));

        setTeams(prevTeams => [...prevTeams, ...newTeams]);

        setBulkTeams('');
        setShowBulkAdd(false);

        console.log('Eklenen takımlar:', newTeams);
    };

    const matchColumns = [
        { key: 'match1', title: '1. Maç' },
        { key: 'match2', title: '2. Maç' },
        { key: 'match3', title: '3. Maç' },
        { key: 'match4', title: '4. Maç' },
        { key: 'match5', title: '5. Maç' },
    ];

    const handleDelete = (teamId) => {
        if (window.confirm('Bu takımı silmek istediğinize emin misiniz?')) {
            setTeams(prevTeams => prevTeams.filter(team => team.id !== teamId));
            setSelectedTeams(prevSelected => prevSelected.filter(id => id !== teamId));
        }
    };

    const handleBulkDelete = () => {
        if (selectedTeams.length === 0) {
            alert('Lütfen silmek için takım seçin');
            return;
        }

        if (window.confirm(`${selectedTeams.length} takımı silmek istediğinize emin misiniz?`)) {
            setTeams(prevTeams => prevTeams.filter(team => !selectedTeams.includes(team.id)));
            setSelectedTeams([]);
        }
    };

    const toggleTeamSelection = (teamId) => {
        setSelectedTeams(prev =>
            prev.includes(teamId)
                ? prev.filter(id => id !== teamId)
                : [...prev, teamId]
        );
    };

    const toggleAllTeams = () => {
        if (selectedTeams.length === teams.length) {
            setSelectedTeams([]);
        } else {
            setSelectedTeams(teams.map(team => team.id));
        }
    };

    const handleExportImage = () => {
        const imageElement = document.querySelector('.scoreboard-image');

        html2canvas(imageElement, {
            backgroundColor: null,
            scale: 2,
        }).then(canvas => {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'scoreboard.png';
            link.click();
        });
    };

    const sortedTeams = [...teams].sort((a, b) => {
        if (b.totalScore !== a.totalScore) {
            return b.totalScore - a.totalScore;
        }
        const totalKillsA = Object.keys(a)
            .filter(key => key.startsWith('match'))
            .reduce((sum, match) => sum + (a[match].kills || 0), 0);
        const totalKillsB = Object.keys(b)
            .filter(key => key.startsWith('match'))
            .reduce((sum, match) => sum + (b[match].kills || 0), 0);
        return totalKillsB - totalKillsA;
    });

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gaming-dark pt-20 px-4">
                <div className="max-w-full mx-auto">
                    <div className="bg-dark/90 backdrop-blur-sm p-6 rounded-lg">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-xl font-normal text-white">Global Scrim League - 1</h2>
                                <div className="mt-2 text-sm text-gray-400">
                                    Sıralama Puanları: 1.=10p, 2.=6p, 3.=5p, 4.=4p, 5.=3p, 6.=2p, 7-8.=1p
                                </div>
                                <div className="mt-1 text-sm text-gray-400">
                                    Kill Puanları: Her kill = 1 puan
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setShowBulkAdd(true)}
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm rounded"
                                >
                                    Toplu Takım Ekle
                                </button>
                                <button
                                    onClick={addNewTeam}
                                    className="bg-gaming-blue hover:bg-blue-600 text-white px-3 py-1 text-sm rounded"
                                >
                                    Yeni Satır
                                </button>
                                <button
                                    onClick={handleExportImage}
                                    className="bg-gaming-blue hover:bg-blue-600 text-white px-3 py-1 text-sm rounded"
                                >
                                    Resim Olarak İndir
                                </button>
                                {selectedTeams.length > 0 && (
                                    <button
                                        onClick={handleBulkDelete}
                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-sm rounded"
                                    >
                                        Seçilenleri Sil ({selectedTeams.length})
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Toplu Ekleme Modal */}
                        {showBulkAdd && (
                            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
                                <div className="bg-dark p-6 rounded-lg w-full max-w-md">
                                    <h3 className="text-xl font-normal text-white mb-4">Toplu Takım Ekle</h3>
                                    <p className="text-sm text-gray-400 mb-4">
                                        Her satıra bir takım ismi yazın
                                    </p>
                                    <textarea
                                        value={bulkTeams}
                                        onChange={(e) => setBulkTeams(e.target.value)}
                                        className="w-full h-48 bg-gray-800 text-white border border-gaming-blue/20 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gaming-blue"
                                        placeholder="Örnek:
PARADOX E-SPORTS
ZEİGH ESPORTS
LAST HUNTERS"
                                    />
                                    <div className="flex justify-end gap-4">
                                        <button
                                            onClick={() => setShowBulkAdd(false)}
                                            className="text-gray-400 hover:text-white"
                                        >
                                            İptal
                                        </button>
                                        <button
                                            onClick={handleBulkAdd}
                                            className="bg-gaming-blue hover:bg-blue-600 text-white px-4 py-2 rounded"
                                        >
                                            Ekle
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="table-container">
                            <div className="overflow-x-auto border border-gaming-blue/20 rounded">
                                <table className="w-full text-sm text-gray-300">
                                    <thead>
                                        <tr className="border-b border-gaming-blue/20">
                                            <th className="py-2 px-3 text-left font-normal bg-dark border-r border-gaming-blue/20">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedTeams.length === teams.length}
                                                    onChange={toggleAllTeams}
                                                    className="rounded border-gray-600 text-gaming-blue focus:ring-gaming-blue"
                                                />
                                            </th>
                                            <th className="py-2 px-3 text-left font-normal bg-dark border-r border-gaming-blue/20">#</th>
                                            <th className="py-2 px-3 text-left font-normal bg-dark border-r border-gaming-blue/20">Takımlar</th>
                                            <th className="py-2 px-3 text-left font-normal bg-dark border-r border-gaming-blue/20">Taglar</th>
                                            {matchColumns.map(col => (
                                                <React.Fragment key={col.key}>
                                                    <th className="py-2 px-3 text-center font-normal bg-dark border-r border-gaming-blue/20">Sıralama</th>
                                                    <th className="py-2 px-3 text-center font-normal bg-dark border-r border-gaming-blue/20">Leş</th>
                                                </React.Fragment>
                                            ))}
                                            <th className="py-2 px-3 text-center font-normal bg-dark border-r border-gaming-blue/20">Toplam Puan</th>
                                            <th className="py-2 px-3 text-center font-normal bg-dark">İşlemler</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {teams.map((team, index) => (
                                            <tr key={team.id} className={`border-b border-gaming-blue/20 hover:bg-white/5 ${selectedTeams.includes(team.id) ? 'bg-gaming-blue/10' : ''
                                                }`}>
                                                <td className="py-2 px-3 border-r border-gaming-blue/20">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedTeams.includes(team.id)}
                                                        onChange={() => toggleTeamSelection(team.id)}
                                                        className="rounded border-gray-600 text-gaming-blue focus:ring-gaming-blue"
                                                    />
                                                </td>
                                                <td className="py-2 px-3 border-r border-gaming-blue/20">{index + 1}</td>
                                                <td className="py-2 px-3 border-r border-gaming-blue/20">
                                                    <input
                                                        type="text"
                                                        value={team.name}
                                                        className="w-full px-1 py-0 focus:outline-none focus:ring-1 focus:ring-gaming-blue bg-transparent text-white"
                                                        onChange={(e) => {
                                                            const updatedTeam = { ...team, name: e.target.value };
                                                            setTeams(teams.map(t => t.id === team.id ? updatedTeam : t));
                                                        }}
                                                    />
                                                </td>
                                                <td className="py-2 px-3 border-r border-gaming-blue/20"></td>
                                                {matchColumns.map(col => (
                                                    <React.Fragment key={col.key}>
                                                        <td className="py-2 px-3 text-center border-r border-gaming-blue/20">
                                                            <input
                                                                type="number"
                                                                value={team[col.key]?.rank || ''}
                                                                className="w-16 px-1 py-0 text-center focus:outline-none focus:ring-1 focus:ring-gaming-blue bg-transparent text-white"
                                                                min="0"
                                                                max="21"
                                                                onChange={(e) => {
                                                                    const updatedTeam = {
                                                                        ...team,
                                                                        [col.key]: { ...team[col.key], rank: parseInt(e.target.value) || 0 }
                                                                    };
                                                                    updatedTeam.totalScore = calculateScore(updatedTeam);
                                                                    setTeams(teams.map(t => t.id === team.id ? updatedTeam : t));
                                                                }}
                                                            />
                                                        </td>
                                                        <td className="py-2 px-3 text-center border-r border-gaming-blue/20">
                                                            <input
                                                                type="number"
                                                                value={team[col.key]?.kills || ''}
                                                                className="w-16 px-1 py-0 text-center focus:outline-none focus:ring-1 focus:ring-gaming-blue bg-transparent text-white"
                                                                min="0"
                                                                onChange={(e) => {
                                                                    const updatedTeam = {
                                                                        ...team,
                                                                        [col.key]: { ...team[col.key], kills: parseInt(e.target.value) || 0 }
                                                                    };
                                                                    updatedTeam.totalScore = calculateScore(updatedTeam);
                                                                    setTeams(teams.map(t => t.id === team.id ? updatedTeam : t));
                                                                }}
                                                            />
                                                        </td>
                                                    </React.Fragment>
                                                ))}
                                                <td className="py-2 px-3 text-center font-medium border-r border-gaming-blue/20">
                                                    {team.totalScore}
                                                </td>
                                                <td className="py-2 px-3 text-center">
                                                    <button
                                                        onClick={() => handleDelete(team.id)}
                                                        className="text-red-600 hover:text-red-700"
                                                    >
                                                        🗑️
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Export tablosu - Sadece text */}
            <div className="scoreboard-image absolute left-[-9999px]">
                <ScoreboardImage teams={sortedTeams} />
            </div>
        </>
    );
};

export default LeaderboardPage; 