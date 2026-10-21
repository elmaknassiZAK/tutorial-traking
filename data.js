// =============================================
//  DATA DYAL L COURSE
//  Bach tbeddel l progress : beddel "status" dyal nhar
//    "todo"  = mazal
//    "doing" = kankhdem fih
//    "done"  = sali
//  Men be3d : git add . && git commit -m "J1 sali" && git push
//
//  lesson: true       → kayn cours f lessons/<id>.md
//  project: "path/"   → fin kayn l projet dyal had nhar
//  projectLive: true  → beddelha l true mli tpushi l projet (bach ybano f dashboard)
// =============================================

window.COURSE = {
  student: "elmaknassiZAK",
  startDate: "2026-10-21",
  weeks: [
    {
      id: 1, title: "HTML + Git asas", project: "Page dyal profil",
      days: [
        { id: "J1", lesson: true, project: "projects/j1-profil/", projectName: "Page dyal profil", projectLive: false, date: "2026-10-21", type: "Lesson", status: "doing", title: "Setup + HTML lowel", details: "VS Code + Live Server. Structure HTML, h1-h6, p, ul/li, a, img. Exercice : page dyal profil." },
        { id: "J2", lesson: true, date: "2026-10-22", type: "Lesson", status: "todo", title: "Lists, liens, images, tables", details: "ol vs ul, liens internes w externes, chemins relatifs, table. Exercice : emploi du temps." },
        { id: "J3", lesson: true, project: "projects/j3-inscription/", projectName: "Formulaire d'inscription", projectLive: false, date: "2026-10-23", type: "Lesson", status: "todo", title: "Formulaires", details: "form, label, input, select, textarea, button. Exercice : formulaire d'inscription." },
        { id: "J4", lesson: true, date: "2026-10-24", type: "Lesson", status: "todo", title: "HTML sémantique", details: "header, nav, main, section, article, footer + accessibilité asas." },
        { id: "J5", lesson: true, project: "projects/j5-defi/", projectName: "Défi : recette dyal tajine", projectLive: false, date: "2026-10-25", type: "Révision", status: "todo", title: "Révision S1 + quiz", details: "Rja3 l kolchi bla notes. Quiz m3a Claude." },
        { id: "J6", lesson: true, date: "2026-10-26", type: "Lesson", status: "todo", title: "Git + GitHub asas", details: "git init, add, commit, push. Push page dyal profil." },
        { id: "J7", lesson: true, project: "projects/j7-club/", projectName: "Site dyal club (3 pages)", projectLive: false, date: "2026-10-27", type: "Projet", status: "todo", title: "Projet : site 3 pages HTML", details: "Accueil, À propos, Contact. Push l GitHub." }
      ]
    },
    {
      id: 2, title: "CSS asas", project: "Style l site 3 pages",
      days: [
        { id: "J8", date: "2026-10-28", type: "Lesson", status: "todo", title: "CSS intro : selectors, couleurs, fonts", details: "style.css, selectors, color, background, fonts." },
        { id: "J9", date: "2026-10-29", type: "Lesson", status: "todo", title: "Box model", details: "margin, padding, border, box-sizing. Exercice : cards." },
        { id: "J10", date: "2026-10-30", type: "Lesson", status: "todo", title: "Units + typographie", details: "px, rem, em, %, vw/vh, Google Fonts." },
        { id: "J11", date: "2026-10-31", type: "Lesson", status: "todo", title: ":hover, transitions, spécificité", details: "Pseudo-classes, transition, cascade." },
        { id: "J12", date: "2026-11-01", type: "Révision", status: "todo", title: "Révision S2 + quiz", details: "Rja3 l S1 w S2." },
        { id: "J13", date: "2026-11-02", type: "Lesson", status: "todo", title: "display + position", details: "block, inline, relative, absolute, fixed, sticky, z-index." },
        { id: "J14", date: "2026-11-03", type: "Projet", status: "todo", title: "Projet : style l site 3 pages", details: "Design kamel l site dyal J7." }
      ]
    },
    {
      id: 3, title: "Flexbox, Grid, Responsive", project: "Landing page responsive",
      days: [
        { id: "J15", date: "2026-11-04", type: "Lesson", status: "todo", title: "Flexbox 1", details: "flex-direction, justify-content, align-items. Flexbox Froggy." },
        { id: "J16", date: "2026-11-05", type: "Lesson", status: "todo", title: "Flexbox 2", details: "wrap, gap, grow/shrink/basis. Navbar + galerie." },
        { id: "J17", date: "2026-11-06", type: "Lesson", status: "todo", title: "CSS Grid", details: "grid-template, fr, gap, areas. Grid Garden." },
        { id: "J18", date: "2026-11-07", type: "Lesson", status: "todo", title: "Responsive design", details: "viewport, media queries, mobile-first." },
        { id: "J19", date: "2026-11-08", type: "Révision", status: "todo", title: "Révision S3 + quiz", details: "Flexbox w Grid." },
        { id: "J20", date: "2026-11-09", type: "Projet", status: "todo", title: "Projet : landing page (1)", details: "Hero, features, pricing, footer." },
        { id: "J21", date: "2026-11-10", type: "Projet", status: "todo", title: "Projet : landing page (2) + deploy", details: "Responsive + GitHub Pages." }
      ]
    },
    {
      id: 4, title: "JavaScript asas", project: "Exercices + mini jeux",
      days: [
        { id: "J22", date: "2026-11-11", type: "Lesson", status: "todo", title: "JS intro : variables + types", details: "console.log, let/const, types, typeof." },
        { id: "J23", date: "2026-11-12", type: "Lesson", status: "todo", title: "Operators + strings", details: "Opérateurs, template literals, méthodes dyal strings." },
        { id: "J24", date: "2026-11-13", type: "Lesson", status: "todo", title: "Conditions", details: "if/else, switch, ===, truthy/falsy, ternaire." },
        { id: "J25", date: "2026-11-14", type: "Lesson", status: "todo", title: "Boucles", details: "for, while, break/continue." },
        { id: "J26", date: "2026-11-15", type: "Révision", status: "todo", title: "Révision S4 + quiz", details: "JS asas." },
        { id: "J27", date: "2026-11-16", type: "Projet", status: "todo", title: "FizzBuzz + devine le nombre", details: "Exercices pratiques." },
        { id: "J28", date: "2026-11-17", type: "Projet", status: "todo", title: "Debugging + algos sghar", details: "DevTools, breakpoints, 5 algos." }
      ]
    },
    { id: 5, title: "Functions, arrays, objects, ES6", project: "Gestion d'étudiants", days: [] },
    { id: 6, title: "DOM + Events", project: "To-do list", days: [] },
    { id: 7, title: "fetch, async/await, APIs", project: "App dyal météo", days: [] },
    { id: 8, title: "Git pro + Tailwind CSS", project: "Portfolio v1", days: [] },
    { id: 9, title: "React asas", project: "Quiz app", days: [] },
    { id: 10, title: "React hooks + Router", project: "App multi-pages", days: [] },
    { id: 11, title: "TypeScript + React", project: "Refacto b TS", days: [] },
    { id: 12, title: "Projet final + deploy", project: "Mini e-commerce", days: [] }
  ]
};
