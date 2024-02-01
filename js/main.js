document.addEventListener('DOMContentLoaded', ()=>{
    const home = document.getElementById("home");
    const homeBtn = document.getElementById("homeBtn");
    const projects = document.getElementById("projects");
    const projectsBtn = document.getElementById("projectsBtn");
    const certs = document.getElementById("certs");
    const certsBtn = document.getElementById("certsBtn");
    const contact = document.getElementById("contact");
    const contactBtn = document.getElementById("contactBtn");
    const jttBtn = document.getElementById("jumpToTop");

    homeBtn.addEventListener("click", ()=>{
        home.scrollIntoView(false);
    });

    jttBtn.addEventListener("click",()=>{
        home.scrollIntoView(false);
    });

    projectsBtn.addEventListener("click", ()=>{
        projects.scrollIntoView();
    });

    certsBtn.addEventListener("click", ()=>{
        certs.scrollIntoView();
    });

    contactBtn.addEventListener("click", ()=>{
        contact.scrollIntoView();
    });

    let launchButton = document.getElementById("draftedLaunchButton");

    if(window.screen.width < 1920){
        launchButton.remove();
    }
});