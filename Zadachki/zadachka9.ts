// BEGIN (write your solution here)
type User = {
    name: string,
    age: number;
}

function getOlderUser(user1: User, user2: User) {
    if (user1.age > user2.age){
        return user1;
    }
    else if (user1.age !== user2.age) {
        return user2;
    }
    return null;
}
// END

export type { User };
export default getOlderUser;
