import "./App.css";
import Modal from "./components/Model";
import MusicPlayer from "./components/YouTubePlayer";
import AnonymousMessageForm from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <MusicPlayer/>
      <Modal />
      <Header />
      <AnonymousMessageForm />
      <Footer/>
     
    </>
  );
}

export default App;
