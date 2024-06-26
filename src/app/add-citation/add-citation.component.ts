import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { CitationsService } from '../shared/citations.service';
import { Router } from '@angular/router';
import { Citation } from '../shared/entities';

@Component({
  selector: 'app-add-citation',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule ],
  templateUrl: './add-citation.component.html',
  styleUrl: './add-citation.component.css'
})
export class AddCitationComponent {

  citationService = inject(CitationsService);

  constructor(private router: Router){}

  public form: FormGroup = new FormGroup({
    content: new FormControl(''),
    author: new FormControl('')
  })

  onSubmit() {
    const citation = {
      content: this.form.get('content')?.value,
      author: this.form.get('author')?.value
    };
    this.citationService.addCitation(citation);
    this.router.navigate(['']);
  }

  
  /*
  author: string = '';
  content: string = '';


  onSubmit(form:NgForm) {
    this.citationService.addCitation(form.value);
    this.router.navigate(['']);
  }*/

}
