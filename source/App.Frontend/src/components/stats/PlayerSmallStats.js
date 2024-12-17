import { useEffect, useState } from 'react';

const PlayerStats = () => {

    const [allPlayers, setAllPlayers] = useState(null);

    useEffect(() => {
        const fetchAllPlayers = async () => {
            try{
                const response = await fetch(`http://localhost:5000/players`);
                const data = await response.json();

                if (response.ok)
                  setAllPlayers(sortPlayers(data)); // Set the received player data

            } catch(err) {
                console.error(err);
            }
        }

        fetchAllPlayers();

    }, [])

    const convertTimePlayedToMinutes = (timePlayed) => {
        const hoursMatch = timePlayed.match(/(\d+)\s*Hr/);
        const minutesMatch = timePlayed.match(/(\d+)\s*Min/);

        const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
        const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

        return (hours * 60) + minutes; // Return total time in minutes
    }

    const sortPlayers = (players) => {
       return players.sort((a, b) => {
            const timeA = convertTimePlayedToMinutes(a.timePlayed);
            const timeB = convertTimePlayedToMinutes(b.timePlayed);

            return timeB - timeA; // Sort in descending order
        })
    }


    // Check if playerData exists and map over the data to render it
    const renderPlayers = () => {
      if (!allPlayers)
        return <p>Loading...</p>; // Show loading message if data is not yet available

        const onlinePlayers = allPlayers.filter(player => player.online);
        const offlinePlayers = allPlayers.filter(player => !player.online);


      return (
        <div>
            <h2>Online Players:</h2>
            {
                onlinePlayers.length > 0 ? (
                    onlinePlayers.map((player,index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                          <strong>{player.name}</strong> 
                          {player.online ? '🟢' : '🔴'}
                        </div>
                    ))) : (
                        <p>No online players.</p>
                    )
            }

            <h2>Offline Players:</h2>
            {
                offlinePlayers.length > 0 ? (
                    offlinePlayers.map((player,index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                          <strong>{player.name}</strong> 
                          Last seen... {player.lastLogin}
                          {player.online ? '🟢' : '🔴'}
                        </div>
                    ))) : (
                        <p>No offlinePlayers players.</p>
                    )
            }
        </div>
      );
    };

    return (
        <div className="all-players">
            {renderPlayers()}
        </div>
    )
};

export default PlayerStats;
