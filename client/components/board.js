import React, { Component } from 'react';
import axios from 'axios';
import Cell from './cell';

const CELL_SIZE = 20;
const WIDTH = 400;
const HEIGHT = 400;

class Board extends Component {
  constructor() {
    super();
    this.rows = HEIGHT / CELL_SIZE;
    this.cols = WIDTH / CELL_SIZE;
    this.board = this.makeEmptyBoard();

    this.state = {
      cells: [],
      locations: [],
    };
    this.updateCells = this.updateCells.bind(this);
    this.getData = this.getData.bind(this);
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
    setInterval(this.getData, 1000);
  }

  async getData() {
    try {
      const { data } = await axios.get('api/nodes');
      const locations = data.Bots.map(obj => obj.Location);
      this.setState({ locations });
      this.updateCells();
    } catch (err) {
      console.log(err);
    }
  }

  updateCells() {
    this.state.locations.map(location => {
      let y = location.Y;
      let x = location.X;
      this.board[y][x] = !this.board[y][x];
    });
    this.setState({ cells: this.makeCells() });
  }

  render() {
    const { cells } = this.state;
    return (
      <div>
        <div
          className="board"
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
          }}
        >
          {cells.map(cell => (
            <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`} />
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
