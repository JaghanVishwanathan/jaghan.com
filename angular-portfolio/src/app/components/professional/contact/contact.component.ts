import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };
  submitted = false;
  submitMessage = '';

  onSubmit(): void {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://script.google.com/macros/s/AKfycbydSJ_5ljuyJmmLocag74SiWH4AAGz57TUxiul5ggltciKOIkD8sDRp4xtHkqaqLfG-/exec';
    form.target = 'hidden_iframe';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'Name';
    nameInput.value = this.contactForm.name;

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'Email';
    emailInput.value = this.contactForm.email;

    const messageInput = document.createElement('textarea');
    messageInput.name = 'Message';
    messageInput.value = this.contactForm.message;

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(messageInput);

    const iframe = document.createElement('iframe');
    iframe.name = 'hidden_iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    document.body.appendChild(form);

    form.submit();

    this.submitted = true;
    this.submitMessage = '✅ Message sent successfully!';
    this.contactForm = { name: '', email: '', message: '' };

    setTimeout(() => {
      this.submitMessage = '';
      document.body.removeChild(form);
      document.body.removeChild(iframe);
    }, 5000);
  }
}
