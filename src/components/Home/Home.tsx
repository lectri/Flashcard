import NewFlashcardSet from "../NewFlashcardSet/NewFlashcardSet";
import FlashcardSetPreview from "../FlashcardSetPreview/FlashcardSetPreview";
import Footer from "../Footer/Footer";

const Home = ({onCreateSet} : {onCreateSet: () => void}) => {
    return (
        <>
        <NewFlashcardSet onCreateSet={onCreateSet}/>
        <FlashcardSetPreview/>
        <Footer/>
        </>
    )
}

export default Home;