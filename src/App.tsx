import NewFlashcardSet from "./components/NewFlashcardSet/NewFlashcardSet";
import NavBar from "./components/NavBar/NavBar";
import FlashcardSetPreview from "./components/FlashcardSetPreview/FlashcardSetPreview";
import Footer from "./components/Footer/Footer";
import './app.module.css'

function App() {

  return (
    <>
      <NavBar/>
      <NewFlashcardSet/>
      <FlashcardSetPreview/>
      <Footer/>
    </>
  )
}

export default App
