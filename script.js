/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html // DONE

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her // DONE

console.log("-----------------------------------------");

let string = "Hello world";
let integer = 12;
let float = 3.14;
let boolean = true;
let array = ["one", 1, true, 2.543];

console.log("string: " + string);
console.log("integer: " + integer);
console.log("float: " + float);
console.log("boolean: " + boolean);
console.log("array: " + array[0]);
console.log("array: " + array[1]);
console.log("array: " + array[2]);
console.log("array: " + array[3]);

console.log("-----------------------------------------");

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her // DONE

let num1 = 1;
let num2 = 2;
console.log(num1 + num2);
console.log(num1 / num2);

let counter = 0;
console.log(counter);
counter++;
console.log(counter);

let score = 15;
console.log(score);
score -= 3;
console.log(score);
console.log("-----------------------------------------");

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "John Doe";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her // DONE

if (userName != "" && userAge >= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  console.log(userIsLoggedIn);
  goToPage = "/home";
  console.log(goToPage);
  console.log("Welcome");
} else {
  console.log("Error");
}

console.log("-----------------------------------------");

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

// Skriv koden for oppgave 5 her

let userMale = true;

const userTitle = userMale === false ? "Mrs." : "Mr.";

console.log(userTitle);

console.log("-----------------------------------------");
