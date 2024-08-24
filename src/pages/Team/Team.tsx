import TeamMembers from "../../components/TeamMembers";
import { PageTitle } from "../../components";

const Team = () => {
  return (
    <div className="flex flex-col pt-10 md:pt-32">
      <PageTitle sub="Home &gt; Our Team" title="Our Team" />
      <TeamMembers showAdvisors={false} />
    </div>
  );
};

export default Team;
