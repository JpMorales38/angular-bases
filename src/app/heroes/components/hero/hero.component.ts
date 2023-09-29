import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public Newname: string = 'IronMan';
  public Newage:  number = 45;

  public nameHero: string = 'Spiderman';
  public ageHero: number = 22;

  changeName(): void{
    this.nameHero = this.Newname;
  }


  changeAge(): void{
    this.ageHero = this.Newage;
  }

  get capitalizedName(): string{

    return this.nameHero.toUpperCase();
  }

  getHeroDescription(): string{
    return `${ this.nameHero} - ${ this.ageHero }`;
  }

  resetForm(): void{

    this.nameHero = "Spiderman";
    this.ageHero  = 22;
  }

}
