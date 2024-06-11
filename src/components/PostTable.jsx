// src/components/PostTable.jsx
import React, { useState } from "react";
import { posts } from "../data/posts";
import DataTable from "shadcn";

//import { DataTable } from "shadcn";

const columns = [
  { Header: "Title", accessor: "title" },
  { Header: "Content", accessor: "content" },
  { Header: "Slug", accessor: "slug" },
  { Header: "Published", accessor: "isPublished" },
  { Header: "Created At", accessor: "createdAt" },
  { Header: "Updated At", accessor: "updatedAt" },
];

const PostTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <DataTable columns={columns} data={currentPosts} />
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="#!"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PostTable;
