import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookList: Book[];
  bookForm: FormGroup;

  constructor(private bookService: BookService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', [Validators.required]],
      description: ['']
    });
    this.bookService.getBooks().subscribe(
      next => (this.bookList = next), error => (this.bookList = [])
    );
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const {value} = this.bookForm;
      this.bookService.createBook(value).subscribe(
        next => {
          this.bookList.unshift(next);
          this.bookForm.reset({
            title: '',
            author: '',
            description: ''
          });
        }, error => console.log(error)
    )
      ;
    }
  }

}
