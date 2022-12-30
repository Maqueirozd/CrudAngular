import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private upersons: User[] = [
    {
      id: 1,nome: 'Berrante do Inverno',ataque:'',defesa:'',tipo:'magia',classe:'mago'
    },
    {
      id: 2,      nome: 'Carpinteira Improvisada',ataque:'2',defesa:'1',tipo:'criatura',classe:'druida'
    },
    {
      id: 3,      nome: 'Convidado Morcegueiro',ataque:'1',defesa:'1',tipo:'criatura',classe:'caçador'
    },
    {
      id: 4,      nome: 'Pauladeiro de Dragonete',ataque:'1',defesa:'5',tipo:'criatura',classe:'qualquer'
    },
    {
      id: 5,      nome: 'Liadrin Matriarca de Sangue',ataque:'3',defesa:'2',tipo:'criatura',classe:'paladino'
    },

  ];

  constructor() { }

  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);

  }
  updateUser(user: User) {
    const index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }

}
