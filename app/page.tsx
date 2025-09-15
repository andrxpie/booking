import Carousel from "@/components/carousel";

export const metadata = {
  title: "Booking | Home",
  description: "Welcome to Booking",
};

export default function Home() {
  const thumbnails = [
    { src: "/gallery-images/denver-thumbnail.jpg", alt: "Denver" },
    { src: "/gallery-images/denver-thumbnail.jpg", alt: "Denver" },
    { src: "/gallery-images/warsaw-thumbnail.jpg", alt: "Warsaw" },
    { src: "/gallery-images/warsaw-thumbnail.jpg", alt: "Warsaw" },
    { src: "/gallery-images/berlin-thumbnail.jpg", alt: "Berlin" },
    { src: "/gallery-images/berlin-thumbnail.jpg", alt: "Berlin" },
  ];

  return (
    <section className="w-full h-screen mt-16 border-4 border-b-0 border-[var(--accent)] flex flex-col">
      <h1 className="text-3xl text-center pt-14">Hello, Booking!</h1>
      <Carousel images={thumbnails} />
      <main className="flex m-auto"></main>
    </section>
  );
}
