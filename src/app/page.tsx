import { formatSlug } from '@/utils/slug';
import { getAllTagSlugs, allTagsData, getPostsByTag } from "@/utils/tags";
import sortBlogsUsingDate from '@/utils/sortBlogs'
import { allBlogs } from 'contentlayer/generated'

function Home() {
  const sortedBlogs = sortBlogsUsingDate(allBlogs);
  console.log(sortedBlogs)

  const tagSlug = formatSlug("Next.js @test_g12   test")
  console.log(tagSlug)

  const test = allTagsData.find((tag) => {
    return tag.slug === "next-js";
  });
  console.log(test)
  
  return (
    <main className="p-5">
      <h1 className="text-3xl font-bold">
        Test Text 1 2 3 456
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
      <h1 className="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquam exercitationem soluta omnis voluptatem ea cumque repellat eius, sequi similique corrupti fuga rem distinctio incidunt quo aperiam nisi ut consectetur!
      </h1>
    </main>
  )
}

export default Home