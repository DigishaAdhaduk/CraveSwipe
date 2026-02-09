import { useEffect, useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [i, setI] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then(r => r.json())
      .then(d => setList(d));
  }, []);

  function like() {
    setI(i + 1);
  }

  function skip() {
    setI(i + 1);
  }

  const item = list[i];

  return (
    <div style={box}>

      <h2 style={head}>CraveSwipe</h2>

      {item && (
        <div style={card}>
          <img src={item.img} style={pic} />
          <h3>{item.name}</h3>
        </div>
      )}

      <div style={row}>
        <button style={no} onClick={skip}>Skip</button>
        <button style={yes} onClick={like}>Like</button>
      </div>

    </div>
  );
}

const box = {
  textAlign: "center",
  fontFamily: "Arial",
  background: "#f8f8f8",
  height: "100vh",
  paddingTop: "20px"
};

const head = {
  color: "#cb202d"
};

const card = {
  width: "320px",
  margin: "20px auto",
  background: "white",
  padding: "10px",
  borderRadius: "15px",
  boxShadow: "0 0 10px #ddd"
};

const pic = {
  width: "100%",
  borderRadius: "10px"
};

const row = {
  display: "flex",
  justifyContent: "center",
  gap: "20px"
};

const no = {
  background: "#eee",
  border: "none",
  padding: "10px 20px",
  borderRadius: "20px"
};

const yes = {
  background: "#cb202d",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "20px"
};
