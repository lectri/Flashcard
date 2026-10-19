import Button from '../Button/Button';
import Styles from './newflashcardset.module.css';
import ButtonStyles from '../Button/newflashcardset.module.css';


// Fix button width
const NewFlashcardSet = ({onCreateSet}: {onCreateSet: () => void}) => {
    return (
        <>
        <div className={Styles['new-set']}>
            <h1>Create a new flashcard set.</h1>
            <div className={ButtonStyles['new-set']}> <Button label='+' onClick={onCreateSet}/></div>
        </div>
        </>
    )
}

export default NewFlashcardSet;