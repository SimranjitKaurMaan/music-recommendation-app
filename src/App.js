import "./styles.css";
import { useState } from "react";

const instrumentalSongs = ["Songbird", "Silhouette"];
const jazzSongs = ["Lullaby of Birdland", "Cry Me A River"];
const rockSongs = ["Walk This Way", "Start Me Up"];

export default function App() {
  const [songsToRender, setSongsToRender] = useState([]);

  function clickHandler(event) {
    const content = event.target.textContent;
    if (content === "Instrumental") {
      setSongsToRender(instrumentalSongs);
    } else if (content === "Jazz") {
      setSongsToRender(jazzSongs);
    } else if (content === "Rock") {
      setSongsToRender(rockSongs);
    }
  }
  return (
    <div className="App">
      <h1>goodMusic!</h1>
      <small>Check out my favorite music.Select a genre to get started </small>
      <ul>
        <span
          style={{
            cursor: "pointer",
            border: "1px",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            backgroundColor: "#8093F1"
          }}
          onClick={clickHandler}
        >
          Instrumental
        </span>{" "}
        <span
          style={{
            cursor: "pointer",
            border: "1px",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            backgroundColor: "#8093F1"
          }}
          onClick={clickHandler}
        >
          Jazz
        </span>{" "}
        <span
          style={{
            cursor: "pointer",
            border: "1px",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            backgroundColor: "#8093F1"
          }}
          onClick={clickHandler}
        >
          Rock
        </span>
      </ul>
      <hr />
      <ul style={{ listStyle: "none" }}>
        {songsToRender.map((song) => (
          <li
            style={{
              fontSize: "1rem",
              padding: "0.5rem",
              cursor: "pointer",
              borderRadius: "0.5rem",
              margin: "0.5rem auto",
              backgroundColor: "#8093F1",
              width: "20%"
            }}
            key={song}
          >
            {song}
          </li>
        ))}
      </ul>
    </div>
  );
}
