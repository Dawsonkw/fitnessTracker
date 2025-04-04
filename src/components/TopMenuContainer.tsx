interface TopMenuContainerProps {
  items: string[];
}

function TopMenuContainer() {
  const items = ["Workouts", "Nutrition", "Sleep"];

  return (
    <div className="bg-gray-300 flex align-top justify-center p-4 rounded-t-lg shadow-lg  fixed top-0 left-0 w-full z-10 mt-8 ml-8 mr-8">
      <ul className="flex space-x-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopMenuContainer;
