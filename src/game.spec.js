import Game from "./game";
import chai from "chai";

let expect = chai.expect;

// Bowling test
describe('Game', () => {
    it('should start', () => {
        // GIVEN
        // WHEN
        const game = new Game();
        // THEN
        expect(game.totalScore).to.equal(0)
    });
});
