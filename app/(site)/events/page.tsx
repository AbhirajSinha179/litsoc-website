
import Image from 'next/image';
import { FC } from 'react';

interface EventProps {
  name: string;
  image: string;
  description: string;
}

const rostraEvents: EventProps[] = [  {
    name: "YOUTH PARLIAMENT",
    image: "/images/youth_parliament.jpg",
    description: "A two day simulation of a parliamentary session held annually, giving the experience of the working, proceedings and the challenges of our administration.",
  },
  /*{
    name: "LITERATI COMBAT",
    image: "/images/literati_combat.jpg",
    description: "A literature oriented event where the participants test their knowledge by facing various challenges.",
  },*/
  {
    name: "SPEAKERS' DILEMMA",
    image: "/images/speaker's_dilemma.jpg",
    description: "A test of detective skills and trivia knowledge of the participants, based on literary facts and fiction.",
  },
  {
    name: "NEHLE-PE-DEHLA",
    image: "/images/nehle_pe_dehla.jpg",
    description: "The event follows the quintessential Hindi Debate format with a literary twist.",
  },
  /*{
    name: "SHERLOCKED",
    image: "/images/sherlocked.jpg",
    description: "An event where the participants get to test their detective skills knowledge.",
  },*/
  {
     name: "BOOK EXHIBITION",
  image: "/images/BOOK_EXHIBITION.jpg",
  description: "Book exhibition for fellow bookworms to mingle, share their favourite reads, and spark lively discussions.",

  },
  {
    name: "SPELL BEE",
    image: "/images/spell_bee.jpg",
    description: "Classic Spelling-Bee competition for word geeks of all ages.",

  },
  {
    name: "STORY BOX",
    image: "/images/STORY_BOX.jpg",
    description: "An event that tests the enduring power of storytelling.",

  },
  {
    name: "NEWSROOM",
    image: "/images/newsroom.jpg",
    description: "An overall fun event that tests grammatical precision and oratory skills followed by a panel discussion.",
  },
  {
    name: "VAAK-YUDDH",
    image: "/images/vaak_yuddh.jpg",
    description: "Comprises of two rounds, first : instant poetry writing on certain topic followed by a poetic version of debate between the respective teams.",
  },
  {
    name: "RADIOACTIVE",
    image: "/images/radioactive.jpg",
    description: "Participants are expected to connect the two songs with their impeccable enunciation and witty punchlines in a stipulated time.",
  },
  {
    name: "MIC DROP",
    image: "/images/mic_drop.jpg",
    description: "A platform to flaunt your pop culture and drama obsessions by answering questions and debating characters.",
  },
  {
    name: "GUEST SESSION",
    image: "/images/guest_session.jpg",
    description: "Guest session aims to share amusing anecdotes and valuable insights from an eminent literary personality.",
  },
  /*{
    name: "LITERARY TALK",
    image: "/images/literary_talk.jpg",
    description: "A thorough discussion on a specific topic of literature where diverse facets of written and spoken words take new forms upholding the nuances of literature.",
  },*/
  {
    name: "NIGHTS",
    image: "/images/nights.jpg",
    description: "Enthralling special performances by various renowned artists and performers are a special aspect of our literary fest.",
  },
  {
    name: "KAVI SAMMELAN",
    image: "/images/kavi_sammelan_rostra.jpg",
    description: "A gathering filled with captivating realms of poetries that instil a plethora of emotions in the audience, leaving them awestruck and amazed.",
  },
];

const litnightEvents: EventProps[] = [
  {
    name: "THESPIAN",
    image: "/images/thespian.jpg",
    description: "Thespian is the rhetoric of theatre where the contestants impersonate their favorite characters and engage in a contentious debate of contrasting opinions and immaculate wits.",
  },
  {
    name: "KAVI SAMMELAN",
    image: "/images/kavi_sammelan.jpg",
    description: "A gathering filled with captivating realms of poetries that instil a plethora of emotions in the audience, leaving them awestruck and amazed.",
  },
  {
    name: "SYMPOSIUM",
    image: "/images/symposium.jpg",
    description: "It is a contest that pledges an opportunity for literature enthusiasts to share their soulful stories, heartfelt poetries and writeups on fervent narratives.",
  },
];

const Event: FC<EventProps> = ({ name, image, description }) => {
    return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
      <div className="relative h-0" style={{ paddingBottom: '100%' }}>
        <Image src={image} alt={name} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};


const EventsPage: FC = () => {
    return (
    <main className="container mx-auto p-8">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Rostra Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rostraEvents.map((event, index) => (
            <Event
              key={`rostra-${index}`}
              name={event.name}
              image={event.image}
              description={event.description}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-4">Litnight Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {litnightEvents.map((event, index) => (
            <Event
              key={`litnight-${index}`}
              name={event.name}
              image={event.image}
              description={event.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
export default EventsPage;