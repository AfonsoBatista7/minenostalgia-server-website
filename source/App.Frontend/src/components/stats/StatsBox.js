import PlayerStats from "./PlayerStats";
import PlayerSmallStats from "./PlayerSmallStats";
import ServerStats from "./ServerStats";

const StatsBox = ({ playerName }) => {


    return (
        <div className="stats-box">
            <PlayerSmallStats/>
            <ServerStats/>
            {playerName!=null && <PlayerStats playerName={playerName}/>}
        </div>
    )
};

export default StatsBox;
