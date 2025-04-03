import UserInfoContainer from "./UserInfoContainer";
import JournalsContainer from "./JournalsContainer";
import GoalsContainer from "./GoalsContainer";

function SidebarContainer() {
  return (
    <div>
      <UserInfoContainer />
      <JournalsContainer />
      <GoalsContainer />
    </div>
  );
}

export default SidebarContainer;
