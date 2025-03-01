import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';


export default function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="font-sans">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-4 py-3 bg-pink-100 shadow-md">
                <h1 className="text-xl font-bold text-pink-600">American Pregnancy</h1>
                <FaBars className="text-pink-600 text-2xl cursor-pointer md:hidden" onClick={() => setMenuOpen(!menuOpen)} />
                <ul className={`md:flex space-x-6 ${menuOpen ? "block" : "hidden"}`}>
                    <li className="text-pink-600 hover:underline cursor-pointer">Home</li>
                    <li className="text-pink-600 hover:underline cursor-pointer">About</li>
                    <li className="text-pink-600 hover:underline cursor-pointer">Blog</li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section className="text-center py-8 px-4">
                <h2 className="text-3xl font-bold text-pink-600">Welcome to the American Pregnancy Association</h2>
                <p className="text-gray-700 mt-2">Supporting your pregnancy journey with resources, guidance, and care.</p>
            </section>

            {/* Pregnancy Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
                {[
                    { title: "Unplanned Pregnancy", img: "pregnancy-test.jpg" },
                    { title: "Healthy Pregnancy", img: "healthy-mom.jpg" },
                    { title: "Getting Pregnant", img: "pregnant-woman.jpg" },
                ].map((item, index) => (
                    <Card key={index}>
                        <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                        <CardContent className="text-center py-4">
                            <h3 className="text-lg font-semibold text-pink-600">{item.title}</h3>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Pregnancy Tools */}
            <section className="text-center py-8 px-4">
                <h3 className="text-2xl font-bold text-pink-600">Planning Your Pregnancy Tools</h3>
                <p className="text-gray-700">Explore resources for tracking ovulation, meal planning, and more.</p>
            </section>

            {/* Donation Section */}
            <section className="bg-pink-200 text-center py-8 px-4">
                <h3 className="text-2xl font-bold text-white">Every gift makes a meaningful impact</h3>
                <Button className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-lg">Donate Now</Button>
            </section>

            {/* Talk to an Educator */}
            <section className="text-center py-8 px-4">
                <h3 className="text-2xl font-bold text-pink-600">Talk to a Pregnancy Educator Now</h3>
                <Button className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-lg">Chat Now</Button>
            </section>

            {/* Blog Section */}
            <section className="text-center py-8 px-4">
                <h3 className="text-2xl font-bold text-pink-600">From the Blog</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {[
                        "Beyond Baby Blues: Coping with Postpartum Changes",
                        "Black Coffee & Pregnancy: Is it Safe?",
                        "Managing Back Pain During Pregnancy",
                    ].map((title, index) => (
                        <Card key={index}>
                            <CardContent className="text-center py-4">
                                <h4 className="text-lg font-semibold text-pink-600">{title}</h4>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Baby Development Form */}
            <section className="bg-pink-100 text-center py-8 px-4">
                <h3 className="text-2xl font-bold text-pink-600">Track Your Baby’s Development</h3>
                <form className="mt-4 space-y-4">
                    <input type="text" placeholder="Your Name" className="block w-full px-4 py-2 border rounded-md" />
                    <input type="email" placeholder="Email Address" className="block w-full px-4 py-2 border rounded-md" />
                    <Button className="bg-pink-600 text-white px-6 py-2 rounded-lg">Subscribe</Button>
                </form>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 bg-pink-200 text-pink-600 font-semibold">
                &copy; 2025 American Pregnancy Association
            </footer>
        </div>
    );
}
