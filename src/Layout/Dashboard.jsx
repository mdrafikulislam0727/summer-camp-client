import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-purple-400">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to="/dashboard/myenrolledclasses">My Enrolled Classes</NavLink></li>
                    <li><NavLink to="/dashboard/myclasses">My Selected Classes</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;