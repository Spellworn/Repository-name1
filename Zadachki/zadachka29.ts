enum Permission {
    READ,
    WRITE,
    DELETE,
}

type User = {
    login: string,
};

type AdminPermission = {
    permission: Permission,
};

// BEGIN (write your solution here)
type Admin = User & AdminPermission;

function addAdmin (user: User) {
    const admin: Admin = {login : user.login, permission: Permission.READ};
    return admin;
}
// END

export { User, Admin, Permission };
export default addAdmin;
