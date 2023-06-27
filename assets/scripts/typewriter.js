var app = document.getElementById('my-description');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:18
});

typewriter.typeString('Hello dearest friend!')
    .pauseFor(1250)
    .deleteAll(18)
    .pauseFor(300)
    .typeString('Welcome to my website!')
    .pauseFor(1250)
    .deleteAll(18)
    .pauseFor(300)
    .typeString("My name is Thien.")
    .pauseFor(1250)
    .deleteAll(18)
    .pauseFor(300)
    .typeString("Earned a B.S. in Computer Science on December, 2021.")
    .pauseFor(1250)
    .deleteAll(18)
    .pauseFor(300)
    .typeString("Graduated from University of New Orleans - #PrivateerForLife!")
    .pauseFor(1250)
    .deleteAll(18)
    .pauseFor(300)
    .typeString("I love utilizing technology to solve problems.")
    .pauseFor(1250)
    .deleteAll(18)
    .pauseFor(300)
    .typeString("I also enjoy public speaking and gumbo!")
    .pauseFor(1250)
    .deleteAll(18)
    .pauseFor(300)
    .typeString("Thanks for visiting!")
    .pauseFor(1250)
    .deleteAll(18)
    .start();