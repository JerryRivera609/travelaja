import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Visa';

  origen: string = '';
  destino: string = '';
  mensaje: string = '';

  solicitar() {
    if (this.origen && this.destino ) {
      this.mensaje = `Solicitud de "${this.origen}" a "${this.destino}" guardada`;
    } else {
      this.mensaje = 'Por favor introduce origen y destino.';
    }
  }
}
