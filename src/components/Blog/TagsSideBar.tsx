import Link from "next/link";
import { allTagsData, getTagSlugLink } from "@/utils/tags";

export default function TagSidebar() {
  const tags = allTagsData;

  return (
    <aside className='tag-sidebar'>
      <div className='tag-block'>
        <p className='tag-block-head'>
          {/*Icon for tag*/}
          Tags
        </p>
        <ul className='tag-list'>
          {tags.map((tag) => {
            const { name, slug } = tag;

            return (
              <li className='tag-item' key={name}>
                <Link href={getTagSlugLink(slug)} className='tag-link'>
                  <span>#</span> {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}