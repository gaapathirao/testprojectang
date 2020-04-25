import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';


export interface State {
  ingredients: Ingredient[];
  editedIngregient: Ingredient;
  editedIngregientIndex: number;
}

const initialState: State = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ],
  editedIngregient: null,
  editedIngregientIndex: -1
};

export function shoppingListReducer(
  state: State = initialState,
  action: ShoppingListActions.ShoppingListActions) {

  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENTS:
      const ingredent = state.ingredients[state.editedIngregientIndex];
      const updateIngredeint = {
        ...ingredent,
        ...action.payload
      };
      const updateIngredeints = [...state.ingredients];
      updateIngredeints[state.editedIngregientIndex] = updateIngredeint;
      return {
        ...state,
        ingredients: [...updateIngredeints],
        editedIngregient: null,
        editedIngregientIndex: -1
      };
    case ShoppingListActions.DELETE_INGREDIENTS:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex !== state.editedIngregientIndex;
        }),
        editedIngregient: null,
        editedIngregientIndex: -1
      };
    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editedIngregientIndex: action.payload,
        editedIngregient: { ...state.ingredients[action.payload] }
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngregient: null,
        editedIngregientIndex: -1
      };
    default:
      return state;
  }
}
