import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../interfaces/user';
import { WorkoutDataService } from '../../services/workout-data.service';

@Component({
  selector: 'app-workout-form',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './workout-form.component.html',
  styleUrl: './workout-form.component.scss'
})
export class WorkoutFormComponent {
  userName: string = '';
  workoutType: string = 'Cycling';
  workoutMinutes: number = 0;
  workoutTypeOptions: string[]=[
    'Cycling','Running','Swimming','Yoga'
  ]
  userData: User[]=[];
  formFillErrorMessage: string="Please Fill the data";
  showError: boolean= false;
  constructor(private workoutDataService:WorkoutDataService){
    this.userData=this.workoutDataService.userData;
  }

  onSubmit() {
    const userIndex = this.userData.findIndex(user => user.name.toLowerCase() === this.userName.toLowerCase());
    if(this.userName === '' || this.workoutMinutes===0){
      this.showError=true;
    }  
    else{
      this.showError=false;
      if (userIndex !== -1) {
        // User exists, add new workout
        this.userData[userIndex].workouts.push({
          type: this.workoutType,
          minutes: this.workoutMinutes
        });
      } else {
        // New user, add to userData
        const newUser: User = {
          id: this.userData.length + 1,
          name: this.userName,
          workouts: [{
            type: this.workoutType,
            minutes: this.workoutMinutes
          }]
        };
        this.userData.push(newUser);
      }
      console.log(this.userData);
      this.workoutDataService.setUserWorkoutData(this.userData);
      this.resetForm();
    }

    
  }

  resetForm() {
    this.userName = '';
    this.workoutType = 'Cycling';
    this.workoutMinutes = 0;
  }
}
