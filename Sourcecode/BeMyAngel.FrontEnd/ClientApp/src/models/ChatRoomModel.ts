import ChatRoomEventModel from './ChatRoomEventModel'

export default interface ChatRoomModel {
    ChatRoomId: number;
    Events: ChatRoomEventModel[]
}