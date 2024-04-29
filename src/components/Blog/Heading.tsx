import Link from "next/link";
import { Blog } from 'contentlayer/generated'
import { getBlogTagsData } from "@/utils/tags";
import { format, parseISO } from 'date-fns';
import { CalendarIcon, ClockIcon, ViewIcon } from "../Icons";

export default function BlogHeading({ blog, views }: { blog: Blog, views: number[] }) {
  const { title, date, description, tags, readingTime } = blog;
  const tagsData = getBlogTagsData(tags);

  return (
    <div className='heading-head'>
      <div className='heading-head-info'>
        <div className='heading-time-wrap'>
          <time className='heading-time'>
            <CalendarIcon className='heading-calendar' />
            {format(parseISO(date), 'LLLL d, yyyy')}
          </time>
          <div className='heading-time'>
            <ClockIcon className='heading-clock' />
            {readingTime.text}
          </div>
          <div className='heading-time'>
            <ViewIcon className='heading-clock' />
            {views}
          </div>
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