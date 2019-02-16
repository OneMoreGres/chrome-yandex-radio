chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.query({ "url": "https://radio.yandex.ru/*" }, function (tabs) {
    if (tabs.length < 1) return;
    var tab = tabs[0];
    if (command == "play-action") {
      chrome.tabs.executeScript(tab.id, { "code": "document.querySelector('.player-controls__play').click();" })
    }
    else if (command == "next-action") {
      chrome.tabs.executeScript(tab.id, { "code": "document.querySelector('.slider__item_next').click();" })
    }
  });
});
