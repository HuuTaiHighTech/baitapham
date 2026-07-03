import { initStudent } from "./effects/student.js";
import { initElectric } from "./effects/electric.js";
import { initTax } from "./effects/tax.js";
import { initNet } from "./effects/net.js";
document.addEventListener("DOMContentLoaded", () => {
    initStudent();
    initElectric();
    initTax();
    initNet();
});
