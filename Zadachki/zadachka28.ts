type Turtle = 'turtle' | null;

type Game = {
    makeTurn: (direction: 'left' | 'right') => void;
    state: Array<Turtle>;
};

const startGame = (): Game => {
    const state: Array<Turtle> = ['turtle', null, null, null, null];

    // BEGIN (write your solution here)
    function makeTurn(direction: 'left' | 'right') {
        const i = state.indexOf('turtle')
        if (i === 0 && direction === 'left') {
            throw new Error("ERROR");
        }

        else if (i === 4 && direction === 'right') {
            throw new Error("ERROR");
        }

        if (direction === 'left') {
            state[i-1] = 'turtle';
            state [i] = null;
            return state;
        }
        else {
            state[i+1] = 'turtle';
            state[i] = null;
            return state;
        }


    }
    // END

    return { makeTurn, state };
};

export default startGame;
