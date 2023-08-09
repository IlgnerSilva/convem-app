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
  spinner: boolean = false;
  html: string | undefined;

  constructor(private formBuilder: FormBuilder, private http: HttpClient){
    this.form = this.formBuilder.group({
      msg: ['', Validators.required],
    });
  }
  loading(){
    this.spinner = true;
    this.html = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>';
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
        ).add(() => {
          this.spinner = false;
          this.html = '';
        })
    }
  }

}
