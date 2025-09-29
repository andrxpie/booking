import {
  RoomsListItem,
  RoomsListItemProps,
} from "@/components/shared/rooms-list-item";

function RoomsList({ rooms }: { rooms: RoomsListItemProps[] }) {
  return (
    <div className="flex-grow flex flex-col mx-auto gap-4 mb-4 w-[60%]">
      {rooms.map((room, index) => (
        <RoomsListItem key={index} {...room} /> ))}
    </div>
  );
}

export default RoomsList;
