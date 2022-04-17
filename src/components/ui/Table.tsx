import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
};

type TableRowCellProps = { variant?: 'primary' | 'secondary' } & Props;

const TableRowCell = ({ variant = 'primary', children }: TableRowCellProps) => {
  return (
    <td
      className={classNames({
        'p-4 border border-slate-300 font-semibold': variant === 'primary',
        'p-4 border border-slate-300 text-gray-600': variant === 'secondary',
      })}
    >
      {children}
    </td>
  );
};

const TableRow = ({ children }: Props) => {
  return <tr>{children}</tr>;
};

const TableBody = ({ children }: Props) => {
  return <tbody className="bg-white">{children}</tbody>;
};

const TableHeadCell = ({ children }: Props) => {
  return <th className="py-1 border border-slate-300">{children}</th>;
};

const TableHeadRow = ({ children }: Props) => {
  return <tr>{children}</tr>;
};

const TableHead = ({ children }: Props) => {
  return <thead className="bg-gray-100">{children}</thead>;
};

const Table = ({ children }: Props) => {
  return <table className="w-full bg-gray-200">{children}</table>;
};

Table.Head = TableHead;
Table.HeadRow = TableHeadRow;
Table.HeadCell = TableHeadCell;
Table.Body = TableBody;
Table.Row = TableRow;
Table.RowCell = TableRowCell;

export default Table;
