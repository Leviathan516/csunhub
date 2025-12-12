// careers.js

// ====== 1. Data: Opportunities ======

const opportunities = [
    // ---------- Work on Campus ----------
    {
        id: "campus-tutor-stem",
        title: "Peer Tutor – STEM",
        employer: "Learning Resource Center (LRC)",
        category: "Work on Campus",
        type: "On-campus Job",
        majors: ["Math", "Computer Science", "Engineering", "Physics"],
        location: "CSUN Campus",
        description:
            "Support other students in math, science, or programming courses through one-on-one and group tutoring.",
        applyLink: "#"
    },
    {
        id: "campus-tutor-writing",
        title: "Writing Tutor",
        employer: "Learning Resource Center (LRC)",
        category: "Work on Campus",
        type: "On-campus Job",
        majors: ["English", "Linguistics", "Humanities", "Journalism"],
        location: "CSUN Campus",
        description:
            "Help students improve essays, research papers, and personal statements in a supportive environment.",
        applyLink: "#"
    },
    {
        id: "src-front-desk",
        title: "Member Services Assistant",
        employer: "Student Recreation Center (SRC)",
        category: "Work on Campus",
        type: "On-campus Job",
        majors: ["Kinesiology", "Recreation", "Any Major"],
        location: "Student Recreation Center",
        description:
            "Welcome members, manage check-ins, and assist with SRC services at the front desk.",
        applyLink: "#"
    },
    {
        id: "src-floor-attendant",
        title: "Fitness Floor Attendant",
        employer: "Student Recreation Center (SRC)",
        category: "Work on Campus",
        type: "On-campus Job",
        majors: ["Kinesiology", "Health & Human Development", "Any Major"],
        location: "Student Recreation Center",
        description:
            "Monitor equipment, assist members with safe usage, and help keep the fitness floor clean and organized.",
        applyLink: "#"
    },
    {
        id: "library-assistant",
        title: "Library Student Assistant",
        employer: "University Library",
        category: "Work on Campus",
        type: "On-campus Job",
        majors: ["Any Major"],
        location: "University Library",
        description:
            "Assist with circulation, shelving, and helping students find resources at the library.",
        applyLink: "#"
    },
    {
        id: "it-helpdesk",
        title: "IT Help Desk Student Assistant",
        employer: "CSUN IT Department",
        category: "Work on Campus",
        type: "On-campus Job",
        majors: ["Computer Science", "IT", "CIT", "Engineering"],
        location: "Campus-wide",
        description:
            "Provide basic technical support for students, faculty, and staff, including software and hardware troubleshooting.",
        applyLink: "#"
    },
    {
        id: "housing-ra",
        title: "Resident Advisor (RA)",
        employer: "Student Housing",
        category: "Work on Campus",
        type: "On-campus Job",
        majors: ["Any Major"],
        location: "Student Housing",
        description:
            "Support residents in housing, build community, and help coordinate floor events and resources.",
        applyLink: "#"
    },

    // ---------- Engineering & Computer Science ----------
    {
        id: "ecs-ladwp-it",
        title: "IT Student Professional Worker",
        employer: "Los Angeles Department of Water and Power (LADWP)",
        category: "Engineering & Computer Science",
        type: "Paid Internship",
        majors: ["Computer Science", "Computer Information Technology", "Engineering"],
        location: "Los Angeles (Hybrid/On-site)",
        description:
            "Support enterprise systems, data, and applications as a student worker in a large public utility.",
        applyLink: "#"
    },
    {
        id: "ecs-software-intern",
        title: "Software Engineering Intern",
        employer: "Tech / Startup Partners",
        category: "Engineering & Computer Science",
        type: "Internship",
        majors: ["Computer Science", "Software Engineering"],
        location: "Greater Los Angeles Area",
        description:
            "Work with a development team to build and test web or mobile applications in an agile environment.",
        applyLink: "#"
    },
    {
        id: "ecs-cybersecurity-intern",
        title: "Cybersecurity Intern",
        employer: "IT Security Team / Partner Company",
        category: "Engineering & Computer Science",
        type: "Internship",
        majors: ["Computer Science", "IT", "Cybersecurity"],
        location: "Hybrid / Remote",
        description:
            "Assist with security monitoring, basic incident response, and improving internal security practices.",
        applyLink: "#"
    },
    {
        id: "ecs-engineering-lab-assistant",
        title: "Engineering Lab Assistant",
        employer: "CECS Department",
        category: "Engineering & Computer Science",
        type: "On-campus Job",
        majors: [
            "Mechanical Engineering",
            "Civil Engineering",
            "Electrical Engineering"
        ],
        location: "Engineering Labs",
        description:
            "Help maintain lab equipment, support lab sessions, and assist faculty with engineering experiments.",
        applyLink: "#"
    },

    // ---------- Business & Economics ----------
    {
        id: "bus-marketing-assistant",
        title: "Marketing Assistant",
        employer: "Nazarian College / Campus Unit",
        category: "Business & Economics",
        type: "On-campus Job / Internship",
        majors: ["Marketing", "Business Administration", "Management"],
        location: "CSUN Campus",
        description:
            "Support social media, email campaigns, and event promotion for campus programs or departments.",
        applyLink: "#"
    },
    {
        id: "bus-finance-intern",
        title: "Finance / Accounting Intern",
        employer: "Local Firms / Nazarian Partners",
        category: "Business & Economics",
        type: "Internship",
        majors: ["Finance", "Accounting", "Business"],
        location: "Los Angeles Area",
        description:
            "Gain experience with budgeting, financial reporting, and basic accounting tasks in a professional setting.",
        applyLink: "#"
    },

    // ---------- Arts, Media & Communication ----------
    {
        id: "arts-creative-intern",
        title: "Creative Media Intern",
        employer: "Media / Creative Agency Partner",
        category: "Arts, Media & Communication",
        type: "Internship",
        majors: [
            "Cinema & Television Arts",
            "Art",
            "Journalism",
            "Communication Studies"
        ],
        location: "Los Angeles / Hybrid",
        description:
            "Assist with video production, editing, graphics, or social content for media projects.",
        applyLink: "#"
    },
    {
        id: "arts-campus-photographer",
        title: "Student Photographer / Videographer",
        employer: "CSUN Marketing & Communications",
        category: "Arts, Media & Communication",
        type: "On-campus Job",
        majors: ["Art", "CTVA", "Journalism"],
        location: "CSUN Campus",
        description:
            "Capture photos and videos at campus events and help build CSUN’s visual media library.",
        applyLink: "#"
    },

    // ---------- Science & Mathematics ----------
    {
        id: "sci-research-assistant",
        title: "Undergraduate Research Assistant",
        employer: "Science / Math Department Labs",
        category: "Science & Mathematics",
        type: "Research",
        majors: ["Biology", "Chemistry", "Physics", "Geology", "Math"],
        location: "CSUN Campus",
        description:
            "Join a research lab, assist with experiments, data collection, and literature reviews.",
        applyLink: "#"
    },
    {
        id: "sci-data-analyst-intern",
        title: "Data Analyst Intern",
        employer: "Local Company / Research Center",
        category: "Science & Mathematics",
        type: "Internship",
        majors: ["Math", "Statistics", "Data Science", "Computer Science"],
        location: "Hybrid / Remote",
        description:
            "Use Excel, Python, or R to analyze datasets and help visualize key findings for stakeholders.",
        applyLink: "#"
    },

    // ---------- Health & Human Development ----------
    {
        id: "hhd-pt-aide",
        title: "Physical Therapy Aide",
        employer: "Local PT Clinic",
        category: "Health & Human Development",
        type: "Part-time Job",
        majors: ["Kinesiology", "Health Science"],
        location: "Off-campus",
        description:
            "Assist physical therapists with patient exercises, equipment setup, and clinic organization.",
        applyLink: "#"
    },
    {
        id: "hhd-nutrition-peer",
        title: "Peer Nutrition Educator",
        employer: "CSUN Health Promotion",
        category: "Health & Human Development",
        type: "On-campus Job",
        majors: ["Nutrition", "Health Science"],
        location: "CSUN Campus",
        description:
            "Provide basic nutrition education and support health events for the campus community.",
        applyLink: "#"
    },

    // ---------- Social & Behavioral Sciences ----------
    {
        id: "sbs-psych-research",
        title: "Psychology Research Assistant",
        employer: "Psych Lab",
        category: "Social & Behavioral Sciences",
        type: "Research",
        majors: ["Psychology"],
        location: "CSUN Campus",
        description:
            "Help run experiments, manage participants, and analyze data under faculty supervision.",
        applyLink: "#"
    },
    {
        id: "sbs-nonprofit-intern",
        title: "Nonprofit / Community Intern",
        employer: "Local Nonprofit Organization",
        category: "Social & Behavioral Sciences",
        type: "Internship",
        majors: ["Sociology", "Political Science", "Social Work"],
        location: "Los Angeles Area",
        description:
            "Support outreach, program coordination, or community services at a local nonprofit.",
        applyLink: "#"
    },

    // ---------- Education ----------
    {
        id: "edu-after-school",
        title: "After-School Program Leader",
        employer: "Local School / Youth Program",
        category: "Education",
        type: "Part-time Job",
        majors: ["Liberal Studies", "Education"],
        location: "San Fernando Valley",
        description:
            "Work with K–12 students in homework clubs, enrichment activities, and recreation.",
        applyLink: "#"
    },
    {
        id: "edu-classroom-aide",
        title: "Classroom Aide / Teacher’s Assistant",
        employer: "Local Elementary / Middle School",
        category: "Education",
        type: "Field Experience / Part-time",
        majors: ["Liberal Studies", "Education"],
        location: "Local Schools",
        description:
            "Gain classroom experience by helping teachers manage activities and support students.",
        applyLink: "#"
    }
];

// ====== Build Accordion UI ======

function createCareerItem(opportunity) {
    const item = document.createElement("div");
    item.classList.add("career-item");
    item.setAttribute("data-category", opportunity.category);
    item.setAttribute("data-type", opportunity.type || "");
    item.setAttribute("data-majors", (opportunity.majors || []).join(", "));

    const bodyId = `career-body-${opportunity.id}`;

    const metaParts = [];
    if (opportunity.employer) metaParts.push(opportunity.employer);
    if (opportunity.type) metaParts.push(opportunity.type);
    const metaLine = metaParts.join(" • ");

    const majorsText =
        opportunity.majors && opportunity.majors.length
            ? `<p class="career-majors"><strong>Good for:</strong> ${opportunity.majors.join(
                ", "
            )}</p>`
            : "";

    const locationText = opportunity.location
        ? `<p class="career-location"><strong>Location:</strong> ${opportunity.location}</p>`
        : "";

    const applyButton = opportunity.applyLink
        ? `<a class="career-apply" href="${opportunity.applyLink}" target="_blank" rel="noopener">View details</a>`
        : "";

    item.innerHTML = `
    <button
      class="career-item-header"
      type="button"
      aria-expanded="false"
      aria-controls="${bodyId}"
    >
      <div class="career-header-text">
        <span class="career-title">${opportunity.title}</span>
        ${metaLine
            ? `<span class="career-meta">${metaLine}</span>`
            : ""
        }
      </div>
      <span class="career-arrow" aria-hidden="true"></span>
    </button>

    <div
      class="career-item-body"
      id="${bodyId}"
      role="region"
      aria-label="${opportunity.title} details"
    >
      <p class="career-description">
        ${opportunity.description || ""}
      </p>
      ${majorsText}
      ${locationText}
      ${applyButton}
    </div>
  `;

    return item;
}

function renderCareersByCategory(data) {
    const root = document.getElementById("careers-root");
    if (!root) return;

    // Group opportunities by category
    const byCategory = data.reduce((acc, opp) => {
        if (!acc[opp.category]) acc[opp.category] = [];
        acc[opp.category].push(opp);
        return acc;
    }, {});

    root.innerHTML = "";

    Object.keys(byCategory).forEach((categoryName) => {
        const section = document.createElement("section");
        section.classList.add("career-category");

        const header = document.createElement("header");
        header.classList.add("career-category-header");
        header.innerHTML = `<h2>${categoryName}</h2>`;
        section.appendChild(header);

        const accordion = document.createElement("div");
        accordion.classList.add("career-accordion");

        byCategory[categoryName].forEach((opp) => {
            const item = createCareerItem(opp);
            accordion.appendChild(item);
        });

        section.appendChild(accordion);
        root.appendChild(section);
    });
}

function setupAccordionBehavior() {
    const root = document.getElementById("careers-root");
    if (!root) return;

    const headers = root.querySelectorAll(".career-item-header");

    headers.forEach((header) => {
        header.addEventListener("click", () => {
            const item = header.closest(".career-item");
            if (!item) return;

            const isOpen = item.classList.contains("is-open");
            item.classList.toggle("is-open", !isOpen);
            header.setAttribute("aria-expanded", String(!isOpen));
        });
    });
}

// ====== 3. Init ======

document.addEventListener("DOMContentLoaded", () => {
    renderCareersByCategory(opportunities);
    setupAccordionBehavior();
});
