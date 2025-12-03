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
  { id: "CIT101",  name: "CIT 101/L – Info Tech Fundamentals",    prereqs: [] },
  { id: "CIT160",  name: "CIT 160/L – Internet Tech",             prereqs: ["CIT101"] },
  { id: "COMP110", name: "COMP 110/L – Algorithms",               prereqs: ["CIT101"] },
  { id: "COMP122", name: "COMP 122/L – Arch & Assembly",          prereqs: ["COMP110"] },
  { id: "COMP182", name: "COMP 182/L – Data Structures",          prereqs: ["COMP122"] },
  { id: "CIT210",  name: "CIT 210/L – Deploy & Manage OS",        prereqs: ["CIT160","COMP110"] },
  { id: "CIT270",  name: "CIT 270/L – Integrative Programming",   prereqs: ["COMP182"] },
  { id: "CIT360",  name: "CIT 360/L – Sys Admin & Management",    prereqs: ["CIT210","CIT270"] },
  { id: "CIT480",  name: "CIT 480/L – Sys Design & Implement I",  prereqs: ["CIT360"] },
  { id: "CIT481",  name: "CIT 481/L – Sys Design & Implement II", prereqs: ["CIT480"] }
  // add IS 212, IS 312, IS 431, IS 435, IS 441, etc.
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
