import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function EnterNote(currentNote) {
    return <Note
        key={currentNote.key}
        title={currentNote.title}
        content={currentNote.content}
    />
}

function App() {
    return <div>
        <Header />
        {notes.map(EnterNote)}
        <Footer />
    </div>
}

export default App;