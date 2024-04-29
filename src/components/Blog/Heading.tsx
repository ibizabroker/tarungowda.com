import Link from "next/link";
import { Blog } from 'contentlayer/generated'
import { getBlogTagsData } from "@/utils/tags";
import { format, parseISO } from 'date-fns';
import { CalendarIcon, ClockIcon, ViewIcon } from "../Icons";
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function BlogHeading({ blog }: { blog: Blog }) {
  const { title, date, description, tags, readingTime, slug } = blog;
  const tagsData = getBlogTagsData(tags);

  const views = await redis.mget<number[]>(['views', 'blog', blog.slug].join(':')) ?? 0;

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
            {views} views
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