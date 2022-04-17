import { Table } from '@/components/ui';
import { IStatistic } from '@/utils/types/statistic.types';

const headCells = ['Note Category', 'Active', 'Archived'];

type StatisticsTableProps = {
  statistics: IStatistic[];
};

const StatisticsTable: React.FC<StatisticsTableProps> = ({ statistics }) => {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          {headCells.map((headCell) => (
            <Table.HeadCell key={headCell}>{headCell}</Table.HeadCell>
          ))}
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {statistics.map((statistic) => (
          <Table.Row key={statistic.category}>
            <Table.RowCell>{statistic.category}</Table.RowCell>
            <Table.RowCell variant="secondary">
              {statistic.items.active}
            </Table.RowCell>
            <Table.RowCell variant="secondary">
              {statistic.items.archived}
            </Table.RowCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default StatisticsTable;
