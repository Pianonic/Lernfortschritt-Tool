import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@coreui/angular';

@Component({
  selector: 'app-learning-progress',
  standalone: true,
  imports: [RouterLink, NgFor, NgClass, ButtonModule],
  templateUrl: './learning-progress.component.html',
  styleUrl: './learning-progress.component.scss'
})
export class LearningProgressComponent {
  items: { text: string, rating: number }[] = [
    { text: 'LZ 1.1 Ich kann ohne Hilfsmittel den Unterschied von Problemraum zu Lösungsraum erklären.', rating: 1 },
    { text: 'LZ 1.2 Ich kann ohne Hilfsmittel Zweck und Aufbau der Anforderungsanalyse erklären und erläutern, wie sich diese in das Testkonzept einbettet.', rating: 1 },
    { text: 'LZ 1.3 Ich kann aus einer Problemstellung oder einem Auftrag eine Anforderungsanalyse erstellen.', rating: 1 },
    { text: 'LZ 1.4 Ich kann ohne Hilfsmittel drei Gründe aufzählen, warum es sinnvoll ist, Problemraum und Lösungsraum zu trennen.', rating: 1 },
    { text: 'LZ 2.1 Ich kann ohne Hilfsmittel erklären, was ein Datentyp ist.', rating: 1 },
    { text: 'LZ 2.2 Ich kann ohne Hilfsmittel den Unterschied zwischen primitiven und komplexen Datentypen erklären.', rating: 1 },
    { text: 'LZ 2.3 Ich kann ohne Hilfsmittel 5 gebräuchliche Datentypen nennen und deren Einsatz erklären.', rating: 1 },
    { text: 'LZ 2.4 Ich kann für die erforderlichen Daten einer gegebenen Problemstellung die passenden Datentypen bestimmen.', rating: 1 },
    { text: 'LZ 2.5 Ich kann ohne Hilfsmittel die Funktionsweise des EVA-Prinzips anhand der Softwareentwicklung erklären.', rating: 1 },
    { text: 'LZ 3.1 Ich kann ohne Hilfsmittel den Sinn und Zweck eines Programmablaufplans erklären.', rating: 1 },
    { text: 'LZ 3.2 Ich kann ohne Hilfsmittel sechs Elemente des Programmablaufplans nach DIN66001 aufzählen und erklären, wie und wofür diese verwendet werden.', rating: 1 },
    { text: 'LZ 3.3 Ich kann aus gegebenen Anforderungen einen Programmablaufplan nach DIN66001 erstellen.', rating: 1 },
    { text: 'LZ 4.1 Ich kann ein ausführbares Programm in C# erstellen.', rating: 1 },
    { text: 'LZ 4.2 Ich kann anhand einer leeren Konsolenanwendung den grundlegenden Aufbau einer C# Applikation erklären.', rating: 1 },
    { text: 'LZ 4.3 Ich kann ohne Hilfsmittel die Funktionsweise und den Einsatzzweck der Kontrollstrukturen Sequenz, Alternation und Iteration erklären.', rating: 1 },
    { text: 'LZ 4.4 Ich kann ohne Hilfsmittel den Unterschied zwischen kopf-, fussgesteuerter- und Zähl-Iteration erklären.', rating: 1 },
    { text: 'LZ 4.5 Ich kann die Kontrollstrukturen Alternation, kopf-, fussgesteuerte- und Zähl-Iteration in C# umsetzen.', rating: 1 },
    { text: 'LZ 4.6 Ich kann ohne Hilfsmittel den Zweck und Einsatz von Variablen und Konstanten sowie deren Unterschied erklären.', rating: 1 },
    { text: 'LZ 4.7 Ich kann Variablen und Konstanten in C# deklarieren, initialisieren und setzen.', rating: 1 },
    { text: 'LZ 4.8 Ich kann ohne Hilfsmittel erklären, was der Gültigkeitsbereich einer Variable ist.', rating: 1 },
    { text: 'LZ 4.9 Ich kann für eine gegebene Variable den Gültigkeitsbereich identifizieren.', rating: 1 },
    { text: 'LZ 4.10 Ich kann ohne Hilfsmittel den Unterschied von einem Editor zu einer Entwicklungsumgebung erklären.', rating: 1 },
    { text: 'LZ 4.11 Ich kann mit Hilfe der Entwicklungsumgebung anhand einer auftretenden Fehler- oder Warnmeldung erklären, wie ich damit umgehe.', rating: 1 },
    { text: 'LZ 4.12 Ich kann anhand einer gegebenen Funktion deren Aufbau (Name, Rückgabetyp, Parameter, Signatur) erläutern.', rating: 1 },
    { text: 'LZ 4.13 Ich kann ein gegebenes Code-Fragment in eine Funktion auslagern und diese entsprechend aufrufen.', rating: 1 },
    { text: 'LZ 4.14 Ich kann drei Gründe nennen, warum die Auslagerung von Programmcode in eine Funktion sinnvoll sein kann.', rating: 1 },
    { text: 'LZ 5.1 Ich kann ohne Hilfsmittel Bedeutung und Zweck von Konventionen erklären.', rating: 1 },
    { text: 'LZ 5.2 Ich kann meinen Programmcode anhand vorgegebener Konventionen umsetzen.', rating: 1 },
    { text: 'LZ 5.3 Ich kann meinen Programmcode mit sinnvollen Kommentaren versehen.', rating: 1 },
    { text: 'LZ 5.4 Ich kann je 2 Vor- und Nachteile für die Verwendung von Kommentaren im Programmcode nennen.', rating: 1 },
    { text: 'LZ 6.1 Ich kann ohne Hilfsmittel drei Arten von Programmierfehlern aufzählen und diese anhand von Beispielen erläutern.', rating: 1 },
    { text: 'LZ 6.2 Ich kann ohne Hilfsmittel Zweck und Verwendung eines Debuggers erläutern.', rating: 1 },
    { text: 'LZ 6.3 Ich kann einen logischen Programmierfehler in einem gegebenen Programm mittels Debugger finden.', rating: 1 },
    { text: 'LZ 6.4 Ich kann ohne Hilfsmittel Zweck und Aufbau der Testfallspezifikation erklären und erläutern, wie sich diese in das Testkonzept einbettet.', rating: 1 },
    { text: 'LZ 6.5 Ich kann anhand einer gegebenen Anforderungsanalyse sinnvolle, klar formulierte und messbare Testfälle spezifizieren.', rating: 1 },
    { text: 'LZ 6.6 Ich kann ohne Hilfsmittel Zweck und Aufbau des Testprotokolls und des Testberichts erklären und erläutern, wie sich diese in das Testkonzept einbetten.', rating: 1 },
    { text: 'LZ 6.7 Ich kann ohne Hilfsmittel ein Verfahren für den statischen Test von Programmcode nennen und die Bedeutung für die Qualität der Software aufzeigen.', rating: 1 }
];

  stars: number[] = [1, 2, 3, 4];

  rate(item: { text: string, rating: number }, rating: number) {
    item.rating = rating;
  }

  handleKeydown(event: KeyboardEvent, item: { text: string, rating: number }, rating: number) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.rate(item, rating);
    }
  }
}
