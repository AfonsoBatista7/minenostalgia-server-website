import PlayerSmallCard from "./PlayerSmallCard";

const PlayerListStats = ({online, players}) => {


    return (
        <>
            <h2>{online} Players:</h2>
            <div style = {{justifyContent: 'center', display: 'flex', flexWrap: 'wrap' }}>
            {
                players.length > 0 ? (
                    players.map((player,index) => (
                        <PlayerSmallCard player={player} index={index}/>
                    ))) : (
                        <p>No {online} players.</p>
                    )
            }
            </div>
        </>
    )
};

export default PlayerListStats;
