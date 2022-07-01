'use strict';

/**
 * ロード時の処理
 */
document.addEventListener('DOMContentLoaded', () => {});

{
  let returnCardId;     // タイマ変数
  let swithCount = 0;   // 切り替えカウンタ
  let timeoutId;
  let restSec = 0;
  // let sound = new Audio();

  // Image枠の取得
  const image_container = document.querySelector('.quiz_image_container');
  // audioタグの取得
  const sound = document.querySelector('.sound');
  // word枠の取得
  const quiz_word = document.querySelector('.quiz_word');
  // リトライボタン
  const replay = document.querySelector('.replay');

  /**
   * ゲームの再開
   */
   replay.addEventListener('click', () => {
    if (replay.textContent === "START") {
      console.log('start');
      // ボタンの無効化
      replay.style.pointerEvents = "none";
      replay.style.opacity = 0.3;
      // ゲーム開始
      switchImage();
    } else {
      // リセット
      window.location.reload();
    }
  });

  const switchImage = (() => {
    console.log(Animals.length);
    if (swithCount > (Animals.length - 1)) {
      // 終了
      replay.textContent = "RETRY";
      // ボタンの有効化
      replay.style.pointerEvents = "auto";
      replay.style.opacity = 1;
    } else {
      // wordの消去
      hiddenWord();
      // Imageファイルの表示
      displayImage(swithCount);
    }
    // タイマの開始
    restSec = TIME_3_SEC;
    monitorTimer();
  });

  const displayImage = ((index) => {
    // Imageファイルの取得
    image_container.style.backgroundImage = Animals[index].i_path;
  });

  const displayWord = ((index) => {
    let word;

    // wordの取得
    word = Animals[index].w;
    // wordの表示
    console.log(index, word);
    quiz_word.textContent = word;
  });

  const hiddenWord = (() => {
    quiz_word.textContent = "";
  });

  const playSound = ((index) => {
    let soundFile;

    // 音声ファイルの取得
    soundFile = Animals[index].s_path;   
    // 音声の実行
    sound.preload = "auto";
    sound.src = soundFile;
    sound.load();
    sound.play();
  });

  const monitorTimer = (() => {
    // タイマ起動
    console.log(restSec);
    if (restSec-- > 0) {
      timeoutId = setTimeout(monitorTimer, TIME_1000_MSEC);
    } else {
      console.log('5秒経過しました。');
      // タイマの停止
      clearTimeout(timeoutId);
      displayWord(swithCount);
      playSound(swithCount);
      timeoutId = setTimeout(() => {
        swithCount++;
        clearTimeout(timeoutId);
        switchImage();
      }, TIME_2000_MSEC);
    }
  });

}