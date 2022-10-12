import React from "react";
// Set the initial prop to an empty array to avoid any errors if no props passed to the component
// Hard coded some colors for testing when no props are passed
function ColorChanger({ colorArray = ["red", "green", "blue", "yellow"] }) {
  // Track the index of the array
  const [counter, setCounter] = React.useState(0);
  // Handle the color change
  const handleColorChange = () => {
    // If we're at the end of the array, set the count back to 0
    if (counter === colorArray.length - 1) {
      setCounter(0);
      return;
    }
    setCounter(counter + 1);
  };
  return (
    <button
      onClick={handleColorChange}
      style={{ backgroundColor: colorArray[counter] }}
    >
      ChangeMyColor
    </button>
  );
}

export default ColorChanger;
