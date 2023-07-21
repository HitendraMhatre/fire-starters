import { ComponentPublicInstance, createApp } from 'vue'

import MessageNotice from './message-notice.vue'

const messageNoticeInstanceList: ComponentPublicInstance[] = []

const MessageNoticeService = {
  open: () => {
    const messageBox = document.createElement('div')
    const messageApp = createApp(MessageNotice, {
      content: 'Code Copied - VPNU!',
      close: () => {
        document.body.removeChild(messageBox)
        messageNoticeInstanceList.pop()
        messageApp.unmount()
      }
    })
    const messageInstance = messageApp.mount(messageBox)
    document.body.appendChild(messageBox)
    const messageNoticeInstanceListLength = messageNoticeInstanceList.length
    const topHeight =
      messageNoticeInstanceListLength === 0
        ? 10
        : (messageNoticeInstanceListLength + 1) * 10 + messageNoticeInstanceListLength * 42
    // @ts-ignore
    messageInstance.setTopHeight(topHeight)
    // @ts-ignore
    messageInstance.setVisible(true)
    messageNoticeInstanceList.push(messageInstance)
  }
}

export { MessageNotice, MessageNoticeService }
