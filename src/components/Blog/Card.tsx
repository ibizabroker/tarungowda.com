import Link from "next/link";
import { format, parseISO } from 'date-fns'

export default function Card({ blog }: { blog: any }) {
  const { title, date, description, draft, tags, slug } = blog;

  return (
    draft ? null :
    <Link href={`blog/${slug}`} as={`blog/${slug}`} className='blog-card'>

      <div className='blog-card-content'>
        <p className='blog-card-heading'>{title}</p>
        <p className='blog-card-description'>{description}</p>
        <ul className='blog-card-tags'>
          {tags.map((tag: any) => {
            return (
              <li className='blog-card-tag' key={tag}>
                <span>#</span> {tag}
              </li>
            );
          })}
        </ul>
        <div className='blog-card-info'>
          <time dateTime={date} className="mb-1 text-xs">
            {format(parseISO(date), 'LLLL d, yyyy')}
          </time>
        </div>
      </div>
    </Link>
  );
}