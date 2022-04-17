import { useSelector } from 'react-redux';

import { selectStatistics } from '@/store/features/notes.slice';
import { StatisticsTable } from '@/views/dashboard';

const Statistics: React.FC = () => {
  const statistics = useSelector(selectStatistics);

  return <StatisticsTable statistics={statistics} />;
};

export default Statistics;
