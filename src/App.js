import "./styles.css";
import { useState } from "react";

const instrumentalSongs = [
  { name: "Songbird", rating: "3.5/5" },
  { name: "Silhouette", rating: "3/5" }
];
const jazzSongs = [
  { name: "Lullaby of Birdland", rating: "4/5" },
  { name: "Cry Me A River", rating: "3/5" }
];
const rockSongs = [
  { name: "Walk This Way", rating: "4.5/5" },
  { name: "Start Me Up", rating: "5/5" }
];

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
            padding: "0.5rem",
            borderRadius: "0.5rem",
            backgroundColor: "#9BD1FE"
          }}
          onClick={clickHandler}
        >
          Instrumental
        </span>{" "}
        <span
          style={{
            cursor: "pointer",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            backgroundColor: "#9BD1FE"
          }}
          onClick={clickHandler}
        >
          Jazz
        </span>{" "}
        <span
          style={{
            cursor: "pointer",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            backgroundColor: "#9BD1FE"
          }}
          onClick={clickHandler}
        >
          Rock
        </span>
      </ul>
      <hr style={{ width: "40%" }} />
      <ul style={{ listStyle: "none" }}>
        {songsToRender.map((song) => (
          <li
            style={{
              fontSize: "1.5rem",
              padding: "1rem",
              cursor: "pointer",
              border: "1px solid",
              borderRadius: "1rem",
              margin: "0.5rem auto",
              textAlign: "left",
              backgroundColor: "#9BD1FE",
              width: "40%",
              height: "20%"
            }}
            key={song}
          >
            <div>{song.name}</div>
            <small style={{ fontSize: "1rem" }}>
              {"Rating: "}
              {song.rating}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
