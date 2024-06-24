import { Injectable } from '@angular/core';
import { Citation } from './entities';
import { CitationsList } from './citationsMock';

@Injectable({
  providedIn: 'root'
})
export class CitationsService {

  citationsList:Citation[] = [];

  display:boolean = true;

  loadList() {
    localStorage.setItem('citations_list', JSON.stringify(CitationsList));
    location.reload();
  }

  fetchAll() {
    this.citationsList = JSON.parse(localStorage.getItem('citations_list') || '');
    return this.citationsList;
  }

  deleteCitationList() {
    this.citationsList = [];
    localStorage.removeItem('citations_list');
    location.reload();
  }

  deleteCitation(citation:Citation) {
    this.citationsList = JSON.parse(localStorage.getItem('citations_list') || '');

    const index = this.citationsList.findIndex(o => o.id === citation.id);

    if (index > -1) {
      this.citationsList.splice(index, 1);
      this.saveCitation();
    }
    console.log(this.citationsList);
    location.reload();
  }

  saveCitation():void {
    localStorage.setItem('citations_list', JSON.stringify(this.citationsList));
  }

  addCitation(content:string, author:string) {

    let existingCitation:Citation[] = this.fetchAll();
    this.citationsList = [];
    localStorage.removeItem('citations_list');

    let newCitation:Citation = {
      id : this.citationsList.length + 1,
      content : content,
      author : author
    }

    existingCitation.push(newCitation);
    this.citationsList = existingCitation;
    this.saveCitation();
  }

}
