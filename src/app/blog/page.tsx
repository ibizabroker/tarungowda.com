import List from '@/components/Blog/List';
import TagsSidebar from '@/components/Blog/TagsSideBar';
import PageHeading from '@/components/PageHeading';
import { sortBlogsUsingDate } from '@/utils/sort';
import { allBlogs } from 'contentlayer/generated'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog",
  description: "Hey, glad you stopped by! Here, you'll find solutions, workarounds, and sometimes just plain tales of tech woes I've encountered along the way. From debugging nightmares to the Eureka! moments, it's all here. So if you're wrestling with a stubborn bug or just curious about how I navigated some tricky tech terrain, take a scroll and see if my experiences can lend you a hand.",
  openGraph: {
    title: "Blog",
    description: "Hey, glad you stopped by! Here, you'll find solutions, workarounds, and sometimes just plain tales of tech woes I've encountered along the way. From debugging nightmares to the Eureka! moments, it's all here. So if you're wrestling with a stubborn bug or just curious about how I navigated some tricky tech terrain, take a scroll and see if my experiences can lend you a hand.",
    url: "https://tarungowda.com/blog",
  },
}

export default function BlogShowcase() {
  const sortedBlogs = sortBlogsUsingDate(allBlogs);
  
  return (
    <div className='container blogshowcase-container'>
      <PageHeading 
        title="Blog"
        description="Hey, glad you stopped by! Here, you'll find solutions, workarounds, and sometimes just plain tales of tech woes I've encountered along the way. From debugging nightmares to the Eureka! moments, it's all here. So if you're wrestling with a stubborn bug or just curious about how I navigated some tricky tech terrain, take a scroll and see if my experiences can lend you a hand."
      />
      <div className='blogshowcase-content'>
        <main className='blogshowcase-main'>
          <List sortedBlogs={sortedBlogs} />
        </main>
        <TagsSidebar />
      </div>
    </div>
  );
}