import ChatEventPresentation from './ChatEvent.presentation'

export default interface ChatPresentation {
    chat: {
      chatId: number;
    };
    myChatSessionToken: string;
    chatEvents: ChatEventPresentation[]
}