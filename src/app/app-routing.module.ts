import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookComponent} from './book/book.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';
import {BookCreateComponent} from './book-create/book-create.component';


const routes: Routes = [{
  path: 'book',
  component: BookComponent
},
  {
    path: 'book/:id',
    component: BookDetailComponent
  },
  {
    path: 'book/:id/edit',
    component: BookEditComponent
  },
  {
    path: 'book/:id/delete',
    component: BookDeleteComponent
  }, {
    path: 'book/create',
    component: BookCreateComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
