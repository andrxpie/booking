import {
  RoomsListItem,
  RoomsListItemProps,
} from "@/components/shared/rooms-list-item";

function RoomsList({ rooms }: { rooms: RoomsListItemProps[] }) {
  return (
    <div className="flex flex-col mx-auto gap-4 my-4 w-[1000px]">
      {rooms.map((room, index) => (
        <RoomsListItem key={index} {...room} /> ))}
    </div>
  );
}

export default RoomsList;
