import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule, CardBodyComponent, CardComponent } from '@coreui/angular';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [RouterLink, CardComponent, CardBodyComponent, ButtonModule, NgFor],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {
  basePath = 'Modul_319/'

  files: string[] = [
    "./LA_319_2701_Einstieg_Csharp.docx",
    "./LA_319_2702_ImplizitExplizit.docx",
    "./LA_319_2703_Funktionen.docx",
    "./LA_319_6901_AlgorithmenAbbilden.docx",
    "./LA_319_6901_AlgorithmenAbbilden_L.docx",
    "./LA_319_6901_AlgorithmenAbbilden_L.pap",
    "./LA_319_6902_PAPUhr.docx",
    "./LA_319_6902_PAPUhr_L.pap",
    "./LA_319_6904_VariablenKonstanten.docx",
    "./LA_319_6904_VariablenKonstanten_L.docx",
    "./LA_319_6905_Operatoren.docx",
    "./LA_319_6905_Operatoren_L.docx",
    "./LA_319_6906_EingabeVerarbeitungAusgabe.docx",
    "./LA_319_6907_Kontrollstrukturen.docx",
    "./LA_319_6907_Kontrollstrukturen_L.docx",
    "./LA_319_6908_KontrollstrukturenVerschachtelt.docx",
    "./LA_319_6909_Notenrechner.docx",
    "./LA_319_6910_SwitchCase.docx",
    "./LA_319_6911_Arrays.docx",
    "./LA_319_6913_FunktionenKonventionen.docx",
    "./LA_319_6914_Testen.docx",
    "./LA_319_6914_Testen_Abgabe_L.docx",
    "./LA_319_6914_Testen_L.docx",
    "./LA_319_6915_Debugging.docx",
    "./LA_319_6950_Strings.docx",
    "./MLP_319.xlsx",
    "./PR_319_AnforderungenAufnehmen.pptx",
    "./PR_319_Ausnahmebehandlung.pptx",
    "./PR_319_EingabeVerarbeitungAusgabe.pptx",
    "./PR_319_Fehler.pptx",
    "./PR_319_Funktionen.pptx",
    "./PR_319_ImplizitExplizit.pptx",
    "./PR_319_Konventionen.pptx",
    "./PR_319_Methodenaufrufe.pptx",
    "./PR_319_Operatoren.pptx",
    "./PR_319_VariablenKonstanten.pptx"
];

}
