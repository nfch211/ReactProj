import "./App.css";
import Header from "./Header";
import Body from "./Body";
import videosrc from "./videosrc";
import Footer from "./Footer";
import Intro from "./Intro";


function video (props){
  return <Body title={props.title} url={props.url} content={props.content}/>
}





function App() {
  return (
    <div>
      <Header />
      <Intro />
      <div id="videoBackground" >
      {videosrc.map(video)}</div>
      <Footer />
      </div>
     
  );
}

export default App;
