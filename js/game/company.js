define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Company = void 0;
    class Company {
        // static workerInCompany=20;
        constructor(world, companyID, productid, workers, workersIn, workersOut, x, y) {
            this.companyID = companyID;
            this.productid = productid;
            this.workers = workers;
            this.workersIn = workersIn;
            this.workersOut = workersOut;
            this.x = x;
            this.y = y;
            this.world = world;
        }
        nextTick() {
        }
        render() {
            var _this = this;
            var text = "";
            var fact = 50;
            text = `
              <svg style="top:${((this.y + 2) * fact) + "px"};left:${((this.x + 3) * fact) + "px"};width:${fact * 3};height:${fact * 2};position:absolute" class="company">
                <polygon points="${1 * fact},0 ${2 * fact},0 ${3 * fact},${1 * fact} ${2 * fact},${2 * fact} ${1 * fact},${2 * fact} 0,${1 * fact}" style="fill:none;stroke:black;stroke-width:2;" />
                 <text x="${2 * fact}" y="${1 * fact}" fill="red">${this.productid}</text>
            </svg>
        `;
            this.dom = document.createRange().createContextualFragment(text).children[0];
            this.world.dom.appendChild(this.dom);
            // this.dom.setAttribute("src", "<span  class='mdi  mdi-content-save-outline'></span>");
            //this.dom.style.cursor="url(https://www.w3schools.com/cssref/myBall.cur),auto";
            this.dom.setAttribute("companyid", this.companyID.toString());
            this.dom["company"] = this;
            // this.dom.style.top = ((this.y+2)*fact).toString() + "px";
            // this.dom.style.left = ((this.x+3)*fact).toString() + "px";
            console.log(this.dom.style.top + "   " + ((this.x + 3) * fact).toString() + "px");
        }
    }
    exports.Company = Company;
});
//# sourceMappingURL=company.js.map