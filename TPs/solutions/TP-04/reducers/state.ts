import {Item} from '../item';

export interface State {
    readonly items: ReadonlyArray<Item>;
}