import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { User, Workout } from '../../interfaces/user';
import { WorkoutDataService } from '../../services/workout-data.service';
import { ChartData, ChartOptions } from 'chart.js';
import { NgFor,NgIf } from '@angular/common';
@Component({
  selector: 'app-workout-progress',
  standalone: true,
  imports: [FormsModule,ChartModule,NgFor,NgIf],
  templateUrl: './workout-progress.component.html',
  styleUrl: './workout-progress.component.scss'
})
export class WorkoutProgressComponent {
  userData:User[]=[];
  constructor(private workoutDataService:WorkoutDataService) {
    this.userData=workoutDataService.userData;
  }
  
  selectedUser: User | null = null;
  barChartData: any;
  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Activity' } },
      y: { title: { display: true, text: 'Minutes' } }
    },
    plugins: {
      legend: { display: true, position: 'top' }
    }
  };

  ngOnInit(): void {
    // Select the first user by default
    this.selectUser(this.userData[0]);
  }

  selectUser(user: User): void {
    this.selectedUser = user;
    this.updateChartData();
  }

  updateChartData(): void {
    if (this.selectedUser) {
      this.barChartData = {
        labels: this.selectedUser.workouts.map(workout => workout.type),
        datasets: [
          {
            label: 'Minutes',
            data: this.selectedUser.workouts.map(workout => workout.minutes),
            backgroundColor: 'rgba(30, 136, 229, 0.3)',
            borderColor: 'rgba(30, 136, 229, 1)',
            borderWidth: 1
          }
        ]
      };
    }
  }
  
}
