
# XSS - Cross-Site Scripting

>Cross-Site Scripting (XSS) jest jedną z najczęściej występujących podatności aplikacji webowych. Polega ona na wstawieniu w treść strony własnego kodu JavaScript, co może doprowadzić do wykonania niepożądanych akcji przez użytkowników odwiedzających tę stronę. Przykładem XSS jest fragment kodu HTML <script›alert (1)</script>.

Podatności typu XSS najczęściej pojawiają się w aplikacjach, gdy w kodzie HTML strony wyświetlana jest treść podana przez użytkownika. Aby sprawdzić, czy istnieje możliwość wystąpienia podatności XSS, należy wpisać prosty kod HTML, np. 

```
<marquee>test</marquee>
```










