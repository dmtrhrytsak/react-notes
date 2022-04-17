import { Routes, Route } from 'react-router-dom';

import Layout from '@/layout';
import Dashboard from '@/views/dashboard';
import Archive from '@/views/archive';
import Edit from '@/views/edit';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="archive" element={<Archive />} />
        <Route path="edit">
          <Route path=":noteId" element={<Edit />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
