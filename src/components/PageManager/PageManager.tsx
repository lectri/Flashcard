import { useState } from "react";
import Home from "../Home/Home";
import FlashcardCreator from "../FlashcardCreator/FlashcardCreator";

// Decides what parts of the website to show, and hides all others
const PageManager = () => {

    type View = "home" | "flashcard-creator";

    const [view, setView] = useState<View>("home");

    return (
    <> 
        {/* Home */}
        {view === "home" && <Home onCreateSet={() => setView("flashcard-creator")}/>}

        {/* Flashcard Creator */}
        {view === "flashcard-creator" && <FlashcardCreator/>}
    </>
    );
}

export default PageManager;