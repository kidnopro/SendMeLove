import "./App.css";
import Modal from "./components/Model";
import AnonymousMessageForm from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Modal />
      <Header />
      <AnonymousMessageForm />
      <Footer/>
     
    </>
  );
}

export default App;
