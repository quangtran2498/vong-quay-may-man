import logo from "./logo.svg";
import "./App.css";
import WheelComponent from "react-wheel-of-prizes";
// import "react-wheel-of-prizes/dist/index.css";
function App() {
  const segments = [
    "bánh mỳ chảo",
    "bún chả",
    "nem lụi",
    "phở",
    "lẩu",
    "Phở Cuốn",
    "Bánh Mì Sốt Vang",
    "không ăn gì",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className="App">
      <WheelComponent
        segments={segments}
        segColors={segColors}
        winningSegment=""
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Để ông trời quyết định"
        isOnlyOnce={false}
        size={290}
        upDuration={100}
        downDuration={300}
        fontFamily="Arial"
      />
    </div>
  );
}

export default App;
