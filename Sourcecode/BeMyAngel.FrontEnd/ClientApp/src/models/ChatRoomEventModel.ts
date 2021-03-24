import ChatRoomEventTypeModel from './ChatRoomEventTypeModel'

export default interface ChatRoomEventModel {
    ChatRoomEventType: ChatRoomEventTypeModel;
    DataTime: Date;
    PersonId?: number;
    EventData?: string;
}
