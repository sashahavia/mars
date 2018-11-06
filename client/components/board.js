import React, { Component } from 'react';
// import axios from 'axios';

const CELL_SIZE = 20;
const WIDTH = 400;
const HEIGHT = 400;

class Board extends Component {
  constructor() {
    super();
    this.rows = HEIGHT / CELL_SIZE;
    this.cols = WIDTH / CELL_SIZE;
    this.board = this.makeEmptyBoard();
    // this.state = {
    //   cells: [],
    // };
  }

  // Create an empty board
  makeEmptyBoard() {
    let board = [];
    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false;
      }
    }
    return board;
  }
  // Create cells from this.board
  makeCells() {
    let cells = [];
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells.push({ x, y });
        }
      }
    }
    return cells;
  }

  componentDidMount() {
    fetch('api/nodes')
      .then(response => response.json())
      .then(data => {
        data.Bots.map(bot => {
          let y = bot.Location.Y;
          let x = bot.Location.X;
          this.board[y][x] = !this.board[y][x];
        });
      });
  }

  render() {
    return (
      <div>
        <div
          className="board"
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
          }}
        />
      </div>
    );
  }
}

export default Board;
