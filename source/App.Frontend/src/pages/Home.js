import style from "./home.module.css";
import ServerStats from "../components/stats/ServerStats";
import ServerPlayers from "../components/stats/ServerPlayers";

const Home = () => {
  return (
    <>
      <picture >
        <img src="/home/cloud-2.webp" className={`${style.clouds} ${style.cloud1}`}/>
      </picture>
      <picture >
        <img src="/home/cloud-3.webp" className={`${style.clouds} ${style.cloud2}`}/>
      </picture>
      <div className={style.content}>
        <h1>MineNostalgia</h1>
        <p>Have a trip down memory lane</p>
        <p>and travel to the past versions of minecraft</p>
      </div>

      <ServerStats/>
      <ServerPlayers/>
    </>
  );
}

export default Home;
