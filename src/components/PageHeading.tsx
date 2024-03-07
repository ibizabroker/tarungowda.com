export default function PageHeading({ title, description }: { title: string, description: string | null }) {
  return (
    <header className="mb-10">
        <h1 className="max-w-3xl font-medium tracking-tight sm:text-5xl text-4xl mb-6 lg:leading-[3.7rem]">
          {title}
        </h1>
        <p className="max-w-2xl text-base dark:text-primary-1 text-primary-2 leading-relaxed">
          {description}
        </p>
    </header>
  );
}