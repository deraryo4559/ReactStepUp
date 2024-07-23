import './App.css'

function App() {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justfyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <>
      <div style={containerStyle}>
        <p style={titleStyle}>i Inline Styles -</p>
        <button style={buttonStyle}>Fight!!</button>
      </div>
    </>
  )
}

export default App
