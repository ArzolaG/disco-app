import { useState } from "react";
import Albums from "./components/Albums";
import Header from "./components/Header";

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Header setSearchTerm={setSearchTerm} />
            <Albums searchTerm={searchTerm} />
        </>
    );
}

export default App;
