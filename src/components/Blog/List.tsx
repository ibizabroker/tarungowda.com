import Card from "./Card";

interface Props {
  sortedBlogs: any;
  className?: string;
}

export default function List({ sortedBlogs, className }: Props) {
  return (
    <ul className='blog-list'>
      {sortedBlogs.map((blog: any) => {
        const { _id } = blog;

        return (
          className ?
          <li key={_id} className={`${className}`}>
            <Card blog={blog} />
          </li> :
          <li key={_id} className={`blog-item`}>
          <Card blog={blog} />
        </li>
        );
      })}
    </ul>
  );
}