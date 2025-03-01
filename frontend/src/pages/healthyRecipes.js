import { useState, useEffect } from "react";

export default function HealthyPregnancyRecipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Sample data from American Pregnancy (You can replace it with API calls)
        setRecipes([
            {
                title: "Tuna Puttanesca Pasta",
                image: "https://americanpregnancy.org/wp-content/uploads/tuna-puttanesca.jpg",
                rating: 5,
            },
            {
                title: "Grilled Salmon Avocado Salad",
                image: "https://americanpregnancy.org/wp-content/uploads/grilled-salmon.jpg",
                rating: 4.8,
            },
            {
                title: "Healthy Banana Split",
                image: "https://americanpregnancy.org/wp-content/uploads/banana-split.jpg",
                rating: 4.9,
            },
            {
                title: "Chocolate Peanut Butter Smoothie",
                image: "https://americanpregnancy.org/wp-content/uploads/choco-smoothie.jpg",
                rating: 4.7,
            },
        ]);
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
            <header className="text-center py-6">
                <h1 className="text-3xl font-bold text-red-500">Healthy Pregnancy Recipes</h1>
                <p className="text-gray-600 mt-2">
                    Discover nutritious and delicious recipes perfect for pregnancy.
                </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recipes.map((recipe, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{recipe.title}</h2>
                            <p className="text-yellow-500">{'★'.repeat(Math.round(recipe.rating))}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
