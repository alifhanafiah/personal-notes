import NoteItemAction from './NoteItemAction';
import NoteItemContent from './NoteItemContent';

function NoteItem({ title, date, body, onDelete, id }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} date={date} body={body} />
      <NoteItemAction onDelete={onDelete} id={id} />
    </div>
  );
}

export default NoteItem;
