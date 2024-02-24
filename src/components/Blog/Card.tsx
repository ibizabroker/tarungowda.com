import Link from "next/link";
import { getTagsData } from "@/utils/tags";
import { format, parseISO } from 'date-fns';
import Clock from '@/images/clock.svg';

export default function Card({ blog }: { blog: any }) {
  const { title, date, description, draft, tags, slug } = blog;
  const tagsData = getTagsData(tags);

  return (
    draft ? null :
    <Link href={`/blog/${slug}`} as={`/blog/${slug}`} className='blog-card'>

      <div className='blog-card-content'>
        <p className='blog-card-heading'>{title}</p>
        <p className='blog-card-description'>{description}</p>
        <ul className='blog-card-tags'>
          {tagsData.map((tag) => {
            return (
              <li className='blog-card-tag' key={tag.name}>
                <span>#</span> {tag.name}
              </li>
            );
          })}
        </ul>
        <div className='blog-card-info'>
          <time dateTime={date} className="blog-card-time">
            <Clock className='blog-card-clock' />
            {format(parseISO(date), 'LLLL d, yyyy')}
          </time>
        </div>
      </div>
    </Link>
  );
}