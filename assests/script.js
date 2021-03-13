function getResume() {
var myUl = document.querySelector("#myUl");
var resumeLi = document.createElement("li");
var aTag = document.createElement("a")
aTag.setAttribute("href", "https://www.linkedin.com/in/breon-sparrow-31bb24205/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADRQUscBiPDhB2YtiVJeBs5gYKGQ1aKh2XM,1635450821416)/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BTt9QF4cOQ9asffCWAfPSmA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-featured_item_detail_view");
aTag.innerHTML = "Resume";
myUl.appendChild(resumeLi);
resumeLi.append(aTag);
}
getResume();

// button.onclick = function() {
//     getResume();
// }
