export const getIDFromURL = (url: string): number => {
  const regex = /\/(\d+)\/$/;
  const match = url.match(regex);
  if (match && match[1]) return parseInt(match[1]);
  throw new Error(`Can't get id from: ${url}`);
};
