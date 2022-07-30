var app = document.getElementById('my-description');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('Hello dearest friend!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('Welcome to my website!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("My name is Thien.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Earned a B.S. in Computer Science on December, 2021.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Graduated from University of New Orleans - #PrivateerForLife!")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I love utilizing technology to solve problems.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I also enjoy public speaking and gumbo!")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Thanks for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .start();