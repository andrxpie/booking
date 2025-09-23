import Carousel from "@/components/carousel";
import RoomsList from "@/components/rooms-list";
import { RoomsListItemProps } from "@/components/shared/rooms-list-item";

export const metadata = {
  title: "Booking | Home",
  description: "Welcome to Booking",
};

const slides = [
  { src: "/assets/home-carousel-images/denver-thumbnail.jpg", alt: "Denver" },
  { src: "/assets/home-carousel-images/denver-thumbnail.jpg", alt: "Denver" },
  { src: "/assets/home-carousel-images/warsaw-thumbnail.jpg", alt: "Warsaw" },
  { src: "/assets/home-carousel-images/warsaw-thumbnail.jpg", alt: "Warsaw" },
  { src: "/assets/home-carousel-images/berlin-thumbnail.jpg", alt: "Berlin" },
  { src: "/assets/home-carousel-images/berlin-thumbnail.jpg", alt: "Berlin" },
];

const rooms: RoomsListItemProps[] = [
  {
    image: "/assets/home-carousel-images/denver-thumbnail.jpg",
    roomNumber: "101",
    attributes: [
      { attributeTypeId: 1, value: "True" },
      { attributeTypeId: 2, value: "25m²" },
      { attributeTypeId: 3, value: "True" },
      { attributeTypeId: 4, value: "False" },
      { attributeTypeId: 5, value: "True" },
      { attributeTypeId: 6, value: "1/2" },
    ],
  },
  {
    image: "/assets/home-carousel-images/berlin-thumbnail.jpg",
    roomNumber: "201",
    attributes: [
      { attributeTypeId: 1, value: "True" },
      { attributeTypeId: 2, value: "25m²" },
      { attributeTypeId: 3, value: "True" },
      { attributeTypeId: 4, value: "False" },
      { attributeTypeId: 5, value: "True" },
      { attributeTypeId: 6, value: "1/2" },
    ],
  },
  {
    image: "/assets/home-carousel-images/warsaw-thumbnail.jpg",
    roomNumber: "301",
    attributes: [
      { attributeTypeId: 1, value: "True" },
      { attributeTypeId: 2, value: "25m²" },
      { attributeTypeId: 3, value: "True" },
      { attributeTypeId: 4, value: "False" },
      { attributeTypeId: 5, value: "True" },
      { attributeTypeId: 6, value: "1/2" },
    ],
  },
  {
    image: "/assets/home-carousel-images/denver-thumbnail.jpg",
    roomNumber: "101",
    attributes: [
      { attributeTypeId: 1, value: "True" },
      { attributeTypeId: 2, value: "25m²" },
      { attributeTypeId: 3, value: "True" },
      { attributeTypeId: 4, value: "False" },
      { attributeTypeId: 5, value: "True" },
      { attributeTypeId: 6, value: "1/2" },
    ],
  },
  {
    image: "/assets/home-carousel-images/berlin-thumbnail.jpg",
    roomNumber: "201",
    attributes: [
      { attributeTypeId: 1, value: "True" },
      { attributeTypeId: 2, value: "25m²" },
      { attributeTypeId: 3, value: "True" },
      { attributeTypeId: 4, value: "False" },
      { attributeTypeId: 5, value: "True" },
      { attributeTypeId: 6, value: "1/2" },
    ],
  },
  {
    image: "/assets/home-carousel-images/warsaw-thumbnail.jpg",
    roomNumber: "301",
    attributes: [
      { attributeTypeId: 1, value: "True" },
      { attributeTypeId: 2, value: "25m²" },
      { attributeTypeId: 3, value: "True" },
      { attributeTypeId: 4, value: "False" },
      { attributeTypeId: 5, value: "True" },
      { attributeTypeId: 6, value: "1/2" },
    ],
  },
];

export default function Home() {
  return (
    <section className="w-full mt-16 flex flex-col">
      <h1 className="text-3xl text-center pt-14 hover:underline hover:text-[var(--accent)] cursor-pointer transition-all duration-100">Hello, Booking!</h1>
      <Carousel images={slides} />
      <main className="flex flex-col m-auto w-[80%]">
        <RoomsList rooms={rooms} />
      </main>
    </section>
  );
}
