import {Routes} from '@angular/router';
import {AddQuestionComponent} from "./components/question/add-question/add-question.component";
import {UserSignupComponent} from "./components/user-signup/user-signup.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./auth.guard";
import {SubjectListComponent} from "./components/subject/subject-list/subject-list.component";
import {SubjectDetailComponent} from "./components/subject/subject-detail/subject-detail.component";
import {QuestionListComponent} from "./components/question/question-list/question-list.component";
import {NodeListComponent} from "./components/node/node-list/node-list.component";
import {NodeDetailComponent} from "./components/node/node-detail/node-detail.component";
import {ExamListComponent} from "./components/exam/exam-list/exam-list.component";
import {ExamDetailComponent} from "./components/exam/exam-detail/exam-detail.component";
import {EditQuestionComponent} from "./components/question/edit-question/edit-question.component";
import {AddExamComponent} from "./components/exam/add-exam/add-exam.component";
import {EditExamComponent} from "./components/exam/edit-exam/edit-exam.component";

export const routes: Routes = [
  { path: 'signup', component: UserSignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'question/:id', component: EditQuestionComponent, canActivate: [AuthGuard.prototype.canActivate] },
  { path: 'subject/:id', component: SubjectDetailComponent, canActivate: [AuthGuard.prototype.canActivate] },
  { path: 'add-question/:id', component: AddQuestionComponent, canActivate: [AuthGuard.prototype.canActivate] },
  { path: 'edit-question/:id', component: EditQuestionComponent, canActivate: [AuthGuard.prototype.canActivate] },
  { path: 'question-list/:id', component: QuestionListComponent, canActivate: [AuthGuard.prototype.canActivate] },
  { path: 'node-list/:id', component: NodeListComponent, canActivate: [AuthGuard.prototype.canActivate] },
  { path: 'node/:id', component: NodeDetailComponent, canActivate: [AuthGuard.prototype.canActivate] },
  { path: 'exam-list/:id', component: ExamListComponent, canActivate: [AuthGuard.prototype.canActivate] },
  { path: 'exam/:id', component: ExamDetailComponent, canActivate: [AuthGuard.prototype.canActivate] },
  { path: 'add-exam/:id', component: AddExamComponent, canActivate: [AuthGuard.prototype.canActivate] },
  { path: 'edit-exam/:id', component: EditExamComponent, canActivate: [AuthGuard.prototype.canActivate] },
  { path: 'home', component: SubjectListComponent, canActivate: [AuthGuard.prototype.canActivate] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }

];
