import { Base } from './base';
import { Movie } from './movie';
import { Quote } from './Quote';
import { applyMixins } from './utils';
 
class LordOfTheRings extends Base {}
interface LordOfTheRings extends Movie {}
interface LordOfTheRings extends Quote {}

applyMixins(LordOfTheRings, [Movie, Quote]);

export default LordOfTheRings;