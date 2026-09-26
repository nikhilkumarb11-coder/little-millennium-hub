/**
 * Campus configs — one entry per campus.
 *
 * Links (after GitHub Pages deploy):
 *   https://YOURUSER.github.io/YOUR-REPO/                 → demo (default)
 *   https://YOURUSER.github.io/YOUR-REPO/?campus=demo
 *   https://YOURUSER.github.io/YOUR-REPO/?campus=sullurpeta
 *
 * To add a campus: copy a block, change id + branding + apiUrl + passcode,
 * add logo/stamp files, redeploy. No need for a new repository.
 *
 * apiUrl = Google Apps Script Web App URL for THAT campus's Sheet.
 * passcode must match SCRIPT_PASSWORD in that campus's Code.gs.
 */
window.LM_DEFAULT_CAMPUS = "demo";

window.LM_CAMPUSES = {
    demo: {
        id: "demo",
        pageTitle: "LM Campus ERP — Demo / Trial",
        brandName: "Little Millennium",
        campusLabel: "Demo / Trial",
        authSubtitle: "Demo Campus Management",
        receiptHeader: "Little Millennium Preschool — Demo",
        unlockLabel: "Unlock Demo ERP",
        passcode: "ApexSullurpeta2026!",
        apiUrl: "https://script.google.com/macros/s/AKfycbyaykhdrvyBUCNwruy0IGGpDK4zG14QaoHG1cYurVDww6qMsBIRuIfg7NxygrE6KLha8w/exec",
        logoFile: "lm-logo.png",
        stampFile: "lm-stamp.jpg",
        logoVersion: "2",
        stampVersion: "1"
    },
    sullurpeta: {
        id: "sullurpeta",
        pageTitle: "Little Millennium Sullurpeta Master ERP",
        brandName: "Little Millennium",
        campusLabel: "Sullurpeta",
        authSubtitle: "Sullurpeta Campus Management",
        receiptHeader: "Little Millennium Preschool-Sullurpeta",
        unlockLabel: "Unlock Master ERP",
        // Same Sheet as demo for now — point apiUrl + passcode at a dedicated Sheet when ready
        passcode: "admin",
        apiUrl: "https://script.google.com/macros/s/AKfycbym-u2E5G8BLw4B-ILBCISl5VC00H_cziJN_c52TceMkXOWYaya5iTDIumBuZzT6cuL/exec",
        logoFile: "lm-logo.png",
        stampFile: "lm-stamp.jpg",
        logoVersion: "2",
        stampVersion: "1"
    }
};
