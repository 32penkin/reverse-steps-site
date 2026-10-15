// Polski. Klucze jak w en.mjs.
export default (cfg) => {
  const after = cfg.quota.total - cfg.quota.withoutAccount;
  const provider = cfg.aiProvider ? `${cfg.aiProvider}` : 'dostawcy AI wskazanego w aplikacji na ekranie zgody';
  const updated = new Date(`${cfg.lastUpdated}T12:00:00Z`).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' });
  const mail = `<a href="mailto:${cfg.contactEmail}">${cfg.contactEmail}</a>`;
  return {
    nav: { label: 'Strony', language: 'Język', home: 'Start', support: 'Pomoc', privacy: 'Prywatność', deletion: 'Usuń konto' },
    footer: {
      disclaimer: 'Reverse Steps zapisuje Twoje własne kroki. To nie jest instrukcja naprawy i aplikacja nie sprawdza, czy naprawa jest bezpieczna lub poprawna.',
      contact: 'Pytania i uwagi:',
    },
    home: {
      title: 'Reverse Steps – zdjęcia demontażu, montaż w odwrotnej kolejności',
      description: 'Zrób zdjęcie przed każdym krokiem rozkręcania. Przy składaniu Reverse Steps pokaże te same kroki w odwrotnej kolejności.',
      eyebrow: 'Dla każdego, komu została „zbędna” śrubka',
      h1: 'Rozkręć na zdjęciach. Złóż w dobrej kolejności.',
      lede: 'Zrób zdjęcie przed każdym krokiem demontażu, dodaj zdjęcie wykręconych części i krótką notatkę. Przy składaniu Reverse Steps prowadzi Cię przez Twoje kroki od ostatniego do pierwszego — po jednej dużej karcie.',
      iosBeta: 'Beta na iPhone (TestFlight)',
      androidBeta: 'Beta na Androida (Google Play)',
      iosLive: 'Pobierz z App Store',
      androidLive: 'Pobierz z Google Play',
      soon: 'wkrótce',
      storesNote: `Za darmo, bez reklam. Pierwszy demontaż bez konta; po bezpłatnym zalogowaniu kolejne ${after}. Zdjęcia zostają w telefonie.`,
      illustrationAlt: 'Cztery zdjęcia demontażu w kolejności od 1 do 4, a potem te same w kolejności od 4 do 1 do składania.',
      illustrationTop: 'Rozkręcanie',
      illustrationArrow: 'Składanie: 4 → 1',
      stepsTitle: 'Jak to działa',
      steps: [
        { t: 'Najpierw zdjęcie, potem odkręcasz', d: 'Załóż projekt, sfotografuj stan wyjściowy, a potem rób zdjęcie przed każdą zmianą. Kroki numerują się same.' },
        { t: 'Dodaj części i notatkę', d: 'Sfotografuj wykręcone śrubki i blaszki, zapisz tekstem lub głosem: „dwie krótkie śrubki, zatrzask kabla do góry”.' },
        { t: 'Złóż w odwrotnej kolejności', d: 'Włącz składanie: pełnoekranowe karty od ostatniego kroku do pierwszego. Odhaczaj kroki, a na końcu porównaj ze zdjęciem wyjściowym.' },
      ],
      videoTitle: 'Zobacz w 20 sekund',
      videoSoon: 'Wideo wkrótce',
      videoNote: ' — prawdziwy demontaż, kupka śrubek i aplikacja, która prowadzi z powrotem przez sześć kroków.',
      whyTitle: 'Dlaczego nie zwykła galeria?',
      why: [
        { t: 'Kroki, a nie stos zdjęć', d: 'Każdy projekt ma własne, ponumerowane kroki, oddzielone od reszty zdjęć.' },
        { t: 'Części przypisane do kroku', d: 'Wykręcone śrubki są przy kroku, z którego pochodzą, razem z Twoją notatką.' },
        { t: 'Kolejność odwraca się sama', d: 'Bez przewijania galerii wstecz i zgadywania, co było pierwsze.' },
        { t: 'Prywatnie od początku', d: 'Zdjęcia, notatki głosowe i tekstowe zostają na urządzeniu. Eksport do ZIP lub do galerii — kiedy chcesz.' },
        { t: 'Opcjonalne podpowiedzi do składania', d: 'Jeśli je włączysz, aplikacja zaproponuje krótki opis każdego kroku na podstawie Twoich zdjęć. Mogą się mylić, dlatego zdjęcie jest zawsze obok.' },
        { t: 'iPhone i Android', d: 'Za darmo, bez reklam, po polsku, angielsku, rosyjsku, niemiecku, francusku i hiszpańsku.' },
      ],
      honestTitle: 'Czego nie robi',
      honest: 'Reverse Steps zapisuje to, co zrobiłeś; nie uczy napraw i nie gwarantuje poprawnego złożenia. Postępuj zgodnie z instrukcją producenta, wyłącz i odłącz zasilanie, nie otwieraj akumulatorów, urządzeń gazowych ani instalacji wysokiego napięcia.',
      more: 'Gdzie są zdjęcia, eksport, bezpłatne demontaże: zobacz <a href="{support}">Pomoc</a>.',
    },
    support: {
      title: 'Reverse Steps – Pomoc i FAQ',
      description: 'Odpowiedzi o przechowywaniu zdjęć, eksporcie, usuwaniu aplikacji lub konta i bezpłatnych demontażach w Reverse Steps.',
      eyebrow: 'Pomoc',
      h1: 'Pomoc i najczęstsze pytania',
      lede: `Nie ma odpowiedzi? Napisz na ${mail} — po polsku, angielsku lub rosyjsku. W aplikacji: Ustawienia → Wyślij opinię.`,
      faq: [
        { q: 'Gdzie są przechowywane moje zdjęcia?', a: `<p>Tylko w telefonie, w prywatnej pamięci aplikacji. Nie trafiają na nasz serwer ani do chmury. Wyjątki to eksport, który uruchamiasz sam, i podpowiedzi do składania, jeśli je włączysz (niżej).</p>` },
        { q: 'Jak wyeksportować projekt?', a: `<p>Otwórz projekt → Eksport. Możesz zapisać ZIP ze wszystkimi zdjęciami i notatkami w kolejności kroków (otworzysz go na komputerze) albo zapisać zdjęcia do albumu w galerii.</p>` },
        { q: 'Co się stanie, gdy usunę aplikację?', a: `<p>Wszystkie projekty znikną razem z nią, bo istnieją tylko w telefonie. Najpierw wyeksportuj te, które chcesz zachować. Nie ma synchronizacji, więc na nowym telefonie też zaczynasz od zera — projekty przenosi się eksportem.</p>` },
        { q: 'Co się stanie, gdy usunę konto?', a: `<p>Usuwamy z serwera Twoje logowanie i licznik bezpłatnych demontaży. Projekty w telefonie zostają. Zobacz <a href="../account-deletion/">Usuń konto</a>.</p>` },
        { q: 'Ile mam bezpłatnych demontaży?', a: `<p>Obecnie ${cfg.quota.total} łącznie. Pierwszy bez konta; po bezpłatnym zalogowaniu (e-mail, Google lub Apple) — kolejne ${after}. Limit sprawdzamy tylko przy rozpoczęciu nowego demontażu: rozpoczętego projektu nigdy nie blokujemy, również składania, eksportu i podpowiedzi. W czasie bety liczby mogą się zmienić.</p>` },
        { q: 'Po co w ogóle logowanie?', a: `<p>Tylko do liczenia bezpłatnych demontaży. Konto przechowuje Twój e-mail (lub identyfikator Apple/Google) i ten licznik — bez zdjęć, nazw projektów i notatek.</p>` },
        { q: 'Czym są podpowiedzi do składania i co jest wysyłane?', a: `<p>To funkcja opcjonalna. Przed pierwszym użyciem aplikacja prosi o zgodę i podaje nazwę dostawcy AI. Potem pomniejszone kopie zdjęć kroków i Twoje notatki trafiają przez nasz serwer do ${provider}, który pisze krótki opis każdego kroku. Nie przechowujemy ich. Do ${cfg.aiDailyLimit} zapytań dziennie. Bez zgody lub bez internetu składanie działa ze zdjęć jak zwykle.</p>` },
        { q: 'Czy naprawa z tą aplikacją jest bezpieczna?', a: `<p>Aplikacja zapisuje Twoje kroki, ale nie ocenia bezpieczeństwa naprawy. Zawsze stosuj się do instrukcji producenta, odłączaj zasilanie, nie otwieraj akumulatorów, urządzeń gazowych ani instalacji wysokiego napięcia.</p>` },
        { q: 'Jak wyłączyć anonimowe statystyki?', a: `<p>Ustawienia → Anonimowe statystyki. Po wyłączeniu nic nie jest wysyłane. Co zbieramy — w <a href="../privacy/">polityce prywatności</a>.</p>` },
      ],
      sections: [{ h: 'Kontakt', body: `<p>E-mail: ${mail}. Przy zgłaszaniu błędu podaj model telefonu i wersję aplikacji (Ustawienia → O aplikacji). Zwykle odpowiadamy w ciągu kilku dni.</p>` }],
    },
    privacy: {
      title: 'Reverse Steps – Polityka prywatności',
      description: 'Co zbiera Reverse Steps: anonimowe statystyki, opinie, konto do bezpłatnych demontaży i opcjonalne podpowiedzi. Zdjęcia zostają w telefonie.',
      eyebrow: 'Polityka prywatności',
      h1: 'Polityka prywatności',
      updated: `Ostatnia aktualizacja: ${updated}`,
      lede: 'Reverse Steps to dziennik demontażu: Twoje zdjęcia, notatki głosowe i tekstowe zostają na urządzeniu. Ta polityka opisuje to niewiele, co je opuszcza. Bez reklam, bez śledzenia w innych aplikacjach i witrynach, bez zewnętrznych SDK analitycznych i reklamowych; nie sprzedajemy danych osobowych.',
      sections: [
        { h: 'Kim jesteśmy', body: `<p>Reverse Steps tworzy ${cfg.developer} (${cfg.developerCountry.pl}), który jest administratorem danych. Kontakt: ${mail}.</p>` },
        { h: 'Co zostaje na urządzeniu', body: `<p>Projekty, zdjęcia kroków i części, notatki głosowe i tekstowe, nazwy i cele projektów są zapisywane tylko w prywatnej pamięci aplikacji w telefonie. Nie otrzymujemy ich. Opuszczają urządzenie tylko wtedy, gdy sam eksportujesz projekt lub zapisujesz zdjęcia do galerii, albo — jeśli je włączysz — na potrzeby podpowiedzi do składania (niżej). Usunięcie aplikacji je usuwa.</p>` },
        { h: 'Anonimowe statystyki użycia', body: `<p>Żeby sprawdzić, czy aplikacja jest przydatna, wysyła ona niewielki zestaw zdarzeń, np. „utworzono projekt”, „zapisano krok”, „rozpoczęto składanie”, „zakończono eksport”. Zdarzenia zawierają tylko liczby, wartości tak/nie i stałe opcje (np. liczbę kroków albo czas zapisu kroku), a także losowy identyfikator instalacji, losowy identyfikator sesji, platformę (iOS lub Android), wersję aplikacji i język interfejsu.</p>
<p>Zdarzenia nigdy nie zawierają zdjęć, nagrań, notatek, nazw projektów, ścieżek plików, adresu e-mail, identyfikatora konta ani modelu urządzenia. Przechowujemy je we własnej bazie w Supabase, bez powiązania z kontem. Surowe zdarzenia usuwamy po ${cfg.analyticsRawRetentionDays} dniach; potem zostają tylko sumy. Statystyki są domyślnie włączone; możesz je w każdej chwili wyłączyć w Ustawieniach — wtedy nic nie jest wysyłane. Podstawa prawna: nasz prawnie uzasadniony interes w ulepszaniu aplikacji (art. 6 ust. 1 lit. f RODO).</p>` },
        { h: 'Opinie, które wysyłasz', body: `<p>Gdy wysyłasz opinię w aplikacji, przechowujemy napisany przez Ciebie tekst wraz z losowym identyfikatorem instalacji, wersją aplikacji, platformą i językiem — żeby ją przeczytać i naprawić problemy. Gdy piszesz e-mailem, otrzymujemy Twój adres i wiadomość. Nie dołączaj danych, których nie chcesz nam przekazać.</p>` },
        { h: 'Konto i bezpłatne demontaże', body: `<p>Pierwszy demontaż działa bez konta. Żeby go policzyć, przy rozpoczęciu nowego demontażu aplikacja wysyła na nasz serwer losowy identyfikator instalacji. Kolejne bezpłatne demontaże wymagają bezpłatnego zalogowania. Przy logowaniu e-mailem przetwarzamy Twój adres e-mail; przy logowaniu przez Google lub Apple dostawca potwierdza Twoją tożsamość i przekazuje identyfikator konta i e-mail (Apple może podać adres przekierowujący). Nie otrzymujemy Twojego hasła Google ani Apple.</p>
<p>Konto przechowuje tylko: identyfikator konta, e-mail lub identyfikator dostawcy oraz liczbę rozpoczętych demontaży (z losowymi odnośnikami projektów). Bez zdjęć, nazw i notatek. Przy logowaniu przez Apple nasz serwer przechowuje token odświeżania Apple wyłącznie po to, by cofnąć dostęp przy usuwaniu konta. Podstawa prawna: świadczenie usługi, o którą prosisz (art. 6 ust. 1 lit. b RODO).</p>` },
        { h: 'Podpowiedzi do składania (opcjonalne)', body: `<p>Podpowiedzi są wyłączone, dopóki nie wyrazisz zgody na ekranie, który podaje nazwę dostawcy AI. Po wyrażeniu zgody, gdy prosisz o podpowiedzi, aplikacja wysyła pomniejszone kopie (ok. 1024 px) zdjęć kroków i części danego projektu oraz Twoje notatki — notatki głosowe jako dźwięk, jeśli dostawca go przyjmuje, w przeciwnym razie jako tekst rozpoznany w telefonie — przez naszą funkcję serwerową w Supabase do ${provider}. Zdjęcie okładki nie jest wysyłane.</p>
<p>Nasz serwer nie zapisuje zdjęć, nagrań ani notatek i nie umieszcza ich w logach. Przechowujemy tylko liczniki techniczne (liczba zdjęć, tokeny, koszt, czas odpowiedzi, status) powiązane z losowym identyfikatorem instalacji — żeby stosować limit ${cfg.aiDailyLimit} zapytań dziennie i kontrolować koszty. Dostawca przetwarza dane zgodnie z warunkami swojego API wyłącznie w celu zwrócenia podpowiedzi. Korzystamy tylko z dostawców, których warunki API nie pozwalają trenować modeli na tych danych; dostawca może je krótko przechowywać w celu wykrywania nadużyć. Dostawca może przetwarzać dane poza UE (np. w USA) na podstawie standardowych klauzul umownych lub decyzji stwierdzającej odpowiedni stopień ochrony. Podpowiedzi są zapisywane tylko w telefonie. Podstawa prawna: Twoja zgoda (art. 6 ust. 1 lit. a RODO), którą możesz w każdej chwili wycofać w Ustawieniach.</p>` },
        { h: 'Uprawnienia', body: `<ul><li><strong>Aparat</strong> — do zdjęć kroków. Zdjęcia zostają na urządzeniu.</li><li><strong>Mikrofon</strong> — tylko podczas nagrywania notatki głosowej. Nagranie zostaje na urządzeniu.</li><li><strong>Zdjęcia (tylko dodawanie)</strong> — tylko gdy zapisujesz projekt do galerii.</li></ul><p>Bez lokalizacji, kontaktów, identyfikatora reklamowego i zapytania App Tracking Transparency — nie śledzimy.</p>` },
        { h: 'Dostawcy usług', body: `<ul><li>Supabase — baza danych, logowanie i funkcje serwerowe.</li><li>Google i Apple — tylko jeśli wybierzesz logowanie przez nich, oraz sklepy, które dostarczają aplikację.</li><li>${cfg.aiProvider ? cfg.aiProvider : 'Dostawca AI wskazany w aplikacji'} — tylko dla podpowiedzi, które włączysz.</li><li>GitHub Pages — hostuje tę stronę (nie ustawia dla nas plików cookie; GitHub może rejestrować wizyty ze względów bezpieczeństwa).</li></ul>` },
        { h: 'Okres przechowywania i usuwanie', body: `<p>Dane konta przechowujemy, dopóki konto istnieje. Surowe zdarzenia: ${cfg.analyticsRawRetentionDays} dni. Opinie: tak długo, jak to potrzebne do ich obsługi, maksymalnie 2 lata. Konto możesz usunąć w aplikacji (Ustawienia → Usuń konto) albo <a href="../account-deletion/">e-mailem</a>. Usunięcie konta usuwa konto, powiązania logowania, licznik demontaży i zapisane tokeny Apple. Anonimowe statystyki nie są powiązane z kontem, więc ich to nie dotyczy. Kopie zapasowe u dostawców mogą przez ograniczony czas zawierać dane.</p>` },
        { h: 'Twoje prawa', body: `<p>Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu i przenoszenia danych, a także prawo wycofania zgody w dowolnym momencie. Napisz na ${mail}. Masz też prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (UODO) lub organu nadzorczego w swoim kraju.</p>` },
        { h: 'Dzieci', body: `<p>Aplikacja nie jest skierowana do dzieci poniżej 13 lat i świadomie nie zbieramy ich danych. Jeśli uważasz, że dziecko założyło konto, napisz do nas — usuniemy je.</p>` },
        { h: 'Zmiany', body: `<p>Zaktualizujemy tę stronę przed każdą zmianą w zakresie zbieranych danych (np. przed wskazaniem nowego dostawcy AI) i zmienimy datę na górze.</p>` },
      ],
    },
    deletion: {
      title: 'Reverse Steps – Usuń konto',
      description: 'Jak usunąć konto Reverse Steps w aplikacji lub e-mailem i jakie dane są usuwane.',
      eyebrow: 'Usuwanie konta',
      h1: 'Usuń konto',
      lede: 'Konto usuniesz w aplikacji albo e-mailem, jeśli nie masz już aplikacji lub nie możesz się zalogować.',
      button: 'Wyślij prośbę o usunięcie',
      mailSubject: 'Reverse Steps – prośba o usunięcie konta',
      mailBody: 'Dzień dobry,\n\nproszę o usunięcie mojego konta Reverse Steps i powiązanych z nim danych.\n\nE-mail konta (lub „Zaloguj się przez Apple/Google”): \n\nDziękuję.',
      sections: [
        { h: 'W aplikacji', body: `<ol><li>Otwórz Reverse Steps i zaloguj się.</li><li>Przejdź do Ustawień.</li><li>Wybierz Usuń konto i potwierdź.</li></ol>` },
        { h: 'E-mailem, bez aplikacji', body: `<ol><li>Napisz na <a href="mailto:${cfg.contactEmail}?subject=Reverse%20Steps%20%E2%80%93%20pro%C5%9Bba%20o%20usuni%C4%99cie%20konta">${cfg.contactEmail}</a> z adresu przypisanego do konta (przycisk wyżej przygotuje wiadomość).</li><li>Jeśli logowałeś się przez Apple z ukrytym adresem, napisz o tym — znajdziemy konto razem.</li><li>Potwierdzimy e-mailem, że konto należy do Ciebie, i usuniemy je w ciągu 30 dni, zwykle dużo szybciej.</li></ol>` },
        { h: 'Co jest usuwane', body: `<ul><li>Konto i logowanie (e-mail, powiązanie z Google lub Apple).</li><li>Licznik bezpłatnych demontaży i odnośniki projektów.</li><li>Zapisane tokeny Sign in with Apple — po cofnięciu dostępu w Apple.</li></ul>` },
        { h: 'Czego to nie dotyczy', body: `<p>Projektów i zdjęć w telefonie — nigdy nie były na naszym serwerze; usuniesz je w aplikacji lub razem z aplikacją. Anonimowych statystyk — nie są powiązane z kontem i usuwamy je zgodnie z harmonogramem. Zapis, że usunięcie zgłoszono i wykonano (e-mail i daty), przechowujemy jako dowód. Kopie zapasowe dostawców mogą przez ograniczony czas zawierać dane.</p>` },
      ],
    },
  };
};
