import { Component, input } from '@angular/core';
import { SimulationService } from '../../services/simulation.service';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrl: './simulation.component.css'
})
export class SimulationComponent {
  doorImageOne: boolean = true;
  goatsImageOne: boolean = false;
  carImageOne: boolean = false;

  doorImageTwo: boolean = true;
  goatsImageTwo: boolean = false;
  carImageTwo: boolean = false;

  doorImageThree: boolean = true;
  goatsImageThree: boolean = false;
  carImageThree: boolean = false;

  doorOneImage!: string;
  carOneImage!: string;
  goatsOneImage!: string;

  doorTwoImage!: string;
  carTwoImage!: string;
  goatsTwoImage!: string;

  doorThreeImage!: string;
  carThreeImage!: string;
  goatsThreeImage!: string;


  constructor(private simulationService: SimulationService) { }
  


  ngOnInit() {
    this.doorOneImage = 'https://static.vecteezy.com/system/resources/previews/006/623/068/original/wooden-door-in-flat-cartoon-style-illustration-free-vector.jpg';
    this.doorTwoImage = 'https://static.vecteezy.com/system/resources/previews/006/623/068/original/wooden-door-in-flat-cartoon-style-illustration-free-vector.jpg';
    this.doorThreeImage = 'https://static.vecteezy.com/system/resources/previews/006/623/068/original/wooden-door-in-flat-cartoon-style-illustration-free-vector.jpg';

    this.goatsOneImage = 'https://media.istockphoto.com/id/1445125497/photo/adorable-goofy-baby-goat-at-sunset-portrait.jpg?s=2048x2048&w=is&k=20&c=bjoeyfQI2YmhIix5pWAwP7m9EI44giY39P5hoZT4yX8=';
    this.goatsTwoImage = 'https://media.istockphoto.com/id/1445125497/photo/adorable-goofy-baby-goat-at-sunset-portrait.jpg?s=2048x2048&w=is&k=20&c=bjoeyfQI2YmhIix5pWAwP7m9EI44giY39P5hoZT4yX8=';
    this.goatsThreeImage = 'https://media.istockphoto.com/id/1445125497/photo/adorable-goofy-baby-goat-at-sunset-portrait.jpg?s=2048x2048&w=is&k=20&c=bjoeyfQI2YmhIix5pWAwP7m9EI44giY39P5hoZT4yX8=';
  }

  openDoor(inputNumber:any){

    if(inputNumber === 1){
      if(this.doorImageOne === true){
        this.doorImageOne = false;
        this.goatsImageOne = true;
      }
    }

    if(inputNumber === 2){
      if(this.doorImageTwo === true){
        this.doorImageTwo = false;
        this.goatsImageTwo = true;
      }
    }
    
    if(inputNumber === 3){
      if(this.doorImageThree === true){
        this.doorImageThree = false;
        this.goatsImageThree = true;
      }
    }

    this.simulationService.getSimulate().subscribe((res: any) => {
      if (res) {
      
      }
    });
  }
 
}
