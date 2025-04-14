import { PATHS } from "@utils/paths";
import { ContentContainer, Link, MainContainer } from "./styles";
import ListIcon from "@assets/icons/listIcon.svg";
import NewEmployeeIcon from "@assets/icons/newEmployeeIcon.svg";
export function Sidebar() {
  return (
    <MainContainer>
      <h2>Menu</h2>
      <ContentContainer>
        <Link to={PATHS.HOME}>
          <img src={ListIcon} />
          <span>Home</span>
        </Link>
        <Link to={PATHS.NEW_EMPLOYEE}>
          <img src={NewEmployeeIcon} />
          <span>Add colaborador</span>
        </Link>
      </ContentContainer>
    </MainContainer>
  );
}
