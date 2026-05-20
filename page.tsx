export default function Home() {
  return (
    <main style={{background:'#000',color:'#fff',minHeight:'100vh',padding:'40px'}}>
      <h1 style={{fontSize:'48px',fontWeight:'bold'}}>
        ELON DOGE MINING SOLUTIONS
      </h1>

      <p style={{marginTop:'10px',color:'#ccc'}}>
        Global 3D Dogecoin Mining Dashboard Platform
      </p>

      <div style={{
        marginTop:'40px',
        padding:'30px',
        border:'1px solid #333',
        borderRadius:'20px',
        background:'#111'
      }}>
        <h2>Mining Plans</h2>

        <ul>
          <li>1.2 DOGE — $100</li>
          <li>2.88 DOGE — $199</li>
          <li>7.2 DOGE — $399</li>
          <li>18 DOGE — $799</li>
          <li>43.2 DOGE — $1499</li>
          <li>96 DOGE — $2999</li>
        </ul>
      </div>
    </main>
  );
}