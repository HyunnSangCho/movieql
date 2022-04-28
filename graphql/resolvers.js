const Roy = {
    name: "Roy Cho",
    age: 21,
    gender: "Male",
    country: "Korea"
};

const resolvers = {
    Query: {
        person: () => Roy
    }
};

export default resolvers;