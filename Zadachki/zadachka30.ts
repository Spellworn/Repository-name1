type Form = {
    age: {
        value: number,
        validator: (val: number) => boolean
    },
    name: {
        value: string,
        validator: (val: string) => boolean
    }
};

const form: Form = {
    // BEGIN (write your solution here)
    name: {value: 'blyat',
        validator:(val: string) => val.length > 3},

    age: {
        value: 30,
        validator:(val: number) => val>30}
    // END
};

export default form;
