const users = [
    {
        name: "arbaz",
        age: 21,
    },
    {
        name: "vishal",
        age: 22,
    },
    {
        name: "shivam",
        age: 16,
    },
];

function allowedToVotes(users) {
    let ans = [];
    users.map((u) => {
        if (u.age >= 18) ans.push(u);
    });
    return ans;
}

console.log("users:", allowedToVotes(users));
