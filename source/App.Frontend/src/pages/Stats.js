import { useParams } from 'react-router-dom';
import StatsBox from '../components/stats/StatsBox';

const Stats = () => {

    const { playerName } = useParams();

    return (
        <div>
            <h1>Stats</h1>
            <p>Stats Page</p>
            <StatsBox playerName={playerName}/>
        </div>
    )
};

export default Stats;
