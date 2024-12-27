import { Link } from 'react-router-dom';

const PlayerSmallCard = ({player}, index) => {

    return (
        <div className="all-players" key={index} style = {{width: '320px', borderWidth: '2px', borderStyle: 'solid', borderRadius: '10px', margin: '15px', padding: '7px' }}>

            <Link to={`/stats/${player.name}`}  style={{ textDecoration: 'none', color: 'inherit'}}>
                <div style={{display: 'flex'}}>
                    <div style={{ marginRight:'7px' }}>
                      <img src={`https://minotar.net/helm/${player.name}/70.png`}/>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <strong>{player.name}</strong> 
                      {player.online ?
                              '🟢' :
                              <>
                                  🔴
                                  <div> 
                                      Last seen...
                                      <p style={{margin:'0px'}}>{player.lastLogin}</p>
                                  </div>
                              </>
                      }
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default PlayerSmallCard;
