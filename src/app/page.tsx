import Image from "next/image";

function Home() {
  
  
  return (
    <div className="container m-10 mt-24 max-w-[1264px] mx-auto md:px-16 px-6">
      <div className="mb-10">
        <h1 className="max-w-3xl font-medium tracking-tight sm:text-5xl text-4xl mb-6 lg:leading-[3.7rem]">
          Tarun Gowda
        </h1>
        <div className="relative w-full pt-[56.4%]">
          <Image
            className="rounded-xl border dark:border-divider-1 object-cover"
            src="/static/projects/coverImage/ez-split.png"
            alt="Tarun Gowda"
            fill
            style={{objectFit: "contain"}}
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default Home