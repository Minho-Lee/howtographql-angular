import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { CREATE_LINK_MUTATION, CreateLinkMutationResponse } from '../graphql';

@Component({
  selector: 'app-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.scss']
})
export class CreateLinkComponent implements OnInit {
  description: string;
  url: string;

  constructor(
    public apollo: Apollo
  ) { }

  ngOnInit() {
  }

  createLink() {
    this.apollo.mutate({
      mutation: CREATE_LINK_MUTATION,
      variables: {
        description: this.description,
        url: this.url
      }})
    .subscribe((response) => {
      console.log('mutation:', response);
    });

  }
}
