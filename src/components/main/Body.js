import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

function Body({ addNotes, activeNotes, archivedNotes, onDelete, onArchive }) {
  return (
    <main className="note-app__body">
      <NoteInput addNotes={addNotes} />

      <h2>Catatan Aktif</h2>
      {activeNotes.length !== 0 ? (
        <NotesList
          notes={activeNotes}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ) : (
        <div className="notes-list__empty-message">Tidak Ada Catatan.</div>
      )}

      <h2>Arsip</h2>
      {archivedNotes.length !== 0 ? (
        <NotesList
          notes={archivedNotes}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ) : (
        <div className="notes-list__empty-message">Tidak Ada Catatan.</div>
      )}
    </main>
  );
}

export default Body;
