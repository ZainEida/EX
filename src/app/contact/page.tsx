"use client";
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white page-transition" dir="rtl">
            {/* Background Pattern */}
            <div className="fixed inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>

            <div className="relative z-10 p-4 sm:p-6 lg:p-8 pt-8 sm:pt-12 lg:pt-16">
                {/* Header */}
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

                        {/* Back to Menu Button */}
                        <div className="w-full lg:w-auto">
                            <Link
                                href="/"
                                className="back-btn px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-xl border border-gray-600 hover:border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform backdrop-blur-sm"
                            >
                                العودة للقائمة الرئيسية
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-4xl mx-auto">
                    {/* Page Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 page-title text-white">
                            تواصل معنا
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Contact Information Card */}
                    <div className="contact-card bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-700/50 shadow-2xl">
                        <div className="grid gap-8 md:grid-cols-2">
                            {/* Contact Details */}
                            <div className="space-y-6">
                                <div className="text-center md:text-right">
                                    <h3 className="text-2xl font-bold text-white mb-4">معلومات التواصل</h3>
                                    <p className="text-gray-400 text-lg">نحن هنا لمساعدتك في أي استفسار</p>
                                </div>

                                <div className="space-y-6">
                                    {/* Name */}
                                    <div className="contact-item p-4 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                                                <span className="text-2xl">👤</span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-white">الاسم</h4>
                                                <p className="text-orange-400 text-xl font-bold">Zain Eida</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="contact-item p-4 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                                                <span className="text-2xl">📞</span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-white">رقم الهاتف</h4>
                                                <a
                                                    href="tel:+963940303379"
                                                    className="text-orange-400 text-xl font-bold hover:text-orange-300 transition-colors duration-300"
                                                >
                                                    +963 940 303 379
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form or Additional Info */}
                            <div className="space-y-6">
                                <div className="text-center md:text-right">
                                    <h3 className="text-2xl font-bold text-white mb-4">ساعات العمل</h3>
                                    <p className="text-gray-400 text-lg">نحن متاحون لخدمتك</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-400">الأحد - الخميس</span>
                                            <span className="text-white font-semibold">9:00 ص - 10:00 م</span>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-400">الجمعة - السبت</span>
                                            <span className="text-white font-semibold">10:00 ص - 11:00 م</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Call to Action */}
                                <div className="text-center p-6 bg-orange-500/10 rounded-2xl border border-orange-500/20">
                                    <p className="text-orange-400 font-semibold mb-3">هل تريد طلب خاص؟</p>
                                    <a
                                        href="tel:+963940303379"
                                        className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                                    >
                                        اتصل بنا الآن
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 Restaurant Store - جميع الحقوق محفوظة
                    </p>
                </footer>
            </div>
        </div>
    );
}
