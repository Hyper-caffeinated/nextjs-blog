import { HeroBanner } from "../components/HeroBanner";
import { SectionTitle } from "../components/SectionTitle";

const upcomingPresentations = [
  { title: "Test", author: "Author", date: "1/1/2025", link: "https://google.com"},
  { title: "Test2", author: "Author2", date: "1/2/2025", link: "https://google.com"},
  { title: "Mockingbirds, Nightingales, and Other Birds Blah Blah Blah", author: "Author3thathasalongname", date: "12/12/2025", link: "https://google.com"},
];

const archivedPresentations = [
  { title: "Test", author: "Author", date: "1/1/2025", link: "https://google.com"},
  { title: "Test2", author: "Author2", date: "1/2/2025", link: "https://google.com"},
  { title: "Mockingbirds, Nightingales, and Other Birds Blah Blah Blah", author: "Author3thathasalongname", date: "12/12/2025", link: "https://google.com"},
];

const UpcomingSection = () => (
  <section id="upcoming" className="pt-10 pb-20 bg-stone-100">
    <div className="container mx-auto px-6">
      <SectionTitle>Upcoming Presentations</SectionTitle>
      <div className="container mx-auto px-6">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-stone-600 text-white">
              <th className="py-3 px-4 text-left font-semibold">Date</th>
              <th className="py-3 px-4 text-left font-semibold">Name</th>
              <th className="py-3 px-4 text-left font-semibold hidden sm:table-cell">Author</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-stone-200">
            {upcomingPresentations.map((p) => (
              <tr key={ p.title } className="hover:bg-stone-100">
                <td className="py-3 px-4 text-stone-600">{ p.date }</td>
                <td className="py-3 px-4 text-emerald-800 font-medium">
                  <a href={ p.link } 
                    target="_blank" rel="noopener noreferrer">
                    { p.title }
                  </a>
                </td>
                <td className="py-3 px-4 text-stone-600 hidden sm:table-cell">{p.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const ArchiveSection = () => (
  <section id="archive" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <SectionTitle>Archived Presentations</SectionTitle>
      <div className="container mx-auto px-6">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-stone-600 text-white">
              <th className="py-3 px-4 text-left font-semibold">Date</th>
              <th className="py-3 px-4 text-left font-semibold">Name</th>
              <th className="py-3 px-4 text-left font-semibold hidden sm:table-cell">Author</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-stone-200">
            {archivedPresentations.map((p) => (
              <tr key={ p.title } className="hover:bg-stone-100">
                <td className="py-3 px-4 text-stone-600">{ p.date }</td>
                <td className="py-3 px-4 text-emerald-800 font-medium">
                  <a href={ p.link } 
                    target="_blank" rel="noopener noreferrer">
                    { p.title }
                  </a>
                </td>
                <td className="py-3 px-4 text-stone-600 hidden sm:table-cell">{p.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const Presentation = () => (
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
    <UpcomingSection />
    <ArchiveSection />
  </main>
);

export default Presentation