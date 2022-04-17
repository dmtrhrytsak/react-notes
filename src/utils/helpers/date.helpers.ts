const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  const yyyy = date.getFullYear();
  const mm = months[date.getMonth()];
  let dd: number | string = date.getDate();

  if (dd < 10) {
    dd = '0' + dd;
  }

  return `${mm} ${dd}, ${yyyy}`;
};

export const parseDates = (content: string) => {
  const dateRegExp =
    /(0?[1-9]|[12][0-9]|3[01])[/\-.](0?[1-9]|1[012])[/\-.]\d{4}/g;
  return (content.match(dateRegExp) || []).join(', ');
};
