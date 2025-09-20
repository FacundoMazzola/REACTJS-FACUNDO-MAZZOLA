import React from 'react';

// Componente CartWidget
// Muestra el ícono del carrito de compras y un contador.
const CartWidget = () => {
    return (
        <div className="relative p-2 cursor-pointer transition-all hover:scale-110">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.182 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                3
            </span>
        </div>
    );
};

// Componente NavBar
// Contiene el logo, enlaces de navegación y el CartWidget.
const NavBar = () => {
    return (
        <nav className="bg-white shadow-md rounded-b-xl">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo de la tienda */}
                <a href="#" className="flex items-center space-x-2 text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Mi Tienda
                </a>

                {/* Enlaces de navegación */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-300">Categoría 1</a>
                    <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-300">Categoría 2</a>
                    <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-300">Categoría 3</a>
                </div>

                {/* Widget del carrito */}
                <div className="flex items-center">
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

// Componente ItemListContainer
// Recibe un mensaje de bienvenida a través de una prop.
const ItemListContainer = ({ greeting }) => {
    return (
        <div className="p-8 text-center bg-gray-50 rounded-lg shadow-inner mt-8 mx-auto max-w-2xl">
            <h1 className="text-3xl font-extrabold text-indigo-800 mb-2">{greeting}</h1>
            <p className="text-lg text-gray-600">Aquí se mostrará el catálogo de productos.</p>
        </div>
    );
};

// Componente principal de la aplicación
// Renderiza el NavBar y el ItemListContainer.
export default function App() {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
    `}</style>
            <script src="https://cdn.tailwindcss.com"></script>

            <NavBar />

            <main className="container mx-auto px-4 py-8">

                <ItemListContainer greeting="¡Hola, bienvenido a Mi Tienda!" />
            </main>
        </div>
    );
}


