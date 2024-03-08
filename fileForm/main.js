// ドラッグ&ドロップエリアの取得
const fileArea = document.getElementById("js-dropArea");

// input[type=file]の取得
const fileInput = document.getElementById("js-uploadFile");

// 「参照」テキストのspanタグの取得
const fileInputSpan = document.getElementById("js-fileInputSpan");

// ドラッグオーバー時の処理
fileArea.addEventListener("dragover", function (e) {
  e.preventDefault();
  fileArea.classList.add("dragover");
});

// ドラッグアウト時の処理
fileArea.addEventListener("dragleave", function (e) {
  e.preventDefault();
  fileArea.classList.remove("dragover");
});

// ドロップ時の処理
fileArea.addEventListener("drop", function (e) {
  e.preventDefault();
  fileArea.classList.remove("dragover");

  // ドロップしたファイルの取得
  const files = e.dataTransfer.files;

  if (files.length > 0) {
    const file = files[0]; // 最初のファイルを取得

    // ファイルが正常に受け取れた際の処理
    const fileNameElement = document.getElementById("js-fileName");
    fileNameElement.textContent = file.name; // ファイル名を表示
  } else {
    // ファイルが受け取れなかった際の処理
    const fileNameElement = document.getElementById("js-fileName");
    fileNameElement.textContent = "ファイルが選択されていません"; // エラーメッセージを表示
  }
});

// spanタグクリック時の処理
fileInputSpan.addEventListener("click", function(e) {
  fileInput.click(); // input[type="file"]をプログラム的にクリック
});

// fileInput要素に対する change イベントリスナー
fileInput.addEventListener("change", function (e) {
  const file = e.target.files[0]; // 選択されたファイルを取得

  if (file) {
    // ファイルが正常に受け取れた際の処理
    const fileNameElement = document.getElementById("js-fileName");
    fileNameElement.textContent = file.name; // ファイル名を表示
  } else {
    // ファイルが受け取れなかった際の処理
    const fileNameElement = document.getElementById("js-fileName");
    fileNameElement.textContent = "ファイルが選択されていません"; // エラーメッセージを表示
  }
});
