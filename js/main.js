import { initSalary } from "./effects/salary.js";
import { mainUSD } from "./effects/usd.js";
import { mainAVG } from "./effects/avg.js";
import { mainRectangle } from "./effects/math.js";
import { initdigit } from "./effects/digit.js";

// import { initStudent } from "./effects/student.js";
// import { initElectric } from "./effects/electric.js";
// import { initTax } from "./effects/tax.js";
// import { initNet } from "./effects/net.js";
// initSalary();
document.addEventListener("DOMContentLoaded", () => {
    initSalary();
    mainUSD();
    mainAVG();
    mainRectangle();
    initdigit();
    // initStudent();
    // initElectric();
    // initTax();
    // initNet();
});
