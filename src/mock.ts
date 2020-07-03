export {Loc} from './lib/locale';
export {Mock, IMockOptions} from './lib/mock';
import {Mock as _Mock} from './lib/mock';

// tslint:disable-next-line:no-string-literal
window['Mock'] = _Mock;
