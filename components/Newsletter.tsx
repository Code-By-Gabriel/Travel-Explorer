export default function Newsletter() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        Stay Updated
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-blue-100 sm:mt-4">
        Subscribe to our newsletter for travel tips and exclusive deals
      </p>
      <form className="mt-8 sm:flex max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-5 border text-white border-white py-3 placeholder-white-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="mt-3 w-full sm:mt-0 sm:ml-3 flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}