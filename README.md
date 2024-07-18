# Healthtracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

Project Hosted On Vercel. Click below link
- [health-tracker-angular-17](https://health-tracker-angular-17.vercel.app/)
- please first fill the workout form after you will able to see all data on list and workout minutes vs activity graphs on Progress tab.

### As per assignment task given fyle , I developed Health Challenge Tracker using Angular 17 (LTS) Version
- My Approach to making this Assignment.
- First, I have gone through requirements and functionality of task.
- then I decide to implement Four Components and one workoutDataSevice.
  - Header
     - Header contains HealthLogo and tabs like form, list, progress.
     - Given proper routing and navigation for form,list and progress component.
  - Workout Form
    - In Form, Taking input form user regarding username, workout type and  workout minutes. then I stored the data in localstorage using workoutDataService.
  - Workout List
    - In List, Fetch data from localStorage using WorkoutDataService. then display data on UI using table. Implemented functionality Serach by Name, Filter by workout type, Pagination.
  - Workout Progress
    - In Progress, Fetch data from localStorage using WorkoutDataService. then I read documentaion of PrimeNG,  plot graphs using PrimeNG and ChartJs Library.
- WorkoutDataService
    I made WorkoutDataService for store the Data on Localstorage, getting from it. This service usefull to manage data layer web application.

# Unit Test Cases Report
-- I have writtern test cases for One Service and Two Components
![unit test case report](https://github.com/user-attachments/assets/34a4138d-9a37-4e07-a925-4c4004c52be2)





## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
