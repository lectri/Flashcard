import Button from '../Button/Button';
import Styles from './newflashcardset.module.css';
import ButtonStyles from '../Button/newflashcardset.module.css';

const NewFlashcardSet = ({onCreateSet}: {onCreateSet: () => void}) => {
    return (
        <>
        <div className={Styles['new-set']}>
            <h1>Start learning now.</h1>
            <div className={ButtonStyles['plus-button']}> 
                <Button label='Create flashcards' onClick={onCreateSet}/>
            </div>
        </div>
        </>
    )
}

export default NewFlashcardSet;