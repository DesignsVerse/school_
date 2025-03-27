import SectionHeader from "@/components/Common/SectionHeader";

const Contact = () => {
    return (
    <>
    <SectionHeader title="Contact Us" breadcrumbPath="Contact" />
      <section className="py-16 bg-white">
        
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left Side: Form */}
            <div className="md:w-2/3">
              {/* Section Title */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-blue-600 text-sm font-semibold">
                  OUR CONTACT US
                </span>
              </div>
  
              {/* Main Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Our Contact NOW.
              </h2>
  
              {/* Description */}
              <p className="text-gray-600 mb-8">
                Promote your blog posts, case sudie, and product ouncements with
                the the branded videoscustomers coming back for services Makes best
                effort.
              </p>
  
              {/* Contact Form */}
              <form className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-600 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-600 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-600 focus:border-blue-500 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition"
                >
                  SEND REQUEST
                </button>
              </form>
            </div>
  
            {/* Right Side: Contact Details */}
            <div className="md:w-1/3">
              {/* Call */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Call</h4>
                  <p className="text-gray-600">+880254615566</p>
                  <p className="text-gray-600">+826542556455</p>
                </div>
              </div>
  
              {/* Mail */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Mail</h4>
                  <p className="text-gray-600">neta@eobi.com</p>
                  <p className="text-gray-600">coraty@bara.com</p>
                </div>
              </div>
  
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.243l-4.243-4.243m0 0L9.172 7.757M13.414 12l4.243-4.243M13.414 12l-4.243 4.243M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">52, 25 rangpur, 0123</p>
                  <p className="text-gray-600">Ratba baraj, 20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  };
  
  export default Contact;