import "./style.css";
import { gameboard, game, cells, rdmcolor } from "./gameboard.js";
import { ship } from "./ship.js";

ship();
const games = gameboard();
const ships = ship(3);
let direction = "horizontal";
let shipcells = [];
let shipdirection = null;
document.addEventListener("DOMContentLoaded", () => {
  // })
  function placeSegment(row, col) {
    games.board[row][col] = ships;
    shipcells.push([row, col]);
    const uiIndex = row * 10 + col;
    cells[uiIndex].style.backgroundColor = "red";
    if (shipcells.length === currentShip.length) {
      shipcells = [];
      shipdirection = null;
      ships = ship(3);
    }
    console.log("placig segmet at", row, col);
  }
  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      console.log("cell clicked", index);
      const row = Math.floor(index / 10);
      const col = index % 10;
      if (!games?.board?.[row] !== "") return;
      if (games.board[row][col] !== "") return;
      if (shipcells.length === 0) {
        placeSegment(row, col);
        return;
      }
      if (shipcells.length === 1) {
        const first = shipcells.at[0];
        if (!first) return;
        const r0 = first[0];
        const c0 = first[1];

        if (Math.abs(r0 - row) + Math.abs(c0 - col) !== 1) return;
        shipdirection = r0 === row ? "horizontal" : "vertical";
        placeSegment(row, col);
        return;
      }
      const lastcell = shipcells.at(-1);
      if (!lastcell) return;
      const lastRow = lastcell[0];
      const lastCol = lastcell[1];

      // const [lastRow, lastCol] = shipcells[shipcells.length - 1];
      if (Math.abs(lastRow - row) + Math.abs(lastCol - col) !== 1) return;
      if (
        (shipdirection === "horizontal" && row !== lastRow) ||
        (shipdirection === "vertical" && col !== lastCol)
      ) {
        return;
      }
      placeSegment(row, col);

      //   for (let i = 0; i < ships.length; i++) {
      //     const r = direction === "horizontal" ? row : row + i;
      //     const c = direction === "horizontal" ? col + i : col;
      //     cells[r * 10 + c].style.backgroundColor = rdmcolor();
      //     console.log("ship placed successfully");

      // } else {
      //   console.log("failed to place ship");
      // }
      // cells.style.backgroundColor = rdmcolor();
      // if (games.placeship(ships, 2, 3)) {
      // }
    });
  });
  // if (games.placeship(ships, 2, 3)) {
  //   console.log("ship placed successfully");
  // } else {
  //   console.log("failed to place ship");
  // }
  // console.log(rdmcolor());
  gameboard();
});
