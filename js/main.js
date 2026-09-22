/* ==========================================================================
   Sankalp Vaish — portfolio behaviour
   Replaces jQuery + Bootstrap bundle + jQuery-easing (~250KB) with this file.

   Deliberately classic scripts, not ES modules: the site must keep working
   when index.html is opened directly from disk (file://), where module
   loading is blocked by CORS.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------- helpers */

  /** Escape user/data-supplied text before inserting it into markup. */
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /** Escape, then render **bold** spans. Used for author lists. */
  function escWithBold(value) {
    return esc(value).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  var ICON_EXTERNAL =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>' +
    '<polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

  var ICON_CODE =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>';

  var ICON_PAPER =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
    '<polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/>' +
    '<line x1="8" y1="17" x2="13" y2="17"/></svg>';

  var ICON_AWARD =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>';

  function tagsMarkup(tags) {
    if (!tags || !tags.length) return "";
    return (
      '<ul class="tags">' +
      tags
        .map(function (tag) {
          return '<li class="tag">' + esc(tag) + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }

  /**
   * Build the link row for a project. Each label gets the project title
   * appended in a visually-hidden span, so a screen reader hears
   * "Code — Gmail RAG Assistant" rather than fifteen identical "Code" links.
   */
  function linksMarkup(links, title) {
    if (!links) return "";

    // Paper first: a peer-reviewed publication is the strongest link a project
    // can carry.
    var defs = [
      { key: "paper", label: "Paper", icon: ICON_PAPER },
      { key: "code", label: "Code", icon: ICON_CODE },
      { key: "demo", label: "Live demo", icon: ICON_EXTERNAL },
      { key: "writeup", label: "Write-up", icon: ICON_EXTERNAL },
    ];

    var items = defs
      .filter(function (def) {
        return links[def.key];
      })
      .map(function (def) {
        return (
          '<a href="' +
          esc(links[def.key]) +
          '" target="_blank" rel="noopener noreferrer">' +
          def.icon +
          esc(def.label) +
          '<span class="visually-hidden"> — ' +
          esc(title) +
          "</span></a>"
        );
      });

    if (!items.length) return "";
    return '<div class="card__links">' + items.join("") + "</div>";
  }

  /* --------------------------------------------------------------- projects */

  function renderProjects() {
    var featuredHost = document.getElementById("projects-featured");
    var archiveHost = document.getElementById("projects-archive");

    if (featuredHost && typeof FEATURED_PROJECTS !== "undefined") {
      featuredHost.innerHTML = FEATURED_PROJECTS.map(function (p) {
        return (
          '<li class="card">' +
          '<div class="card__head">' +
          "<h3>" +
          esc(p.title) +
          "</h3>" +
          '<span class="card__date">' +
          esc(p.period) +
          "</span>" +
          "</div>" +
          '<p class="card__summary">' +
          esc(p.summary) +
          "</p>" +
          (p.award
            ? '<span class="card__award">' + ICON_AWARD + esc(p.award) + "</span>"
            : "") +
          tagsMarkup(p.tags) +
          linksMarkup(p.links, p.title) +
          "</li>"
        );
      }).join("");
    }

    if (archiveHost && typeof ARCHIVE_PROJECTS !== "undefined") {
      archiveHost.innerHTML = ARCHIVE_PROJECTS.map(function (p) {
        return (
          '<li class="archive__item">' +
          "<h4>" +
          esc(p.title) +
          "</h4>" +
          '<span class="card__date">' +
          esc(p.period) +
          "</span>" +
          "<p>" +
          esc(p.summary) +
          "</p>" +
          tagsMarkup(p.tags) +
          linksMarkup(p.links, p.title) +
          "</li>"
        );
      }).join("");

      var count = document.getElementById("archive-count");
      if (count) count.textContent = "(" + ARCHIVE_PROJECTS.length + ")";
    }
  }

  /* ----------------------------------------------------------------- skills */

  function renderSkills() {
    var host = document.getElementById("skill-groups");
    if (!host || typeof SKILL_GROUPS === "undefined") return;

    host.innerHTML = SKILL_GROUPS.map(function (group) {
      return (
        '<div class="skill-group">' +
        '<h3 class="skill-group__title">' +
        esc(group.group) +
        "</h3>" +
        '<ul class="skill-list">' +
        group.items
          .map(function (item) {
            var icon = item.icon
              ? '<i class="' + esc(item.icon) + '" aria-hidden="true"></i>'
              : "";
            return '<li class="skill">' + icon + esc(item.name) + "</li>";
          })
          .join("") +
        "</ul></div>"
      );
    }).join("");
  }

  /* ----------------------------------------------------------- publications */

  /**
   * Reveal an optional section, or drop it entirely when it has no data — so an
   * empty list never shows up as a bare heading with nothing under it.
   * Returns the element to render into, or null if there is nothing to render.
   */
  function prepareOptionalSection(sectionId, navId, hostId, hasData) {
    var section = document.getElementById(sectionId);
    var navItem = document.getElementById(navId);

    if (!hasData) {
      if (section) section.remove();
      if (navItem) navItem.remove();
      return null;
    }

    if (section) section.hidden = false;
    if (navItem) navItem.hidden = false;
    return document.getElementById(hostId);
  }

  function renderPublications() {
    var host = prepareOptionalSection(
      "publications",
      "nav-publications",
      "publications-list",
      typeof PUBLICATIONS !== "undefined" && PUBLICATIONS.length > 0
    );
    if (!host) return;

    var linkLabels = {
      pdf: "PDF",
      doi: "DOI",
      arxiv: "arXiv",
      code: "Code",
      poster: "Poster",
      slides: "Slides",
    };

    host.innerHTML = PUBLICATIONS.map(function (pub) {
      var links = Object.keys(linkLabels)
        .filter(function (key) {
          return pub.links && pub.links[key];
        })
        .map(function (key) {
          return (
            '<a href="' +
            esc(pub.links[key]) +
            '" target="_blank" rel="noopener noreferrer">[' +
            esc(linkLabels[key]) +
            "]</a>"
          );
        });

      return (
        '<li class="publication">' +
        '<h3 class="publication__title">' +
        esc(pub.title) +
        "</h3>" +
        '<p class="publication__authors">' +
        escWithBold(pub.authors) +
        "</p>" +
        '<p class="publication__venue">' +
        esc(pub.venue) +
        (pub.year ? ", " + esc(pub.year) : "") +
        (pub.status
          ? '<span class="publication__status">' + esc(pub.status) + "</span>"
          : "") +
        "</p>" +
        (links.length
          ? '<div class="publication__links">' + links.join("") + "</div>"
          : "") +
        "</li>"
      );
    }).join("");
  }

  /* --------------------------------------------------------------- service */

  function renderService() {
    var host = prepareOptionalSection(
      "service",
      "nav-service",
      "service-list",
      typeof SERVICE !== "undefined" && SERVICE.length > 0
    );
    if (!host) return;

    host.innerHTML = SERVICE.map(function (item) {
      return (
        '<li class="service-item">' +
        '<span class="service-item__role">' +
        esc(item.role) +
        "</span>" +
        '<span class="service-item__venue">' +
        esc(item.venue) +
        "</span>" +
        (item.year ? '<span class="service-item__year">' + esc(item.year) + "</span>" : "") +
        "</li>"
      );
    }).join("");
  }

  /* ------------------------------------------------------------ mobile nav */

  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("primary-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.dataset.open = String(open);
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Collapse after navigating, but only in the mobile layout where the
    // toggle is actually visible.
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a") && toggle.offsetParent !== null) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ------------------------------------------------------------- scrollspy */

  /** Marks the nav link for the section currently in view with aria-current. */
  function initScrollspy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('#primary-nav a[href^="#"]')
    );
    if (!links.length || !("IntersectionObserver" in window)) return;

    var byId = {};
    var sections = [];

    links.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      if (!section) return;
      byId[id] = link;
      sections.push(section);
    });

    var visible = {};

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible[entry.target.id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        });

        // Highlight whichever observed section occupies the most viewport.
        var best = null;
        var bestRatio = 0;
        Object.keys(visible).forEach(function (id) {
          if (visible[id] > bestRatio) {
            bestRatio = visible[id];
            best = id;
          }
        });

        links.forEach(function (link) {
          link.removeAttribute("aria-current");
        });
        if (best && byId[best]) {
          byId[best].setAttribute("aria-current", "true");
        }
      },
      { threshold: [0, 0.15, 0.35, 0.6, 0.9] }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ------------------------------------------------------------------ init */

  function init() {
    renderProjects();
    renderSkills();
    renderPublications();
    renderService();
    initNav();
    initScrollspy();

    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
