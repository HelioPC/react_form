import { HashRouter, Route, Routes } from "react-router-dom";
import { FinalPage } from "./pages/FinalPage";

import { FormStep1 } from "./pages/FormStep1";
import { FormStep2 } from "./pages/FormStep2";
import { FormStep3 } from "./pages/FormStep3";

const AppRouter = () => {
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element={<FormStep1 />} />
                <Route path='/step2' element={<FormStep2 />} />
                <Route path='/step3' element={<FormStep3 />} />
                <Route path='/infos' element={<FinalPage />} />
            </Routes>
        </HashRouter>
    );
}

export default AppRouter
