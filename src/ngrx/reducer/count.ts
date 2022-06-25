import { Action } from '@ngrx/store';
type CountInfo = {
  count: number
}

export const initalState: CountInfo = {
  count: 1
}

export const countReducer = { state: CountInfo = initalState, action: Action }
