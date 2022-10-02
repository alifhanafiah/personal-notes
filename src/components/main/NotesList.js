import NoteItem from './NoteItem';

function NotesList({ notes, onDelete }) {
  return notes.length !== 0 ? (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          date={note.createdAt}
          body={note.body}
          onDelete={onDelete}
        />
      ))}
    </div>
  ) : (
    <p className="notes-list__empty-message">Tidak ada catatan</p>
  );
}

export default NotesList;
