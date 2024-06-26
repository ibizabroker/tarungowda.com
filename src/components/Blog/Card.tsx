import Link from "next/link";
import { getBlogTagsData } from "@/utils/tags";
import { format, parseISO } from 'date-fns';
import { CalendarIcon, ClockIcon, ViewIcon } from "../Icons";
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export default async function Card({ blog }: { blog: any }) {
  const { title, date, description, draft, tags, slug, readingTime } = blog;
  const tagsData = getBlogTagsData(tags);

  const views = await redis.mget<number[]>(['views', 'blog', blog.slug].join(':')) ?? 0;

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
            <CalendarIcon className='blog-card-calendar' />
            {format(parseISO(date), 'LLLL d, yyyy')}
          </time>
          <div className="blog-card-time">
            <ClockIcon className='blog-card-clock' />
            {readingTime.text}
          </div>
          <div className="blog-card-time">
            <ViewIcon className='blog-card-clock' />
            {views} views
          </div>
        </div>
      </div>
    </Link>
  );
}