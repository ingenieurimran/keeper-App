import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "./Notes";

const App = () => (
    <div>
        <Header />
        {Notes.map(params => (
            <Note
                key={params.key}
                title={params.title}
                content={params.content}
            /> 
        ))
        }
        <Footer />
    </div>
)
export default App