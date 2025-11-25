import React, { useState, useEffect } from "react";

function formatDate(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function prettyDate(date) {
  return new Intl.DateTimeFormat("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function DayNote() {
  const today = new Date();
  const iso = formatDate(today);
  const storageKey = `daynote:${iso}`;

  const [note, setNote] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setNote(saved);
  }, [storageKey]);

  const saveNote = () => {
    localStorage.setItem(storageKey, note);
    setStatus("saved");
    setTimeout(() => setStatus("idle"), 1000);
  };

  return (
    <div>
      <h2>
        {prettyDate(today)} ({iso})
      </h2>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Заметка на сегодня"
        rows={5}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={saveNote}>Сохранить</button>
      </div>

      {status === "saved" && <div>Сохранено!</div>}
    </div>
  );
}
