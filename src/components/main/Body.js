import React, { Component } from 'react';
import { getInitialData } from '../../utils/data';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

export class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
  }

  addNotes = ({ title, body }) => {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: Date.now(),
          title,
          body,
          archived: false,
          createdAt: Date.now(),
        },
      ],
    });
  };

  onDelete = (id) => {
    this.setState({
      notes: this.state.notes.filter((note) => {
        return note.id !== id;
      }),
    });
  };

  render() {
    return (
      <main className="note-app__body">
        <NoteInput addNotes={this.addNotes} />
        <h2>Catatan Aktif</h2>
        <NotesList notes={this.state.notes} onDelete={this.onDelete} />
        <h2>Arsip</h2>
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      </main>
    );
  }
}

export default Body;
