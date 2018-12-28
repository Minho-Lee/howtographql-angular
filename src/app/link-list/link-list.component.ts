import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';

import { Link } from '../types';
import { ALL_LINKS_QUERY } from '../graphql';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {
  allLinks: Link[] = [];
  loading: boolean;

  constructor(
    private _apollo: Apollo
  ) {
    this.loading = true;
  }

  ngOnInit() {
    this._apollo.watchQuery({
      query: ALL_LINKS_QUERY
    }).valueChanges.subscribe((response) => {
      console.log(response);
      this.allLinks = response.data.links;
      this.loading = response.loading;
    });
  }
}
