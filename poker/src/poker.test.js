import Poker from "./poker";

test("values index length is 13", () => {
  expect(Poker.VALUES_INDEX.length).toBe(13);
});

test("card values in order", () => {
  expect(Poker.VALUES_INDEX).toStrictEqual([
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
  ]);
});

test("suit index length is 4", () => {
  expect(Poker.SUITS_INDEX.length).toBe(4);
});

test("suit values in order", () => {
  expect(Poker.SUITS_INDEX).toStrictEqual(["♦", "♣", "♥", "♠"]);
});

test("straights list length is 9", () => {
  expect(Poker.STRAIGHTS_LIST.length).toBe(9);
});

test("straighs list values in order", () => {
  expect(Poker.STRAIGHTS_LIST).toStrictEqual([
    ["A", "2", "3", "4", "5"],
    ["2", "3", "4", "5", "6"],
    ["3", "4", "5", "6", "7"],
    ["4", "5", "6", "7", "8"],
    ["5", "6", "7", "8", "9"],
    ["6", "7", "8", "9", "T"],
    ["7", "8", "9", "T", "J"],
    ["8", "9", "T", "J", "Q"],
    ["9", "T", "J", "Q", "K"],
  ]);
});

test("royal straight index length is 5", () => {
  expect(Poker.ROYAL_STRAIGHT.length).toBe(5);
});

test("sorted royal striaght", () => {
  expect(Poker.ROYAL_STRAIGHT).toStrictEqual(["A", "T", "J", "Q", "K"]);
});

const HAND_ROYAL_FLUSH = Poker.ROYAL_STRAIGHT.map((value) => {
  return Poker.SUITS_INDEX[0] + value;
});

test("hand is a royal flush", () => {
  expect(HAND_ROYAL_FLUSH).toStrictEqual(["♦A", "♦T", "♦J", "♦Q", "♦K"]);
});

test("score a royal flush", () => {
  expect(Poker.score(HAND_ROYAL_FLUSH)).toStrictEqual({
    status: "royalflush",
    win: 4000,
  });
});

const HAND_STRAIGHT_FLUSH = Poker.STRAIGHTS_LIST[0].map((value) => {
  return Poker.SUITS_INDEX[0] + value;
});

test("hand is a straight flush", () => {
  expect(HAND_STRAIGHT_FLUSH).toStrictEqual(["♦A", "♦2", "♦3", "♦4", "♦5"]);
});

test("score a royal flush", () => {
  expect(Poker.score(HAND_STRAIGHT_FLUSH)).toStrictEqual({
    status: "straightflush",
    win: 250,
  });
});

test("score a 4 of a kind", () => {
  expect(Poker.score(["♦A", "♣A", "♥A", "♠A", "♦5"])).toStrictEqual({
    status: "4kind",
    win: 125,
  });
});

test.todo("score a full house");
test.todo("score a flush");
test.todo("score a straight");
test.todo("score 3 of a kind");
test.todo("score 2 pair");
test.todo("score jacks or better");
test.todo("score low pair");
test.todo("score ulose");
test.todo("score out of order hand correctly");

// console.log(Poker.ROYAL_STRAIGHT);

// console.log(Poker);
// ("🎲 ⚀ ⚁ ⚂ ⚃ ⚄ ⚅");

// VALUES_INDEX,
// SUITS_INDEX,
// STRAIGHTS_LIST,
// ROYAL_STRAIGHT,
