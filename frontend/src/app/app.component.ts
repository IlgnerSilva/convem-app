import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  form: FormGroup;
  spinner: boolean = false;
  html: string | undefined;

  // Array para armazenar mensagens do chat
  chatMessages: { userMessage: string, apiResponse: string }[] = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient){
    this.form = this.formBuilder.group({
      msg: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.value.msg != '') {
      const userMessage = this.form.value.msg; // Captura a mensagem do usuário
      this.chatMessages.push({ userMessage, apiResponse: '' }); // Adiciona a mensagem do usuário ao array

      setTimeout(()=>{
        this.http.post('http://localhost:3000', {msg:userMessage})
          .subscribe(
            (response: any) => {
              const { message } = response;
              if(message !="Erro"){
                this.chatMessages[this.chatMessages.length - 1].apiResponse = message; // Atualiza a resposta da API no array
              }else{
                this.chatMessages[this.chatMessages.length - 1].apiResponse = message; // Atualiza a resposta da API no array
              }
            },
            (error: any) => {
              this.chatMessages[this.chatMessages.length - 1].apiResponse = 'No momento não estamos disponíveis, tente novamente mais tarde.';
            }
          )
      }, 1000);
    }
  }
}
