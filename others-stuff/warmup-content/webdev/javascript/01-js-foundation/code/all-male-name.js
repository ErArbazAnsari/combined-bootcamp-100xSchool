// Write a program that prints all the male people’s first name given a complex object

const company = {
    name: "TechVerse",
    founded: 2021,
    departments: [
        {
            name: "Engineering",
            teams: [
                {
                    teamName: "Frontend",
                    members: [
                        {
                            id: 1,
                            personalInfo: {
                                firstName: "Arbaz",
                                lastName: "Ansari",
                                gender: "male",
                                age: 22,
                            },
                            role: "React Developer",
                        },
                        {
                            id: 2,
                            personalInfo: {
                                firstName: "Neha",
                                lastName: "Sharma",
                                gender: "female",
                                age: 24,
                            },
                            role: "UI Engineer",
                        },
                    ],
                },
                {
                    teamName: "Backend",
                    members: [
                        {
                            id: 3,
                            personalInfo: {
                                firstName: "Rahul",
                                lastName: "Verma",
                                gender: "male",
                                age: 26,
                            },
                            role: "Node Developer",
                        },
                    ],
                },
            ],
        },
        {
            name: "HR",
            teams: [
                {
                    teamName: "Recruitment",
                    members: [
                        {
                            id: 4,
                            personalInfo: {
                                firstName: "Anita",
                                lastName: "Kapoor",
                                gender: "female",
                                age: 29,
                            },
                            role: "HR Manager",
                        },
                        {
                            id: 5,
                            personalInfo: {
                                firstName: "Amit",
                                lastName: "Singh",
                                gender: "male",
                                age: 31,
                            },
                            role: "HR Executive",
                        },
                    ],
                },
            ],
        },
    ],
};

let female_names = [];
let male_names = [];
company.departments.forEach((department) => {
    department.teams.forEach((team) => {
        team.members.forEach((member) => {
            if (member.personalInfo.gender === "female") {
                female_names.push(member.personalInfo.firstName);
            } else {
                male_names.push(member.personalInfo.firstName);
            }
        });
    });
});

console.log("all female names:", female_names);
console.log("all male names:", male_names);
