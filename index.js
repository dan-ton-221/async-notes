/*Asynchronous programming allows your program to start long running task while being 
responsive to other events.

Rather than waiting for that task to finish and then being presented with the result.

examples of asynchronous functions:

*HTTP requests using fetch()

*Accessing camera or microphone using getUserMedia()

*User selecting file using showOpenFilePicker()


Problem with long running synchronous functions is that while the main function is running
the program is unresponsive.

Event handlers are a form of asynchronous programming.

An event handler is a type of callback, a callback is a function that is passed into another.

But nesting callbacks into callbacks too much can be hard to read or debug, resulting in 
"callback hell"

Most modern asynchronous APIs use the foundation of the "Promise".