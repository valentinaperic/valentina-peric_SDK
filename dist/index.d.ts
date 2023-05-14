import { Base } from './base';
import { Movie } from './movie';
import { Quote } from './Quote';
declare class LordOfTheRings extends Base {
}
interface LordOfTheRings extends Movie {
}
interface LordOfTheRings extends Quote {
}
export default LordOfTheRings;
