const executive = document.querySelector(".executive");
const planner = document.querySelector(".planner");
const developer = document.querySelector(".developer");

const loadMember = () => {
  return fetch("asset/member_data.json")
  .then((res) => res.json())
  .then(json => json.members);
}

const createMember = (member) => {
    const { department, avatar, name, position, description } = member;
    const elSpan = document.createElement("span");
    const elDivAvatar = document.createElement("div");
    const elImg = document.createElement("img");
    const elDivProfile = document.createElement("div");
    const elH3 = document.createElement("h3");
    const elH4 = document.createElement("h4");
    const elH5 = document.createElement("h5");

    elSpan.classList.add("member");
    elDivAvatar.classList.add("member__avatar");
    elImg.setAttribute("src", avatar);
    elImg.setAttribute("alt", "사진");
    elDivProfile.classList.add("member__profile");
    elH3.classList.add("member__name");
    elH4.classList.add("member__position");
    elH5.classList.add("member__career");
    
    elH3.textContent = name;
    elH4.textContent = position;
    elH5.textContent = description;
    
    elDivAvatar.append(elImg);
    elDivProfile.append(elH3);
    elDivProfile.append(elH4);
    elDivProfile.append(elH5);

    elSpan.append(elDivAvatar);
    elSpan.append(elDivProfile);
  
    if (department === "executive") executive.append(elSpan);
    else if (department === "planner") planner.append(elSpan);
    else developer.append(elSpan);
}

loadMember()
.then((members) => {
  members.forEach((member => createMember(member)))
})

