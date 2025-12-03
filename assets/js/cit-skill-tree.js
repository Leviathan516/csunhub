// 0) REQUIRE LOGIN (optional, but good for "My Account")
(function requireLogin() {
  const token = localStorage.getItem("authToken");
  if (!token) {
    // kick back to login if not authenticated
    window.location.href = "login.html";
  }
})();

// 1) DEFINE YOUR COURSES + PREREQS
const courses = [
  { id: "CIT101",  name: "CIT 101/L – Info Tech Fundamentals",                    prereqs: [] },
  { id: "COMP110",  name: "COMP 110 – Algorithms",                                prereqs: [] },
  { id: "MATH103/L",  name: "MATH 103/L - Math for Business",                     prereqs: [] },
  { id: "MATH140",  name: "MATH 140 - Introductory Statistics",                   prereqs: [] },
  { id: "CIT160",  name: "CIT 160/L – Internet Tech",                             prereqs: [] },
  { id: "GE-A2",  name: "GE Basic Skills: A2 Written Communication",              prereqs: [] },
  { id: "IS312",  name: "IS 312 - Systems and Technologies for Managers",         prereqs: ["CIT160","CIT101"] },
  { id: "IS431",  name: "IS 431 - Systems Analysis and Design",                   prereqs: ["IS312"] },
  { id: "IS435",  name: "IS 435 - Business Data Networks and Cybersecurity",      prereqs: ["IS312"] },
  { id: "IS441",  name: "IS 441 - Database Management Systems",                   prereqs: ["IS312"] },
  { id: "IS451",  name: "IS 451 - Enterprise Systems and Project Management",     prereqs: ["IS431","IS435"] },
  { id: "COMP110", name: "COMP 110/L – Algorithms",                               prereqs: ["MATH103/L"] },
  { id: "COMP122", name: "COMP 122/L – Arch & Assembly",                          prereqs: ["COMP110"] },
  { id: "COMP182", name: "COMP 182/L – Data Structures",                          prereqs: ["COMP110"] },
  { id: "CIT210",  name: "CIT 210/L – Deploy & Manage OS",                        prereqs: ["COMP122","CIT101"] },
  { id: "CIT270",  name: "CIT 270/L – Integrative Programming",                   prereqs: ["CIT160","COMP182"] },
  { id: "CIT360",  name: "CIT 360/L – Sys Admin & Management",                    prereqs: ["CIT210","CIT270"] },
  { id: "COMP424", name: "COMP 182/L – Data Structures",                          prereqs: ["CIT360","IS435"] },
  { id: "COMP484", name: "COMP 182/L – Data Structures",                          prereqs: ["CIT360"] },
  { id: "COMP485", name: "COMP 182/L – Data Structures",                          prereqs: ["CIT360"] },
  { id: "CIT480",  name: "CIT 480/L – Sys Design & Implement I",                  prereqs: ["CIT360","IS451"] },
  { id: "CIT481",  name: "CIT 481/L – Sys Design & Implement II",                 prereqs: ["CIT480"] }
  
];

// 2) PER-USER STORAGE KEY
function getUsername() {
  // adjust this if you store username differently
  return localStorage.getItem("username") || "guest";
}

function getStorageKey() {
  const username = getUsername();
  return `cit_skill_tree_completed_${username}`;
}

// 3) LOAD / SAVE PROGRESS
const completedSet = new Set(
  JSON.parse(localStorage.getItem(getStorageKey()) || "[]")
);

function saveProgress() {
  localStorage.setItem(getStorageKey(), JSON.stringify([...completedSet]));
}

// 4) HELPER: IS A COURSE UNLOCKED?
function isUnlocked(course) {
  return course.prereqs.every(id => completedSet.has(id));
}

// 5) RENDER TREE
function renderTree() {
  const treeEl = document.getElementById("tree");
  if (!treeEl) return;

  treeEl.innerHTML = "";

  courses.forEach(course => {
    const unlocked = isUnlocked(course);
    const completed = completedSet.has(course.id);

    const card = document.createElement("div");
    card.classList.add("course");
    if (completed) card.classList.add("completed");
    else if (unlocked) card.classList.add("unlocked");
    else card.classList.add("locked");

    const title = document.createElement("div");
    title.className = "course-title";
    title.textContent = course.name;

    const prereqText = document.createElement("div");
    prereqText.className = "course-prereqs";
    if (course.prereqs.length === 0) {
      prereqText.textContent = "Prereqs: None (starting node)";
    } else {
      prereqText.textContent = "Prereqs: " + course.prereqs.join(", ");
    }

    const statusPill = document.createElement("div");
    statusPill.className = "status-pill";
    const dot = document.createElement("span");
    dot.className = "status-dot";

    const statusLabel = document.createElement("span");
    statusLabel.textContent = completed
      ? "Completed"
      : unlocked
      ? "Unlocked"
      : "Locked";

    statusPill.appendChild(dot);
    statusPill.appendChild(statusLabel);

    const btn = document.createElement("button");
    btn.className = "complete-btn";
    if (completed) {
      btn.classList.add("undo");
      btn.textContent = "Mark as not taken";
    } else {
      btn.classList.add("complete");
      btn.textContent = "Mark as completed";
    }

    if (!unlocked && !completed) {
      btn.disabled = true;
    }

    btn.addEventListener("click", () => {
      if (!unlocked && !completed) return;
      if (completed) {
        completedSet.delete(course.id);
      } else {
        completedSet.add(course.id);
      }
      saveProgress();
      renderTree();
    });

    card.appendChild(title);
    card.appendChild(prereqText);
    card.appendChild(statusPill);
    card.appendChild(btn);

    treeEl.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderTree);
