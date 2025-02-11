import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { WheatherService } from 'src/app/services/wheather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: []
})
export class WeatherComponent  implements OnInit, OnDestroy
{
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'Cornélio Procópio'
  weatherDatas!: WeatherDatas
  searchIcon = faMagnifyingGlass;

  ngOnInit(): void {
    /*  console.log(this.getNumberOne())

    this.numberOne.subscribe((x) => {
      console.log(x)
    })
  }

  getNumberOne(): number {
    console.log("Returning number one!")
    return 1;
  }


  numberOne = new Observable((subscriber) => {
     console.log("Returning number one!")
     subscriber.next(1);*/

    this.getWeatherDatas(this.initialCityName)
  }

  constructor(private weatherService: WheatherService, private messageService: MessageService){}

  getWeatherDatas(city: string): void{
    this.weatherService
    .getWeatherDatas(city)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        response && (this.weatherDatas = response);
      },
      error: (error) => {
        console.log(error)
        this.messageService.clear();
        this.messageService.add({
          severity: 'error',
          summary: "Erro",
          detail: 'Busca não encontrada',
          life: 3000
        })
      }
    })
  }

  onSubmit(): void{
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
