import jobs from "./jobs-data.js";

function addFeedCards() {
  jobs.forEach((item) => {
    createFeedCard(item);
  });
}

function createFeedCard(job) {
  const feedListElement = document.getElementsByClassName("feed-list");
  if (feedListElement.length == 0) return;
  const element = feedListElement[0];
  const card = document.createElement("div");
  card.classList.add("feed-card");
  card.classList.add("flex-col");

  card.innerHTML = `<div class="flex-row items-center" style="gap: 16px">
                <img
                  src="${job.companyImageURL}" alt=""
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: gray;
                    border-radius: 100%;
                    object-fit: cover;
                  "
                />
                <div class="flex-col" style="color: #f0f6fc; gap: 8px">
                  <span class="title">${job.name}</span>
                  <span style="font-size: 14px">${job.duration}</span>
                </div>
              </div>
              <div
                class="flex-col items-center"
                style="
                  background-color: #151b23;
                  color: #f0f6fc;
                  gap: 16px;
                  border-radius: 6px;
                  padding: 16px;
                "
              >
                <div class="w-full flex-row items-center" style="gap: 16px">
                  <img
                    src="${job.jobImageSrc}"
                    alt=""
                    style="width: 20px; height: 20px; background-color: gray; object-fit: contain;"
                  />
                  <span class="title">${job.subtitle}</span>
                </div>
                <p>${job.description}</p>
              </div>`;

  element.appendChild(card);
}

addFeedCards();
