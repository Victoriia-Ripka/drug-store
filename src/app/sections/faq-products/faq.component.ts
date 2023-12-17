import { Component } from '@angular/core';
import { Content } from 'src/app/types/type';

const content: Array<Content> = [
  {
    id: 1,
    question: 'What is a generic medication?',
    answer: 'Wikipedia gives the following definition: “Generic drug (pl. generic drugs, short: generics) is a drug which is produced and distributed without a brand name. A generic must contain the same active ingredients as the original formulation. In most cases, it is considered bioequivalent to the brand name counterpart with respect to pharmacokinetic and pharmacodynamic properties. By extension, therefore, generics are assumed to be identical in dose, strength, route of administration, safety, efficacy, and intended use.”'
  },
  {
    id: 2,
    question: 'Does a generic medication differ from a brand name drug?',
    answer: 'Wikipedia gives the following definition: “Generic drug (pl. generic drugs, short: generics) is a drug which is produced and distributed without a brand name. A generic must contain the same active ingredients as the original formulation. In most cases, it is considered bioequivalent to the brand name counterpart with respect to pharmacokinetic and pharmacodynamic properties. By extension, therefore, generics are assumed to be identical in dose, strength, route of administration, safety, efficacy, and intended use.”'
  },
  {
    id: 3,
    question: 'Why are generic pills cheaper than the brand name ones?',
    answer: 'Wikipedia gives the following definition: “Generic drug (pl. generic drugs, short: generics) is a drug which is produced and distributed without a brand name. A generic must contain the same active ingredients as the original formulation. In most cases, it is considered bioequivalent to the brand name counterpart with respect to pharmacokinetic and pharmacodynamic properties. By extension, therefore, generics are assumed to be identical in dose, strength, route of administration, safety, efficacy, and intended use.”'
  },
  {
    id: 4,
    question: 'Where are the pills you offer shipped from?',
    answer: 'Wikipedia gives the following definition: “Generic drug (pl. generic drugs, short: generics) is a drug which is produced and distributed without a brand name. A generic must contain the same active ingredients as the original formulation. In most cases, it is considered bioequivalent to the brand name counterpart with respect to pharmacokinetic and pharmacodynamic properties. By extension, therefore, generics are assumed to be identical in dose, strength, route of administration, safety, efficacy, and intended use.”'
  },
  {
    id: 5,
    question: 'Are your pills FDA approved?',
    answer: 'Wikipedia gives the following definition: “Generic drug (pl. generic drugs, short: generics) is a drug which is produced and distributed without a brand name. A generic must contain the same active ingredients as the original formulation. In most cases, it is considered bioequivalent to the brand name counterpart with respect to pharmacokinetic and pharmacodynamic properties. By extension, therefore, generics are assumed to be identical in dose, strength, route of administration, safety, efficacy, and intended use.”'
  },
  {
    id: 6,
    question: 'Prescription',
    answer: 'Wikipedia gives the following definition: “Generic drug (pl. generic drugs, short: generics) is a drug which is produced and distributed without a brand name. A generic must contain the same active ingredients as the original formulation. In most cases, it is considered bioequivalent to the brand name counterpart with respect to pharmacokinetic and pharmacodynamic properties. By extension, therefore, generics are assumed to be identical in dose, strength, route of administration, safety, efficacy, and intended use.”'
  },
  {
    id: 7,
    question: 'What is the difference between Soft and Regular pills? My order was for “soft” tabs but the pills I received are hard!',
    answer: 'Wikipedia gives the following definition: “Generic drug (pl. generic drugs, short: generics) is a drug which is produced and distributed without a brand name. A generic must contain the same active ingredients as the original formulation. In most cases, it is considered bioequivalent to the brand name counterpart with respect to pharmacokinetic and pharmacodynamic properties. By extension, therefore, generics are assumed to be identical in dose, strength, route of administration, safety, efficacy, and intended use.”'
  }
]

@Component({
  selector: 'products-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class ProductsFaqComponent {
  content: Array<Content> = [];
  selectedQuestion: number | null = 1;

  ngOnInit(): void {
    this.content = content;
  }

  showAnswer(click: any): void {
    this.selectedQuestion = click
  }

  hideAnswer(click: any): void {
    this.selectedQuestion = 0
  }
  
  isItemSelected(id: number): boolean {
    return this.selectedQuestion === id;
  }
}
