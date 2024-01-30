import Link from "next/link";
import { format, parseISO } from 'date-fns'

export default function Card({ blog, headingLevel }: { blog: any, headingLevel: any }) {
  const { title, date, description, draft, tags, slug } = blog;

  const Heading = () => {
    const HeadingTag = headingLevel;

    return (
      <HeadingTag className='blog-card-heading'>
        <span>{title}</span>
      </HeadingTag>
    );
  };

  return (
    draft ? null :
    <Link href={`blog/${slug}`} as={`blog/${slug}`} className='blog-card'>

      <div className='blog-card-content'>
        <Heading />
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