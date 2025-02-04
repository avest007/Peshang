function selectCurrency(currency, buyPrice, sellPrice) {
    localStorage.setItem('selectedCurrency', currency);
    localStorage.setItem('buyPrice', buyPrice);
    localStorage.setItem('sellPrice', sellPrice);
    window.location.href = 'currency.html';
}

function updateDateTime() {
    const now = new Date();
    const date = now.toISOString().split('T')[0].replace(/-/g, '-');
    const time = now.toTimeString().split(' ')[0];
    document.getElementById('datetime').innerText = `بەروار: ${date} - کات: ${time}`;
}

function changeLanguage() {
    const selectedLanguage = document.getElementById('languageSelect').value;
    localStorage.setItem('selectedLanguage', selectedLanguage);
    applyLanguage(selectedLanguage);
}

function applyLanguage(language) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[language] && translations[language][key]) {
            element.innerText = translations[language][key];
        }
    });
}

const translations = {
    ku: {
        title: "نرخی دراوەکان",
        buy: "کڕین",
        sell: "فرۆشتن",
        back: "گەرانەوە",
        amountPlaceholder: "ژمارەی دراو بنووسە",
        namecurrency10: " دینار دەیی (IQD)",
        namecurrency25: " دینار سور  (IQD)",
        namecurrency1: " یۆڕۆ (EUR)",
        namecurrency2: "پاوەند (GBP)",
        calculate: "حساب بکە",
        result: "بڕی پارەیەک"
    },
    ar: {
        title: "أسعار العملات",
        buy: "شراء",
        sell: "بيع",
        back: "رجوع",
        amountPlaceholder: "أدخل المبلغ",
        namecurrency10: " دينار عشرات (IQD)",
        namecurrency25: " دینار الاحمر  (IQD)",
        namecurrency1: " يورو (EUR)",
        namecurrency2: "باوند (GBP)",
        calculate: "احسب",
        result: "المبلغ الإجمالي"
    },
    en: {
        title: "Currency Rates",
        buy: "Buy",
        sell: "Sell",
        back: "Back",
        amountPlaceholder: "Enter amount",
        namecurrency10: " Dinar Green (IQD)",
        namecurrency25: " Dinar Red  (IQD)",
        namecurrency1: " Euro (EUR)",
        namecurrency2: "Pound (GBP)",
        calculate: "Calculate",
        result: "Total Amount"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'ku';
    document.getElementById('languageSelect').value = selectedLanguage;
    applyLanguage(selectedLanguage);
    updateDateTime();
    setInterval(updateDateTime, 1000);
});