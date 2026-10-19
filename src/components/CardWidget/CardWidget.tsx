import Styles from './CardWidget.module.css';
import garbageIcon from '../../assets/garbage.png'
import Button from '../Button/Button';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const CardWidget = ({cardId, index, onDelete} : {cardId: number, index: number, onDelete: (id: number) => void }) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({ id: cardId });
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    };
    return (
        
        <div ref={setNodeRef}  style={style} className={Styles['card-widget']}>
                <div className={Styles['top-row']}>
                    <div {...attributes} {...listeners} className={Styles['drag-handle']}>
                        <svg xmlns="http://w3.org" viewBox="0 0 40 40" width="30" height="30">
                            <line x1="15" y1="17" x2="25" y2="17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            <line x1="15" y1="23" x2="25" y2="23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                    <p>{index}</p>
                    <span className={Styles['delete-button']}>
                        <Button image={garbageIcon} imageAlt="Delete" onClick={() => onDelete(cardId)}/>
                    </span>
                </div>

                <p>Term:</p>
                <textarea id={"title-"+cardId}></textarea>
                <p>Definition:</p>
                <textarea id={"definition-"+cardId}></textarea>
        </div>
        
    )
}

export default CardWidget;