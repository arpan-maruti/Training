interface User6 {
    name: string;
    age: number;
  }

  type Admin = {
    role: string;
    userDetails: User6; // Reusing the User interface
  };

  const admin: Admin = {
    role: "Moderator",
    userDetails: {
      name: "Bob",
      age: 30,
    },
  };

  console.log(admin);
  