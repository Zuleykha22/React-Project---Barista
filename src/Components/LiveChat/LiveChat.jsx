import React from 'react'
import { LiveChatWidget, EventHandlerPayload } from '@livechat/widget-react'



function LiveChat() {function handleNewEvent(event: <'onNewEvent'>) {
    console.log('LiveChatWidget.onNewEvent', event)
  }

  return (
    <LiveChatWidget
      license="12345678"
      visibility="maximized"
      onNewEvent={handleNewEvent}
    />
  )
}

export default LiveChat