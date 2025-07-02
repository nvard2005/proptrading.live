import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css']
})
export class SelectPlanComponent {
  @Input() plans: any;
  @Input() accountSizes: string[] = [];
  @Input() marketType: 'crypto' | 'instant' | 'fxced' = 'instant';
  @Input() evaluationType: '1-step' | '2-step' = '1-step';
  @Output() close = new EventEmitter<void>();
  @Output() evaluationChanged = new EventEmitter<'1-step' | '2-step'>();  // Emit change for evaluation type
  
  selectedSize: string | null = null;

  selectEvaluation(type: '1-step' | '2-step') {
    this.evaluationChanged.emit(type);  // Notify parent of the change
  }

  selectPlan(size: string) {
    this.selectedSize = size;
  }

  getFee(accountSize: string) {
    const index = this.accountSizes.indexOf(accountSize);
    if (index === -1) return '-';  // Handle invalid index case

    const feeRow = this.plans?.[this.marketType]?.[this.evaluationType]?.find((row: any) => row.isFee);
    return feeRow?.values[index] ?? '-';  // Return fee or '-' if not found
  }

  closeModal() {
    this.close.emit();
  }
}
