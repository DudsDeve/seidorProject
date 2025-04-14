import { DefaultLayout } from "@layouts/DefaultLayout";
import { EditEmployee } from "@pages/EditEmployee";
import { Home } from "@pages/Home";
import { NewEmployee } from "@pages/NewEmployee";
import { PATHS } from "@utils/paths";
import { Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <Routes>
      <Route path={PATHS.BASE} element={<DefaultLayout />}>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.NEW_EMPLOYEE} element={<NewEmployee />} />
        <Route path={PATHS.EDIT_EMPLOYEE} element={<EditEmployee />} />
      </Route>
    </Routes>
  );
}
