import {defineStore} from 'pinia';
import {ReadingRoomItem} from 'src/models/readingRoom.item';

export type ReadingRoomState = {
  readingRoomList: ReadingRoomItem[];
}
export const useReadingRoomStore = defineStore({
  id: 'readingRoomStore',
  state: () => ({readingRoomList: []} as ReadingRoomState),
  getters: {
    getArrivalList: (state: ReadingRoomState) => {
      return (readingRoomName: string) => state.readingRoomList.filter(item => item.name === readingRoomName)
    },
  }
});