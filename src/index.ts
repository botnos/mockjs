import {Person} from './provider/person';
import {Internet} from './provider/internet';
import {Modifier} from './provider/modifier';
import {BaseProvider} from './provider/base';
import {Lorem} from './provider/lorem';
import {Address} from './provider/address';

export const MockJs = Address(Internet(Lorem(Person(Modifier(BaseProvider)))));

// tslint:disable-next-line:no-string-literal
window['MockJs'] = MockJs;
