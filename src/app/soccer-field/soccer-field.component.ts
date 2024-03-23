import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'soccer-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './soccer-field.component.html',
  styleUrl: './soccer-field.component.scss'
})
export class SoccerFieldComponent {
  porteros = [
    {image: "../../assets/players/bellingham.png",name: 'Jude Bellingham',team: "../../assets/teams/10.png",position: "../../assets/positions/mc.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33},
  ];

  defensas = [
    {image: "../../assets/players/bellingham.png",name: 'Jude Bellingham',team: "../../assets/teams/10.png",position: "../../assets/positions/mc.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33},
    {image: "../../assets/players/morata.png",name: 'Álvaro Morata',team: "../../assets/teams/2.png",position: "../../assets/positions/dl.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33},
    {image: "../../assets/players/mayoral.png",name: 'Borja Mayoral',team: "../../assets/teams/6.png",position: "../../assets/positions/dl.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33},
    {image: "../../assets/players/pedri.png",name: 'Pedri',team: "../../assets/teams/3.png",position: "../../assets/positions/mc.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33}
  ];

  medios = [
    {image: "../../assets/players/bellingham.png",name: 'Jude Bellingham',team: "../../assets/teams/10.png",position: "../../assets/positions/mc.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33},
    {image: "../../assets/players/morata.png",name: 'Álvaro Morata',team: "../../assets/teams/2.png",position: "../../assets/positions/dl.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33},
    {image: "../../assets/players/mayoral.png",name: 'Borja Mayoral',team: "../../assets/teams/6.png",position: "../../assets/positions/dl.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33},
    {image: "../../assets/players/pedri.png",name: 'Pedri',team: "../../assets/teams/3.png",position: "../../assets/positions/mc.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33}
  ];

  delanteros = [
    {image: "../../assets/players/bellingham.png",name: 'Jude Bellingham',team: "../../assets/teams/10.png",position: "../../assets/positions/mc.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33},
    {image: "../../assets/players/morata.png",name: 'Álvaro Morata',team: "../../assets/teams/2.png",position: "../../assets/positions/dl.png", point1: 1, point2: 2, point3: 3, point4: 4, dato1: "dato1", dato2: "dato2",goal: 3, assists:3, points: 33},
  ];

}
