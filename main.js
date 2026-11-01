document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const group1 = document.getElementById("group-1");
  const group2 = document.getElementById("group-2");

  function toggleGroups() {
    if (group1.classList.contains("active")) {
      group1.classList.remove("active");
      group2.classList.add("active");
    } else {
      group2.classList.remove("active");
      group1.classList.add("active");
    }
  }

  // الضغط على السهم الأيمن أو الأيسر يقلب بين الـ 3 صور الأولى والـ 3 صور الثانية
  nextBtn.addEventListener("click", toggleGroups);
  prevBtn.addEventListener("click", toggleGroups);
});





