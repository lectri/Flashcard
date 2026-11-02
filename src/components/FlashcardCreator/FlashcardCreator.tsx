import Button from "../Button/Button";
import Styles from "./FlashcardCreator.module.css";
import ButtonStyles from "../Button/flashcardcreator.module.css";
import CardWidget from "../CardWidget/CardWidget";
import { SetsContext, type CardData } from "../../context/SetsContext";
import { useState } from "react";
import { useContext } from "react";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, 
    TouchSensor, useSensor, useSensors, type DragEndEvent, type UniqueIdentifier } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

const FlashcardCreator = () => {
    const [currentId, setCurrentId] = useState(3);
    const [cardData, setCardData] = useState<CardData[]>([
        {id: 1, title: '', definition: '', index: 1},
        {id: 2, title: '', definition: '', index: 2},
    ]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { setSetsList, nextId, setNextId } = useContext(SetsContext);

    
    const createCardWidget = () =>  {
        setCurrentId(currentId => currentId + 1);

        let newCard = {id: currentId, title: '', definition: '', index: cardData.length + 1};
        setCardData([...cardData, newCard]);
    }
    
    const deleteCardWidget = (card_id: number) => {
        if (cardData.length !== 1) {
            setCardData(prevCardData => prevCardData.filter(data => data.id !== card_id).map((card, i) => ({...card, index: i + 1})));
        }

        else {
            window.alert('You need at least one card in your set.');
        }
    }

    const getCardPos = (id: UniqueIdentifier) => cardData.findIndex(card => card.id === id);
    
    const handleDragEnd = (event: DragEndEvent) => {
        const {active, over} = event;
        
        // The card didn't move anywhere, so do nothing
        if (over == null || active.id == over.id) return;
        
        setCardData(cards => {
            const originalPos = getCardPos(active.id);
            const newPos = getCardPos(over.id);
            const swappedCards = arrayMove(cards, originalPos, newPos);

            return swappedCards.map((card, i) => ({...card, index: i + 1}));
        })
    }

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const onSave = () => {
        if (!title.trim()) {
            window.alert('Please add a title.');
            return;
        }

        const newSet = {
            id: nextId,
            title: title,
            description: description,
            cards: cardData,
        }

       setSetsList(prev => [...prev, newSet]);
       setNextId(prevId => prevId + 1);

        window.alert('Saved successfully.');
    }

    return (
        <>
        <div className={Styles['creator']}>
                <input id="creator-title" type="text" className={Styles['title-desc']}
                placeholder="Set title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <input id="creator-description" type="text" className={Styles['title-desc']}
                placeholder="Set Description" value={description} onChange={(e) => {setDescription(e.target.value)}}></input>

                <div className={ButtonStyles['button-row']}>
                    <Button label="Save" onClick={onSave}/>
                </div>

            <div className={Styles['cards']}>
            <DndContext
            sensors={sensors} 
            onDragEnd={handleDragEnd}
            collisionDetection={closestCorners}
            modifiers={[restrictToVerticalAxis]}>
                <SortableContext items={cardData} strategy={verticalListSortingStrategy}>
                {[...cardData].map(card => (
                    <CardWidget key={card.id} index={card.index} cardId={card.id} onDelete={deleteCardWidget}/>
            ))}
            </SortableContext>
            </DndContext>
            </div>

            <div className={ButtonStyles['button-row']}>
                <Button label="Add card" onClick={createCardWidget}/>
                <Button label="Save" onClick={onSave}/>
            </div>
        </div>
        </>
    );
}

export default FlashcardCreator;