import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  
  private apikey = 'AIzaSyDufEk1SYCH5sLLLO9OJvt-6yNWSNRI_lw'; 
  // Crear nuevo usuario
  
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  // Login

  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
 
  constructor( private http: HttpClient) { }

  logout(){

  }

  login( usuario: UsuarioModel){

  }

  nuevoUsuario( usuario:UsuarioModel){
    
  }

}
