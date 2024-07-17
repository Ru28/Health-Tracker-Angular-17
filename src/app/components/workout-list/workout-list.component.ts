import { Component } from '@angular/core';
import { User, Workout } from '../../interfaces/user';
import { WorkoutDataService } from '../../services/workout-data.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.scss'
})
export class WorkoutListComponent {
  userData:User[]=[];

  constructor(private workoutDataService:WorkoutDataService){
    this.userData=workoutDataService.userData;
    console.log(this.userData);
  }
  
  filteredUsers: User[] = [];
  paginatedUsers: User[] = [];
  searchTerm: string = '';
  selectedWorkoutType: string = '';
  workoutTypes: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga'];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 0;
  pageSizes: number[] = [5, 10, 15];

  ngOnInit() {
    this.filteredUsers = [...this.userData];
    this.updatePagination();
  }

  getWorkoutTypes(workouts: Workout[]): string {
    return workouts.map(workout => workout.type).join(', ');
  }

  getTotalMinutes(workouts: Workout[]): number {
    return workouts.reduce((total, workout) => total + workout.minutes, 0);
  }

  onSearchChange() {
    this.filterUsers();
  }

  onFilterChange() {
    this.filterUsers();
  }

  filterUsers() {
    this.filteredUsers = this.userData.filter(user => {
      const matchesName = user.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesWorkoutType = this.selectedWorkoutType
        ? user.workouts.some(workout => workout.type === this.selectedWorkoutType)
        : true;
      return matchesName && matchesWorkoutType;
    });
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    this.paginate();
  }

  paginate() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedUsers = this.filteredUsers.slice(start, end);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
    }
  }
}
