
function updateStatus() {
  const white = document.getElementById("whiteStatus");
  const black = document.getElementById("blackStatus");

  const overlay = document.getElementById("resultOverlay");
  const resultIcon = document.getElementById("resultIcon");
  const resultTitle = document.getElementById("resultTitle");
  const resultText = document.getElementById("resultText");

  turn.textContent =
    game.turn() === "w" ? "Oq yuradi" : "Qora yuradi";

  white.textContent =
    game.turn() === "w" ? "Yurish navbati" : "Kutmoqda";

  black.textContent =
    game.turn() === "b" ? "Yurish navbati" : "Kutmoqda";

  if (game.isGameOver()) {
    overlay.classList.add("show");

    if (game.isCheckmate()) {
      const winner = game.turn() === "w" ? "Qora" : "Oq";

      if (mode.value === "computer") {
        if (winner === "Oq") {
          resultIcon.textContent = "🏆";
          resultTitle.textContent = "SIZ G‘ALABA QOZONDINGIZ!";
          resultText.textContent = "Tabriklaymiz! Kompyuterni yutdingiz!";
        } else {
          resultIcon.textContent = "😔";
          resultTitle.textContent = "SIZ YUTQAZDINGIZ!";
          resultText.textContent = "Kompyuter bu safar g‘alaba qozondi.";
        }
      } else {
        resultIcon.textContent = "🏆";
        resultTitle.textContent = winner.toUpperCase() + " G‘ALABA QOZONDI!";
        resultText.textContent = "O‘yin mot bilan yakunlandi!";
      }

      message.textContent = "♛ MOT!";
    } else {
      resultIcon.textContent = "🤝";
      resultTitle.textContent = "DURANG!";
      resultText.textContent = "O‘yin durang bilan yakunlandi.";
      message.textContent = "O‘yin tugadi — durang!";
    }

    return;
  }

  overlay.classList.remove("show");

  if (game.isCheck()) {
    message.textContent = "⚠️ SHAX! Shohingizni himoya qiling.";
  } else {
    message.textContent = "O‘yinni davom ettiring!";
  }
}

// Natija oynasidagi qayta boshlash tugmasi
document.getElementById("newGameBtn").addEventListener("click", () => {
  document.getElementById("restartBtn").click();
});
