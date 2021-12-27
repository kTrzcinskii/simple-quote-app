type APIrespond = {
  author: string;
  authorSlug: string;
  content: string;
  dataAdded: string;
  dataModified: string;
  length: number;
  tags: any[];
  _id: string;
};

export const fetchNewQuote = async () => {
  const endpoint = "https://api.quotable.io/random?tags=famous-quotes";
  const response = await fetch(endpoint);
  const data: APIrespond = await response.json();
  const { author, content } = data;
  const myQuote = { author, content };
  return myQuote;
};
