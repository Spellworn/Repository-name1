/* eslint-disable @typescript-eslint/no-namespace */
// BEGIN (write your solution here)

// END
namespace Company {
    export function isEmployeeEmail(email:string, companyDomain:string) {
        const result = email.split("@");
        return result[1] === companyDomain;
    }
}

type User = {
    email: string
};

function authorize(user: User | null): boolean {
    const companyDomain = 'hexlet.io';

    const email = user?.email ?? '';

    return Company.isEmployeeEmail(email, companyDomain);
}

export default authorize;
