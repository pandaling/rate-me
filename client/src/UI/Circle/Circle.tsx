export function Circle() {
  var circleStyle = {
    padding: 10,
    margin: 20,
    display: "inline-block",
    // position:'absolute',
    backgroundColor: 'blue',
    borderRadius: "50%",
    width: 70,
    height: 70,
    left: 0,
    top: 0
  };

  return (
    <div style={circleStyle}>
    </div>
  );
}