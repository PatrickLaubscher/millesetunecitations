import { Component } from '@angular/core';
import { CitationListComponent } from '../citation-list/citation-list.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CitationListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
