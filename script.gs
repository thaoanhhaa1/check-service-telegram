const URLS = ['']

function sendMessageToTelegram(url) {
  var botToken = '<Bot Token>'; // BotFather --> /newbot
  var chatId = '<Chat ID>'; // Telegram Bot Raw --> username
  
  var message = `Downtime with url: ${url}`;
  
  var url = 'https://api.telegram.org/bot' + botToken + '/sendMessage';
  
  var payload = {
    chat_id: chatId,
    text: message
  };
  
  var options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(url, options);
}

function fetchData(url) {
  var response = UrlFetchApp.fetch(url);
  
  var status = response.getResponseCode();
  
  if (status >= 200 && status < 300) {
  } else {
    sendMessageToTelegram(url);
  }
}

function run() {
  URLS.forEach(fetchData);
}
