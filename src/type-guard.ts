//keyof guard
type Alphanumeric = string | number;

function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString()
    }
}
add("10", "5")
add(5, 15)

// in guard
type NormalUser = {
    name: string;
}
type AdminUser = {
    name: string;
    role: "admin"
}
const NormalUser1: NormalUser = {
    name: "Rayhan Uddin"
}
const adminUser1: AdminUser = {
    name: "Elon Mask",
    role: "admin"
}
function checkUser(user: NormalUser | AdminUser) {
    if ("role" in user) {
        return `I am an ${user.role}`
    }
    else {
        return `I am ${user.name}`
    }
}
console.log(checkUser(NormalUser1))
console.log(checkUser(adminUser1))