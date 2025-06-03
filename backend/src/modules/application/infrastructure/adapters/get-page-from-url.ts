export const getPageFromURL = (url: string | null): number | null => {
  const regex = /[?&]page=(\d+)/;
  const match = url?.match(regex);
  if (match && match[1]) return parseInt(match[1]);
  return null;
};
