define(["require", "exports", "game/company"], function (require, exports, company_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.World = void 0;
    class World {
        constructor() {
            this.type = "World";
            this.lastUpdate = undefined;
            var _this = this;
            // console.log("CreateIntervall"+ this._intervall );
        }
        getElementOffset(el) {
            let top = 0;
            let left = 0;
            let element = el;
            // Loop through the DOM tree
            // and add it's parent's offset to get page offset
            do {
                top += element.offsetTop || 0;
                left += element.offsetLeft || 0;
                element = element.offsetParent;
            } while (element);
            return {
                top,
                left,
            };
        }
        oncontextmenu(evt) {
            evt.preventDefault();
            /*
                     if(this.selection){
                         var pt=this.getElementOffset(evt.currentTarget);
                        (<Airplane>this.selection).flyTo(evt.x-pt.left-8,evt.y-pt.top-10);
                        console.log(evt.offsetX);
                    }*/
        }
        onclick(th) {
            var _a;
            console.log("close");
            (_a = this.selection) === null || _a === void 0 ? void 0 : _a.unselect();
        }
        updateUI() {
        }
        nextTick() {
        }
        newGame() {
            //createCities(this, 15);
            this.companies = [];
            this.companies.push(new company_1.Company(this, 0, 0, 1, [1], 1, 3, 1));
            this.companies.push(new company_1.Company(this, 1, 1, 1, [1], 1, 7, 1));
            this.companies.push(new company_1.Company(this, 2, 2, 1, [1], 1, 11, 1));
            this.companies.push(new company_1.Company(this, 3, 3, 1, [1], 1, 5, 2));
            this.companies.push(new company_1.Company(this, 4, 4, 1, [1], 1, 9, 2));
            this.companies.push(new company_1.Company(this, 5, 5, 1, [1], 1, 13, 2));
            this.companies.push(new company_1.Company(this, 6, 6, 1, [1], 1, 3, 3));
            this.companies.push(new company_1.Company(this, 7, 7, 1, [1], 1, 7, 3));
            this.companies.push(new company_1.Company(this, 8, 8, 1, [1], 1, 11, 3));
            this.companies.push(new company_1.Company(this, 9, 9, 1, [1], 1, 5, 4));
            this.companies.push(new company_1.Company(this, 10, 10, 1, [1], 1, 9, 4));
            this.companies.push(new company_1.Company(this, 11, 11, 1, [1], 1, 13, 4));
        }
        render(dom) {
            var _this = this;
            this.dom = dom;
            for (var x = 0; x < this.companies.length; x++) {
                this.companies[x].render();
                //            this.companies[x].update();
            }
        }
        destroy() {
        }
    }
    exports.World = World;
});
//# sourceMappingURL=world.js.map