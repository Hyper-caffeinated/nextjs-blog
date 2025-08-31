import { HeroBanner } from "../components/HeroBanner";

const events = [
  { title: "Intro Presentation", description: "Introduction to the club and some common birds in the area.", date: "9/5/2025" },
  { title: "Event2", description: "Brief description of the event.", date: "1/1/2025" },
  { title: "Event3", description: "Brief description of the event.", date: "1/1/2025" },
];

const EventCard = ({ title, description, date }: { title: string; description: string; date: string }) => (
  <div className="bg-stone-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl text-stone-800 font-serif font-semibold mb-4"> {title} <span className="font-normal text-stone-600">on</span> {date} </h3>
    <p className="text-stone-600 mb-4"> { description } </p>
  </div>
);

const Events = () => {
  return (
    <main>
      <HeroBanner
        title="Events"
        subtitle="Upcoming BAWC events."
        imageUrl="https://i.imgur.com/Rhtg6Os.jpeg"
        height={40}
      />
      <section id="resources" className="py-20 bg-stone-100 flex min-h-[50vh] items-center">
        <div className="container mx-auto px-6">
          { events.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {events.map(({ title, description, date }, index) => (
                <EventCard key={ index } title={ title } description={ description } date={ date } />
              ))}
            </div>
          ) : (
            <p className="text-center text-stone-600 text-lg">
              No future events at this moment! Please check back later!
            </p>
          ) }
        </div>
      </section>
    </main>
  )
}

export default Events
