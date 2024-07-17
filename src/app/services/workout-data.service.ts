import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class WorkoutDataService {
  userData:User[]=[];
  constructor() {
    this.getUserWorkoutData();
  }

  setUserWorkoutData(workoutData:User[]){
    localStorage.setItem('user', JSON.stringify(workoutData));
  }

  getUserWorkoutData(){
    const storedUserData = localStorage.getItem('user')
    if (storedUserData) {
      this.userData = JSON.parse(storedUserData)
      // You can use userData here...
    } else {
      console.log('User data not found in local storage')
    }
  }
}
