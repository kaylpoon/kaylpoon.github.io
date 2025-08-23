document.addEventListener("DOMContentLoaded", () => {
  const navHTML = `
    <nav class="navbar flex">
        <header class="flex">
            <a id="logo" href="index.html"><img src="resources/images/DL Logo.avif" alt=""></a>
            <a href="index.html">Dan Liu Dance Art School</a>
        </header>
        <ul class="flex" id="nav">
            <li class="flex"><a class="item" href="index.html">Home</a></li>
            <li class="item flex" onclick="toggleMenu1()" id="drop1">
                About <img class="down" src="resources/images/caret-down-svgrepo-com.svg" alt="">
                <ul class="dropdown" id="1">
                    <li><a class="item" href="about.html">Our School</a></li>
                    <li><a class="item" href="awards.html">Awards</a></li>
                </ul>
            </li>
            <li class="item flex" onclick="toggleMenu2()" id="drop2">
                Classes <img class="down" src="resources/images/caret-down-svgrepo-com.svg" alt="">
                <ul class="dropdown" id="2">
                    <li><a class="item" href="schedule.html">Schedule</a></li>
                    <li><a class="item" href="summer.html">Summer Camps</a></li>
                </ul>
            </li>
            <li class="item flex" onclick="toggleMenu3()" id="drop3">
                Gallery <img class="down" src="resources/images/caret-down-svgrepo-com.svg" alt="">
                <ul class="dropdown" id="3">
                    <li><a class="item" href="gallery.html">Photo Gallery</a></li>
                    <li><a class="item" href="videos.html">Video Highlights</a></li>
                </ul>
            </li>
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

function toggleMenu1() {
    if (document.body.classList.contains('menu-active')) {
        if (document.getElementById('drop2').getAttribute('aria-expanded') === "true") {
            document.getElementById('drop2').setAttribute('aria-expanded', "false");
            document.getElementById('2').style.display = "none";
        }
        else if (document.getElementById('drop3').getAttribute('aria-expanded') === "true") {
            document.getElementById('drop3').setAttribute('aria-expanded', "false");
            document.getElementById('3').style.display = "none";
        }
        const link = document.getElementById('drop1');
        const content = document.getElementById('1');
        const isExpanded = link.getAttribute('aria-expanded') === "true";

        link.setAttribute('aria-expanded', !isExpanded);
        content.style.display = isExpanded ? "none" : "flex";
        content.style.flexDirection = "column";
    }
}

function toggleMenu2() {
    if (document.body.classList.contains('menu-active')) {
        if (document.getElementById('drop1').getAttribute('aria-expanded') === "true") {
            document.getElementById('drop1').setAttribute('aria-expanded', "false");
            document.getElementById('1').style.display = "none";
        }
        else if (document.getElementById('drop3').getAttribute('aria-expanded') === "true") {
            document.getElementById('drop3').setAttribute('aria-expanded', "false");
            document.getElementById('3').style.display = "none";
        }

        const link = document.getElementById('drop2');
        const content = document.getElementById('2');
        const isExpanded = link.getAttribute('aria-expanded') === "true";

        link.setAttribute('aria-expanded', !isExpanded);
        content.style.display = isExpanded ? "none" : "flex";
        content.style.flexDirection = "column";
    }
}

function toggleMenu3() {
    if (document.body.classList.contains('menu-active')) {
        if (document.getElementById('drop1').getAttribute('aria-expanded') === "true") {
            document.getElementById('drop1').setAttribute('aria-expanded', "false");
            document.getElementById('1').style.display = "none";
        }
        else if (document.getElementById('drop2').getAttribute('aria-expanded') === "true") {
            document.getElementById('drop2').setAttribute('aria-expanded', "false");
            document.getElementById('2').style.display = "none";
        }
        const link = document.getElementById('drop3');
        const content = document.getElementById('3');
        const isExpanded = link.getAttribute('aria-expanded') === "true";

        link.setAttribute('aria-expanded', !isExpanded);
        content.style.display = isExpanded ? "none" : "flex";
        content.style.flexDirection = "column";
    }
}

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector('li').addEventListener('click', (e) => {
//     e.target.focus(); // Ensure focus is applied
// });
// })

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
            <img id="wechat" src="resources/images/Wechat.avif" alt="">
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