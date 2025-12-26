1.  start form your goal:
    1. Why am i making this project ?
       : Odin Project
    2. Who this project is for ?
       : Odin Solution Viewer
    3. What is going to make it valuable ?
       : Fast and Functionable
    - Write them down and think on them not just surface level problems
2.  Write down what the users must be able to do with the project
    1. features
       : User can click card
       : USer losses if they click the same card twice
       : User see there current and best score
       : Auto Restart after lossing
    2. guardrails
       : Prevent Double Click
       : Ensure images are unique per click or shuffle
    3. don't overthink with tech stack etc only what features that is needed
    4. user centric approach
3.  Define the data models

    1. don't think about the databases
    2. think about the data what you need and how you want to handle it
    3. draw the relationships

       : what card has been click
       : current Score
       : Best Score

       cards: [{id, image, clicked}]
       currentScore: Integer
       BestScore: Integer

4.  Nail an MVP

    1. Look back on all the features above and strip it to the barebones and what is needed to make it function : absolute minimum version
       Render cards
       Track clicks
       Detect repeat click
       Update score
       Shuffle cards

5.  Wireframe the project for the most basic user
    1. think more about UX than UI
    2. paper is cheap but code is expensive
       on the excalidraw
6.  Understand the future of the project:
    1. Do you plan to add more features in the future
       : No
    2. Do you plan to work on this for months or just a few days ?
       : Just few days
       1. don't over or under engineer
7.  How is you project going to be presented
    1. is it a script or a mobile app or a website or a extension
       : Website
    2. understand how the users will be interacting and base your architecture on that
8.  Tech Stack :
    1. Use the points above to choose the tech stack
    2. don't let the tech stack define the project
    3. best tool for the project not the other way round
    4. Can you deploy this ?
       1. is the tech stack you are choosing viable for deployment and easy to do so so that you don't spend your time more deploying that building
9.  The development process

    1. Bare bones
       1. Folder structure
       2. naming conventions
       3. dev environments
       4. version control
    2. setting up the database and creating the data models
    3. backend routes :
       1. API endpoints
       2. test them
    4. Frontend
    5. Project integration and version
    6. CI/CD
    7. test at all

    Examples
    //HOOKS
    const auth = useAuth()
    useState
    useRef

    //EFFECTS
    useEffect..

    //HELPERS
    const calculateCount () => {}

    //EVENT HANDLER
    const handleClick = () => {}

    //EARLY RETURNS

         if(!pagedata) return div loading div

    // RENDER LOGIC
    const buttonName = loading ? loading.. : "ClickName


// PROBLEM
// HOW DO I MAKE SURE FOR ITS CARDS ON THE BOARD ITS A UNIQUE CARD 