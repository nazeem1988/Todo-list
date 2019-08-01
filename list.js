var todos = ["hello"];
var input = prompt("What would you like to do?")
while (input !== "quit") {
    if (input === "list") {
        console.log("**********");
        todos.forEach(function(todo, i) {
            console.log(i + ": " + todo); 
        });
        console.log("**********");
    } else if (input === "new") {
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log("Added todo")
    } else if (input === "delete") {
        var index = prompt("Enter index of todos");
        todos.splice(index, 1);
        console.log("deleted todo")
    }
    input = prompt("What would you like to do?")
}
console.log("OK, You quit");
