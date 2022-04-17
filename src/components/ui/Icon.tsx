import {
  FaLightbulb,
  FaCommentDots,
  FaDolly,
  FaQuoteLeft,
} from 'react-icons/fa';

import { Category } from '@/utils/types/note.types';

const categoryIcons = {
  [Category.TASK]: (
    <span className="flex items-center justify-center w-10 h-10 p-2 mr-3 rounded-full bg-blue-700 text-center">
      <FaDolly className="text-blue-200" />
    </span>
  ),
  [Category.THOUGHT]: (
    <span className="flex items-center justify-center w-10 h-10 p-2 mr-3 rounded-full bg-indigo-700 text-center">
      <FaCommentDots className="text-indigo-200" />
    </span>
  ),
  [Category.IDEA]: (
    <span className="flex items-center justify-center w-10 h-10 p-2 mr-3 rounded-full bg-green-700 text-center">
      <FaLightbulb className="text-green-200" />
    </span>
  ),
  [Category.QUOTE]: (
    <span className="flex items-center justify-center w-10 h-10 p-2 mr-3 rounded-full bg-teal-700 text-center">
      <FaQuoteLeft className="text-teal-200" />
    </span>
  ),
};

type IconProps = {
  type: Category;
};

const Icon = ({ type }: IconProps) => {
  return categoryIcons[type] || null;
};

export default Icon;
