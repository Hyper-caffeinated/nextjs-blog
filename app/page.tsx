//import React from "react";

// TODO: use Next.js Image instead of img

import { HeroBanner } from "./components/HeroBanner";
import { SectionTitle } from "./components/SectionTitle";

const teamMembers = [
  { name: "James Lee", role: "President", imageUrl: "https://github.com/Hyper-caffeinated/nextjs-blog/blob/main/images/jamahes.jpg?raw=true" },
  { name: "Peter Le", role: "Social Media Manager", imageUrl: "https://github.com/Hyper-caffeinated/nextjs-blog/blob/main/images/stupid%20ahh%20viet.png?raw=true" },
  { name: "Chris Yang", role: "Game Dev", imageUrl: "https://github.com/Hyper-caffeinated/nextjs-blog/blob/main/images/chrisy.png?raw=true" },
  { name: "Matthew Bu", role: "Senior Tech Manager", imageUrl: "https://placehold.co/300x300/d1c7b7/5c5243?text=Matthew+B." },
  { name: "Thomas Crosno", role: "Junior Web Dev", imageUrl: "https://github.com/Hyper-caffeinated/nextjs-blog/blob/main/images/thomar.png?raw=true" },
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
            Come visit us Friday 8A to go birdwatching and learn more about the wildlife around you!
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
