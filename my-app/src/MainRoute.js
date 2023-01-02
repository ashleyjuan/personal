import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainOutlet from "./MainOutlet";
import Home from "./Home";
import Contact from "./Contact";
import HighSchool from "./HighSchool";
import FinalProject from "./FinalProject";
import Teachers from "./Teachers";
import Master from "./Master";
import Bachelor from "./Bachelor";
import Forms from "./Form";
import Introduce from "./Introduce";
import Siders from "./Sider";
import DevelopGoal from "./DevelopGoal";
import FutureGoal from "./FutureGoal";
import CourseGoal from "./CourseGoal";
const MainRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* 寫網站路徑控制頁面 */}
                <Route path={'/personal'} element={<MainOutlet />}>
                    <Route index element={<Home />} ></Route>
                    <Route path="Home" element={<Home />} ></Route>
                    <Route path="Contact" element={<Contact />} ></Route>
                    <Route path="HighSchool" element={<HighSchool />} ></Route>
                    <Route path="FinalProject" element={<FinalProject />} ></Route>
                    <Route path="Teachers" element={<Teachers />} ></Route>
                    <Route path="Master" element={<Master />} ></Route>
                    <Route path="Bachelor" element={<Bachelor />} ></Route>
                    <Route path="Form" element={<Forms />} ></Route>
                    <Route path={''} element={<Siders />}>
                        <Route path="Introduce" element={<Introduce />} ></Route>
                        <Route path="DevelopGoal" element={<DevelopGoal />} ></Route>
                        <Route path="FutureGoal" element={<FutureGoal />} ></Route>
                        <Route path="CourseGoal" element={<CourseGoal />} ></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter >

    );
}
export default MainRoute;