import { useState } from 'react';

const PlayerForm = ({ addPlayer }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [xAxis] = useState(0)
  const [yAxis] = useState(675)
  const [currentSquare] = useState(0)
  const [ID, setID] = useState(1)

  const handleNameChange = (ev) => setName(ev.target.value);
  const handleColorChange = (ev) => setColor(ev.target.value);

  const handleSubmit = ev => {

    ev.preventDefault();
    if (ID < 5) {
      addPlayer({
        id: ID,
        name: name,
        color: color,
        xAxis: xAxis,
        yAxis: yAxis,
        currentSquare: currentSquare
      });
      let newID = ID + 1
      setID(newID)
      setName("");
      setColor("");
    } else {
      window.alert("Maximum of 4 Players!");
    }
  }

  return (
    <>
      <div className="add-player-container">
        <form className="add-player" onSubmit={handleSubmit}>
          <h3 className="nes-text is-primary">Add a player</h3>

          <div className="nes-field">
            <label htmlFor="name">Name:</label>
            <input
              className="nes-input"
              type="text"
              id="name"
              name="name"
              value={name}
              required
              onChange={handleNameChange}
            />
          </div>

          <div className="nes-select">
            <label htmlFor="color">Choose a counter:</label>
            <select
              id="color"
              name="color"
              value={color}
              required
              onChange={handleColorChange}
            >
              <option value="null">Select</option>
              <option value="#0099ff">Blue</option>
              <option value="#ffcc00">Yellow</option>
              <option value="#00cc00">Green</option>
              <option value="#cc00ff">Pink</option>
            </select>
          </div>

          <input type="submit" className="nes-btn is-primary" name="submit" value="Add" />
        </form>
      </div>
    </>
  )
};

export default PlayerForm;