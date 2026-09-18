import Styles from './flashcardsetpreview.module.css';

const FlashcardSetPreview = () => {
    return (
        <>
        <div className={Styles['set-preview']}>

        </div>
        <h2>Your flashcard sets</h2>
        <p>No flashcards found. Create a new set!</p>
        </>
    );
}

export default FlashcardSetPreview;