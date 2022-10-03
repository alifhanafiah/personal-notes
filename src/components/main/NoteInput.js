import React, { Component } from 'react';

export class NoteInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      sisaKarakter: 50,
    };
  }

  onChangeTitle = (e) => {
    const jumlahKarakter = e.target.value.length;
    const sisaKarakter = 50 - jumlahKarakter;

    if (jumlahKarakter !== 51) {
      this.setState({
        title: e.target.value,
        sisaKarakter: sisaKarakter,
      });
    }
  };

  onChangeBody = (e) => {
    this.setState({
      body: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.addNotes(this.state);

    this.setState({
      title: '',
      body: '',
    });
  };

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmit}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {this.state.sisaKarakter}
          </p>
          <input
            type="text"
            name="title"
            className="note-input__title"
            placeholder="Ini adalah judul ..."
            onChange={this.onChangeTitle}
            onInput={this.onInput}
            value={this.state.title}
            required
          />
          <textarea
            name="body"
            className="note-input__body"
            placeholder="Tuliskan catatanmu di sini ..."
            onChange={this.onChangeBody}
            value={this.state.body}
            required
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
