import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(null);

    return (
        <nav className="bg-blue-500 text-white p-4">
            <div className="flex justify-between">
                <div>
                    <Link to="/due-date" className="px-4">Pregnancy Due Date Calculator</Link>
                    <Link to="/ovulation-calendar" className="px-4">Ovulation Calendar</Link>
                    <Link to="/baby-names" className="px-4">Baby Names Directory</Link>
                    <Link to="/questions" className="px-4">Pregnancy Questions</Link>
                    <Link to="/live-help" className="px-4">Live Help</Link>
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <div
                    className="relative"
                    onMouseEnter={() => setDropdown('unplanned')}
                    onMouseLeave={() => setDropdown(null)}
                >
                    <span className="px-4 cursor-pointer">Unplanned Pregnancy</span>
                    {dropdown === 'unplanned' && (
                        <div className="absolute bg-white text-black shadow-md p-2">
                            <Link to="/am-i-pregnant">Am I Pregnant?</Link>
                            <Link to="/keep-and-parent">Keep & Parent</Link>
                        </div>
                    )}
                </div>
                <Link to="/getting-pregnant" className="px-4">Getting Pregnant</Link>
                <Link to="/healthy-pregnancy" className="px-4">Healthy Pregnancy</Link>
                <Link to="/resources" className="px-4">Resources</Link>
                <Link to="/about" className="px-4">About</Link>
                <Link to="/donate" className="px-4 bg-yellow-500">Donate Now</Link>
            </div>
        </nav>
    );
};

export default Navbar;
