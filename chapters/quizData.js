const quizData = [
    // --- Multiple Choice Questions ---
    { // Q1
        question: "Agile software engineering refers,",
        options: [
            "A philosophy and a set of development guidelines",
            "An active and continuous communication between developers and customers",
            "Encourages customer satisfaction",
            "All of the mentioned above"
        ],
        answer: "All of the mentioned above"
    },
    { // Q2
        question: "Agility can be applied to any software process using design a process in such a way that,",
        options: [
            "Allows the project team to adapt tasks",
            "Conduct planning to get the fluidity of an agile development approach",
            "An incremental delivery strategy that gets working software to the customer",
            "All of the mentioned above"
        ],
        answer: "All of the mentioned above"
    },
    { // Q3
        question: "Dynamic systems development method of agile software development which provides a framework for.....",
        options: [
            "Building and maintaining systems",
            "Meets time constraints",
            "Uses of incremental prototyping in a controlled project environment",
            "All of the mentioned above"
        ],
        answer: "All of the mentioned above"
    },
    { // Q4
        question: "In Agile methodology ,the activity that distributes estimated effort across the planned project duration by allocating the effort to specific software developing tasks is",
        options: [
            "Project scheduling",
            "Detailed schedule",
            "Macroscopic schedule",
            "None of the mentioned"
        ],
        answer: "Project scheduling"
    },
    { // Q5
        question: "Which of the following is an important factor that can affect the accuracy and efficacy of estimates?",
        options: [
            "Project size",
            "Planning process",
            "Project complexity",
            "Degree of structural uncertainty"
        ],
        answer: "Project size"
    },
    { // Q6
        question: "Which of the following is not achieved by an automated estimation tools?",
        options: [
            "Predicting staffing levels",
            "Predicting software cost",
            "Predicting software schedules",
            "Predicting clients demands"
        ],
        answer: "Predicting clients demands"
    },
    { // Q7
        question: "In the popular prioritization technique called “MoSCoW”, the “M” stands for ...",
        options: [
            "Must Have",
            "Major",
            "May Have",
            "Mandatory"
        ],
        answer: "Must Have"
    },
    { // Q8 (Skipped 8, 9 in original - this is Q10)
        question: "The agile methodologies are described as “adaptive” because",
        options: [
            "The rate of development progress on an Agile project is constantly tracked to allow adaptation",
            "Agile teams have the empowerment to frequently respond to change and to learn on a project by changing the plan.",
            "Project Managers are not needed in Agile methods because teams are self-organizing",
            "A and B." // Note: Assuming this refers to the A and B options *within this question*.
        ],
        answer: "Agile teams have the empowerment to frequently respond to change and to learn on a project by changing the plan."
    },
    { // Q9 (Original Q11)
        question: "The                       is typically performed during the first week of a project, the goal of which is to identify the scope of your system and a likely architecture for addressing it.",
        options: [
            "Envisioning phase",
            "Modeling phase",
            "Expert Domain",
            "Class owner."
        ],
        answer: "Envisioning phase"
    },
    { // Q10 (Original Q12)
        question: "A job role is responsible for the overall design of the system in the Feature Drive Development (FDD) method.",
        options: [
            "Development Manager",
            "Chief Architect",
            "Expert Domain",
            "Class owner."
        ],
        answer: "Chief Architect"
    },
    { // Q11 (Original Q13)
        question: "All phases in the DSDM methodology are considered iterative process without the following …",
        options: [
            "Business study",
            "Modeling phase",
            "Feasibility study",
            "A and B." // Note: Assuming this refers to the A and B options *within this question*.
        ],
        answer: "A and B." // Note: This answer seems ambiguous based on typical DSDM. Recheck source if possible. Interpreting as the intended answer from the file.
    },
    { // Q12 (Original Q14)
        question: "The ………………. cannot change the effort estimate on a product backlog item",
        options: [
            "Product owner",
            "Chief Architect",
            "Chief programmers",
            "A and B." // Note: Assuming this refers to the A and B options *within this question*.
        ],
        answer: "Product owner"
    },
    { // Q13 (Original Q15)
        question: "In a DSDM method, a collaborative and cooperative approach shared by …………...",
        options: [
            "Team members",
            "Stakeholders",
            "All developers",
            "All of them."
        ],
        answer: "Stakeholders"
    },
    { // Q14 (Original Q16)
        question: "In a FDD method, the                    is responsible for leading small teams in the analysis, design and development of new features.",
        options: [
            "Chief programmer",
            "Stakeholders", // Note: Option C was Stakeholders, B was Chief Architect in source. Ordering fixed.
            "Chief Architect",
            "All of them."
        ],
        answer: "Chief programmer"
    },
    { // Q15 (Original Q17)
        question: "In the DSDM method, the functional model iteration phase produces many outputs without …….",
        options: [
            "Prioritized functions",
            "Non-functional requirements",
            "Functional prototyping review documents",
            "Outline plan for development."
        ],
        answer: "Outline plan for development."
    },
    { // Q16 (Original Q18)
        question: "According to agile manifesto, the developers should be:",
        options: [
            "Able to contact the customer to clarify aspects of the work",
            "In twice-daily contact with the customer",
            "Completely uninterrupted by the customer",
            "Able to work without needing to disturb the customer"
        ],
        answer: "Able to contact the customer to clarify aspects of the work"
    },
    { // Q17 (Original Q19)
        question: "In the Feature Drive Development (FDD) method, who are they responsible for writing a model Notes?",
        options: [
            "Development manager and chief Architect",
            "Domain experts, chief programmers , and chief Architect",
            "Chief programmers and chief Architect",
            "Domain experts and developer manager"
        ],
        answer: "Chief programmers and chief Architect"
    },
    { // Q18 (Original Q20)
        question: "Which of the following is delivered at the end of the Sprint?",
        options: [
            "A document containing test cases for the current sprint",
            "An architectural design of the solution",
            "An increment of done software",
            "Wireframes designs for User Interface"
        ],
        answer: "An increment of done software"
    },
    { // Q19 (Original Q21)
        question: "Product Backlog should be ordered on the basis of?",
        options: [
            "Value of the items being delivered",
            "The complexity of the items being delivered",
            "Size of the items being delivered",
            "The risk associated with the items",
            "Based on the Scrum Team choice" // Added option e
        ],
        answer: "Value of the items being delivered"
    },
    { // Q20 (Original Q22)
        question: "Who is responsible to measure the Project’s performance?",
        options: [
            "The Scrum Master",
            "The Delivery Manager",
            "The Product Owner",
            "The Development Team",
            "The Scrum Team" // Added option e
        ],
        answer: "The Product Owner"
    },
    { // Q21 (Original Q23)
        question: "In Scrum Method, what does a BurnDown Chart display?",
        options: [
            "Project Progress",
            "Amount of remaining work with respect to time",
            "The velocity of the team",
            "The capacity of the team members",
            "How many more items can be picked up in a Sprint" // Added option e
        ],
        answer: "Amount of remaining work with respect to time"
    },
    { // Q22 (Original Q24)
        question: "Select the option that suits the Manifesto for Agile Software Development",
        options: [
            "Individuals and interactions",
            "Working software",
            "Customer collaboration",
            "All of the mentioned"
        ],
        answer: "All of the mentioned"
    },
    { // Q23 (Original Q25)
        question: "Agile Software Development is based on",
        options: [
            "Incremental Development",
            "Iterative Development",
            "Linear Development",
            "Both Incremental and Iterative Development"
        ],
        answer: "Both Incremental and Iterative Development"
    },
    { // Q24 (Original Q26)
        question: "How many phases are there in Scrum ?",
        options: [
            "Two",
            "Three",
            "Four",
            "Scrum is an agile method which means it does not have phases"
        ],
        answer: "Three" // Note: Common interpretation (Sprint Planning, Sprint, Sprint Review/Retrospective) although 'phases' can be debated. Going with the source's likely intent.
    },
    { // Q25 (Original Q27)
        question: "Which of the following does not apply to agility to a software process?",
        options: [
            "Uses incremental product delivery strategy",
            "Only essential work products are produced",
            "Eliminate the use of project planning and testing",
            "All of the mentioned"
        ],
        answer: "Eliminate the use of project planning and testing"
    },
    { // Q26 (Original Q28)
        question: "In Agile methodologies, software maintenance includes:",
        options: [
            "Error corrections",
            "Enhancements of capabilities",
            "Deletion of obsolete capabilities",
            "All of the mentioned"
        ],
        answer: "All of the mentioned"
    },
    { // Q27 (Original Q29)
        question: "Which four framework activities are found in the Extreme Programming(XP) ?",
        options: [
            "analysis, design, coding, testing",
            "planning, analysis, design, coding",
            "planning, design, coding, testing",
            "planning, analysis, coding, testing"
        ],
        answer: "planning, design, coding, testing"
    },
    { // Q28 (Original Q30 - Duplicate of Q25)
        question: "Agile Software Development is based on",
        options: [
            "Incremental Development",
            "Iterative Development",
            "Linear Development",
            "Both Incremental and Iterative Development"
        ],
        answer: "Both Incremental and Iterative Development"
    },
    { // Q29 (Original Q31)
        question: "Which of the following is the correct pairing according to the Agile Manifesto statement of values?",
        options: [
            "Individuals and Interactions over Working Software",
            "Individuals and Interactions over Contract Negotiation",
            "Individuals and Interactions over Processes and Tools",
            "Individuals and Interactions over Customer Collaboration"
        ],
        answer: "Individuals and Interactions over Processes and Tools"
    },
    { // Q30 (Original Q32)
        question: "In an Agile team, who is responsible for quality?",
        options: [
            "The developers",
            "The testers",
            "The product owner",
            "The entire team"
        ],
        answer: "The entire team"
    },
    { // Q31 (Original Q33)
        question: "In Scrum method, what is the purpose of a daily stand-up meeting?",
        options: [
            "It provides team building by encouraging everyone to stand up together for a quick exercise session",
            "It provides a way for each member to communicate progress and problems",
            "It forces the team to be co-located",
            "It helps determine where overtime will be required to keep the project on schedule"
        ],
        answer: "It provides a way for each member to communicate progress and problems"
    },
    { // Q32 (Original Q34)
        question: "In which Agile method is simplicity one of the stated values used to guide development?",
        options: [
            "XP",
            "FDD",
            "Scrum",
            "DSDM"
        ],
        answer: "XP"
    },
    { // Q33 (Original Q35)
        question: "In an Agile project, when is software first expected to be delivered that will provide value to the customer?",
        options: [
            "At the end of the project",
            "At the end of a release",
            "At the end of an iteration",
            "At the end of an epic"
        ],
        answer: "At the end of an iteration"
    },
    { // Q34 (Original Q36)
        question: "What does it mean when a feature is classified as “done”?",
        options: [
            "It has been developed",
            "It has been developed and integrated",
            "It has been developed, integrated and tested",
            "It has been developed, integrated, tested and released to production"
        ],
        answer: "It has been developed, integrated and tested"
    },
    { // Q35 (Original Q37)
        question: "What does a task board show?",
        options: [
            "Tasks completed against the budget spent",
            "Return on investment",
            "The progression of the tasks selected for an iteration",
            "The number of tasks still to be done against the time allocated"
        ],
        answer: "The progression of the tasks selected for an iteration"
    },
    { // Q36 (Original Q38)
        question: "Which of the following is a tester skill that is more important in an Agile environment than in a sequential lifecycle environment?",
        options: [
            "Collaboration",
            "Manual testing",
            "Performance testing",
            "Test case preparation"
        ],
        answer: "Collaboration"
    },
    { // Q37 (Original Q39)
        question: "Which one of the following statements is correct regarding acceptance of any deliverables on an Agile Project?",
        options: [
            "The team should allow only senior managers to sign off deliverables",
            "The team should get acceptance of project deliverables from the appropriate stakeholders at least at the end of every iteration.",
            "The team should get acceptance of project deliverables from the users during a UAT phase at the end of the project",
            "Acceptance of any particular deliverable on the project is gained from all stakeholders at the same time."
        ],
        answer: "The team should get acceptance of project deliverables from the appropriate stakeholders at least at the end of every iteration."
    },
    { // Q38 (Original Q40)
        question: "In Scrum method, which one of the following is an important feature of the daily stand-up meeting?",
        options: [
            "Everyone is expected to stand for the whole time, to keep the meeting short",
            "The meeting must be kept short and well-structured",
            "The meeting should ensure that it is clear to all which team members are not performing",
            "No-one is allowed to leave the stand-up meeting until all problems raised have been solved"
        ],
        answer: "The meeting must be kept short and well-structured"
    },
    { // Q39 (Original Q41 - Duplicate of Q7)
        question: "In the popular prioritization technique called “MoSCoW”, the “M” stands for ...",
        options: [
            "May have", // Option a different from Q7 in source
            "Major",
            "Must Have",
            "Mandatory"
        ],
        answer: "Must Have"
    },
    { // Q40 (Original Q42)
        question: "The working culture of an Agile team is …",
        options: [
            "Collective",
            "Collaborative",
            "Connective",
            "Contemplative"
        ],
        answer: "Collaborative"
    },
    { // Q41 (Original Q43)
        question: "The Agile Manifesto states the following values:",
        options: [
            "People are more important than contracts",
            "Working software should have priority over comprehensive documentation",
            "Plans should have priority over ability to respond",
            "Contracts should be negotiated which allow control over the people"
        ],
        answer: "Working software should have priority over comprehensive documentation"
    },
    { // Q42 (Original Q44)
        question: "Which of the following are attributes of an Agile team?",
        options: [
            "Courage to change and adapt",
            "Trust of fellow team members to do the work",
            "Responsiveness to change",
            "All of these"
        ],
        answer: "All of these"
    },
    { // Q43 (Original Q45)
        question: "A burn-down chart shows",
        options: [
            "The energy level and velocity of the team",
            "The remaining work (effort, points) to complete before the iteration (timebox) end",
            "The number of hours worked by each team member during the iteration (timebox)",
            "The rate of spending of the budget for a project"
        ],
        answer: "The remaining work (effort, points) to complete before the iteration (timebox) end"
    },
     { // Q44 (Original Q46)
        question: "What is Fuzzy Logic?",
        options: [
            "a method of reasoning that resembles human reasoning",
            "a method of question that resembles human answer",
            "a method of giving answer that resembles human answer.",
            "None of the Above"
        ],
        answer: "a method of reasoning that resembles human reasoning"
    },
     { // Q45 (Original Q47)
        question: "COCOMO-II estimation model is based on",
        options: [
            "Complex approach",
            "Algorithm approach",
            "Bottom up approach",
            "Top down approach"
        ],
        answer: "Algorithm approach"
    },
     { // Q46 (Original Q48)
        question: "Which of the following techniques is used for estimating effort?",
        options: [
            "Role playing",
            "Planning poker",
            "Observation",
            "None of the above"
        ],
        answer: "Planning poker"
    },
     { // Q47 (Original Q49)
        question: "What is the first step of requirement elicitation ?",
        options: [
            "Identifying Stakeholder",
            "Listing out Requirements",
            "Requirements Gathering",
            "All of the mentioned"
        ],
        answer: "Identifying Stakeholder"
    },
     { // Q48 (Original Q50)
        question: "Why is Requirements Elicitation a difficult task ?",
        options: [
            "Problem of scope",
            "Problem of understanding",
            "Problem of volatility",
            "All of the mentioned"
        ],
        answer: "All of the mentioned"
    },
    { // Q49 (Original Q51)
        question: "What is the primary advantage of effort estimation techniques in agile projects?",
        options: [
            "Focus on architectural planning",
            "Ability to handle unpredictable changes",
            "Use of traditional methods only",
            "Reduction of the number of teams involved"
        ],
        answer: "Ability to handle unpredictable changes"
    },
    { // Q50 (Original Q52)
        question: "Which of the following methods is considered an effort estimation technique?",
        options: [
            "COCOMO II Model",
            "Traditional programming model",
            "Waterfall model",
            "Architectural design model"
        ],
        answer: "COCOMO II Model"
    },
    { // Q51 (Original Q53)
        question: "What method is commonly used for estimating story points?",
        options: [
            "Fibonacci method",
            "Rapid analysis method",
            "Scrum method",
            "Architectural design method"
        ],
        answer: "Fibonacci method"
    },
    { // Q52 (Original Q54)
        question: "Which of the following is NOT a characteristic of agile software development?",
        options: [
            "Incremental delivery",
            "Fixed scope",
            "Customer collaboration",
            "Flexibility to change"
        ],
        answer: "Fixed scope"
    },
    { // Q53 (Original Q55)
        question: "What is the primary purpose of the COCOMO II model?",
        options: [
            "To measure code quality",
            "To estimate software project costs and duration",
            "To manage project teams",
            "To analyze customer requirements"
        ],
        answer: "To estimate software project costs and duration"
    },
    { // Q54 (Original Q56)
        question: "What does the term \"velocity\" refer to in agile projects?",
        options: [
            "The speed of the development team",
            "The amount of work completed in a sprint",
            "The rate of change in project requirements",
            "The efficiency of coding practices"
        ],
        answer: "The amount of work completed in a sprint"
    },
    { // Q55 (Original Q57)
        question: "Which methodology is NOT considered an agile method?",
        options: [
            "Extreme Programming (XP)",
            "Scrum",
            "Waterfall",
            "Feature-Driven Development (FDD)"
        ],
        answer: "Waterfall"
    },
    { // Q56 (Original Q58)
        question: "What is a key characteristic of agile software development?",
        options: [
            "Linear development process",
            "Fixed requirements",
            "Iterative and incremental approach",
            "Extensive documentation"
        ],
        answer: "Iterative and incremental approach"
    },
    { // Q57 (Original Q59)
        question: "Which of the following models is specifically designed to handle uncertainty in software development?",
        options: [
            "Waterfall model",
            "V-Model",
            "Agile model",
            "Spiral model"
        ],
        answer: "Agile model" // Note: Spiral also handles uncertainty via risk analysis, but Agile is more focused on adapting to changing requirements uncertainty. Given the context, Agile is the better fit.
    },
    { // Q58 (Original Q60)
        question: "What does \"defuzzification\" refer to in fuzzy logic?",
        options: [
            "Converting crisp outputs to fuzzy inputs",
            "Converting fuzzy outputs to crisp values",
            "Analyzing fuzzy data",
            "None of the above"
        ],
        answer: "Converting fuzzy outputs to crisp values"
    },

    // --- True/False Questions ---
    { // TF Q1
        question: "Agile software engineering demonstrated to deliver successful systems quickly.",
        options: ["True", "False"],
        answer: "True"
    },
    { // TF Q2
        question: "Software project estimation can never be an exact science, but a combination of good historical data and systematic techniques can improve estimation accuracy.",
        options: ["True", "False"],
        answer: "True"
    },
    { // TF Q3
        question: "Agility is defined as the ability of a project team to respond rapidly to a change.",
        options: ["True", "False"],
        answer: "False" // Note: Agility is broader, including effectiveness, adaptation, etc. The file's answer 'False' is kept.
    },
    { // TF Q4
        question: "In agile development it is more important to build software that meets the customers’ needs today than worry about features that might be needed in the future.",
        options: ["True", "False"],
        answer: "True"
    },
    { // TF Q5
        question: "Incremental development in Extreme Programming (XP) is supported through a system release once every month.",
        options: ["True", "False"],
        answer: "False" // XP promotes frequent, often much shorter, release cycles.
    },
    { // TF Q6
        question: "In XP, as soon as the work on a task is complete, it is integrated into the whole system.",
        options: ["True", "False"],
        answer: "True" // Continuous Integration is a key XP practice.
    },
    { // TF Q7
        question: "GQM approach is a method used to identify important and meaningful metrics?",
        options: ["True", "False"],
        answer: "True"
    },
    { // TF Q8
        question: "“GQM is a hierarchical model that follows a top-down approach where first the goals are specified”, This statement is …",
        options: ["True", "False"],
        answer: "True"
    },
    { // TF Q9
        question: "Cost and effort estimation of a software uses only one forms of decomposition, either decomposition of the problem or decomposition of the process.",
        options: ["True", "False"],
        answer: "False" // Often uses both.
    },
    { // TF Q10
        question: "In the agile development process taught in class, the development team estimates each user story and decides the priority for each story.",
        options: ["True", "False"],
        answer: "False" // Product Owner typically prioritizes. Team estimates.
    },
    { // TF Q11
        question: "In the Exploration phase, the team issues a product for the user's work environment.",
        options: ["True", "False"],
        answer: "False" // Exploration is usually about understanding; Release/Deployment puts it in the user environment.
    },
    { // TF Q12
        question: "RE refers to the process of defining, documenting, and maintaining requirements in the engineering design process.",
        options: ["True", "False"],
        answer: "True" // RE = Requirements Engineering
    },
    { // TF Q13
        question: "Requirements elicitation is a cyclic process",
        options: ["True", "False"],
        answer: "True"
    },
    { // TF Q14
        question: "Functional requirements capture the intended behavior of the system.",
        options: ["True", "False"],
        answer: "True"
    },
    { // TF Q15
        question: "SRS is ambiguous when every fixed requirement has only one interpretation.",
        options: ["True", "False"],
        answer: "False" // That would be unambiguous.
    },
    { // TF Q16
        question: "In the RE, the Backward Traceability is depends upon each element in the SRS having a unique name or reference number.",
        options: ["True", "False"],
        answer: "False" // This describes *Forward* Traceability (from requirement to design/code/test). Backward is from test/code back to requirement. Unique ID helps both. The file's answer 'False' is kept.
    },
    { // TF Q17
        question: "In testing phase, the agile team examines the product's performance and looks for the bug.",
        options: ["True", "False"],
        answer: "False" // Testing is continuous in Agile, not a separate phase at the end typically. The file's answer 'False' is kept.
    },
    { // TF Q18
        question: "The team size only is very important factor for scaling-up agile project",
        options: ["True", "False"],
        answer: "False" // Many factors are important (dependencies, architecture, organizational structure etc).
    },
    { // TF Q19
        question: "According to a proposed model for applying agile approach on E-government projects, the E-government architecture includes Infrastructure Layer and Access layer only.",
        options: ["True", "False"],
        answer: "False" // Typically includes Application, Data layers too.
    },
    { // TF Q20
        question: "SPM method enables customers to flexibly define requirements according to a pre- defined procedure.",
        options: ["True", "False"],
        answer: "True" // Assuming SPM refers to a specific method where this holds.
    },
    { // TF Q21
        question: "Agile requirement refinery includes vision stage and concept stage only.",
        options: ["True", "False"],
        answer: "False" // Likely includes more stages like elaboration, etc.
    },
    { // TF Q22
        question: "DAT is a Dimensional Analytical Tools which include; Scope, Agility, Agile value, and Elicitation stage.",
        options: ["True", "False"],
        answer: "False" // Assuming 'Elicitation stage' is not typically considered a dimension in such tools.
    },
    { // TF Q23
        question: "The agility dimension examines the support of agile values characterization in different practice levels.",
        options: ["True", "False"],
        answer: "True"
    },
    { // TF Q24
        question: "Estimated hours are the planned hours that determined in the requirements refinery in SPM.",
        options: ["True", "False"],
        answer: "True" // Based on the description in TF Q20.
    },
    { // TF Q25
        question: "Pair Programming is a programming technique that needs two programmers to work together to achieve a development task while sharing one computer.",
        options: ["True", "False"],
        answer: "True"
    },
    { // TF Q26
        question: "Fuzzification is the process which refers to the transform of fuzzy output into crisp output.",
        options: ["True", "False"],
        answer: "False" // That's Defuzzification. Fuzzification is crisp input to fuzzy set.
    },
    { // TF Q27
        question: "In 4-DAT approach, the scope dimension checks the support of a project size and team size only.",
        options: ["True", "False"],
        answer: "False" // Scope dimension likely includes more, like feature complexity, distribution etc.
    },
    { // TF Q28
        question: "Agile methodologies prioritize customer satisfaction through early and continuous delivery of valuable software.",
        options: ["True", "False"],
        answer: "True"
    },
    { // TF Q29
        question: "The COCOMO II model does not consider the team’s experience as a cost driver.",
        options: ["True", "False"],
        answer: "False" // It does (Personnel Capability factors).
    },
    { // TF Q30
        question: "Story points are used to measure the complexity and size of user stories in agile projects.",
        options: ["True", "False"],
        answer: "True" // Relative measure of effort/complexity/size.
    },
    { // TF Q31
        question: "The fuzzy logic approach in estimation only works well with large datasets.",
        options: ["True", "False"],
        answer: "False" // Can work with smaller datasets and expert knowledge too.
    },
    { // TF Q32
        question: "Continuous testing is essential in large-scale agile projects to ensure quality.",
        options: ["True", "False"],
        answer: "True"
    },
    { // TF Q33
        question: "Agile methodologies allow for fixed and unchanging requirements throughout the project.",
        options: ["True", "False"],
        answer: "False" // They embrace change.
    },
    { // TF Q34
        question: "The COCOMO model is widely used for software cost estimation.",
        options: ["True", "False"],
        answer: "True"
    },
    { // TF Q35
        question: "Agile teams typically work in long development cycles.",
        options: ["True", "False"],
        answer: "False" // They use short iterations/sprints.
    },
    { // TF Q36
        question: "Defuzzification is a key process in converting fuzzy outputs into actionable estimates.",
        options: ["True", "False"],
        answer: "True"
    },
    { // TF Q37
        question: "The story points method is based on a linear estimation scale.",
        options: ["True", "False"],
        answer: "False" // Often uses non-linear scales like Fibonacci.
    },
    // --- Questions added from New_Text_Document[1].txt ---
    { // SQA Q1
        question: "Some Quality requirements are .............. in the same sense as functional requirements. If the system does not meet them, it is useless.",
        options: ["optional", "Recommended", "mandatory", "composition"],
        answer: "mandatory"
    },
    { // SQA Q2
        question: "Classification of quality factors according to ISO 9126 includes ...................... as an example.",
        options: ["Maintainability", "accountability", "sustainability", "profitability"],
        answer: "Maintainability"
    },
    { // SQA Q3
        question: "The Content of SQA Plan according to IEEE Std 730 may include ........................",
        options: ["All the above", "Code control", "Scope Control", "Reference document", "Reference document and Scope control"],
        answer: "All the above"
    },
    { // SQA Q4
        question: "SQA group is independent of .........................",
        options: ["The project manager", "The project’s software engineering group", "The other software-relate groups", "All the above"],
        answer: "All the above"
    },
    { // SQA Q5
        question: "A high-quality product Satisfies clearly stated .........................",
        options: ["reviews", "project manager view", "errors", "requirements"],
        answer: "requirements"
    },
    { // SQA Q6
        question: "A ................ sets out the desired product qualities and how these are assessed and defines the most significant quality attributes.",
        options: ["Nothing", "Quality plan", "Quality review", "Quality requirements"],
        answer: "Quality plan"
    },
    // Note: Duplicate "SQA group is independent of..." question from source skipped
    { // SQA Q8
        question: "In the quality control the process control is carried out .............",
        options: ["before production", "During production", "All of the above", "After production control"],
        answer: "During production"
    },
    { // SQA Q9
        question: "Select which option is not true about software quality assurance ........",
        options: ["Audits and reviews to be performed by the team", "Evaluations to be performed", "Amount of technical work to be performed", "Nothing"],
        answer: "Amount of technical work to be performed"
    },
    { // SQA Q10
        question: "Select which one is not appraisal in Software Quality Assurance?",
        options: ["Maintenance", "Inter-process inspection", "Testing", "Quality Planning"],
        answer: "Quality Planning"
    },
    { // SQA Q11
        question: "............... are a framework for quality assurance processes",
        options: ["Quality control rules", "Software quality standards", "Risk management rules"],
        answer: "Software quality standards"
    },
     { // SQA Q12
        question: "The bottom-up design includes ........",
        options: ["Analyzing the processes as systems", "Identifying the processes", "All of these"],
        answer: "All of these"
    },
    { // SQA Q13
        question: "Beginner users shall adding new record to database in 5 minutes. This statement refers to ........ requirements",
        options: ["Usability", "Capacity", "Performance"],
        answer: "Usability"
    },
    { // SQA Q14 (TF)
        question: "Software quality plan contain quality goals to be achieved, expected risks and risk management.",
        options: ["True", "False"],
        answer: "True"
    },
    { // SQA Q15 (TF)
        question: "According to IEEE, the standard can be an object or measure of comparison that defines or represents the magnitude of a unit.",
        options: ["True", "False"],
        answer: "True"
    },
    { // SQA Q16 (TF)
        question: "Software quality control activity includes mentoring how to conduct standard processes, such as quality reviews.",
        options: ["True", "False"],
        answer: "True"
    },
    { // SQA Q17
        question: "In ONLINE SHOPPING systems, the process of searching for a specific item should take at most 10 seconds. This statement refers to ........ requirements.",
        options: ["Capacity", "Performance", "Usability", "Accuracy"],
        answer: "Performance"
    },
    { // SQA Q18
        question: "In a Library system, the borrower screen shall be able to show at most 10 borrowed books per day. This statement refers to ........ requirements",
        options: ["Capacity", "Accuracy", "Performance", "Usability"],
        answer: "Capacity"
    },
    { // SQA Q19
        question: "In the reservation systems, bookings shall be available at least 3 months ahead. This statement refers to ........ requirements",
        options: ["Capacity", "Performance", "Usability", "Accuracy"],
        answer: "Performance"
    },
     // Note: Duplicate "Some Quality requirements are..." question from source skipped
    { // SQA Q21 (TF)
        question: "Quality management provides an independent check on the software development process.",
        options: ["True", "False"],
        answer: "True"
    },
    { // SQA Q22 (TF)
        question: "Software quality plan activity includes verifying and evaluating to improve the use of methods, procedures, and adopted software tools.",
        options: ["True", "False"],
        answer: "False"
    },
    { // SQA Q23 (TF)
        question: "The software specification should reflect the characteristics of the product that the auditor wants",
        options: ["True", "False"],
        answer: "False"
    },
    { // SQA Q24
        question: "The ........ defines the quality requirements of software and describes how these are to be assessed.",
        options: ["Quality Plan", "Quality Control", "Quality Management"],
        answer: "Quality Plan"
    },
    { // SQA Q25 (TF)
        question: "Quality reviews involve a group of people examining a software process, system, or its associated documentation to discover potential problems.",
        options: ["True", "False"],
        answer: "True"
    },
    { // SQA Q26
        question: ".......... are a primary objective of formal technical reviews to find during the process so that after the release of the software they do not become the defect.",
        options: ["Faults", "Failures", "Errors"],
        answer: "Errors"
    },
     { // SQA Q27 (TF)
        question: "System engineering standard is particular application domain develop sophisticated interactions between system and software engineering",
        options: ["True", "False"],
        answer: "True"
    },
    { // SQA Q28 (TF)
        question: "The reviewing is an independent examination process which provides an independent evaluation of conformance of software products and processes to applicable regulations.",
        options: ["True", "False"],
        answer: "False"
    },
    { // SQA Q29 (TF)
        question: "A process allows the same quality to be replicated from product to product often by the use of standards.",
        options: ["True", "False"],
        answer: "True"
    },
    { // SQA Q30 (TF)
        question: "The software quality control concerns with how general principles of good management are applied to specific areas of software engineering",
        options: ["True", "False"],
        answer: "False"
    }
];
