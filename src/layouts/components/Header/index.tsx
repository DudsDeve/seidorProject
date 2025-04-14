import SeidorLogo from "@assets/images/seidorLogo.png";
import PerfilImage from "@assets/images/perfilImage.png";
import ExitIcon from "@assets/icons/exitIcon.png";
import {
  MainContainer,
  PerfilContainer,
  PerfilElipse,
  PerfilName,
} from "./styles";
import { Button } from "@components/Button";
import { pixelToRem } from "@/helpers/pixelToRem";
import { PATHS } from "@utils/paths";
import { useNavigate } from "react-router-dom";
export function Header() {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <img src={SeidorLogo} alt="Seidor Logo" />
      <div>
        <img />
        <PerfilContainer>
          <PerfilElipse>
            <img src={PerfilImage} alt="Perfil" />
          </PerfilElipse>
          <PerfilName>
            <h4>Fernanda Cândida</h4>
            <span>Recursos Humanos</span>
          </PerfilName>
          <Button
            width={pixelToRem(30)}
            height={pixelToRem(30)}
            border="none"
            onClick={() => {
              navigate(PATHS.HOME);
            }}
            icon={ExitIcon}
            iconWidth={pixelToRem(30)}
            iconHeight={pixelToRem(30)}
          />
        </PerfilContainer>
      </div>
    </MainContainer>
  );
}
