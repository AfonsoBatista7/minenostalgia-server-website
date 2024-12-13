import PlayerStats from "./PlayerStats";
import ServerStats from "./ServerStats";

const StatsBox = ({ playerName }) => {


    return (
        <div className="stats-box">
            <ServerStats/>
            {playerName!=null && <PlayerStats playerName={playerName}/>}
        </div>
    )
};

export default StatsBox;
