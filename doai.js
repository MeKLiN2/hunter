// Your DoAi function and related code here
function DoAi(cmd_arg) {
    // Your implementation
    console.log('DoAi function invoked with argument:', cmd_arg);
}

// Example: Invoke DoAi when the extension button is clicked
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('doaiButton').addEventListener('click', function () {
        DoAi('Example command argument');
    });
});