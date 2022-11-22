import { Component, OnInit,} from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit(): void {
  }
    userModel = new User ();
    mensagem = ""

    
    receberDados() {
      
      

      const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"]

      listaPalavras.forEach(palavra => {
        if( this.userModel.email ?.toLowerCase().includes(palavra)) {
          this.mensagem = "Dados Inválidos"
  
          return;
        }
      })
  
      
      this.loginService.login (this.userModel).subscribe((response) => {
      console.log("deu certo") 
      this.router.navigateByUrl("/")

      }, (respostaErro) => {
        if(respostaErro.error == "Cannot find user") {
          this.mensagem = "usuário incorreto"
        } else if (respostaErro.error == "Incorrect password") {
          this.mensagem = "Senha incorreta"
        } else if (respostaErro.error == "Email and password are required"){
          this.mensagem = "Email e senha são obrigatórios"
        } else {
          this.mensagem = respostaErro.error}
    

      })

    };
  }


// console.log(this.userModel)
