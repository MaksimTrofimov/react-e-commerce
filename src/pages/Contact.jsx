export function Contact() {
  return (
    <section className="flex items-center  flex-col">
      <h1>Contact</h1>
      <form className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Your message..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
