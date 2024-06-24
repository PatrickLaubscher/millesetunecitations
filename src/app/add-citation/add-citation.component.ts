import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CitationsService } from '../shared/citations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-citation',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './add-citation.component.html',
  styleUrl: './add-citation.component.css'
})
export class AddCitationComponent {

  citationService = inject(CitationsService);

  constructor(private router: Router){}

  content: string = '';
  auteur: string = '';


  onSubmit() {
    console.log(this.content);
    this.citationService.addCitation(this.content, this.auteur);
    this.router.navigate(['']);
  }

}
