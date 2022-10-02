import React, { Component } from 'react';
import NoteSearch from './NoteSearch.js';

export class Header extends Component {
  render() {
    return (
      <header className="note-app__header">
        <h1>Notes</h1>
        <NoteSearch />
      </header>
    );
  }
}

export default Header;
