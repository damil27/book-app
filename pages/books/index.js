import Link from "next/link";
import React from "react";
import { books } from "../../data/utils";

const Homepage = () => {
  return (
    <div>
      {books.map((book, index) => (
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
          key={index}
        >
          <h2>{book.name}</h2>
          <p>{book.description}</p>
          <article
            style={{
              padding: 12,
              background: "#ccc",
              border: "1px solid black",
            }}
          >
            <Link href={`/books/${book.id}`}>details</Link>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
