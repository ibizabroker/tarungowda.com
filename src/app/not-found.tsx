import Link from "next/link";

const NotFound = async () => {
  return (
    <>
      <section className="py-16 xl:py-20 text-center">
        <div className="mx-auto max-w-[1320px] px-4">
          <div className="row justify-center">
            <div className="sm:col-10 md:col-8 lg:col-6">
              <span className="text-[8rem] block font-bold text-dark">
                404
              </span>
              <h1 className="font-mr font-bold text-2xl text-dark mb-12">Page not found</h1>
              <div>
                <p>
                  The page you are looking for does not exist, 
                  or is temporarily unavailable.
                </p>
              </div>
              <Link href="/" className="inline-block rounded border border-transparent px-5 py-2 font-bold capitalize transition border-dark mt-8">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;