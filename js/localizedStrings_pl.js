const LocalizedStrings_pl = {

/* Welcome Page */
"welcome_header": "Witaj na stronie mojego portfolio!",
"welcome_button": "Kliknij tutaj aby rozpocząć!",

/* Navbar */
"projects": "Projekty",
"technologies": "Technologie",
"about": "O mnie",

/*  Info Section */
"info_start": "Hej, nazywam się",
"info_name": "Jakub Rutkowski",
"info_stack": "Software Engineer / Full Stack Developer",
"info_description": "Oprócz tworzenia aplikacji internetowych, często zdarza mi się pracować przy <strong>plikach binarnych</strong> i <strong>rozgryzać ich struktury</strong>, doszkalam się w <strong>Unity</strong>, tworzę zawartość do gier i ciągle <strong>rozwijam nowe umiejętności</strong>.",

/* About Me Section */
"about_me": "O mnie",

"about_header": "Hej, tutaj!",
"about_text": "Dziękuję Ci za poświęcenie swojego czasu!",
"about_text_smaller": "Jeżeli miałbym coś o sobie powiedzieć, powiedział bym, że jestem <strong>bardzo</strong> zafascynowany tworzeniem rzeczy od zera, szczególnie programując. Obecnie szukam zespołu ludzi, z którymi będe mógł wymieniać się wiedzą i wnieść moje umiejętności na o wiele wyższy poziom!",

/*  Footer */
"call": "TEL",
"mail": "MAIL",
"linkedin": "LINKEDIN",

/* Technologies Section (Skills) */
"other": "Inne",

"frontend_js": "Bardzo dobra i praktyczna znajomość JavaScript",
"frontend_react": "Poczatkujący poziom React.js",

"backend_csharp": "Dobra znajomość C#:",
"backend_db": "Podstawowa znajomość:",

"other_langs": "Doświadczenie z C++ i Lua",

/* Project Card */
"technologies_used": "Użyte technologie",

"preview": "Podgląd",
"details": "Szczegóły",
"code": "Kod",

/* Project Card Details */
"modal_details": "Szczegóły",
"modal_goals": "Cele projektu",
"modal_difficulties": "Problemy",
"modal_stack": "Powód użycia technologi",
"modal_learned": "Czego się nauczyłem",

/* Cafe Template */
"cafe_title": "Szablon strony Cafe",
"cafe_description": "Szablon strony kawiarni stworzony przy użyciu <strong>ASP.NET Core 5</strong> jako backend i <strong>SQLite</strong>. Strona zbudowana z myślą o <strong>urządzeniach mobilnych</strong>.",

"cafe_goals": "Głównym celem było stworzenie miłej dla oka i wyróżniającej się strony kawiarni z przyjaznym dla użytkownika systemem CMS. Celem drugorzędnym było nauczenie się Bootstrap'a poprzez praktykę.",
"cafe_difficulties": "Wymyślenie stylu. Założeniem projektu było stworzenie zarówno eleganckiej jak i prostej strony, i nie ukrywam, to było ciężkie zadanie.",
"cafe_stack": "Ta strona używa SQLite jako bazy danych ze względu na prostotę i kompatybilność z Windows'em i Linux'em bez żadnej wcześniejszej konfiguracji.",
"cafe_learned": "Solidnych podstaw ASP.NET Core, takich jak <strong>routing</strong> (conventional, attribute), <strong>dependency injection</strong>, obsługa <strong>żądań HTTP</strong> oraz platformy tożsamości <strong>(identity authentication)</strong>. Prawie całość layoutu została stworzona podczas nauki <strong>Bootstrap</strong>'a.",

/* Reservation System */
"reservation_title": "System Rezerwacji",
"reservation_description": "Prosty <strong>system rezerwacji</strong> z <strong>integracją Email</strong>. Umożliwia <strong>tworzenie, potwierdzanie i usuwanie</strong> rezerwacji poprzez łącza wysyłane na Email.",

"reservation_goals": "Chciałem stworzyć <strong>prosty</strong> i <strong>stabilny</strong> system rezerwacji który polega na <strong>zarządzaniu rezerwacjami</strong> przez Email i ma własne <strong>środki zabezpieczające</strong> (nachodzące na siebie terminy, nieprawidłowe dane).",
"reservation_difficulties": "Stworzenie systemów ktore chronią aplikację przed <strong>nieprawidłowymi danymi</strong>, <strong>błędami bazy danych</strong> i innymi mniejszymi rzeczami.",
"reservation_stack": "Używam <strong>SQLite</strong> ze względu na jego <strong>prostotę</strong>. Do wysyłania maili używam <strong>MailKit</strong>.",
"reservation_learned": "Jak <strong>wysyłać maile</strong>, zarządzać datami w bazie danych i jak postawić kilka aplikacji .NET Core na jednym serwerze za pomocą <strong>NGINX</strong>.",

/* Shopping App */
"shopping_title": "Sklep internetowy",
"shopping_description": "Prosty <strong>sklep internetowy</strong> z <strong>systemem koszyka</strong>, <strong>historią zakupów</strong>, <strong>systemem kont</strong> i serią <strong>usług w tle</strong>.",

"shopping_goals": "Musiałem nauczyć się korzystać z <strong>uwierzytelniania</strong>, <strong>sesji</strong> i <strong>usług w tle</strong>, więc połączyłem to wszystko w <strong>sklep internetowy</strong>.",
"shopping_difficulties": "Generalnie sama aplikacja była dosyć łatwa do zaprogramowania i nie napotkałem żadnych znaczących problemów.",
"shopping_stack": "Używam <strong>SQLite</strong> jako bazy danych. Maile wysyłane są za pośrednictwem biblioteki <strong>MailKit</strong>.",
"shopping_learned": "Jak pracować z <strong>sesją</strong>, <strong>uwierzytelnianiem</strong>, <strong>usługami w tle</strong> i <strong>timer</strong>'ami.",

/* CoD Map Converter */
"converter_title": "Konwerter map CoD (1,2)",
"converter_description": "Konwertuje pliki <strong>.bsp</strong> i <strong>.d3dbsp</strong> do formatu .obj i eksportuje materiały użyte na mapie prosto z plików gry.",

"converter_goals": "Od dłuższego czasu moim małym marzeniem było przeniesienie zawartości ze starych gier na inne, nowsze platformy, takie jak Unity. Stworzyłem więc małe narzędzie które to umożliwia.",
"converter_difficulties": "Napisanie biblioteki która tworzy obiekty klas ze zbioru binarnego, rozgryzienie i stworzenie dokumentacji formatu .bsp, gdyż ten nie jest w pełni udokumentowany.",
"converter_stack": "Początkowo próbowałem napisać ten program w C++, lecz C# okazał się o wiele prostszy w pisaniu i rozwijaniu aplikacji tego typu.",
"converter_learned": "Jak <strong>czytać</strong>, <strong>zapisywać</strong> i <strong>badać struktury</strong> plików binarnych, konwertować <strong>pamięć niezarządzaną</strong> do <strong>obiektów klas</strong>, czytać pliki <strong>.zip</strong> oraz wyciągać z nich dane, jak tworzyć i korzystać z <strong>plików konfiguracyjnych</strong>.",

/* CoD Bomber */
"bomber_title": "CoD: UO Bomber",
"bomber_description": "Stworzone dla gry <strong>Garry's Mod</strong>. Jest to rekonstrukcja misji z <strong>Call of Duty: United Offensive</strong>, z prawie całą zawartością oryginalnej gry i paroma nowinkami.",

"bomber_goals": "Duża część ludzi czuje wobec starszych gier swojego rodzaju sentyment. Sam należę do tej grupy, więc postanowiłem umożliwić im przeżycie tych wspomnień na nowo, tym razem w o wiele wyższej jakości! Owocem tej pracy jest <strong>ponad 40,000</strong> pobrań i <strong>18,000</strong> aktywnych graczy.",
"bomber_difficulties": "Odtworzenie klimatu oryginalnej gry i pochłonięcie w nim gracza. Tryb mocno polega na zachowaniu sztucznej inteligencji, która powinna być wiarygodna i być wyzwaniem dla gracza.",
"bomber_stack": "Jest to modyfikacja do gry Garry's Mod, więc użycie Lua API było jedyną możliwością.",
"bomber_learned": "Konwertowania zawartości z jednego źródła do drugiego, projektowania <strong>elastycznego</strong> i <strong>skalowalnego projektu</strong>, podstaw <strong>networkingu P2P</strong>, korzystania z krytyki społeczności do dalszego rozwijania projektu.",

/* ECS Game Engine */
"ecs_title": "ECS Game Engine",
"ecs_description": "Prosty <strong>Framework</strong> do gier zbudowany wyłącznie w <strong>JavaScript ES6</strong> bazujący na wzorcu <strong>Entity Component System</strong>. Przykładem jego użycia są interaktywne efekty na początku tego portfolio.",

"ecs_goals": "Chciałem stworzyć podobne środowisko skryptowe do tego, które oferuje Unity, do tworzenia gier i efektów na stronach internetowych.",
"ecs_difficulties": "Stworzenie tego jako proste rozwiązanie 'wklej i użyj'. Nie ważne czy jest to zaawansowana gra czy prosty efekt, nie powinien on konfliktować z innymi skryptami i elementami strony.",
"ecs_stack": "Wszystko działa na podstawowym JavaScript, nie potrzebuje żadnych dodatkowych bibliotek.",
"ecs_learned": "Dobre zrozumienie JavaScript'owego <strong>Event Loop</strong>, jak przetwarzać złożone <strong>dane wejścia</strong> i <strong>instrukcje renderowania</strong> (frame independent animations, kolizje AABB, itd).",
}