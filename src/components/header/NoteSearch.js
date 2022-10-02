import React, { Component } from 'react';

export class NoteSearch extends Component {
  render() {
    return (
      <div className="note-search">
        <input type="text" name="find" placeholder="Cari catatan ..." />
      </div>
    );
  }
}

export default NoteSearch;
