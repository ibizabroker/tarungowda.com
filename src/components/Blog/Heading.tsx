import Link from "next/link";
import { Blog } from 'contentlayer/generated'
import { getBlogTagsData } from "@/utils/tags";
import { format, parseISO } from 'date-fns';
import Clock from '@/images/clock.svg';

export default function SingleHead({ blog }: { blog: Blog }) {
  const { title, date, description, tags } = blog;
  const tagsData = getBlogTagsData(tags);

  return (
    <div className='heading-head'>
      <div className='heading-head-info'>
        <div className='heading-time-wrap'>
          <time className='heading-time'>
            <Clock className='heading-clock' />
            {format(parseISO(date), 'LLLL d, yyyy')}
          </time>
        </div>
      </div>

      <h1 className='heading-title'>{title}</h1>

      <ul className='heading-tags'>
        {tagsData.map((tag) => {
          return (
            <li className='heading-tag' key={tag.name}>
              <Link href={tag.slug} className='heading-tag-link'>
                <span>#</span> {tag.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}