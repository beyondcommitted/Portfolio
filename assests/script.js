function addLink() {
var myUl = document.querySelector("#myUl");
var newLi = document.createElement("li");
var newLi2 = document.createElement("li");
var aTag = document.createElement("a")
var aTag2 = document.createElement("a")

aTag.setAttribute("href", "https://www.linkedin.com/in/breon-sparrow-31bb24205/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADRQUscBiPDhB2YtiVJeBs5gYKGQ1aKh2XM,1635450821416)/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BTt9QF4cOQ9asffCWAfPSmA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-featured_item_detail_view");
aTag2.setAttribute("href", "https://www.linkedin.com/in/breon-sparrow-beyond-committed/")
aTag.innerHTML = "Resume";
aTag2.innerHTML = "LinkedIn";
myUl.appendChild(newLi);
myUl.appendChild(newLi2);
newLi.append(aTag);
newLi2.append(aTag2);
}
addLink();

