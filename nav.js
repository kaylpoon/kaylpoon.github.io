document.addEventListener("DOMContentLoaded", () => {
  const navHTML = `
    <nav class="navbar flex">
        <header class="flex">
            <a id="logo" href="index.html"><img src="DL Logo.avif" alt=""></a>
            <a href="index.html">Dan Liu Dance Art School</a>
        </header>
        <ul class="flex" id="nav">
            <li class="flex"><a class="item" href="about.html">About</a></li>
            <li class="flex"><a class="item" href="schedule.html">Classes</a></li>
            <li class="flex"><a class="item" href="videos.html">Gallery</a></li>
            <li class="flex"><a class="item" href="contact.html">Contact</a></li>
        </ul>
        <button id="menu">☰</button>
    </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", navHTML);
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#menu').onclick = function () {
        document.body.classList.toggle('menu-active');
    };
});

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  const adjustSpacing = () => {
    const navbarHeight = navbar.offsetHeight;
    document.documentElement.style.setProperty("--navbar-height", `${navbarHeight}px`);
  };

  adjustSpacing();
  window.addEventListener("resize", adjustSpacing);
});

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <nav class="wrap tile-container">
        <div class="tile tile-info">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="studio.html">About</a></li>
                <li><a href="classes.html">Classes</a></li>
                <li><a href="faqs.html">FAQs</a></li>
            </ul>
        </div>
        <div class="tile tile-info">
            <h3>Connect</h3>
            <ul>
                <li><a href="contact.html">Contact Us</a></li>
                <li>3508 Aqua Springs Dr. Plano, TX 75025</li>
                <li>(972) 838-3829</li>
                <li>danliudance@gmail.com</li>
            </ul>
        </div>
        <div class="tile tile-info">
            <img id="wechat" src="Wechat.avif" alt="">
        </div>
        <div class="tile tile-info">
            <h3>Follow Us</h3>
            <ul>
                <li><a href="https://www.youtube.com/@DLDanceArtSchool" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                <li>RedNote (Xiaohongshu)</li>
                <li>TikTok</li>
            </ul>
        </div>
    </nav>
    <p>&copy; 2025 Dan Liu Dance Art School. All rights reserved.</p>
  `;
  document.body.appendChild(footer);
});



