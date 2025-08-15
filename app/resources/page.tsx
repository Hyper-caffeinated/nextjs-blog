import Link from "next/link";
import { SectionTitle } from "../components/SectionTitle";
import { HeroBanner } from "../components/HeroBanner";

const resources = [
  { title: "Cornell Lab", description: "Research and education institution dedicated to the study, appreciation, and protection of birds.", link: "https://www.birds.cornell.edu/home/" },
  { title: "Audubon", description: "Non-profit organization dedicated to the conservation of birds and their habitats through education and advocacy. It is one of the oldest and largest bird conservation organizations in the Americas.", link: "https://www.audubon.org/" },
  { title: "Resource Title 3", description: "Brief description of the resource. This can include what it is about and why it's useful.", link: "#" },
];

const ResourceCard = ({ title, description, link }: { title: string; description: string; link: string }) => (
  <div className="bg-stone-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl text-stone-800 font-serif font-semibold mb-4"> { title } </h3>
    <p className="text-stone-600 mb-4"> { description } </p>
    <a href={ link } target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:underline">
      Visit { title } here!
    </a>
  </div>
);

const Resources = () => {
  return (
    <main>
      <HeroBanner
        title="Resources"
        subtitle="List of useful resources for bird enthusiasts."
        imageUrl="https://i.imgur.com/Rhtg6Os.jpeg"
        height={40}
      />
      <section id="resources" className="py-20 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map(({ title, description, link }, index) => (
              <ResourceCard key={ index } title={ title } description={ description } link={ link } />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Resources