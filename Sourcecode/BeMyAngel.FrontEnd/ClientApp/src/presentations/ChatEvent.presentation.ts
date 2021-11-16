export enum ChatEventTypes {
  CreateChat = 1,
  PostMessage = 2,
  TerminateChat = 3,
  IsTyping = 4
}

export default interface ChatEventPresentation {
    chatEventId: number;
    chatEventTypeId: ChatEventTypes;
    dataTime: Date;
    chatSessionToken: string;
    data?: string;
}