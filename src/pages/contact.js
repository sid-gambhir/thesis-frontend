import Layout from "../components/layout";

/* This example requires Tailwind CSS v2.0+ */
export default function Contact() {
  return (
    <Layout>
    <div className="bg-gray-100 h-screen content-center">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Get in touch
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Dr. Rita Sharma
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>rita.sharma@pilani.bits-pilani.ac.in</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+91-1596-255740</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Lakshay Sharma
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>p20220005@pilani.bits-pilani.ac.in</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+91 95991 06506</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Siddhant Gambhir
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>f20180602@pilani.bits-pilani.ac.in</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+91 90340 34081</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Shubham Pandey
                </h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>f20190982@pilani.bits-pilani.ac.in</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>+91 82875 89631</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          {/* <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Locations</h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Los Angeles</h3>
                  <div className="mt-2 text-base text-gray-500">
                    <p>4556 Brendan Ferry</p>
                    <p className="mt-1">Los Angeles, CA 90210</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">New York</h3>
                  <div className="mt-2 text-base text-gray-500">
                    <p>886 Walter Streets</p>
                    <p className="mt-1">New York, NY 12345</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Toronto</h3>
                  <div className="mt-2 text-base text-gray-500">
                    <p>7363 Cynthia Pass</p>
                    <p className="mt-1">Toronto, ON N3Y 4H8</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Chicago</h3>
                  <div className="mt-2 text-base text-gray-500">
                    <p>726 Mavis Island</p>
                    <p className="mt-1">Chicago, IL 60601</p>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </div>
    </Layout>
  );
}
