import { Component } from '@angular/core';

@Component({
  selector: 'app-event-pass',
  templateUrl: './event-pass.component.html',
  styleUrls: ['./event-pass.component.scss']
})
export class EventPassComponent {
  hexBackgroundColor = 'light';
  logo = 'logo';
  logoImageUrl = 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=660&h=660';
  localizedIssuerName = '[TEST ONLY] Heraldic Event';
  eventName = 'Saffire Pass';
  dateTimeStart = '02/02/2023 11:30';
  seatInfoGate = '3A';
  seatInfoSection = '40';
  seatInfoRow = 'G';
  seatInfoSeat = '5';
  barcodeAlternateText = 'barcode alt test';
  barcodeClass = 'barcode-img qr';
  barcodeImageUrl = 'https://developers.google.com/wallet/images/qrcode.png';
  heroImageUrl = 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&h=336';
}