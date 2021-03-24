export enum EventTypes {
  CREATE_CHAT,
  SEND_MESSAGE,
  TYPING_MESSAGE,
  TERMINATE_CHAT
}

export default interface ChatRoomEventTypeModel {
  ChatRoomEventTypeId: number;
  Identifier: EventTypes;
}
