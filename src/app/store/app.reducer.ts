import * as fromshoppingList from '../shopping-list/store/shopping-list.reducer'
import * as fromAuth from '../auth/store/auth.reduucer'
import {ActionReducerMap} from '@ngrx/store'

export interface AppState {
    shoppinngList: fromshoppingList.State;
    auth: fromAuth.State;
}

export const appReducers: ActionReducerMap<AppState> = {
    shoppinngList: fromshoppingList.shoppingListReducer,
    auth: fromAuth.authReducer
};
