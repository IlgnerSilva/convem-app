import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient){
    this.form = this.formBuilder.group({
      msg: ['', Validators.required],
    });
  }

  onSubmit() {
    if (true) {
      const formData = this.form.value;
      this.http.get('http://localhost:3000')
        .subscribe(
          (response: any) => {
            const { results } = response;
            if(results){
              Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'Dados enviados com sucesso!'
              });
            }
          },
          (error: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Erro!',
              text: 'Ocorreu um erro ao enviar os dados.'
            });
          }
        );
    }
  }

}
