import { Header } from "./components/Header";
import { Entry } from "./components/Entry";
import data from "./data/data.js";

export default function App() {
  const entryElements = data.map(entry =>
    <Entry
      key={entry.id}
      obj={entry}
    />
  );

  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  );
};