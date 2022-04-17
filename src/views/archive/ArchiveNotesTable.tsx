import { formatDate } from '@/utils/helpers/date.helpers';
import { capitalize } from '@/utils/helpers/shared.helpers';
import { Table, Icon } from '@/components/ui';
import { INote } from '@/utils/types/note.types';

const headCells = ['Name', 'Created', 'Category', 'Content', 'Dates'];

type ArchiveNotesTableProps = {
  notes: INote[];
  onNoteUnarchive: (noteId: INote['id']) => void;
};

const ArchiveNotesTable: React.FC<ArchiveNotesTableProps> = ({
  notes,
  onNoteUnarchive,
}) => {
  return (
    <Table.Wrapper>
      <Table>
        <Table.Head>
          <Table.Row>
            {headCells.map((headCell) => (
              <Table.HeadCell key={headCell}>{headCell}</Table.HeadCell>
            ))}
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {notes.map((note) => (
            <Table.Row key={note.id}>
              <Table.RowCell>
                <div className="flex items-center">
                  <Icon type={note.category} />

                  <div>
                    <p>{note.name}</p>

                    <div className="flex space-x-1 text-sm text-blue-500">
                      <button
                        className="underline"
                        onClick={() => onNoteUnarchive(note.id)}
                      >
                        Unarchive
                      </button>
                    </div>
                  </div>
                </div>
              </Table.RowCell>
              <Table.RowCell variant="secondary">
                {formatDate(note.createdAt)}
              </Table.RowCell>
              <Table.RowCell variant="secondary">
                {capitalize(note.category)}
              </Table.RowCell>
              <Table.RowCell variant="secondary">{note.content}</Table.RowCell>
              <Table.RowCell variant="secondary">{note.dates}</Table.RowCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Table.Wrapper>
  );
};

export default ArchiveNotesTable;
