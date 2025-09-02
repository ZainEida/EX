"use client";
import { useMemo, useState, useEffect } from "react";

type Category = {
  id: string;
  title: string; // Arabic title
  photoUrl: string; // main section image
  icon?: string; // emoji icon for category
};

type MenuItem = {
  id: string;
  categoryId: string;
  title: string; // Arabic name
  priceTl: number;
  description?: string; // optional description
};

const categories: Category[] = [
  { id: "shawarma", title: "وجبات شاورما", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bZGozmgE9959EAiR1bT706EeF24KuPrcZg&s", icon: "🌯" },
  { id: "waffle", title: "وافل", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuNSP3TonX7UD-Or7PLYGEheAzdy_ZFiMNzQ&s", icon: "🧇" },
  { id: "pizza", title: "بيتزا", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM03UAWVodpyvAZvJ7CpbFaGhxjxQOWiczTg&s", icon: "🍕" },
  { id: "hamburger", title: "همبرغر", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQTvUkA1MWdg98x4cqJXOvLgdBt5Xlvx0qw&s", icon: "🍔" },
  { id: "fresh-juices", title: "عصائر فرش", photoUrl: "https://i.ytimg.com/vi/N9NAtERJ-hU/maxresdefault.jpg", icon: "🥤" },
];

const items: MenuItem[] = [
  // وجبات شاورما
  { id: "shawarma-bill-meal", categoryId: "shawarma", title: "شاورما عربي وجبة دبل", priceTl: 160, description: "وجبة كاملة مع البطاطس والمشروب" },
  { id: "shawarma-regular-meal", categoryId: "shawarma", title: "شاورما عربي وجبة عادي", priceTl: 120, description: "وجبة عادية مع البطاطس" },
  { id: "shawarma-lafah-adi", categoryId: "shawarma", title: "شاورما عربي لفة عادي", priceTl: 60, description: "لفة شاورما عربية تقليدية" },
  { id: "shawarma-lafah-bill", categoryId: "shawarma", title: "شاورما عربي لفة دبل", priceTl: 90, description: "لفة دبل مع لحم إضافي" },

  // وافل
  { id: "waffle-belgian", categoryId: "waffle", title: "الوافل البلجيكي", priceTl: 50, description: "وافل بلجيكي تقليدي" },
  { id: "waffle-classic", categoryId: "waffle", title: "الوافل الكلاسيكي", priceTl: 70, description: "وافل كلاسيكي مع الشوكولاتة" },
  { id: "waffle-bubble", categoryId: "waffle", title: "الوافل البابلي", priceTl: 100, description: "وافل بابلي مميز" },

  // بيتزا
  { id: "pizza-margherita", categoryId: "pizza", title: "بيتزا مارغريتا", priceTl: 80, description: "بيتزا إيطالية كلاسيكية" },
  { id: "pizza-four-seasons", categoryId: "pizza", title: "بيتزا الفصول الأربعة", priceTl: 100, description: "بيتزا مع خضار الموسم" },
  { id: "pizza-marinara", categoryId: "pizza", title: "بيتزا مارينارا", priceTl: 150, description: "بيتزا مع صلصة الطماطم" },

  // همبرغر
  { id: "cheese-burger", categoryId: "hamburger", title: "تشيز برجر", priceTl: 150, description: "برجر مع جبنة ذائبة" },
  { id: "chicken-burger", categoryId: "hamburger", title: "برجر دجاج", priceTl: 200, description: "برجر دجاج طازج" },
  { id: "big-mac", categoryId: "hamburger", title: "بيج ماك", priceTl: 250, description: "برجر كبير مع طبقات متعددة" },

  // عصائر فرش
  { id: "bolo-juice", categoryId: "fresh-juices", title: "عصير بولو", priceTl: 30, description: "عصير طازج من الفواكه الطبيعية" },
  { id: "pomegranate-juice", categoryId: "fresh-juices", title: "عصير رمان", priceTl: 20, description: "عصير رمان طبيعي 100%" },
  { id: "orange-juice", categoryId: "fresh-juices", title: "عصير برتقال", priceTl: 25, description: "عصير برتقال طازج يومياً" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Simulate loading when changing categories
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const visibleItems = useMemo(() => {
    let filtered = items;

    // If no search query, show only current category items
    if (!searchQuery.trim()) {
      filtered = items.filter((it) => it.categoryId === activeCategory);
    } else {
      // If searching, search only by item name (title) across ALL categories
      filtered = items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white page-transition" dir="rtl">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 p-4 sm:p-6 lg:p-8 pt-8 sm:pt-12 lg:pt-16">
        {/* Header with Navigation and Logo */}
        <header className="mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            {/* Restaurant Logo and Title */}
            <div className="logo-header flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-start">
              <div className="logo-container w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg">
                <img
                  src="/favicon.ico"
                  alt="Restaurant Logo"
                  className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                />
              </div>
              <div className="text-center lg:text-right">
                <h1 className="text-2xl lg:text-4xl font-bold text-white mb-1">Restaurant Store</h1>
                <p className="text-orange-400 text-sm lg:text-base">قائمة الطعام الرقمية</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="w-full lg:w-80">
              <div className="relative">
                <input
                  type="text"
                  placeholder="البحث في القائمة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>
          </div>

          {/* Category Navigation - 5 Main Buttons */}
          <nav className="category-navigation flex gap-3 overflow-x-auto scrollbar-hide pb-6 mt-4 justify-start sm:justify-center w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-button flex items-center gap-2 whitespace-nowrap px-6 py-4 text-base rounded-2xl transition-all duration-300 min-w-max flex-shrink-0 ${activeCategory === cat.id
                  ? "active text-black shadow-lg"
                  : "text-white hover:bg-gray-800/50 hover:scale-105"
                  }`}
              >
                <span className="text-xl">{cat.icon}</span>
                <span>{cat.title}</span>
              </button>
            ))}
          </nav>
        </header>

        {/* Main Content */}
        <main className="space-y-8 mt-4 sm:mt-6">
          {/* Category Title */}
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 page-title text-white">
              {searchQuery.trim() ? "نتائج البحث" : currentCategory?.title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Big Section Image and Types */}
          {!searchQuery.trim() && currentCategory && (
            <section className="max-w-4xl mx-auto">
              {/* Big Section Image */}
              <div className="mb-8">
                <img
                  src={currentCategory.photoUrl}
                  alt={currentCategory.title}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>

              {/* Types List */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 text-center">أنواع {currentCategory.title}</h3>
                <div className="grid gap-4">
                  {visibleItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                        {item.description && (
                          <p className="text-gray-300 text-sm">{item.description}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-bold text-orange-500" dir="ltr">{item.priceTl} TL</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Search Results */}
          {searchQuery.trim() && (
            <section className="max-w-4xl mx-auto">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 text-center">نتائج البحث</h3>
                <div className="grid gap-4">
                  {visibleItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700/70 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{categories.find(c => c.id === item.categoryId)?.title}</p>
                        {item.description && (
                          <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-bold text-orange-500" dir="ltr">{item.priceTl} TL</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* No Results */}
          {searchQuery.trim() && visibleItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">لا توجد نتائج</h3>
              <p className="text-gray-400">جرب البحث بكلمات مختلفة</p>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Restaurant Store - جميع الحقوق محفوظة
          </p>
        </footer>
      </div>
    </div>
  );
}
