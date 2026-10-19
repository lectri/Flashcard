import Button from "../Button/Button";
import Styles from "./FlashcardCreator.module.css";
import ButtonStyles from "../Button/flashcardcreator.module.css";
import CardWidget from "../CardWidget/CardWidget";
import { useState } from "react";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, 
    TouchSensor, useSensor, useSensors, type DragEndEvent, type UniqueIdentifier } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

interface CardData {
    id: number;
    title: string;
    definition: string;
    index: number;
}

const FlashcardCreator = () => {
    const [currentId, setCurrentId] = useState(3);
    const [cardData, setCardData] = useState<CardData[]>([
        {id: 1, title: '', definition: '', index: 1},
        {id: 2, title: '', definition: '', index: 2},
    ]);
    
    const createCardWidget = () =>  {
        setCurrentId(currentId => currentId + 1);
        console.log(currentId);

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

    return (
        <>
        <div className={Styles['creator']}>
                <input id="creator-title" type="text" className={Styles['title-desc']}></input>
                <input id="creator-description" type="text" className={Styles['title-desc']}></input>

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
                <Button label="New Button" onClick={createCardWidget}/>
            </div>
        </div>
        </>
    );
}

export default FlashcardCreator;