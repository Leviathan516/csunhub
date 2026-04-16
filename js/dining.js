
let slideIndexes = {
  group1: 0,
  group2: 0,
  group3: 0,
  group4: 0,
  group5: 0,
  group6: 0,
  group7: 0,
  group8: 0,
  group9: 0,
  group10: 0,
  group11: 0,
  group12: 0,

};

function changeSlide(direction, group) {
  let slides = document.querySelectorAll(`.slide.${group}`);
  slideIndexes[group] += direction;

  if (slideIndexes[group] < 0) slideIndexes[group] = slides.length - 1;
  if (slideIndexes[group] >= slides.length) slideIndexes[group] = 0;

  slides.forEach(slide => slide.classList.remove("active"));
  slides[slideIndexes[group]].classList.add("active");
}

// === Tabbed Reviews Under Each Slideshow ===

// LocalStorage key
const REVIEW_STORAGE_KEY_TABS = "csunDiningReviewsTabbed";

function getReviewDataTabbed() {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_STORAGE_KEY_TABS)) || {};
  } catch (e) {
    return {};
  }
}

function saveReviewDataTabbed(data) {
  localStorage.setItem(REVIEW_STORAGE_KEY_TABS, JSON.stringify(data));
}

// Make a stable id for each place within its group
function makePlaceId(groupId, placeName) {
  return (
    (groupId || "group") +
    "|" +
    placeName
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-\|]/g, "")
  );
}

function addReviewTabbed(placeId, text) {
  const data = getReviewDataTabbed();
  if (!data[placeId]) data[placeId] = [];
  // newest first
  data[placeId].unshift(text);
  saveReviewDataTabbed(data);
}

function renderReviewsTabbed(placeId, listEl) {
  const data = getReviewDataTabbed();
  const reviews = data[placeId] || [];

  listEl.innerHTML = "";

  if (!reviews.length) {
    const li = document.createElement("li");
    li.textContent = "No reviews yet. Be the first to review!";
    listEl.appendChild(li);
    return;
  }

  reviews.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    listEl.appendChild(li);
  });
}

function setActiveTabTabbed(box, tab) {
  const allTabs = box.querySelectorAll(".review-tab");
  allTabs.forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");
  box.dataset.activePlaceId = tab.dataset.placeId;
}

function createReviewBoxesUnderSlideshows() {
  const containers = document.querySelectorAll(".slideshow-container");

  containers.forEach((container, groupIndex) => {
    const slides = container.querySelectorAll(".slide");
    if (!slides.length) return;

    const groupId = container.getAttribute("data-group") || `group${groupIndex + 1}`;

    // Build review box container
    const box = document.createElement("div");
    box.className = "review-box";
    box.dataset.groupId = groupId;

    const title = document.createElement("h4");
    title.textContent = "Student Reviews";

    const tabs = document.createElement("div");
    tabs.className = "review-tabs";

    const content = document.createElement("div");
    content.className = "review-content";

    const list = document.createElement("ul");
    list.className = "review-list";

    const textarea = document.createElement("textarea");
    textarea.placeholder = "Write your review for this place...";

    const actions = document.createElement("div");
    actions.className = "review-actions";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "button small";
    button.textContent = "Post Review";

    actions.appendChild(button);
    content.appendChild(list);
    content.appendChild(textarea);
    content.appendChild(actions);

    box.appendChild(title);
    box.appendChild(tabs);
    box.appendChild(content);

    // Insert box right after the slideshow
    container.insertAdjacentElement("afterend", box);

    // Create a tab for each slide/place
    slides.forEach((slide, slideIndex) => {
      const h3 = slide.querySelector("h3");
      if (!h3) return;

      // If there's a link inside <h3>, use its text; otherwise use the h3 text
      const link = h3.querySelector("a");
      const placeName = (link ? link.innerText : h3.innerText).trim();

      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "review-tab";
      tab.textContent = placeName;

      const placeId = makePlaceId(groupId, placeName);
      tab.dataset.placeId = placeId;

      tab.addEventListener("click", () => {
        setActiveTabTabbed(box, tab);
        renderReviewsTabbed(placeId, list);
      });

      tabs.appendChild(tab);

      // First tab is active by default
      if (slideIndex === 0) {
        tab.classList.add("active");
        box.dataset.activePlaceId = placeId;
      }
    });

    // Hook up the "Post Review" button
    button.addEventListener("click", () => {
      const placeId = box.dataset.activePlaceId;
      const text = textarea.value.trim();

      if (!placeId) {
        alert("Please choose a place tab first.");
        return;
      }
      if (!text) {
        alert("Please write something before posting.");
        return;
      }

      addReviewTabbed(placeId, text);
      textarea.value = "";
      renderReviewsTabbed(placeId, list);
    });

    // Initial render for the default tab
    const firstTab = tabs.querySelector(".review-tab");
    if (firstTab) {
      const placeId = firstTab.dataset.placeId;
      renderReviewsTabbed(placeId, list);
    }
  });
}

// Run on page load (along with your existing code)
document.addEventListener("DOMContentLoaded", () => {
  createReviewBoxesUnderSlideshows();
});
