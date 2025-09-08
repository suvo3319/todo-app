export const Input = ({ input, setInput }) => {
  return (
    <input
      id="input"
      type="text"
      placeholder="Enter your todo here"
      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};
