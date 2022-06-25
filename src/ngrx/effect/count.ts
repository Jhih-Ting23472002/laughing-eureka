import { map, of } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';


export class countEffect{
  constructor(
    private actions$:Actions
    ){}

    countEffect$ = countEffect(()=>{
      return this.actions$.pipe(
        ofType(),
        map()
      )
    })

}
