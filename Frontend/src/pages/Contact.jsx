export default function Contact() {
  return (
    <div className="px-8 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form className="max-w-md space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 border rounded"
        />

        <button className="bg-[#2A7FFF] text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}