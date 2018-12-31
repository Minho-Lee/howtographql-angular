import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';

import {
  ALL_LINKS_QUERY,
  CREATE_LINK_MUTATION,
  CreateLinkMutationResponse
} from '../graphql';

@Component({
  selector: 'app-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.scss']
})
export class CreateLinkComponent implements OnInit {
  description: string;
  url: string;

  constructor(
    public apollo: Apollo,
    public router: Router
  ) { }

  ngOnInit() {
  }

  createLink() {
    this.apollo.mutate({
      mutation: CREATE_LINK_MUTATION,
      variables: {
        description: this.description,
        url: this.url
      },
      // store, data are provided from apollo
      // store is DataProxy where we can keep a local state
      update: (store, { data: { createLink } }) => {
        const data: any = store.readQuery({
          query: ALL_LINKS_QUERY
        });

        data.links.push(createLink);
        store.writeQuery({ query: ALL_LINKS_QUERY, data});
      }
    })
    .subscribe((response) => {
      console.log('mutation:', response);
      this.router.navigate(['/']);
    });

  }
}
