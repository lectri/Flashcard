import Button from "../Button/Button";
import Styles from './newflashcardset.module.css';

const NewFlashcardSet = () => {
    return (
        <>
        <div className={Styles['new-set']}>
            <h1>Create a new flashcard set.</h1>
            <Button/>
        </div>
        </>
    )
}

export default NewFlashcardSet;