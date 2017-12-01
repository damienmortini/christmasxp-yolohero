let INTRO = [];
let RAP = [];

export default {
  slices: new Map([
    ["intro", {
      startTime: 30,
      bpm: 128,
      data: INTRO,
      timings: []
    }],
    ["rap", {
      startTime: 45.4,
      bpm: 128,
      data: RAP,
      timings: []
    }]
  ])
};

INTRO.push(
  ["", "Follow my instructions"],
  [""],
  [""],
  [""],
  ["", ["Press space when the text is in the middle", .5]],
  [""],
  [""],
  ["Press space"],
  [""],
  ["Press space"],
  [""],
  ["Press space"],
  [""],
  ["Press space", "Cool 😃"],
  [""],
  [""],
  ["", "Prepare to move!"],
  [""],
  [""],
  [""],
  ["", "Move"],
  ["Move"],
  ["Move"],
  ["Move"],
  ["Move"],
  ["", "Nice!"],
  [""],
  ["", "Let's make some noise!"],
  [""],
  ["", ["3", 2]],
  ["", ["2", 2]],
  ["", ["1", 2]],
  ["Shout", ["YOY!!!", 4]],
);

RAP.push(
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
  ["Move"],
  ["Move"],
  ["Move"],
  ["Move"],
  ["Move"],
  ["Move"],
  ["Move"],
  ["Move"],
  ["Move"],
  ["Move"],
  ["Move"],
  ["Move"],
  ["Move"],
  ["Move"],
  ["Move"],
  ["Move"]
);