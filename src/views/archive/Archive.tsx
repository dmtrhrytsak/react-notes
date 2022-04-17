import { ArchiveNotes } from '@/views/archive';

const Archive: React.FC = () => {
  return (
    <section>
      <h2 className="mb-2 text-xl text-gray-700 font-semibold">
        Archive Notes
      </h2>
      <ArchiveNotes />
    </section>
  );
};

export default Archive;
