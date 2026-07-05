import { initAvg } from "./effects/avg.js";
import { initSalary } from "./effects/salary.js";
import { initUSD } from "./effects/usd.js";
import { initMath } from "./effects/math.js";

import { initStudent } from "./effects/student.js";
// import { initElectric } from "./effects/electric.js";
// import { initTax } from "./effects/tax.js";
// import { initNet } from "./effects/net.js";

document.addEventListener("DOMContentLoaded", () => {
    initSalary();
    initAvg();
    initUSD ();
    initMath();
    initStudent();
    // initElectric();
    // initTax();
    // initNet();
});
