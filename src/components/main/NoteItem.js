import React from 'react';
import NoteItemAction from './NoteItemAction';
import NoteItemContent from './NoteItemContent';
function NoteItem({ title, date, body, onDelete, id, onArchive, isArchived }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} date={date} body={body} />
      <NoteItemAction
        onDelete={onDelete}
        id={id}
        onArchive={onArchive}
        isArchived={isArchived}
      />
    </div>
  );
}

export default NoteItem;
