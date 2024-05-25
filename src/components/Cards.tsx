import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl h-[90%] mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "File Complaint",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "./complaint",
  },
  {
    title: "Event & Workshop",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "./workshop",
  },
  {
    title: "Virtual Bioheritage rooms",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "./room",
  },
  {
    title: "Chatbot",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "./chatbot",
  },
];
