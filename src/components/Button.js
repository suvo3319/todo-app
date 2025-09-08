// Button.js
const COLOR_CLASSES = {
  blue: "bg-blue-600 hover:bg-blue-700",
  red: "bg-red-600 hover:bg-red-700",
  gray: "bg-gray-600 hover:bg-gray-700",
  // Add more if needed
};

export const Button = ({ color = "blue", children, onClick }) => {
  const bgClass = COLOR_CLASSES[color] || COLOR_CLASSES.blue;

  return (
    <button
      className={`px-4 py-2 ${bgClass} text-white rounded-md transition`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
