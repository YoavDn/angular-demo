import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { gql } from 'apollo-angular';
import { GET_CHARACTERS } from '../graphql/graphql.operations';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private apollo: Apollo) {}

  fetchData(page: number, name: string): Observable<any> {
    const query = gql`
      query GetCharacters($page: Int!, $name: String!) {
        characters(page: $page, filter: { name: $name }) {
          info {
            pages
            count
            next
            prev
          }
          results {
            name
            id
            image
            status
            gender
            species
            location {
              id
              name
            }
          }
        }
      }
    `;

    return this.apollo
      .watchQuery<any>({
        query,
        variables: { page, name },
      })
      .valueChanges.pipe(
        map((response) => response.data),
        catchError((error) => {
          console.error(error);
          return throwError(() => new Error('Failed to fetch data'));
        })
      );
  }
}
