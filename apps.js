/* ==========================================
   SIDEBAR - COREMOTION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggleSidebar");
    const menuLinks = document.querySelectorAll("nav li");

    /* ===========================
       RESTAURA ESTADO
    =========================== */

    const savedState = localStorage.getItem("sidebar");

    if (savedState === "expanded") {
        sidebar.classList.remove("collapsed");
        toggleButton.innerHTML = "❮";
    } else {
        sidebar.classList.add("collapsed");
        toggleButton.innerHTML = "❯";
    }

    /* ===========================
       EXPANDIR / RECOLHER
    =========================== */

    toggleButton.addEventListener("click", () => {

        sidebar.classList.toggle("collapsed");

        if (sidebar.classList.contains("collapsed")) {

            localStorage.setItem("sidebar", "collapsed");
            toggleButton.innerHTML = "❯";

        } else {

            localStorage.setItem("sidebar", "expanded");
            toggleButton.innerHTML = "❮";

        }

    });

    /* ===========================
       MENU ATIVO
    =========================== */

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    menuLinks.forEach(item => {

        item.classList.remove("active");

        const link = item.querySelector("a");

        if (!link) return;

        const href = link.getAttribute("href").toLowerCase();

        if (
            href === currentPage ||
            (currentPage === "" && href === "index.html")
        ) {

            item.classList.add("active");

        }

    });

    /* ===========================
       MOBILE
    =========================== */

    if (window.innerWidth <= 960) {

        sidebar.classList.add("collapsed");

    }

    /* botão hamburguer futuramente */

    window.openSidebar = function () {

        sidebar.classList.add("open");

    };

    window.closeSidebar = function () {

        sidebar.classList.remove("open");

    };

    /* ===========================
       FECHAR AO CLICAR FORA
    =========================== */

    document.addEventListener("click", (e) => {

        if (window.innerWidth > 960) return;

        if (
            !sidebar.contains(e.target) &&
            e.target !== toggleButton
        ) {

            sidebar.classList.remove("open");

        }

    });

    /* ===========================
       RESPONSIVO
    =========================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 960) {

            sidebar.classList.remove("open");

        }

    });

    /* ===========================
       LOGOUT
    =========================== */

    const logout = document.getElementById("logout");

    if (logout) {

        logout.addEventListener("click", () => {

            const confirmar = confirm("Deseja realmente sair?");

            if (!confirmar) return;

            localStorage.removeItem("usuario");

            window.location.href = "login.html";

        });

    }

});
