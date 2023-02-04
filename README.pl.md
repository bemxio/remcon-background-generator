**If you somehow landed here despite not knowing Polish, you can read the English version of this README [here](https://github.com/bemxio/remcon-background-generator/blob/main/README.md).**

<br/>

# remcon-background-generator
Mały skrypt wykonany w JavaScript (i HTML, dla szablonu), który generuje obrazek dla identyfikatora na [Remcon 2023](https://remcon.pl), na podstawie danego obrazu, który jest używany jako wzór.

## Historia
Wieczorem 4 lutego 2023 roku, kiedy przewijałem powiadomienia, które dostałem na telefonie w ciągu dnia, natknąłem się na nowy [post na Instagramie](https://www.instagram.com/p/CoNoQFuLJMK/) od [Fundacji BT](https://fundacjabt.eu/), który zawierał następującą wiadomość:

> ❗ PRZYPOMINAMY ❗

> Do jutra (04.02) do 22:00 możecie edytować #obrazki oraz nicki na swoich identyfikatorach w szczegółach biletu. ✍️ Przypominamy także o opłaceniu biletu. Jeżeli #bilet nie zostanie w tym terminie opłacony, identyfikator nie będzie miał Waszego obrazka a standardową grafikę remconową. 🖼️

Wtedy właśnie przypomniałem sobie, że nie ustawiłem żadnego obrazka dla mojego identyfikatora, mimo że chciałem, aby było to coś związanego z moim znakiem (aka. `>w<`, bemxio twarz!).
Było już po 19:00 (zostały 3 godziny), a ponieważ jestem, lekko mówić, upośledzony, kiedy muszę edytować jakikolwiek obrazek, wpadłem na pomysł: dlaczego tego nie zautomatyzować? W końcu jestem programistą, więc powinienem umieć to zrobić, prawda?

I tak o 19:14 zacząłem pisać skrypt. Szło mi to całkiem gładko, ponieważ miałem już pewne doświadczenie z JavaScriptem, a także opanowałem korzystanie z [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API). Jedyną trudność sprawiło mi obracanie obrazu w celu uformowania pożądanego wzoru, ale w końcu udało mi się to zrobić z powodzeniem!

Skończyłem w pełni działający skrypt o 21:21, i przesłałem obraz tła na stronie zarządzania biletem o 21:23. W sumie zajęło mi to 2 godziny i 7 minut (jestem dość powolny, ok? :P), jednak i tak byłem zadowolony, że udało mi się na tym skupić i skończyć na czas!

## Użycie
Niestety, jak wynika z moich testów, do uruchomienia strony potrzebny jest serwer WWW. Możesz użyć dowolnego serwera WWW, ale ja pokażę Ci jak to zrobić za pomocą [Pythona](https://www.python.org/).

1. Pobierz i zainstaluj Pythona 3.x z [tutaj](https://www.python.org/downloads/) **Pamiętaj, aby zaznaczyć pole wyboru "Add Python to PATH" podczas instalacji!**
2. Sklonuj repozytorium na swój komputer, pobierając plik ZIP i rozpakowując go, lub używając `git clone https://github.com/bemxio/remcon-background-generator`.
3. Otwórz terminal (lub PowerShell/`cmd`, dla użytkowników systemu Windows) i przejdź do katalogu, w którym sklonowałeś repozytorium.
4. Uruchom `python -m http.server` (lub `python3 -m http.server` dla użytkowników systemu Linux).
5. Otwórz przeglądarkę i wejdź na stronę `http://localhost:8000/` (lub `http://127.0.0.1:8000/`). 

Powinieneś zostać przekierowany na obrazek wygenerowany przez skrypt. Aby go zapisać, kliknij prawym przyciskiem myszy na obrazek i wybierz "Zapisz obraz jako..." (lub "Save Image As...").

## Dostosowanie
Obecnie musisz edytować consty w `script.js`, aby zmienić ustawienia skryptu, jednak planuję, chociaż zrobić możliwość podawania tych wartości poprzez parametry URL.

Jest sporo zmiennych, które możesz zmienić:
- `BACKGROUND_COLOR` - kolor tła końcowego obrazka. Może to być dowolny poprawny kolor CSS, taki jak `#ff0000`, `rgb(255, 0, 0)`, `hsl(0, 100%, 100%)`, `red` itp.
- `IMAGE_COLOR` - kolor obrazka, który jest używany jako wzór. Może to być tylko prawidłowy kolor heksadecymalny, taki jak `#ff0000`. Wszystkie inne wartości prawdopodobnie spowodują zawieszenie się strony.
- `ROTATION` - kąt (w stopniach) obrazka, który jest używany jako wzór. Musi to być wartość z przedziału od 0 do 360.

## Licencja
Ten projekt jest udostępniony w domenie publicznej. Zrób z nim co chcesz, wszystko zależy od Ciebie!
Jeśli naprawdę chcesz zobaczyć licencję, jest ona dostępna w pliku [`LICENSE`](https://github.com/bemxio/remcon-background-generator/blob/main/LICENSE).