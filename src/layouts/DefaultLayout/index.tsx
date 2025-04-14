import { ContentContainer, MainContainer, Content } from "./styles";
import { Header } from "@layouts/components/Header";
import { Sidebar } from "@layouts/components/SideBar";
import { Outlet } from "react-router-dom";
export function DefaultLayout() {
  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </ContentContainer>
    </MainContainer>
  );
}
