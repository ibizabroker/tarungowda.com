import Image from "next/image";

function Home() {
  
  
  return (
    <div className="container m-10 mt-24 max-w-[1264px] mx-auto md:px-16 px-6">
      <div className="flex lg:flex-row flex-col xl:items-center items-start lg:justify-center justify-between gap-x-12 mb-10">
        <div className="max-w-3xl">
          <h1 className="font-medium tracking-tight sm:text-5xl text-4xl mb-6 lg:leading-[3.7rem]">
            Hello! I'm Tarun.
          </h1>
          <p>Your everyday software developer exploring new tech to solve real-world problems. On this website I share some insights through technical blogs and projects that usually automates or solves the challenges I have faced in the past.</p>
        </div>
        <Image
          className="rounded-2xl"
          src="/static/projects/coverImage/ez-split.png"
          alt="Tarun Gowda"
          width={570}
          height={200}
          quality={100}
        />
      </div>
    </div>
  )
}

export default Home