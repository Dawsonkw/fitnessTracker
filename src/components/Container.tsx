import TopMenuContainer from "./TopMenuContainer";
import ActivitiesContainer from "./ActivitiesContainer";
import SidebarContainer from "./SidebarContainer";
import ActivityStatsContainer from "./ActivityStatsContainer";
function Container() {
  return (
    <div className="flex columns-4 ">
      <TopMenuContainer />
      <ActivitiesContainer />
      <SidebarContainer />
      <ActivityStatsContainer />
    </div>
  );
}

export default Container;
