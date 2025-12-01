
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (!form) return;

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const messageBox = document.createElement("p");
    messageBox.id = "form-message";
    messageBox.style.marginTop = "10px";
    messageBox.style.fontWeight = "bold";
    form.appendChild(messageBox);

    const showMessage = (text, color = "red") => {
        messageBox.textContent = text;
        messageBox.style.color = color;
    };

    // Simple password validation
    const validatePassword = (pwd) => {
        if (!pwd || pwd.length < 8)
            return "Password must be at least 8 characters.";
        if (!/[A-Z]/.test(pwd))
            return "Password must contain at least one uppercase letter.";
        if (!/[0-9]/.test(pwd))
            return "Password must contain at least one number.";
        return null;
    };

    const loadUsers = () => JSON.parse(localStorage.getItem("users") || "{}");
    const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

    // Detect if it's a Sign Up page (has email field) or Login page (doesn't)
    const isSignup = email !== null;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const userVal = username.value.trim();
        const passVal = password.value.trim();
        const emailVal = email ? email.value.trim().toLowerCase() : null;

        if (!userVal) return showMessage("Username is required.");
        if (isSignup && !emailVal) return showMessage("Email is required.");
        if (!passVal) return showMessage("Password is required.");

        if (isSignup) {
            const users = loadUsers();
            if (users[emailVal]) return showMessage("Account already exists.");

            const pwdError = validatePassword(passVal);
            if (pwdError) return showMessage(pwdError);

            // Save user
            users[emailVal] = { username: userVal, password: passVal };
            saveUsers(users);

            sessionStorage.setItem("currentUser", JSON.stringify({ username: userVal, email: emailVal }));
            showMessage("Account created successfully! Redirecting...", "green");
            setTimeout(() => (window.location.href = "home480.html"), 1000);
        } else {
            const users = loadUsers();
            const found = Object.values(users).find(
                (u) =>
                    u.username.toLowerCase() === userVal.toLowerCase() ||
                    (u.email && u.email.toLowerCase() === userVal.toLowerCase())
            );

            if (!found) return showMessage("No account found.");
            if (found.password !== passVal) return showMessage("Incorrect password.");

            sessionStorage.setItem("currentUser", JSON.stringify({ username: found.username }));
            showMessage("Welcome back! Redirecting...", "green");
            setTimeout(() => (window.location.href = "home480.html"), 1000);
        }
    });
});
