import { useRouter } from "next/router";
import { fetchBookFromId } from "../../data/utils";

useRouter;
const BooksDetails = () => {
  const { query } = useRouter();
  const bookId = query.id;
  const book = fetchBookFromId(bookId);
  if (!book) {
    return <h2>Loading...</h2>;
  }
  console.log(book);
  return (
    <div>
      <div
        style={{
          width: 300,
          backgorund: "whitesmoke",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <h2>{book.name}</h2>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BooksDetails;
