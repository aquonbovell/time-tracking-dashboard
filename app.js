fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const summary = [];
    data.forEach((item) => {
      summary.push(item);
    });
    const dashboard = document.querySelector(".dashboard");
    const tabs = document.querySelectorAll(".profile__tab");
    dashboard.innerHTML = getData(summary, "weekly");
    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        tabs.forEach((item) => {
          if (item !== tab) {
            item.classList.remove("active");
          }
        });
        tab.classList.add("active");

        dashboard.innerHTML = getData(
          summary,
          e.currentTarget.textContent.toLowerCase().trim()
        );
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });

function getData(data, time) {
  const timeline = [];
  data.forEach((timeframe) => {
    timeline.push([timeframe.title, timeframe.timeframes[time]]);
  });
  const timelinedasboard = timeline.map((week) => {
    let output = "";
    switch (time) {
      case "daily":
        output = "Yesterday";
        break;
      case "weekly":
        output = "Last Week";
        break;
      case "monthly":
        output = "Last Month";
        break;
    }
    let type = week[0].toLowerCase()
    console.log(type)
    return `<div class="card h-40 grid grid-rows-4 rounded-2xl lg:h-62 lg:grid-rows-7">
            <div class="relative overflow-hidden">
              <img src="./images/icon-${type === "self care" ? "self-care" : type}.svg"
                alt=""
                class="card__img absolute right-2 -top-2 w-20"
              />
            </div>
            <div class="card__stats cursor-pointer flex-col w-full px-7 py-7 row-span-3 items-center rounded-2xl bg-card hover:bg-profile text-white lg:row-start-2 lg:row-end-6 lg:row-span-auto">
              <div class="flex justify-between items-center text-tab-active">
                <div class="card__title text-lg font-medium">
                  ${week[0]}
                </div>
                <svg height="6"xmlns="http://www.w3.org/2000/svg" class="w-6 cursor-pointer">
                  <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/>
                </svg>
              </div>
              <div class=" flex justify-between text-tab-active items-center gap-x-6 lg:flex-col lg:items-start lg:gap-y-2">
              <div class="card__time items-end text-3xl font-light lg:text-60">
              ${week[1].current}hrs
              </div>
                <div class="card__prev text-grey text-grey font-normal ">
                  ${output} - ${week[1].previous}hrs
                </div>
              </div>
            </div>
          </div>`;
  });
  return timelinedasboard.join("");
}
