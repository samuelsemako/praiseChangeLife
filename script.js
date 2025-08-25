
  // Animate Church Name on load
  window.addEventListener("DOMContentLoaded", () => {
    const churchName = document.getElementById("church-name");
    setTimeout(() => {
      churchName.classList.remove("opacity-0", "translate-y-10");
      churchName.classList.add("opacity-100", "translate-y-0");
    }, 300); 
  });

  // Bible Verse Rotator
  const verses = [
    "“God is light, and in Him there is no darkness at all.” – 1 John 1:5",
    "“The Lord is my shepherd; I shall not want.” – Psalm 23:1",
    "“For I know the plans I have for you…” – Jeremiah 29:11",
    "“In Your light we see light.” – Psalm 36:9"
  ];

  let verseIndex = 0;
  const verseElement = document.getElementById("bible-verse");

  function showVerse() {
    verseElement.classList.add("opacity-0");
    setTimeout(() => {
      verseElement.textContent = verses[verseIndex];
      verseElement.classList.remove("opacity-0");
      verseElement.classList.add("opacity-100");
    }, 500);
    verseIndex = (verseIndex + 1) % verses.length;
  }

  // Initialize first verse & rotate every 5s
  showVerse();
  setInterval(showVerse, 5000);

    // Mobile menu toggle
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
