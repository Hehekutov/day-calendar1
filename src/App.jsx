import React from "react";
import DayNote from "./DayNote";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Календарь дня</h1>
      </header>

      <main className="app-main">
        <DayNote />
      </main>

      <footer className="app-footer">
        <small>Простая заметка на день — сохраняется в localStorage.</small>
      </footer>
    </div>
  );
}