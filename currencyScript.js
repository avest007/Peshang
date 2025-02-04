let mode = 'buy';

document.addEventListener('DOMContentLoaded', function() {
    const currency = localStorage.getItem('selectedCurrency');
    document.getElementById('currencyName').innerText = `نرخی ${currency}`;
    updateSelectedPrice();

    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'ku';
    document.getElementById('languageSelect').value = selectedLanguage;
    applyLanguage(selectedLanguage);
});

function setMode() {
    mode = document.getElementById('modeSelect').value;
    updateSelectedPrice();
}

function updateSelectedPrice() {
    const buyPrice = parseFloat(localStorage.getItem('buyPrice'));
    const sellPrice = parseFloat(localStorage.getItem('sellPrice'));
    const selectedPriceElement = document.getElementById('selectedPrice');
    
    if (mode === 'buy') {
        selectedPriceElement.innerText = `  ${buyPrice}`;
        selectedPriceElement.style.color = '#4CAF50';
    } else {
        selectedPriceElement.innerText = `  ${sellPrice}`;
        selectedPriceElement.style.color = '#f44336';
    }
}

function calculate() {
    const amount = parseFloat(document.getElementById('amountInput').value);
    const buyPrice = parseFloat(localStorage.getItem('buyPrice')) / 100;
    const sellPrice = parseFloat(localStorage.getItem('sellPrice')) / 100;

    if (!isNaN(amount) && (buyPrice > 0 || sellPrice > 0)) {
        const price = mode === 'buy' ? buyPrice : sellPrice;
        const total = (amount * price).toLocaleString();
        const resultElement = document.getElementById('result');
        resultElement.innerText = `بڕی پارەیەک: ${total}`;
        resultElement.style.color = mode === 'buy' ? '#4CAF50' : '#f44336';
    } else {
        alert("تکایە ژمارەی دراو بنووسە!");
    }
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
        amount:"بڕی پارەکەت بنووسە",
        amountPlaceholder: placeholder="بڕی پارەکەت بنووسە",
        calculate: "حساب بکە",
        result: "دەرەنجامی کۆتایی"
    },
    ar: {
        title: "أسعار العملات",
        buy: "شراء",
        sell: "بيع",
        back: "رجوع",
        amount:"اكتب مبلغ أموالك",
        amountPlaceholder: placeholder="أدخل المبلغ",
        calculate: "احسب",
        result: "المبلغ الإجمالي"
    },
    en: {
        title: "Currency Rates",
        buy: "Buy",
        sell: "Sell",
        back: "Back",
        amount:"Write down the amount of your money",
        amountPlaceholder: placeholder="Enter amount",
        calculate: "Calculate",
        result: "Total Amount"
    }
};