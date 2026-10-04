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
 *
 * classes = class list shown everywhere (admission, filters, home chips, transfer, receipts).
 *   code   → value saved in the Sheet "Class" column (avoid renaming once students exist)
 *   label  → name shown on screen and on receipts (safe to change anytime)
 *   color  → home chip colour: sky | emerald | amber | rose | indigo | violet | teal | orange | lime | pink
 *   legacy → optional old codes in the Sheet that should be read as this class
 * Order matters: the last class is the one that can "Graduate / leave school".
 * Day Care is NOT listed here — it comes from the separate Day Care billing option.
 */
window.LM_DEFAULT_CAMPUS = "demo";

window.LM_CAMPUSES = {
    demo: {
        id: "demo",
        pageTitle: "Campus ERP — Demo / Trial",
        brandName: "School Name",
        campusLabel: "Demo / Trial",
        authSubtitle: "Demo Campus Management",
        receiptHeader: "School Name — Demo",
        unlockLabel: "Unlock Demo ERP",
        passcode: "ApexSullurpeta2026!",
        apiUrl: "https://script.google.com/macros/s/AKfycbyaykhdrvyBUCNwruy0IGGpDK4zG14QaoHG1cYurVDww6qMsBIRuIfg7NxygrE6KLha8w/exec",
        logoFile: "Dummy-logo.png",
        stampFile: "Dummy-stamp.jpg",
        logoVersion: "2",
        stampVersion: "1",
        classes: [
            { code: "PG",  label: "PG",  color: "sky",     legacy: ["DR"] },
            { code: "Nur", label: "Nur", color: "emerald", legacy: ["EW"] },
            { code: "LKG", label: "LKG", color: "amber",   legacy: ["RTF1"] },
            { code: "UKG", label: "UKG", color: "rose",    legacy: ["RTF2"] }
        ]
    },
    sullurpeta: {
        id: "sullurpeta",
        pageTitle: "Little Millennium Sullurpeta Master ERP",
        brandName: "Little Millennium",
        campusLabel: "Sullurpeta",
        authSubtitle: "Sullurpeta Campus Management",
        receiptHeader: "Little Millennium Preschool-Sullurpeta",
        unlockLabel: "Unlock Master ERP",
        passcode: "admin",
        apiUrl: "https://script.google.com/macros/s/AKfycbym-u2E5G8BLw4B-ILBCISl5VC00H_cziJN_c52TceMkXOWYaya5iTDIumBuZzT6cuL/exec",
        logoFile: "lm-logo.png",
        stampFile: "lm-stamp-SPE.jpg",
        logoVersion: "2",
        stampVersion: "1",
        classes: [
            { code: "DR",   label: "DR",   color: "sky" },
            { code: "EW",   label: "EW",   color: "emerald" },
            { code: "RTF1", label: "RTF1", color: "amber" },
            { code: "RTF2", label: "RTF2", color: "rose" }
        ]
    },
    tadepalligudam: {
        id: "tadepalligudam",
        pageTitle: "Little Millennium Tadepalligudam Master ERP",
        brandName: "Little Millennium",
        campusLabel: "Tadepalligudam",
        authSubtitle: "Tadepalligudam Campus Management",
        receiptHeader: "Little Millennium Preschool-Tadepalligudam",
        unlockLabel: "Unlock Master ERP",
        // Tadepalligudam Sheet's Code.gs must have SCRIPT_PASSWORD = "admin"
        passcode: "admin",
        apiUrl: "https://script.google.com/macros/s/AKfycbzFutraB3ga7X5bfrTHNvl-Hi9hiMcHTVlCp3e3AYi5n4nXT013RJwqLECCh3jZv6ljZg/exec",
        logoFile: "lm-logo.png",
        stampFile: "lm-stamp-TDG.jpg",
        logoVersion: "2",
        stampVersion: "1",
        classes: [
            { code: "DR",   label: "DR",   color: "sky" },
            { code: "EW",   label: "EW",   color: "emerald" },
            { code: "RTF1", label: "RTF1", color: "amber" },
            { code: "RTF2", label: "RTF2", color: "rose" }
        ]
    }
};
