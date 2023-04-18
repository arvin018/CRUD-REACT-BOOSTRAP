import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(){

    return(
        <div >
        <div class="row">
        <Header />
          <div class="col-1">
            <Sidebar />
          </div>
          <div class="col-11">
          <Outlet/>
            </div>
            <Footer />
        </div>
      </div>
    )
}


