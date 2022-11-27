import React from 'react';

export default function Tables({ props }) {
  return (
    <div className="container">
      {/* <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {paginatePosts.map((post) => (
            <tr key={post.id}>
              <td> {post.id} </td>
              <td> {post.title} </td>
              <td>
                <button onClick = {()=> handleDelete(post)} className="btn btn-danger btn-sm"> Delete </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
}
