
import * as React from "react";
import * as ReactDOM from "react-dom";

interface SquareProps {
  value: string;
  onClick: () => void;
}

function Square({ value, onClick }: SquareProps) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [grid, setGrid] = React.useState(Array(9).fill(null));

  function handleClick(i: number) {
    const squares = grid.slice();
    squares[i] = 'X';
    setGrid(squares);
  }

  function renderSquare(i: number) {
    return (
      <Square
        value={grid[i]}
        onClick={() => handleClick(i)}
      />
    );
  }

  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status*/}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById("root")
);
