import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public nome: String = "Jota Santos";
  public age: number = 29;
  public isDisabled: Boolean = true;

  // image
  public srcImage: String = "https://avatars.githubusercontent.com/u/63259982?v=4";
  public altImage: String = "Fot do github";
  public titleImage: String = "Alt da image";

  public sum() {
    this.age++;
  }

  public sub() {
    this.age--;
  }
}
