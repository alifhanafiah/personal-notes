import React from 'react';

function NoteItemAction({ onDelete, id, onArchive, isArchived }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => onArchive(id)}
      >
        {isArchived ? 'Pindahkan' : 'Arsipkan'}
      </button>
    </div>
  );
}

export default NoteItemAction;
