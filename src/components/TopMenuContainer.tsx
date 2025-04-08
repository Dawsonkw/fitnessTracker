function TopMenuContainer() {
  const items = ["Workouts", "Nutrition", "Sleep"];

  return (
    <div className="bg-gray-300 border-b-2 border-gray-300 flex align-top justify-center p-4 rounded-t-lg fixed w-[97.5%] top-0 left-0  z-10 mt-8 mx-8">
      <ul className="flex space-x-4">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopMenuContainer;
