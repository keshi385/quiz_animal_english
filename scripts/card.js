// file Animals
const Animals = shuffle([
  // w: word, i_path: image i_path, s_path: sound_path
  {w: "cat",    i_path: "url(./img/cat.png)",     s_path: "./sound/cat.mp3"},
  {w: "dog",    i_path: "url(./img/dog.png)",     s_path: "./sound/dog.mp3"},
  {w: "mouse",  i_path: "url(./img/mouse.png)",   s_path: "./sound/mouse.mp3"},
  {w: "pig",    i_path: "url(./img/pig.png)",     s_path: "./sound/pig.mp3"},
  {w: "monkey", i_path: "url(./img/monkey.png)",  s_path: "./sound/monkey.mp3"},
  {w: "bird",   i_path: "url(./img/bird.png)",    s_path: "./sound/bird.mp3"},
]);
// シャッフル関数
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }

  return arr;
}