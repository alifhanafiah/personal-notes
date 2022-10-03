import React, { Component } from 'react';
import Header from './components/header/Header';
import Body from './components/main/Body';
import { getInitialData } from './utils/data';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchKeyword: '',
    };
  }

  onSearch = (val) => {
    this.setState({
      searchKeyword: val,
    });
  };

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

  onArchive = (id) => {
    this.setState({
      notes: this.state.notes.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived;
        }
        return note;
      }),
    });
  };

  render() {
    const filteredNotes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.searchKeyword.toLowerCase());
    });

    const activeNotes = filteredNotes.filter((note) => {
      return !note.archived;
    });
    const archivedNotes = filteredNotes.filter((note) => {
      return note.archived;
    });

    return (
      <>
        <Header onSearch={this.onSearch} />
        <Body
          addNotes={this.addNotes}
          activeNotes={activeNotes}
          archivedNotes={archivedNotes}
          onDelete={this.onDelete}
          onArchive={this.onArchive}
        />
      </>
    );
  }
}

export default App;
