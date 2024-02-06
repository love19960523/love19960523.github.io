document.addEventListener("DOMContentLoaded", function() {
  // 获取输入框
  var currencyInput = document.getElementById("currencyInput");
  var directionInput = document.getElementById("directionInput");
  var openPriceInput = document.getElementById("openPriceInput");
  var takeProfitInput = document.getElementById("takeProfitInput");
  var stopLossInput = document.getElementById("stopLossInput");
  var botTokenInput = document.getElementById("botTokenInput");
  var chatIdInput = document.getElementById("chatIdInput");

  // 检查本地存储中是否存在值，如果存在，则填充输入框
  if (localStorage.getItem("botToken")) {
    botTokenInput.value = localStorage.getItem("botToken");
  }
  if (localStorage.getItem("chatId")) {
    chatIdInput.value = localStorage.getItem("chatId");
  }

  var sendButton = document.querySelector(".sendButton");
  sendButton.addEventListener("click", function() {
    var currency = currencyInput.value;
    var direction = directionInput.value;
    var openPrice = openPriceInput.value;
    var takeProfit = takeProfitInput.value;
    var stopLoss = stopLossInput.value;
    var botToken = botTokenInput.value;
    var chatId = chatIdInput.value;

    // 将值保存到本地存储中
    localStorage.setItem("botToken", botToken);
    localStorage.setItem("chatId", chatId);

    var message = "https://api.telegram.org/bot" + botToken + "/sendMessage?chat_id=" + chatId + "&text=" +
                  "幣對: " + currency + "%0A" +
                  "方向: " + direction + "%0A" +
                  "開倉價格: " + openPrice + "%0A" +
                  "止盈: " + takeProfit + "%0A" +
                  "止損: " + stopLoss;

    // 發送消息
    window.open(message);
  });
});
