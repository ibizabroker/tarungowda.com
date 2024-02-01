import Card from "./Card";

export default function List({ sortedBlogs }: { sortedBlogs: any }) {
  return (
    <ul className='blog-list'>
      {sortedBlogs.map((blog: any) => {
        const { _id } = blog;

        return (
          <li key={_id} className='blog-item'>
            <Card blog={blog} />
          </li>
        );
      })}
    </ul>
  );
}