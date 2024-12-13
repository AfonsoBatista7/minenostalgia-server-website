import { useEffect, useState } from 'react';

const PlayerStats = ({ playerName }) => {

    const [playerData, setPlayerData] = useState(null);

    useEffect(() => {
        const fetchPlayerData = async () => {
            try{
                const response = await fetch(`http://localhost:5000/stats/player/${playerName}`);
                const data = await response.json();

                  if (response.ok)
                    setPlayerData(data); // Set the received player data

            } catch(err) {
                console.error(err);
            }
        }

        fetchPlayerData();

    }, [playerName])

    // Check if playerData exists and map over the data to render it
    const renderStats = () => {
      if (!playerData) {
        return <p>Loading...</p>; // Show loading message if data is not yet available
      }

      const stats = [
        { name: 'Name', value: playerData.name },
        { name: 'Blocks Placed', value: playerData.blcksPlaced },
        { name: 'Blocks Destroyed', value: playerData.blcksDestroyed },
        { name: 'Blocks Mined', value: playerData.blockMined },
        { name: 'Kills', value: playerData.kills },
        { name: 'Mob Kills', value: playerData.mobKills },
        { name: 'Deaths', value: playerData.deaths },
        { name: 'Fish Caught', value: playerData.fishCaught },
        { name: 'Times Login', value: playerData.timeslogin },
        { name: 'Last Login', value: playerData.lastLogin },
        { name: 'Player Since', value: playerData.playerSince },
        { name: 'Time Played', value: playerData.timePlayed }
      ];

      return (
        <div>
          {stats.map((stat, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <strong>{stat.name}:</strong> {stat.value || 'N/A'}
            </div>
          ))}
        </div>
      );
    };

    return (
        <div className="player-stats">
            <h3>{playerName} Stats</h3>
            {renderStats()}
        </div>
    )
};

export default PlayerStats;
