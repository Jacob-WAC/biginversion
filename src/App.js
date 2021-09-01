import React from "react";
import PersonCard from "./components/personCard";

function App() {
    return (
        <div className="App">
            <PersonCard
                firstName="John"
                lastName="Smith"
                age={8}
                hairColor="Brown"
            />
            <PersonCard
                firstName="larry"
                lastName="leroy"
                age={55}
                hairColor="red"
            />
            <PersonCard
                firstName="jane"
                lastName="daniels"
                age={102}
                hairColor="black"
            />
            <PersonCard
                firstName="jim"
                lastName="bob"
                age={33}
                hairColor="pink"
            />
        </div>
    );
}

export default App;
