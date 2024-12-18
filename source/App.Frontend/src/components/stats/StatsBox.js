import PlayerStats from "./PlayerStats";

const StatsBox = ({ playerName }) => {


    return (
        <div className="stats-box">
            {playerName!=null && <PlayerStats playerName={playerName}/>}
        </div>
    )
};

export default StatsBox;
