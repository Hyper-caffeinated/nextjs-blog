import { HeroBanner } from "../components/HeroBanner";
import { SectionTitle } from "../components/SectionTitle";

type Presentation = {
  title: string;
  author: string;
  date: Date;
  link: string;
};

const allPresentations: Presentation[] = [
  { title: "Club Intro", author: "James Lee", date: new Date("2025-09-05"), link: "https://google.com" },
];

const splitPresentations = () => {
  const today = new Date();

  const upcoming = allPresentations
    .filter((p) => p.date >= today)
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const archived = allPresentations
    .filter((p) => p.date < today)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return { upcoming, archived };
}

const PresentationTable = ({ presentations }: { presentations: Presentation[] }) => (
  <table className="min-w-full border-collapse">
    <thead>
      <tr className="bg-stone-600 text-white">
        <th className="py-3 px-4 text-left font-semibold">Date</th>
        <th className="py-3 px-4 text-left font-semibold">Name</th>
        <th className="py-3 px-4 text-left font-semibold hidden sm:table-cell">Author</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-stone-200">
      {presentations.map((p) => (
        <tr key={ p.title } className="hover:bg-stone-100">
          <td className="py-3 px-4 text-stone-600">
            {p.date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </td>
          <td className="py-3 px-4 text-emerald-800 font-medium">
            <a href={ p.link } 
              target="_blank" rel="noopener noreferrer">
              { p.title }
            </a>
          </td>
          <td className="py-3 px-4 text-stone-600 hidden sm:table-cell">{ p.author }</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const UpcomingSection = ({ presentations }: { presentations: Presentation[] }) => (
  <section id="upcoming" className="pt-10 pb-20 bg-stone-100">
    <div className="container mx-auto px-6">
      <SectionTitle>Upcoming Presentations</SectionTitle>
      <PresentationTable presentations={ presentations } />
    </div>
  </section>
);

const ArchiveSection = ({ presentations }: { presentations: Presentation[] }) => (
  <section id="archive" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <SectionTitle>Archived Presentations</SectionTitle>
      <PresentationTable presentations={ presentations } />
    </div>
  </section>
);

const Presentation = () => {
  const { upcoming, archived } = splitPresentations();

  return (
    <main>
      <HeroBanner
        title="Presentations"
        subtitle="Sign-ups, upcoming and archived presentations."
        imageUrl="https://i.imgur.com/Rhtg6Os.jpeg"
        height={40}
      />
      <div className="flex justify-center bg-stone-100 pt-20">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScTFABCnt6Widd26M0fWTc5R2n2io4Y0cazAQswY9sxU1WYmw/viewform?usp=dialog"
          target="_blank" rel="noopener noreferrer"
          className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg mb-8 block mx-auto">
          Click to Sign Up!
        </a>
      </div>
      <UpcomingSection presentations={ upcoming }/>
      <ArchiveSection presentations={ archived }/>
    </main>
  );
};

export default Presentation
