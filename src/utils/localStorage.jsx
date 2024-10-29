const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Code Review",
          "description": "Review code submitted by team members",
          "date": "2024-10-28",
          "category": "Development",
          "active": true,
          "newTask": false,
          "failed": false,
          "completed": true
        },
        {
          "title": "Documentation",
          "description": "Update project documentation with recent changes",
          "date": "2024-10-29",
          "category": "Documentation",
          "active": false,
          "newTask": true,
          "failed": false,
          "completed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Database Optimization",
          "description": "Optimize database queries for faster performance",
          "date": "2024-10-30",
          "category": "Database",
          "active": true,
          "newTask": false,
          "failed": false,
          "completed": false
        },
        {
          "title": "Testing",
          "description": "Conduct unit tests on recent feature updates",
          "date": "2024-11-01",
          "category": "Testing",
          "active": true,
          "newTask": true,
          "failed": false,
          "completed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "UI Design",
          "description": "Design new UI components for the project",
          "date": "2024-11-02",
          "category": "Design",
          "active": false,
          "newTask": false,
          "failed": false,
          "completed": true
        },
        {
          "title": "Bug Fixing",
          "description": "Fix bugs reported by the QA team",
          "date": "2024-11-03",
          "category": "Maintenance",
          "active": true,
          "newTask": false,
          "failed": false,
          "completed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Security Audit",
          "description": "Conduct security audit on application",
          "date": "2024-11-04",
          "category": "Security",
          "active": true,
          "newTask": true,
          "failed": false,
          "completed": false
        },
        {
          "title": "Performance Review",
          "description": "Review and optimize performance metrics",
          "date": "2024-11-05",
          "category": "Analysis",
          "active": false,
          "newTask": false,
          "failed": false,
          "completed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Client Meeting",
          "description": "Attend project meeting with client",
          "date": "2024-11-06",
          "category": "Meetings",
          "active": false,
          "newTask": false,
          "failed": false,
          "completed": true
        },
        {
          "title": "Feature Development",
          "description": "Develop new features as per client requirements",
          "date": "2024-11-07",
          "category": "Development",
          "active": true,
          "newTask": true,
          "failed": false,
          "completed": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  
  export const setLocalStorage =()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin))
  }

  export const getLocalStorage =()=>{
    const employees=JSON.parse(localStorage.getItem("employees"));
    const admin= JSON.parse(localStorage.getItem("admin"));

    // console.log(employees);
    // console.log(admin);
  }