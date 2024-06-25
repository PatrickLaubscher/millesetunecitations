import { Component, inject, OnInit } from '@angular/core';
import { Citation } from '../shared/entities';
import { CitationsService } from '../shared/citations.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-citation-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './citation-list.component.html',
  styleUrl: './citation-list.component.css'
})
export class CitationListComponent implements OnInit {

  citationService = inject(CitationsService);

  citationsList:Citation[] = [];

  getAllCitations() {
    this.citationsList = this.citationService.fetchAll();
  }


  ngOnInit(): void {
    this.citationService.loadList();
    this.getAllCitations();
  }

}
