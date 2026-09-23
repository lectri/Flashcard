import Button from '../Button/Button';
import Styles from './newflashcardset.module.css';

const NewFlashcardSet = ({onCreateSet}: {onCreateSet: () => void}) => {
    return (
        <>
        <div className={Styles['new-set']}>
            <h1>Create a new flashcard set.</h1>
            <Button label='+' onClick={onCreateSet}/>
        </div>
        </>
    )
}

export default NewFlashcardSet;