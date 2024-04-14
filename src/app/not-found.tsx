import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: '404 - Not Found',
  description: 'The page you are looking for does not exist, or is temporarily unavailable.',
  openGraph: {
    title: '404 - Not Found',
    description: 'The page you are looking for does not exist, or is temporarily unavailable.',
  },
}

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
              <Link href="/" className="button button-primary mt-8 inline-block">
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