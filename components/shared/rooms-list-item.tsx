import Image from "next/image";

type Attribute = {
  attributeTypeId: number;
  value: string;
};

const attributeTypes = [
  {
    id: 1,
    icon: "/assets/icons/size-icon.svg",
    label: "Size м²",
  },
  {
    id: 2,
    icon: "/assets/icons/bed-icon.svg",
    label: "Bed",
  },
  {
    id: 3,
    icon: "/assets/icons/breakfast-icon.svg",
    label: "Breakfast",
  },
  {
    id: 4,
    icon: "/assets/icons/balcony-icon.svg",
    label: "Balcony",
  },
  {
    id: 5,
    icon: "/assets/icons/bath-icon.svg",
    label: "Bath",
  },
  {
    id: 6,
    icon: "/assets/icons/shower-icon.svg",
    label: "Shower",
  },
];

export type RoomsListItemProps = {
  image: string;
  roomNumber: string;
  attributes: Attribute[];
};

function RoomsListItem({ image, roomNumber, attributes }: RoomsListItemProps) {
  return (
    <div className="flex w-full max-h-[300px] gap-4 bg-secondary border-r-2 border-accent select-none font-roboto">
      <div className="aspect-video w-[fit-content] flex items-center justify-center group relative overflow-hidden cursor-pointer">
        <Image
          src={image}
          alt={`Room ${roomNumber}`}
          width={1920}
          height={1080}
          className="object-cover w-full h-full transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:translate-x-2"
        />
      </div>

      {/* Details section */}
      <section className="relative">
        <h2 className="font-bold py-3">{`Room ${roomNumber}`}</h2>

        {/* TODO: colorize attributes */}
        <section className="grid grid-cols-3 gap-y-4 py-4">
          {attributes.map((attr, index) => (
            <div
              key={index}
              className={`flex justify-between items-center pr-4 w-[220px] ${
                (index + 1) % 3 === 0 || index === 5 || index === 6
                  ? ""
                  : "border-r-2 border-accent"
              }`}
            >
              <div className="flex items-center gap-2 text-white">
                <Image
                  src={
                    attributeTypes.find(
                      (type) => type.id === attr.attributeTypeId
                    )!.icon || ""
                  }
                  alt="Attribute icon"
                  width={24}
                  height={24}
                />
                <label className="flex justify-between">
                  {
                    attributeTypes.find(
                      (type) => type.id === attr.attributeTypeId
                    )?.label
                  }
                  :
                </label>
              </div>
              <div className="">
                <span className="text-center">{attr.value}</span>
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-col mr-2">
          <h2 className="font-bold pt-3">Description</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ad
            corrupti expedita quae aliquid impedit sed laborum dignissimos odit
            vel.
          </p>
        </section>
        <button className="absolute h-[30px] w-[100px] bottom-4 right-4 border-b-2 border-accent transition-all hover:font-bold hover:text-primary hover:bg-accent cursor-pointer">
          View
        </button>
      </section>
    </div>
  );
}

export { RoomsListItem };
