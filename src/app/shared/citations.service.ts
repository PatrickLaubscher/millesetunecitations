import { Injectable } from '@angular/core';
import { Citation } from './entities';
import { CitationsList } from './citationsMock';

@Injectable({
  providedIn: 'root'
})
export class CitationsService {

  citationsList:Citation[] = [];

  loadList() {
    if(sessionStorage.getItem('initial_display') === null) {
      sessionStorage.setItem('citations_list', JSON.stringify(CitationsList));
      sessionStorage.setItem('initial_display', JSON.stringify('true'));
      location.reload();
    }
  }

  reloadList() {
    sessionStorage.setItem('citations_list', JSON.stringify(CitationsList));
    location.reload();
  }

  fetchAll() {
    this.citationsList = JSON.parse(sessionStorage.getItem('citations_list') || '');
    return this.citationsList;
  }

  deleteCitationList() {
    this.citationsList = [];
    sessionStorage.removeItem('citations_list');
    location.reload();
  }

  deleteCitation(citation:Citation) {
    this.citationsList = JSON.parse(sessionStorage.getItem('citations_list') || '');

    const index = this.citationsList.findIndex(o => o.id === citation.id);

    if (index > -1) {
      this.citationsList.splice(index, 1);
      this.saveCitation();
    }
    location.reload();
  }

  saveCitation():void {
    sessionStorage.setItem('citations_list', JSON.stringify(this.citationsList));
  }

  addCitation(citation:{ content: string, author: string }) {

    let existingCitationList:Citation[] = this.fetchAll();
    this.citationsList = [];
    sessionStorage.removeItem('citations_list');

    let newCitation:Citation = {
      id : existingCitationList.length + 1,
      content : citation.content,
      author : citation.author
    }

    existingCitationList.push(newCitation);
    this.citationsList = existingCitationList;
    this.saveCitation();
  }

}
