// clubs.js

// ====== 1. Data: edit these objects as you like ======

const clubs = [
    // ---------- Engineering and Computer Science ----------
    {
        id: "asce",
        name: "American Society of Civil Engineers",
        shortName: "ASCE",
        category: "Engineering and Computer Science",
        image: "media/images/clubs/asce.jpg", // placeholder path
        description:
            "Professional organization for students interested in civil engineering, design projects, and industry networking.",
        email: "asce@my.csun.edu",
        discord: "https://discord.gg/example-asce",
        socials: {
            instagram: "https://instagram.com/asce_csun",
            website: "https://example.com/asce"
        }
    },
    {
        id: "asme",
        name: "American Society of Mechanical Engineers",
        shortName: "ASME",
        category: "Engineering and Computer Science",
        image: "media/images/clubs/asme.jpg",
        description:
            "Mechanical engineering-focused club with hands-on projects, competitions, and professional development events.",
        email: "asme@my.csun.edu",
        discord: "",
        socials: {
            instagram: "https://instagram.com/asme_csun"
        }
    },
    {
        id: "aeronautics",
        name: "Aeronautics",
        shortName: "Aeronautics",
        category: "Engineering and Computer Science",
        image: "media/images/clubs/csunaero.jpg",
        description:
            "Club for students interested in aeronautics, rocketry, UAVs, and aerospace projects.",
        email: "aeronautics@my.csun.edu",
        discord: "https://discord.gg/example-aero",
        socials: {
            instagram: "https://instagram.com/aeronautics_csun"
        }
    },
    {
        id: "ieee",
        name: "Institute of Electrical and Electronics Engineers",
        shortName: "IEEE",
        category: "Engineering and Computer Science",
        image: "media/images/clubs/ieee.jpg",
        description:
            "Organization for students in electrical, computer, and related engineering fields, with workshops and tech events.",
        email: "ieee@my.csun.edu",
        discord: "",
        socials: {
            instagram: "https://instagram.com/ieee_csun",
            website: "https://example.com/ieee"
        }
    },
    {
        id: "layer8",
        name: "Layer 8",
        shortName: "Layer 8",
        category: "Engineering and Computer Science",
        image: "media/images/clubs/layer8.jpg",
        description:
            "Cybersecurity and networking club focused on capture-the-flag events, security labs, and certifications.",
        email: "layer8@my.csun.edu",
        discord: "https://discord.gg/example-layer8",
        socials: {
            instagram: "https://instagram.com/layer8_csun"
        }
    },
    {
        id: "python",
        name: "Python Club",
        shortName: "Python Club",
        category: "Engineering and Computer Science",
        image: "media/images/clubs/python.jpg",
        description:
            "Programming club centered on Python for data science, automation, and projects for all skill levels.",
        email: "pythonclub@my.csun.edu",
        discord: "https://discord.gg/example-python",
        socials: {
            instagram: "https://instagram.com/pythonclub_csun"
        }
    },

    // ---------- Sports ----------
    {
        id: "badminton",
        name: "Badminton Club",
        shortName: "Badminton",
        category: "Sports",
        image: "media/images/clubs/badminton.jpg",
        description:
            "Student-run club for casual and competitive badminton players of all experience levels.",
        email: "badmintonclub@my.csun.edu",
        discord: "",
        socials: {
            instagram: "https://instagram.com/badminton_csun"
        }
    },
    {
        id: "bjj",
        name: "Brazilian Jiu-Jitsu",
        shortName: "Brazilian Jiu-Jitsu",
        category: "Sports",
        image: "media/images/clubs/bjj.jpg",
        description:
            "Martial arts club focused on Brazilian Jiu-Jitsu fundamentals, conditioning, and community.",
        email: "bjjclub@my.csun.edu",
        discord: "",
        socials: {
            instagram: "https://instagram.com/bjj_csun"
        }
    },
    {
        id: "esports",
        name: "Esports",
        shortName: "Esports",
        category: "Sports",
        image: "media/images/clubs/esports.jpg",
        description:
            "Competitive and casual gaming organization with teams for popular titles and on-campus events.",
        email: "esports@my.csun.edu",
        discord: "https://discord.gg/example-esports",
        socials: {
            instagram: "https://instagram.com/esports_csun",
            twitch: "https://twitch.tv/esports_csun"
        }
    },
    {
        id: "icehockey",
        name: "Ice Hockey Club",
        shortName: "Ice Hockey",
        category: "Sports",
        image: "media/images/clubs/icehockey.jpg",
        description:
            "Club hockey team for students who want to compete and represent the campus on the ice.",
        email: "icehockeyclub@my.csun.edu",
        discord: "",
        socials: {
            instagram: "https://instagram.com/icehockey_csun"
        }
    },
    {
        id: "archery",
        name: "Matador Archery",
        shortName: "Matador Archery",
        category: "Sports",
        image: "media/images/clubs/archery.jpg",
        description:
            "Archery club welcoming beginners and experienced archers for practice, coaching, and competitions.",
        email: "archery@my.csun.edu",
        discord: "",
        socials: {
            instagram: "https://instagram.com/archery_csun"
        }
    }
];

// ====== 2. Helper: build a single club card element ======

function createClubCard(club) {
    const article = document.createElement("article");
    article.classList.add("club-card");
    article.setAttribute("data-category", club.category);
    article.setAttribute("data-id", club.id);

    article.innerHTML = `
    <div class="club-image-wrapper">
      <img src="${club.image}" alt="${club.name}">
    </div>
    <div class="club-content">
      <h3 class="club-title">${club.shortName || club.name}</h3>
      <p class="club-description">
        ${club.description || ""}
      </p>
      <div class="club-links">
        ${club.email ? `<p><strong>Email:</strong> <a href="mailto:${club.email}">${club.email}</a></p>` : ""}
        ${club.discord ? `<p><strong>Discord:</strong> <a href="${club.discord}" target="_blank" rel="noopener">Join server</a></p>` : ""}
        ${renderSocialLinks(club.socials)}
      </div>
    </div>
  `;

    return article;
}

function renderSocialLinks(socials = {}) {
    const { instagram, twitter, x, website, twitch } = socials;
    const twitterOrX = x || twitter;

    const bits = [];

    if (instagram) {
        bits.push(
            `<a href="${instagram}" target="_blank" rel="noopener" class="club-social club-social-instagram">Instagram</a>`
        );
    }
    if (twitterOrX) {
        bits.push(
            `<a href="${twitterOrX}" target="_blank" rel="noopener" class="club-social club-social-twitter">X / Twitter</a>`
        );
    }
    if (twitch) {
        bits.push(
            `<a href="${twitch}" target="_blank" rel="noopener" class="club-social club-social-twitch">Twitch</a>`
        );
    }
    if (website) {
        bits.push(
            `<a href="${website}" target="_blank" rel="noopener" class="club-social club-social-website">Website</a>`
        );
    }

    if (!bits.length) return "";

    return `
    <p class="club-socials">
      <strong>Socials:</strong>
      ${bits.join(" • ")}
    </p>
  `;
}

// ====== 3. Render clubs grouped by category ======

function renderClubsByCategory(clubsData) {
    const root = document.getElementById("clubs-root");
    if (!root) return;

    // Group clubs by category
    const byCategory = clubsData.reduce((acc, club) => {
        if (!acc[club.category]) acc[club.category] = [];
        acc[club.category].push(club);
        return acc;
    }, {});

    // Clear existing content
    root.innerHTML = "";

    // For each category, create a section
    Object.keys(byCategory).forEach((categoryName) => {
        const section = document.createElement("section");
        section.classList.add("club-category");

        const header = document.createElement("header");
        header.classList.add("major");
        header.innerHTML = `<h2>${categoryName}</h2>`;
        section.appendChild(header);

        const grid = document.createElement("div");
        grid.classList.add("club-grid"); // you style this as a grid/tiles

        byCategory[categoryName].forEach((club) => {
            const card = createClubCard(club);
            grid.appendChild(card);
        });

        section.appendChild(grid);
        root.appendChild(section);
    });
}

// ====== 4. Kick everything off once DOM is ready ======

document.addEventListener("DOMContentLoaded", () => {
    renderClubsByCategory(clubs);
});
