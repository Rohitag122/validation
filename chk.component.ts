import { Component } from '@angular/core';

@Component({
  selector: 'app-chk',
  templateUrl: './chk.component.html',
  styleUrl: './chk.component.css'
})
export class ChkComponent {

  chng(v: any) {
    console.log(v.value);
  }

  onSubmit() {
    console.log("Form Submitted");
  }
}
