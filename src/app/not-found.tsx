import Link from "next/link";

const NotFound = async () => {
  return (
    <>
      <section className="section-sm text-center">
        <div className="container">
          <div className="row justify-center">
            <div className="sm:col-10 md:col-8 lg:col-6">
              <span className="text-[8rem] block font-bold text-dark dark:text-darkmode-dark">
                404
              </span>
              <h1 className="h2 mb-4">Page not found</h1>
              <div className="content">
                <p>
                  The page you are looking for does not exist, 
                  or is temporarily unavailable.
                </p>
              </div>
              <Link href="/" className="btn btn-primary mt-8">
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