import {Item} from '../Item';

export interface State {
    readonly items: ReadonlyArray<Item>;
}