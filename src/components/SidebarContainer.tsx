import UserInfoContainer from "./UserInfoContainer";
import JournalsContainer from "./JournalsContainer";
import GoalsContainer from "./GoalsContainer";

function SidebarContainer() {
  return (
    <div className="bg-gray-800 flex flex-col w-[22.5vw] h-[90.75vh] justify-center items-center fixed top-14 right-0 z-0 mt-8 mr-8 p-8 rounded-br-lg">
      <UserInfoContainer />
      <JournalsContainer />
      <GoalsContainer />
    </div>
  );
}

export default SidebarContainer;
