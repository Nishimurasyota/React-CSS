export const InlineStyle = () => {
  const divStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };

  const pStyle = {
    margin: 0,
    color: "yellowgreen"
  };

  const buttonStyle = {
    backgroundColor: "skyblue",
    padding: "8px",
    borderRadius: "9999px"
  };

  return (
    <div style={divStyle}>
      <p style={pStyle}>- Inline Style -</p>
      <button style={buttonStyle}>ファイト</button>
    </div>
  );
};
