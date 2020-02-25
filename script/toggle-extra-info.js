'use strict';

function findTradingView() {
  const iframeList = document.getElementsByTagName('iframe')
  for (let iframe of iframeList) {
    if (iframe.id.includes('tradingview_')) return iframe 
  }
}

function toggleExtraInfo() {

  try {
    const tradingView = findTradingView()
    if (!tradingView) {
      console.error('Failed to find trading view iframe.')
      return
    }

    const s = (tradingView.style.position !== 'absolute') // to disply simple

    tradingView.style.position    = s ? 'absolute' : 'relative'
    tradingView.style.left        = s ? '288px' : 0
    tradingView.style.top         = 0
    tradingView.style.width       = s ? 'calc(100% - 288px)' : '100%'
    tradingView.style['z-index']  = s ? 100 : 1

    const orderBook = document.getElementsByTagName('body')[0].firstElementChild.firstElementChild.childNodes[2]

    orderBook.style.position    = s ? 'absolute' : 'relative'
    orderBook.style.height      = s ? '60vh' : '100%'
    orderBook.style.width       = '288px'
    orderBook.style['z-index']  = s ? 100 : 1

    const tradeStream = document.getElementsByTagName('body')[0].firstElementChild.firstElementChild.lastElementChild

    tradeStream.style.position    = s ? 'absolute' : 'relative'
    tradeStream.style.display     = s ? 'block' : 'none'
    tradeStream.style.top         = s ? '60vh' : 0
    tradeStream.style.width       = '288px'
    tradeStream.style.height      = s ? '40vh' : '100%'
    tradeStream.style['z-index']  = s ? 100 : 1

  } catch(e) {
    console.error('Error: ' + e.message)
  }
}

toggleExtraInfo()
