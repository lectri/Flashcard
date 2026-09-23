import NewFlashcardSet from "../NewFlashcardSet/NewFlashcardSet";
import FlashcardSetPreview from "../FlashcardSetPreview/FlashcardSetPreview";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Home = ({onCreateSet} : {onCreateSet: () => void}) => {
    return (
        <>
        <NavBar/>
        <NewFlashcardSet onCreateSet={onCreateSet}/>
        <FlashcardSetPreview/>
        <Footer/>
        </>
    )
}

export default Home;