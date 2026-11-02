import { createContext, useState, type PropsWithChildren } from "react";

export interface CardData {
    id: number;
    title: string;
    definition: string;
    index: number;
}

export interface FlashcardSet {
    id: number;
    title: string;
    description: string;
    cards: CardData[];
}

interface SetsContextType {
    setsList: FlashcardSet[] | undefined;
    setSetsList: React.Dispatch<React.SetStateAction<FlashcardSet[]>>;
    nextId: number;
    setNextId: React.Dispatch<React.SetStateAction<number>>;
}

export const SetsContext = createContext<SetsContextType>({
    setsList: [],
    setSetsList: () => {},
    nextId: 0,
    setNextId: () => {}
})

export const SetsProvider = ({ children }: PropsWithChildren) => {
    // Holds all our sets, which SetsContext and FlashcardCreator may access
    const [setsList, setSetsList] = useState<FlashcardSet[]>([]);
    const [nextId, setNextId] = useState(0);

    return (
        <SetsContext.Provider value={{setsList, setSetsList, nextId, setNextId}}>
            {children}
        </SetsContext.Provider>
    )
}

export default SetsProvider;