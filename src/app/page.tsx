
import styles from "styles/main.module.css";
import {Navigation} from "components/index";



export default async function Home() {  
  
  const res = await fetch("http://localhost:3000/api/coins", {
  method: 'GET', 
  headers: {
    'Content-Type': 'application/json',
  }
});

if (!res.ok) {
  throw new Error(`Failed to fetch, status: ${res.status}`);
}

const data = await res.json();
const coins = data.coins;
  return (
    <>
      <header className={styles.header}>
        <Navigation/>
      </header>
      <main className={styles.main}>
        <ul>
       {
        coins?coins.map((coin:any) => <li key={coin.id}>{coin.name}</li>):<div>loading</div>
       }
       </ul>
      </main>
    </>
  );
}
