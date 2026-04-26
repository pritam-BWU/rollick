import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-ticket-rating',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './ticket-rating.component.html',
  styleUrl: './ticket-rating.component.css'
})
export class TicketRatingComponent {
  @Input() isOpen: boolean = false;
  @Input() ticketId: string = '';
  @Input() ticketName: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{ rating: number, comment: string }>();

  rating: number = 0;
  comment: string = '';
  stars: number[] = [1, 2, 3, 4, 5];

  setRating(star: number) {
    this.rating = star;
  }

  onClose() {
    this.resetForm();
    this.close.emit();
  }

  onSubmit() {
    this.submit.emit({ rating: this.rating, comment: this.comment });
    this.onClose();
  }

  onSkip() {
    this.submit.emit({ rating: 0, comment: '' });
    this.onClose();
  }

  private resetForm() {
    this.rating = 0;
    this.comment = '';
  }
}
