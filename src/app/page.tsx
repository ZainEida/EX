"use client";
import { useMemo, useState, useEffect } from "react";

type Category = {
  id: string;
  title: string; // Arabic title
  photoUrl?: string; // main category image
  icon?: string; // emoji icon for category
};

type MenuItem = {
  id: string;
  categoryId: string;
  title: string; // Arabic name
  priceTl: number;
  photoUrl?: string; // empty until user provides
  description?: string; // optional description
};

const categories: Category[] = [
  { id: "shawarma", title: "وجبات شاورما", icon: "🌯", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bZGozmgE9959EAiR1bT706EeF24KuPrcZg&s" },
  { id: "waffle", title: "وافل", icon: "🧇", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuNSP3TonX7UD-Or7PLYGEheAzdy_ZFiMNzQ&s" },
  { id: "pizza", title: "بيتزا", icon: "🍕", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM03UAWVodpyvAZvJ7CpbFaGhxjxQOWiczTg&s" },
  { id: "burger", title: "همبرغر", icon: "🍔", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQTvUkA1MWdg98x4cqJXOvLgdBt5Xlvx0qw&s" },
  { id: "fresh-juices", title: "عصائر فرش", icon: "🥤", photoUrl: "https://i.ytimg.com/vi/N9NAtERJ-hU/maxresdefault.jpg" },
];

const items: MenuItem[] = [
  // وجبات شاورما
  { id: "shawarma-bill-meal", categoryId: "shawarma", title: "شاورما عربي وجبة دبل", priceTl: 160, description: "وجبة كاملة مع البطاطس والمشروب" },
  { id: "shawarma-regular-meal", categoryId: "shawarma", title: "شاورما عربي وجبة عادي", priceTl: 120, description: "وجبة عادية مع البطاطس" },
  { id: "shawarma-lafah-adi", categoryId: "shawarma", title: "شاورما عربي لفة عادي", priceTl: 60, description: "لفة شاورما عربية تقليدية" },
  { id: "shawarma-lafah-bill", categoryId: "shawarma", title: "شاورما عربي لفة دبل", priceTl: 90, description: "لفة دبل مع لحم إضافي" },

  // وافل
  { id: "waffle-belgian", categoryId: "waffle", title: "الوافل البلجيكي", priceTl: 50, description: "وافل بلجيكي تقليدي" },
  { id: "waffle-classic", categoryId: "waffle", title: "الوافل الكلاسيكي", priceTl: 70, description: "وافل كلاسيكي مع القطر" },
  { id: "waffle-bubble", categoryId: "waffle", title: "الوافل البابلي", priceTl: 100, description: "وافل بابلي مميز" },

  // بيتزا
  { id: "pizza-margherita", categoryId: "pizza", title: "بيتزا مارغريتا", priceTl: 80, description: "بيتزا إيطالية كلاسيكية" },
  { id: "pizza-four-seasons", categoryId: "pizza", title: "بيتزا الفصول الأربعة", priceTl: 100, description: "بيتزا متنوعة المكونات" },
  { id: "pizza-marinara", categoryId: "pizza", title: "بيتزا مارينارا", priceTl: 150, description: "بيتزا مارينارا إيطالية" },

  // همبرغر
  { id: "cheese-burger", categoryId: "burger", title: "تشيز برجر", priceTl: 15, description: "برجر مع جبنة" },
  { id: "chicken-burger", categoryId: "burger", title: "برجر دجاج", priceTl: 200, description: "برجر دجاج طازج" },
  { id: "big-mac", categoryId: "burger", title: "بيج ماك", priceTl: 250, description: "برجر كبير مع مكونات خاصة" },

  // عصائر فرش
  { id: "bolo-juice", categoryId: "fresh-juices", title: "عصير بولو", priceTl: 30, description: "عصير بولو طازج" },
  { id: "pomegranate-juice", categoryId: "fresh-juices", title: "عصير رمان", priceTl: 20, description: "عصير رمان طبيعي" },
  { id: "orange-juice", categoryId: "fresh-juices", title: "عصير برتقال", priceTl: 25, description: "عصير برتقال طازج" },
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

          {/* Category Navigation */}
          <nav className="flex gap-3 overflow-x-auto scrollbar-hide pb-6 mt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`category-button flex items-center gap-2 whitespace-nowrap px-6 py-4 text-base rounded-2xl transition-all duration-300 min-w-max ${activeCategory === cat.id
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
              {searchQuery.trim() ? "نتائج البحث" : categories.find((c) => c.id === activeCategory)?.title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Category Image - Only show when not searching */}
          {!searchQuery.trim() && (
            <div className="max-w-5xl mx-auto mb-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={categories.find((c) => c.id === activeCategory)?.photoUrl}
                  alt={categories.find((c) => c.id === activeCategory)?.title}
                  className="w-full h-80 sm:h-96 lg:h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 right-6">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl">
                    {categories.find((c) => c.id === activeCategory)?.title}
                  </h3>
                </div>
              </div>
            </div>
          )}

          {/* Menu Items List - Clean and Simple */}
          <section className={`max-w-4xl mx-auto ${isLoading ? 'opacity-50' : ''}`}>
            {visibleItems.length > 0 ? (
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-700/50 shadow-2xl">
                <div className="grid gap-4 sm:gap-6">
                  {visibleItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="menu-item-card group flex items-center justify-between p-4 sm:p-6 rounded-2xl bg-gray-800/30 hover:bg-gray-800/60 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-1 text-right">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="ml-4">
                        <span className="text-xl sm:text-2xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors duration-300" dir="ltr">
                          {item.priceTl} TL
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">لا توجد نتائج</h3>
                <p className="text-gray-400">جرب البحث بكلمات مختلفة</p>
              </div>
            )}
          </section>
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
