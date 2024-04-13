const LocalizedStrings_en = {

/* Welcome Page */
"welcome_header": "Welcome to my Personal Portfolio!",
"welcome_button": "Click here to begin!",

/* Navbar */
"projects": "Projects",
"technologies": "Technologies",
"about": "About",

/*  Info Section */
"info_start": "Hello, my name is",
"info_name": "Jakub Rutkowski",
"info_stack": "Software Engineer / Full Stack Developer",
"info_description": "Besides from creating websites, I'm actively tinkering with <strong>binary stuff</strong> and <strong>reverse engineering</strong>, learning <strong>Unity</strong>, creating content for games and <strong>developing new skills</strong>.",

/* About Me Section */
"about_me": "About Me",

"about_header": "Hey there!",
"about_text": "Thanks for visiting my portfolio!",
"about_text_smaller": "If I were to say something about myself, I'd say I'm <strong>very</strong> passionate about creating things from the ground up, especially when coding. I'm currently looking for a team of people whom I'll be able to exchange knowledge and take my skills to a new level!",

/*  Footer */
"call": "CALL",
"mail": "MAIL",
"linkedin": "LINKEDIN",

/* Technologies Section (Skills) */
"other": "Other",

"frontend_js": "Very good and practical knowledge of JavaScript",
"frontend_react": "Entry level React.js",

"backend_csharp": "Good knowledge of C#:",
"backend_db": "Basic experience with:",

"other_langs": "Experience with C++ and Lua",

/* Project Card */
"technologies_used": "Technologies used",

"preview": "Preview",
"details": "Details",
"code": "Code",

/* Project Card Details */
"modal_details": "Details",
"modal_goals": "Project goals",
"modal_difficulties": "Difficulties",
"modal_stack": "Stack explained",
"modal_learned": "What I've learned",

/* Cafe Template */
"cafe_title": "Cafe Template",
"cafe_description": "Cafe website template created using <strong>ASP.NET Core 5</strong> for backend and <strong>SQLite</strong> database for portability and ease of use. Built with <strong>mobile-first design</strong> in mind.",

"cafe_goals": "Main goal was to create a good looking and standing out cafe website with user friendly CMS system. Secondary goal was to learn Bootstrap by practice.",
"cafe_difficulties": "Designing layout. I wanted it to be very elegant and simple at the same time and I won't lie, it was hard.",
"cafe_stack": "This site's using SQLite as database because of it's simplicity and portability. It works well both on Windows and Linux.",
"cafe_learned": "Strong foundation of ASP.NET Core basics like <strong>routing</strong> (conventional, attribute), <strong>dependency injection</strong>, handling <strong>HTTP requests</strong> and identity <strong>authentication</strong>. Almost entire layout was created while learning <strong>Bootstrap</strong>.",

/* Reservation System */
"reservation_title": "Reservation System",
"reservation_description": "Simple <strong>reservation system</strong> with <strong>Email integration</strong>. Allows <strong>creating, confirming and deleting</strong> reservations by links sent on Email.",

"reservation_goals": "I wanted to create <strong>simple</strong> and <strong>stable</strong> booking system that relies on <strong>managing reservations</strong> by Email and has it's own <strong>protective measures</strong> (overlap checks, fake data checks).",
"reservation_difficulties": "Creating systems that protect app from <strong>fake data</strong>, <strong>wrong input</strong>, <strong>database exceptions</strong> and some other things.",
"reservation_stack": "I'm using <strong>SQLite</strong> because it's so <strong>easy</strong> and <strong>fast</strong> to setup. For sending mails, I'm using <strong>MailKit</strong>.",
"reservation_learned": "How to <strong>send mails</strong>, handle dates inside database and how to setup multiple .NET Core apps on a single server using <strong>NGINX</strong>.",

/* Shopping App */
"shopping_title": "Shopping App",
"shopping_description": "Simple <strong>shopping app</strong> with <strong>cart system</strong>, <strong>purchase history</strong>, <strong>account system</strong> and multiple <strong>background services</strong>.",

"shopping_goals": "I had to learn how to work with <strong>identity</strong>, <strong>session</strong> and <strong>background services</strong>, so I decided to create a simple shopping system.",
"shopping_difficulties": "Overall the app was fairly easy to make and I didn't encounter any major problems.",
"shopping_stack": "I'm using <strong>SQLite</strong> as the database. Mails are sent with use of <strong>MailKit</strong>.",
"shopping_learned": "How to work with <strong>session</strong>, <strong>identity</strong>, <strong>background services</strong> and <strong>timers</strong>.",

/* CoD Map Converter */
"converter_title": "CoD (1,2) Map Converter",
"converter_description": "Converts <strong>.bsp</strong> and <strong>.d3dbsp</strong> files to .obj wavefront format and exports textures used by map from the game files.",

"converter_goals": "It was always a little dream of mine to port old games' maps to other platforms, such as Unity. So I've built a little tool that does just that.",
"converter_difficulties": "Creating a small lib that converts unmanaged memory to struct objects, reverse engineering .bsp format structure because only small parts are documented.",
"converter_stack": "I initially tried to write it in C++, but C# proved to be a lot simpler in building such app.",
"converter_learned": "How to <strong>read</strong>, <strong>write</strong> and <strong>reverse engineer</strong> a binary file format, convert <strong>unmanaged memory</strong> to <strong>managed objects</strong>, read <strong>.zip</strong> files and extract data from them, how to create and handle <strong>configuration files</strong>.",

/* CoD Bomber */
"bomber_title": "CoD: UO Bomber",
"bomber_description": "Made for <strong>Garry's Mod</strong>. This is a recreation of the mission from <strong>Call of Duty: United Offensive</strong>, with almost all the features from the original game and a few new additions.",

"bomber_goals": "Lots of people are nostalgic about old games, I'm one of them so I decided to give them a chance to relive their memories again, this time in much higher resolution! It resulted in a success of <strong>over 40,000</strong> downloads and <strong>18,000</strong> active players.",
"bomber_difficulties": "Re-creating the original's game feeling and immersing the player. It heavily relies on AI that had to be believeable and give the player a challenge.",
"bomber_stack": "This is a mod for Garry's Mod, so using Lua API was the only possibility.",
"bomber_learned": "How to convert content from one source to another, how to lay out a <strong>flexible</strong> and <strong>scalable project</strong>, basics of <strong>P2P networking</strong>, learned to listen to community's feedback and use it to further expand the project.",

/* ECS Game Engine */
"ecs_title": "ECS Game Engine",
"ecs_description": "Simple vanilla <strong>JavaScript ES6 Framework</strong> for building games with <strong>Entity Component System</strong>. Particle interactions on this site were made with it.",

"ecs_goals": "I wanted to create a similar scripting environment that Unity provides for creating games and effects on websites.",
"ecs_difficulties": "Making it a simple 'drop and use' solution. Be it an advanced game or simple page effect, it shouldn't conflict with other scripts and DOM elements.",
"ecs_stack": "Vanilla JavaScript and no external libs required. As simple as that.",
"ecs_learned": "Strong understanding of JavaScript <strong>Event Loop</strong>, how to handle complex <strong>user input</strong> and <strong>rendering</strong> tasks (frame independent animations, AABB collisions, etc).",
}