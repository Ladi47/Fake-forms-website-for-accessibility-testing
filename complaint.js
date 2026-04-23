// Celowa pułapka klawiaturowa (Keyboard Trap - bardzo restrykcyjny błąd WCAG 2.1.2)
function trapFocus(e) {
    if (e.key === 'Tab') {
        e.preventDefault(); // Uniemożliwia wyjście z inputu za pomocą klawiatury
        
        // Brak widocznego alertu by jeszcze pogorszyć doświadczenie niewidomego użytkownika
        console.error("Pułapka klawiaturowa aktywowana! Nie uciekniesz tabulatorem!");
        
        // Zmusza focus do pozostania na tym samym elemencie
        document.getElementById('trap').focus(); 
    }
}

// BŁĄD WCAG 2.1.1 (Keyboard): Funkcja wysłania działa tylko na "click" 
// Jako, że 'fake-button' to generyczny <div>, klawisze Enter i Spacja 
// wciskane na sfocusowanym przycisku nie odpalą tej funkcji. System tylko na myszkę!
function submitComplaint() {
    alert("Przycisk kliknięty myszą. Niestety formularz zniknął... (błąd 404)");
}

// BŁĄD WCAG 2.2.1 (Llimit czasu) i 2.2.4: 
// Strona zrestartuje się sama nagle gubiąc cały progress, bez możliwości wydłużenia czasu, 
// ani wyłączenia limitu przed jego upływem.
let timeLeft = 30; // sekundy

const clock = setInterval(() => {
    timeLeft--;
    const alertDiv = document.getElementById('timer-alert');
    if (alertDiv) {
        alertDiv.innerText = "Pozostało: " + timeLeft + " sek! Pospiesz się!";
    }
    
    if (timeLeft <= 0) {
        clearInterval(clock);
        // OSTRZEZENIE: Brutalne zniknięcie zawartości to też złamanie standardów 
        document.body.innerHTML = "<h1 style='color:red'>CZAS MINĄŁ. TWOJE DANE PRZEPADŁY BEZPOWROTNIE.</h1><br><button onclick='window.location.href=\"register.html\"' style='background-color: yellow; color: white; border: 1px dotted red; padding: 2px; font-size: 9px; cursor: not-allowed;'>Wróć na główną stronę</button>";
    }
}, 1000);
