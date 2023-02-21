import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  resultado = 0;
  abono = 0;

  calcabono(formu: { value: { age: any; tempemp: any; sal: any; }; }) {
    const idade = formu.value.age;
    const anostrab = formu.value.tempemp;
    const salario = formu.value.sal;

    if (anostrab > 20 && idade > 50) {
      this.abono = 500;
    } else if (anostrab > 20 || idade > 50) {
      this.abono = 250;
    } else {
      this.abono = 0;
    }

    this.resultado = (parseFloat(salario) + this.abono);
  }

}