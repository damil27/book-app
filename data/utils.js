export const books = [
  {
    id: "1",
    name: "Things fall apart",
    description: "interesting books from nigeria",
  },
  {
    id: "2",
    name: "The secret",
    description: " The secret is an i interesting book from unknow author",
  },
  {
    id: "3",
    name: "The Soole",
    description: " The secret is an i interesting book from unknow author",
  },
  {
    id: "4",
    name: "The rich dad and poor dad ",
    description: " The secret is an i interesting book from unknow author",
  },
];

export const fetchBookFromId = (id) => {
  const fetchedBook = books.find((book) => book.id === id);
  return fetchedBook;
};
