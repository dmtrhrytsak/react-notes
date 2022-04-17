import { ActiveNotes, Statistics, AddNote } from '@/views/dashboard';

const Dashboard: React.FC = () => {
  return (
    <>
      <section className="space-y-8">
        <section>
          <h2 className="mb-2 text-xl text-gray-700 font-semibold">
            Active Notes
          </h2>
          <ActiveNotes />
        </section>

        <section>
          <h2 className="mb-2 text-xl text-gray-700 font-semibold">
            Statistics
          </h2>
          <Statistics />
        </section>
      </section>

      <AddNote />
    </>
  );
};

export default Dashboard;
