//import React from "react";

// TODO: use Next.js Image instead of img

import { HeroBanner } from "./components/HeroBanner";
import { SectionTitle } from "./components/SectionTitle";

const teamMembers = [
  { name: "James Lee", role: "President", imageUrl: "https://cdn.discordapp.com/attachments/1285997770640986113/1405335149406847190/IMG_2788.jpg?ex=689e73d9&is=689d2259&hm=93ef9fa4678dd3ff1b893d1274ac5f69253901b7fd34571a4e2cb4cc07142165&" },
  { name: "Peter Le", role: "Placeholder", imageUrl: "https://media.discordapp.net/attachments/1285997770640986113/1405334897278582855/IMG_7623.jpg?ex=689e739d&is=689d221d&hm=38c397d9ab86f5ab083bc9e0749b9b5404bf9b9274552bd5012808983642d38e&=&format=webp&width=663&height=884" },
  { name: "Chris Yang", role: "Placeholder", imageUrl: "https://media.discordapp.net/attachments/1285997770640986113/1405334896842637423/IMG_8118.jpg?ex=689e739d&is=689d221d&hm=e3205318b42749ac8b19ce35199988c62189837fdfffd9515c29da9ca79c9d14&=&format=webp&width=663&height=884" },
  { name: "Matthew Bu", role: "Senier Website Dev", imageUrl: "https://placehold.co/300x300/d1c7b7/5c5243?text=Matthew+B." },
  { name: "Thomas Crosno", role: "Junior Website Dev", imageUrl: "https://cdn.discordapp.com/attachments/1285997770640986113/1405333116687745065/IMG_8186.png?ex=689e71f4&is=689d2074&hm=f6455dbe38b821b1514bba780d53b62f80642697aafb78acce7a5d2b01d6ce8c&" },
];

const MemberCard = ({ name, role, imageUrl }: { name: string; role: string; imageUrl: string }) => (
  <div className="text-center bg-stone-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 border border-stone-200">
    <img
      className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-sm"
      src={ imageUrl }
      alt={ name }
    />
    <h3 className="text-xl font-semibold text-stone-800 font-serif">{ name }</h3>
    <p className="text-emerald-800 font-medium">{ role }</p>
  </div>
);

const AboutSection = () => (
  <section id="about" className="py-20 bg-stone-100">
    <div className="container mx-auto px-6">
      <SectionTitle>About Our Club</SectionTitle>
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img src="https://placehold.co/600x400/a3bfb0/273d32?text=Picture" alt="Picture alt text" className="rounded-lg shadow-xl w-full border-4 border-white" />
        </div>
        <div className="md:w-1/2">
          <p className="text-stone-600 mb-6 text-lg leading-relaxed">
            Welcome to the TJ BAWC!
          </p>
          <p className="text-stone-600 mb-6 text-lg leading-relaxed">
            Placeholder (maybe link socials here as well)
          </p>
        </div>
      </div>
    </div>
  </section>
);

const OfficersSection = () => (
  <section id="officers" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <SectionTitle>Officers</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {teamMembers.map(({ name, role, imageUrl }, index) => (
          <MemberCard key={ index } name={ name } role={ role } imageUrl={ imageUrl} />
        ))}
      </div>
    </div>
  </section>
);

const Page = () => {
  return (
    <main>
      <HeroBanner
        title="TJ Bird and Wildlife Club"
        imageUrl="https://i.imgur.com/qikIChd.jpeg"
        height={60}
      />
      <AboutSection />
      <OfficersSection />
    </main>
  )
}

export default Page