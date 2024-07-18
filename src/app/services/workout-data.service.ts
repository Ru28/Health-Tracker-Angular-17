import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class WorkoutDataService {
  userData:User[]=[];
  defaultUserData:User[]=[{
    id: 1,
    name: 'John Doe',
    workouts: [
      { type: 'Running', minutes: 30 },
      { type: 'Cycling', minutes: 45 }
    ]
  },
  {
    id: 2,
    name: 'Jane Smith',
    workouts: [
      { type: 'Swimming', minutes: 60 },
      { type: 'Running', minutes: 20 }
    ]
  },
  {
    id: 3,
    name: 'Mike Johnson',
    workouts: [
      { type: 'Yoga', minutes: 50 },
      { type: 'Cycling', minutes: 40 }
    ]
  },
]
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
      this.userData = this.defaultUserData;
    }
  }
}
