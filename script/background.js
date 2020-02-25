'use strict';

function isCurrentTabNamebase (callback) {
  chrome.tabs.getSelected(null, function(tab) {
    const tabUrl = tab.urltradeStream
    if (tabUrl && tabUrl.toLowerCase().indexOf('https://www.namebase.io/') >= 0) {
      callback(true)
    } else {
      callback(false)
    }
  })
}

function toggleExtraInfo() {
  chrome.tabs.executeScript({
    file: './script/toggle-extra-info.js'
  })
}

function onClicked() {
  isCurrentTabNamebase(isNamebase => {
    if (isNamebase) {
      toggleExtraInfo()
    }
  })
}

chrome.browserAction.onClicked.addListener(onClicked)
chrome.runtime.onInstalled.addListener(function() {})

function init() {
  onClicked()
}

init()
