var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define("game/icons", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Icons = void 0;
    class Icons {
    }
    exports.Icons = Icons;
    Icons.factory = "<span  class='mdi mdi-factory'></span>";
    Icons.shop = "<span  class='mdi mdi-shop'></span>";
    Icons.money = "<span style='color:darkgreen' class='mdi mdi-cash-100'></span>";
    Icons.home = "<span  class='mdi  mdi-home-outline'></span>";
    Icons.people = "<span  class='mdi  mdi-human-male'></span>";
    Icons.table = "<span  class='mdi  mdi-table-large'></span>";
    Icons.route = "<span  class='mdi  mdi-recycle-variant'></span>";
    Icons.info = "<span  class='mdi  mdi-information-outline'></span>";
    Icons.trash = "<span  class='mdi  mdi-delete-forever-outline'></span>";
    Icons.edit = "<span  class='mdi  mdi-square-edit-outline'></span>";
    Icons.save = "<span  class='mdi  mdi-content-save-outline'></span>";
    Icons.load = "<span  class='mdi  mdi-folder-open-outline'></span>";
    Icons.debug = "<span  class='mdi  mdi-bug-outline'></span>";
    Icons.plus = "<span  class='mdi  mdi-plus-circle-outline'></span>";
    Icons.minus = "<span  class='mdi  mdi-minus-circle-outline'></span>";
    Icons.fillDown = "<span  class='mdi  mdi-elevator-down'></span>";
    Icons.food = "<span  class='mdi  mdi-food-variant'></span>";
    Icons.copy = "<span  class='mdi  mdi-content-copy'></span>";
    Icons.airplane = "<span  class='mdi  mdi-airplane'></span>";
    Icons.toright = "<span  class='mdi  mdi-arrow-right-bold-outline'></span>";
    Icons.toleft = "<span  class='mdi  mdi-arrow-left-bold-outline'></span>";
    Icons.remove = "<span  class='mdi  mdi-delete-forever-outline'></span>";
    Icons.nine = "<span  class='mdi  mdi-numeric-9-plus-circle-outline'></span>";
    Icons.diagram = "<span  class='mdi  mdi-chart-multiple'></span>";
    Icons.refresh = "<span  class='mdi  mdi-refresh'></span>";
    Icons.airport = "<span  class='mdi  mdi-airport'></span>";
    Icons.hammer = "<span  class='mdi  mdi-hammer-wrench'></span>";
    Icons.store = "<span  class='mdi  mdi-store'></span>";
    Icons.stare = "<span  class='mdi  mdi-star'></span>";
    Icons.wrench = "<span  class='mdi mdi-wrench-outline'></span>";
    Icons.move = "<span  class='mdi mdi-arrow-expand-all'></span>";
    Icons.capital = "<span  class='mdi mdi-city-variant-outline'></span>";
    Icons.down = "<span  class='mdi mdi-arrow-down'></span>";
    Icons.up = "<span  class='mdi mdi-arrow-up'></span>";
});
define("game/tools", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLocalNumber = exports.getRandomInt = void 0;
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    exports.getRandomInt = getRandomInt;
    function getLocalNumber(num) {
        if (num < 10000)
            return num.toLocaleString();
        else if (num < 10000000)
            return Math.floor(num / 1000).toLocaleString() + "T";
        else if (num < 10000000000)
            return Math.floor(num / 1000000).toLocaleString() + "M";
        else if (num < 10000000000000)
            return Math.floor(num / 1000000000).toLocaleString() + "Mrd";
        else
            return Math.floor(num / 1000000000000).toLocaleString() + "Bil";
    }
    exports.getLocalNumber = getLocalNumber;
});
define("game/product", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.test = exports.Product = void 0;
    class Product {
        constructor(name = undefined, image = undefined, level = undefined, consume = undefined, forpeoplelevel = undefined, forsodierlevel = undefined, speed = undefined) {
            this.type = "Product";
            //Object.assign(this, prod);
            this.name = name;
            this.image = image;
            this.speed = speed;
            this.level = level;
            this.consume = consume;
            this.forpeoplelevel = forpeoplelevel;
            this.forsoldierlevel = forsodierlevel;
        }
        static find(prodname) {
            var ret = undefined;
            for (var x = 0; x < parameter.allProducts.length; x++) {
                if (parameter.allProducts[x].name === prodname)
                    return parameter.allProducts[x];
            }
        }
        static findProductsForLevel(level) {
            var ret = [];
            for (var x = 0; x < parameter.allProducts.length; x++) {
                if (parameter.allProducts[x].level === level)
                    ret.push(parameter.allProducts[x]);
            }
            return ret;
        }
        static init(all) {
            var keys = [];
            for (var x = 0; x < all.length; x++) {
                keys.push(all[x].name);
            }
            var tests = [];
            for (var x = 0; x < all.length; x++) {
                tests.push(all[x].name);
                if (all[x].name === "Helfer")
                    Product.productHelper = x;
                if (all[x].name === "Soldat")
                    Product.productSoldier = x;
                if (all[x].name === "Stein")
                    Product.productStone = x;
                if (all[x].name === "Holz")
                    Product.productWood = x;
                if (all[x].name === "Tor")
                    Product.productGate = x;
                if (all[x].name === "Turm")
                    Product.productTower = x;
                if (all[x].name === "Burg")
                    Product.productCastle = x;
                for (var y = 0; y < all[x].consume.length; y++) {
                    var org = all[x].consume[y];
                    if (tests.indexOf(all[x].consume[y]) === -1) {
                        console.log(org + " nicht definiert bei " + all[x].name);
                    }
                    all[x].consume[y] = keys.indexOf(all[x].consume[y]); //move string to number
                }
                all[x].id = x; //setid
            }
            return all;
        }
    }
    exports.Product = Product;
    Product.productHelper = 0;
    Product.productSoldier = 0;
    Product.productWood = 0;
    Product.productStone = 0;
    Product.productGate = 0;
    Product.productTower = 0;
    Product.productCastle = 0;
    function test() {
    }
    exports.test = test;
});
define("game/diagramdialog", ["require", "exports", "game/icons"], function (require, exports, icons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagramDialog = void 0;
    class DiagramDialog {
        constructor() {
            this.create();
        }
        static getInstance() {
            if (DiagramDialog.instance === undefined)
                DiagramDialog.instance = new DiagramDialog();
            return DiagramDialog.instance;
        }
        bindActions() {
            var _this = this;
            document.getElementById("peopleWithOneClick").addEventListener('change', (e) => {
                var num = parseInt(document.getElementById("peopleWithOneClick").value);
                parameter.peopleWithOneClick = num;
                _this.world.game.parameter.peopleWithOneClick = num;
                _this.update();
            });
            document.getElementById("soldierWithOneClick").addEventListener('change', (e) => {
                var num = parseInt(document.getElementById("soldierWithOneClick").value);
                parameter.soldierWithOneClick = num;
                _this.world.game.parameter.soldierWithOneClick = num;
                _this.update();
            });
            document.getElementById("buildWithDoubleClick").addEventListener('change', (e) => {
                var num = parseInt(document.getElementById("buildWithDoubleClick").value);
                parameter.buildWithDoubleClick = num;
                _this.world.game.parameter.buildWithDoubleClick = num;
                _this.update();
            });
        }
        create() {
            //template for code reloading
            var sdom = `
          <div hidden id="diagramdialog" class="diagramdialog">
            <div></div>
           </div>
        `;
            this.dom = document.createRange().createContextualFragment(sdom).children[0];
            var old = document.getElementById("diagramdialog");
            if (old) {
                old.parentNode.removeChild(old);
            }
            var _this = this;
            var sdom = `
          <div>
            <button id="diagramdialog-refresh" title="refresh data"  class="mybutton">` + icons_1.Icons.refresh + `</button>
                            
            <div id="diagramdialog-tabs">
                <ul>
                    <li><a href="#diagramdialog-settings" id="diagramdialog-settings-tab" class="diagramdialog-tabs">Settings</a></li>
                </ul>
                 <div id="diagramdialog-settings">   
                       transfer people with one click: <input id="peopleWithOneClick"  value="""/><br/>
                       transfer soldiers with one click: <input id="soldierWithOneClick"  value="""/><br/>
                       build with doubleclick: <input id="buildWithDoubleClick"  value="""/><br/>
                </div>
            </div>
           </div> 
            `;
            var newdom = document.createRange().createContextualFragment(sdom).children[0];
            this.dom.removeChild(this.dom.children[0]);
            this.dom.appendChild(newdom);
            document.body.appendChild(this.dom);
            $("#diagramdialog-tabs").tabs({
            //collapsible: true
            });
            //        document.getElementById("citydialog-prev")
            setTimeout(() => {
                $("#diagramdialog-tabs").tabs({
                //collapsible: true
                });
                _this.bindActions();
            }, 500);
            //document.createElement("span");
        }
        update() {
            var _this = this;
            if (document.activeElement !== document.getElementById("peopleWithOneClick")) {
                document.getElementById("peopleWithOneClick").value = "" + parameter.peopleWithOneClick;
            }
            if (document.activeElement !== document.getElementById("soldierWithOneClick"))
                document.getElementById("soldierWithOneClick").value = "" + parameter.soldierWithOneClick;
            try {
                if (!$(this.dom).dialog('isOpen')) {
                    return;
                }
            }
            catch (_a) {
                return;
            }
        }
        show() {
            var _this = this;
            this.dom.removeAttribute("hidden");
            this.update();
            //ui-tabs-active
            $(this.dom).dialog({
                title: "Statistics",
                width: "400px",
                draggable: true,
                //     position:{my:"left top",at:"right top",of:$(document)} ,
                open: function (event, ui) {
                    _this.update();
                },
                close: function () {
                },
                create: function (e) {
                    setTimeout(() => {
                        $(e.target).dialog("widget").find(".ui-dialog-titlebar-close")[0].addEventListener('touchstart', (e) => {
                            _this.close();
                        });
                    }, 200);
                },
                resizable: false
            }).dialog("widget").draggable("option", "containment", "none");
            $(this.dom).parent().css({ position: "fixed" });
        }
        close() {
            $(this.dom).dialog("close");
        }
    }
    exports.DiagramDialog = DiagramDialog;
});
define("game/transport", ["require", "exports", "game/company", "game/product"], function (require, exports, company_1, product_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transport = exports.TransferInfo = void 0;
    class TransferInfo {
    }
    exports.TransferInfo = TransferInfo;
    //
    class Transport {
        constructor(company = undefined) {
            this.speed = 100;
            this.workers = 0;
            this.active = false;
            this.type = "Transport";
            this.curStep = 0;
            this.productCount = 0;
            this.autodeliver = false;
            this.pathGarden = -5;
            this.company = company;
            this.world = company === null || company === void 0 ? void 0 : company.world;
            if (this.x === undefined && company) {
                this.x = company.x;
                this.nextTargetX = company.x;
            }
            if (this.y === undefined && company) {
                this.y = company.y;
                this.nextTargetY = company.y;
            }
        }
        getTransportedProduct() {
            var p = this.company.productid;
            return parameter.allProducts[p];
        }
        render() {
            var _a, _b, _c;
            var _this = this;
            this.dom = document.createRange().createContextualFragment("<span z-index:2;style='font-size:20px;transform:rotate(0turn)' class='mdi mdi-airplane'></span>").children[0]; //document.createElement("span");
            var im = (_a = parameter.allProducts[this.company.productid]) === null || _a === void 0 ? void 0 : _a.image;
            if (((_b = this.transferInfo) === null || _b === void 0 ? void 0 : _b.productid) === product_1.Product.productSoldier) {
                im = (_c = parameter.allProducts[product_1.Product.productSoldier]) === null || _c === void 0 ? void 0 : _c.image;
                if (this.company.enemy !== undefined) {
                    im = "Soldat" + (this.company.enemy + 1) + ".png";
                }
            }
            if (im !== undefined && im !== "")
                // this.dom = <any>document.createRange().createContextualFragment(`<img src="http://localhost/game/client/game/images/Helfer25.png">`).children[0];
                this.dom = document.createRange().createContextualFragment(`<img src="${company_1.Company.getImageUrl(im)}" width="25" height="25">`).children[0];
            this.dom.style.position = "absolute";
            this.dom.style.zIndex = "10";
            this.dom.addEventListener("click", (ev) => {
                _this.onclick(ev);
                return undefined;
            });
            this.update();
            // this.world.dom.appendChild(this.dom);
        }
        isCrosingRight() {
            if (this.y % 2 == 0) {
                if (this.x % 4 == 1)
                    return false;
                if (this.x % 4 == 2)
                    return true;
            }
            else {
                if (this.x % 4 == 3)
                    return false;
                if (this.x % 4 == 0)
                    return true;
            }
            throw "Wrong position";
        }
        calcNextPoint() {
            var diffX = this.nextTargetX - this.x;
            var diffY = this.nextTargetY - this.y;
            var isCrosing = this.isCrosingRight();
            if (!isCrosing && diffX > 0) {
                this.nextX = this.x + 1;
                this.nextY = this.y;
            }
            else if (isCrosing && diffX < 0) {
                this.nextX = this.x - 1;
                this.nextY = this.y;
            }
            else if (isCrosing && diffX > 0) {
                if (diffY > 0) {
                    this.nextX = this.x + 1;
                    this.nextY = this.y + 1;
                }
                else {
                    this.nextX = this.x + 1;
                    this.nextY = this.y - 1;
                }
            }
            else if (!isCrosing && diffX <= 0) {
                if (diffY > 0) {
                    this.nextX = this.x - 1;
                    this.nextY = this.y + 1;
                }
                else {
                    this.nextX = this.x - 1;
                    this.nextY = this.y - 1;
                }
            }
        }
        getCapacity() {
            if (this.company.productid === product_1.Product.productHelper || this.company.productid === product_1.Product.productSoldier)
                return 1;
            return this.workers * parameter.transportCapacityPerHelper;
        }
        load() {
            var _a, _b, _c, _d;
            if (this.workers === 0)
                return;
            if (this.company.productid === product_1.Product.productHelper && ((_a = this.transferInfo) === null || _a === void 0 ? void 0 : _a.goHome)) { //Helper go home
                this.company.produced++;
                (_b = this.transferInfo) === null || _b === void 0 ? true : delete _b.goHome;
                this.destroy(this.company.transports);
                return;
            }
            if (this.company.productid === product_1.Product.productSoldier && ((_c = this.transferInfo) === null || _c === void 0 ? void 0 : _c.goHome)) { //Helper go home
                this.company.produced++;
                (_d = this.transferInfo) === null || _d === void 0 ? true : delete _d.goHome;
                this.destroy(this.company.transports);
                return;
            }
            if (this.company.produced > 0)
                this.company.produced = this.company.produced;
            if (this.company.productid === product_1.Product.productSoldier || this.company.productid === product_1.Product.productCastle || this.company.productid === product_1.Product.productTurm) {
                return true; //soldiers ware filled on sending
            }
            var canadd = this.getCapacity() - this.productCount;
            var add = Math.min(canadd, this.company.produced);
            if (add > 0) {
                this.company.produced -= add;
                this.productCount += add;
            }
            if (this.dom) {
                if (this.productCount > 0) {
                    if (this.dom.hasAttribute("hidden"))
                        this.dom.removeAttribute("hidden");
                    return true;
                }
                if (!this.dom.hasAttribute("hidden"))
                    this.dom.setAttribute("hidden", "");
            }
            return false;
        }
        getName() {
            var comp = this.world.companyCache[this.companyTarget];
            if (comp === undefined) {
                if (this.autodeliver)
                    return "Bautransport";
                else
                    return "inaktiv";
            }
            return comp.name;
        }
        changeCompanyTaget(companyTarget) {
            this.companyTarget = companyTarget === -1 ? undefined : companyTarget;
            if (this.company.productid === product_1.Product.productStone || this.company.productid === product_1.Product.productWood) {
                if (this.companyTarget === undefined) {
                    this.autodeliver = true;
                }
                else {
                    this.autodeliver = false;
                }
            }
            this.moveTo(this.company.companyID);
        }
        unload() {
            var _a, _b;
            var comp = this.world.companyCache[this.companyTarget];
            var prodid = this.company.productid;
            //  if (comp.productid === -2 || comp.productid === -3) {
            if (product_1.Product.productSoldier === ((_a = this === null || this === void 0 ? void 0 : this.transferInfo) === null || _a === void 0 ? void 0 : _a.productid) && this.autodeliver === false) {
                // if (comp.soldiercount >= comp.calcMaxSoldiers() && this.company.enemy === undefined)
                //   return false;
                if (comp.enemy !== undefined) { //we attack Enemy
                    if (this.company.tickLastInvader !== undefined && (this.world.tickCount - this.company.tickLastInvader) < 5)
                        return false;
                    this.company.tickLastInvader = this.world.tickCount;
                    let diff = this.productCount > 0 ? 1 : 0;
                    if (this.productCount > 0)
                        this.productCount--;
                    comp.soldiercount -= diff;
                    if (comp.soldiercount < 0)
                        comp.soldiercount = 0;
                    if (comp.enemiesComming > 0)
                        comp.enemiesComming -= diff;
                    if (comp.soldiercount === 0) { //we conquer building
                        comp.enemy = undefined;
                        if (comp.enemiesComming) {
                            if (comp.soldiersComing === undefined)
                                comp.soldiersComing = 0;
                            comp.soldiersComing += comp.enemiesComming;
                            delete comp.enemiesComming;
                        }
                        //this.soldiercount = 0;
                        //this.workersIn = 0;
                        delete comp.enemyBaseSoldierCount;
                        comp.isConquered = true;
                        comp.rerender();
                        //  this.destroy();
                    }
                    if (diff !== 0)
                        return false;
                }
                else if (comp.enemy === undefined && this.company.enemy !== undefined) { //Enemy attack us
                    //-2 -erobert
                    if (comp.productid !== -2) {
                        if (comp.tickLastInvader !== undefined && (this.world.tickCount - comp.tickLastInvader) < 8) {
                            //  this.destroy(this.company.transports);
                            return false;
                        }
                    }
                    comp.tickLastInvader = this.world.tickCount;
                    let diff = this.productCount > 0 ? 1 : 0;
                    if (this.productCount > 0 && comp.soldiercount > 0) {
                        this.productCount--;
                        comp.soldiercount -= diff;
                        if (comp.enemiesComming > 0)
                            comp.enemiesComming -= diff;
                        //comp.soldiersComing -= diff;
                    }
                    if (comp.soldiercount <= 0) {
                        if (this.productCount > 0) {
                            this.company.soldiercount += this.productCount;
                        }
                        comp.destroy();
                    }
                    this.destroy(this.company.transports);
                    if (diff !== 0)
                        return false;
                }
                else { //we get Soldiers
                    comp.soldiercount += this.productCount;
                    comp.soldiersComing -= this.productCount;
                }
                //if (this.productCount === 0)
                this.destroy(this.company.transports);
                if (comp.enemy === undefined && comp.soldiercount === parameter.soldiersToConquer) {
                    if (comp.productid == -2 || comp.productid == -3) {
                        delete comp.soldiersComing;
                        comp.productid = -1;
                        comp.domIcon.src = company_1.Company.getImageUrl("Baustelle.png");
                    }
                }
                else {
                    if ((comp.productid === product_1.Product.productTower || comp.productid === product_1.Product.productCastle) && comp.soldiercount === comp.calcMaxSoldiers()) {
                        comp.expand();
                    }
                }
                return true;
            }
            // }
            if (this.transferInfo) {
                if (this.transferInfo.productid === product_1.Product.productHelper) {
                    if (this.transferInfo.workertype === "workers") {
                        comp.workers++;
                        comp.workersComming--;
                        if (!comp.workersComming)
                            delete comp.workersComming;
                    }
                    else if (this.transferInfo.workertype === "workersIn") {
                        comp.workersIn++;
                        comp.workersInComming--;
                        if (!comp.workersInComming)
                            delete comp.workersInComming;
                    }
                    else if (this.transferInfo.workertype === "workersOut") {
                        comp.workersOut++;
                        comp.workersOutComming--;
                        if (!comp.workersOutComming)
                            delete comp.workersOutComming;
                    }
                    else if ((_b = this.transferInfo.workertype) === null || _b === void 0 ? void 0 : _b.company) { //
                        this.transferInfo.workertype.workers++;
                        this.transferInfo.workertype.workersComming--;
                        if (!this.transferInfo.workertype.workersComming)
                            delete this.transferInfo.workertype.workersComming;
                    }
                    this.company.transports.splice(this.company.transports.indexOf(this), 1);
                    this.world.dom.removeChild(this.dom);
                }
                if (this.autodeliver) {
                    if (this.company.productid === product_1.Product.productWood || this.company.productid === product_1.Product.productStone) { //buildtransport
                        var p = 999999999;
                        if (comp.buildingInProgress >= 0) {
                            p = parameter.allProducts[comp.buildingInProgress].level;
                            if (this.transferInfo.productid === product_1.Product.productTower) {
                                p = 15;
                            }
                            if (this.transferInfo.productid === product_1.Product.productCastle) {
                                p = 50;
                            }
                        }
                        var transfer = Math.min(this.productCount, p);
                        if (this.company.productid === product_1.Product.productWood)
                            comp.woodsComming -= transfer;
                        if (this.company.productid === product_1.Product.productStone)
                            comp.stonesComming -= transfer;
                        this.productCount -= transfer;
                        if (comp.stonesComming === 0 && comp.woodsComming === 0) {
                            delete comp.stonesComming;
                            delete comp.woodsComming;
                            delete comp.buildingInProgress;
                            comp.changeProduct(this.transferInfo.productid);
                            // comp.buildingFinished();
                            this.transferInfo = undefined;
                        }
                        this.companyTarget = undefined;
                        return true;
                    }
                }
            }
            if (comp.productid < -2) //soldiers go in other home
                return true;
            if (comp.productid < 0) //soldiers go in other home
                return true;
            var prodindex = parameter.allProducts[comp.productid].consume.indexOf(prodid);
            if (prodindex === -1) // e.g. Tor never needs Beeren
                return false;
            var cap = comp.workersIn * parameter.transportCapacityPerHelper + parameter.transportCapacityPerHelper;
            var transfer = Math.min(this.productCount, cap - comp.rawmaterials[prodindex]);
            if (transfer < 0)
                return false;
            comp.rawmaterials[prodindex] += transfer;
            this.productCount -= transfer;
            return true;
        }
        destroy(parent) {
            parent.splice(parent.indexOf(this), 1);
            //   this.world.dom.removeChild(this.dom);
        }
        isPositionTarget(withPathGarden = true) {
            var t = this.world.companyCache[this.companyTarget];
            if (t && t.x === this.x && t.y === this.y) {
                if (withPathGarden)
                    return this.pathGarden === -5;
                else
                    return true;
            }
            return false;
        }
        isPositionHome(withPathGarden = true) {
            var t = this.company;
            if (t && t.x === this.x && t.y === this.y) {
                if (withPathGarden)
                    return this.pathGarden === -5;
                else
                    return true;
            }
            return false;
        }
        nextTick() {
            if (this.nextTargetX === undefined) {
                this.update();
                return;
            }
            if (this.company.enemy !== undefined)
                this.company.world.game.setHeaderColor("red");
            if (this.active && (this.x !== this.nextTargetX || this.y !== this.nextTargetY) && this.pathGarden < 0) {
                //        if (this.active&& (this.isPositionHome(false)||this.isPositionTarget(false))&& this.x!==this.nextTargetX&&this.y !== this.nextTargetY&&this.pathGarden<0){
                //go out
                var h = 0;
                this.pathGarden++;
                this.update();
                return;
            }
            else if (this.active && (this.isPositionHome(false) || this.isPositionTarget(false)) && this.x === this.nextTargetX && this.y === this.nextTargetY && this.pathGarden > -5) {
                //go out
                var h = 0;
                this.pathGarden--;
                this.update();
                return;
            }
            /* if (this.active && this.isPositionTarget(false)&&this.x === this.nextTargetX && this.y === this.nextTargetY) {
                 if (this.pathGarden === undefined) {
                     this.pathGarden = 5;
                     return;
                 } else if(this.pathGarden>0){
                     this.pathGarden--;
                     this.update();
                     return;
                 } else if(this.pathGarden<0){
                     this.pathGarden++;
                     this.update();
                     return;
                 }
             }
             if (this.active && this.isPositionHome(false)&&this.x === this.nextTargetX && this.y === this.nextTargetY) {
                 if (this.pathGarden === undefined) {
                     this.pathGarden = 5;
                     
                     return;
                 } else if(this.pathGarden>0){
                     this.pathGarden--;
                      this.update();
                     return;
                 } else if(this.pathGarden<0){
                     this.pathGarden++;
                      this.update();
                     return;
                 }
         
             }*/
            if (this.x === this.nextTargetX && this.y === this.nextTargetY) {
                //console.log("arrived");
                if (this.active && this.isPositionTarget()) {
                    if (!this.unload()) {
                        this.update();
                        return;
                    }
                    if (this.productCount === 0 || this.autodeliver)
                        this.moveTo(this.company.companyID);
                }
                if (this.active && this.isPositionHome()) {
                    if (this.load()) {
                        if (this.companyTarget !== undefined && //Bautransport
                            this.productCount >= this.getCapacity())
                            this.moveTo(this.companyTarget);
                    }
                }
                this.update();
                return;
            }
            else {
                var max = Math.max(1, Math.round(1000 / this.speed));
                if (this.curStep === 0) {
                    this.calcNextPoint();
                    this.curStep++;
                }
                else if (this.curStep === max) {
                    this.curStep = 0;
                    this.x = this.nextX;
                    this.y = this.nextY;
                }
                else
                    this.curStep++;
            }
            // if(getRandomInt(10)!==1 )
            this.update();
        }
        moveTo(compid) {
            //if(this.isPositionHome()||this.isPositionTarget())
            //     this.pathGarden=-5;
            // else
            if (this.dom) {
                /* if (compid === this.company.companyID) {
                     this.dom.style.opacity = "0.5";
                 } else {
                     this.dom.style.opacity = "1";
                 }*/
            }
            if (this.world.companyCache[compid] === undefined) {
                console.log("companyid " + compid + " not exists ");
                return;
            }
            this.nextTargetX = this.world.companyCache[compid].x;
            this.nextTargetY = this.world.companyCache[compid].y;
            //console.log("drive to"+parameter.allProducts[this.world.companies[compid].productid].name+" "+this.nextTargetX+"/"+this.nextTargetY);
            this.active = true;
            this.status = 1;
            //this.calcNextPoint();
            /* var x = city.x;
             var y = city.y;
         
             this.lastUpdate = this.world.game.date.getTime();
             // console.log("fly to " + city.name)
             this.action = "fly";
             this.status = "fly to " + city.name;
             this.targetX = x;
             this.targetY = y;
             this.update();*/
        }
        select() {
            if (this.dom)
                this.dom.classList.add("airplane_selected");
        }
        unselect() {
            if (this.dom)
                this.dom.classList.remove("airplane_selected");
        }
        updateUI(rect) {
            if (!this.dom) {
                return;
            }
            var fact = parameter.zoomfactor;
            var x = fact * (this.x) - 10;
            var y = ((fact * this.y) - 10);
            var max = Math.max(1, Math.round(1000 / this.speed));
            if (this.nextX !== undefined) {
                x = Math.round(-fact * (this.x - this.nextX) * this.curStep / max + fact * this.x) - 10;
                y = Math.round(-fact * (this.y - this.nextY) * this.curStep / max + fact * this.y) - 10;
            }
            if (this.pathGarden)
                x = x - Math.abs(this.pathGarden * 4);
            if (this.dom.mydisplay !== "none" && x > rect.left && x < (rect.left + rect.width) && y > rect.top && y < (rect.top + rect.height) && this.dom.myleft !== x) {
                this.dom.myleft = x;
                this.dom.style.left = x + "px";
            }
            if (this.dom.mydisplay !== "none" && x > rect.left && x < (rect.left + rect.width) && y > rect.top && y < (rect.top + rect.height) && this.dom.mytop !== y) {
                this.dom.mytop = y;
                this.dom.style.top = y + "px";
            }
            const context = this.world.game.domCanavas.getContext('2d');
            context.drawImage(this.dom, x, y, 24, 24);
        }
        update() {
            /*  if(this.curStep===0&&(this.isPositionHome(true)||this.isPositionTarget(true))||this.getTransportedProduct().id===Product.productHelper||this.getTransportedProduct().id===Product.productSoldier){
                  if(this.dom.mydisplay==="none"){
                      //this.dom.style.display="";
                     
                      this.dom.mydisplay="";
                  }
               }else{
                  if(this.dom.mydisplay!=="none"){
                      this.dom.mydisplay="none";
                       //this.dom.style.left =  "1px";
                     // this.dom.style.top = "1px";
                      //this.dom.style.display="none";
                  }
               }*/
            //else if(this.isPositionHome()||this.isPositionTarget())
            //  x=x-20;
            //if(this.dom.style.top !==( y + "px"))
            /*  if (this.activeRoute !== -1 && this.route.length > 1) {
                  if (this.action === "unload" && (this.lastUpdate - this.lastAction) > (3 * 1000 * 60 * 60)) {
                      // console.log("load now");
                      this.action = "load";
                      this.status = "load";
                      this.lastAction = this.lastUpdate;
                       if(this.activeRoute>=this.route.length){
                          this.activeRoute=0;
                       }else
                          this.route[this.activeRoute].unload();
                      AirplaneDialog.getInstance().update();
                  }
                  if (this.action === "load" && (this.lastUpdate - this.lastAction) > (3 * 1000 * 60 * 60)) {
         
                      this.lastAction = this.lastUpdate;
                      if(this.activeRoute>=this.route.length)
                          this.activeRoute=0;
                      else
                          this.route[this.activeRoute].load();
                      AirplaneDialog.getInstance().update();
                      this.activeRoute++;
                      if(this.activeRoute>=this.route.length)
                          this.activeRoute=0;
                      var city = this.world.cities[this.route[this.activeRoute].cityid];
                      this.flyTo(city);
         
                  }
              }*/
        }
        onclick(th) {
            var _a;
            th.preventDefault();
            th.stopPropagation();
            (_a = this.world.selection) === null || _a === void 0 ? void 0 : _a.unselect();
            this.world.selection = this;
            this.select();
        }
    }
    exports.Transport = Transport;
});
//<span style='font-size:100px;'>&#9951;</span>
define("game/savedialog", ["require", "exports", "game/product", "game/world", "game/game", "game/company", "game/transport"], function (require, exports, product_2, world_1, game_1, company_2, transport_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.test = exports.SaveDialog = void 0;
    class SaveDialog {
        constructor() {
            this.create();
        }
        static getInstance() {
            if (SaveDialog.instance === undefined)
                SaveDialog.instance = new SaveDialog();
            return SaveDialog.instance;
        }
        create() {
            //template for code reloading
            var sdom = `
          <div hidden id="SaveDialog" class="SaveDialog">
            <div></div>
           </div>
        `;
            this.dom = document.createRange().createContextualFragment(sdom).children[0];
            var old = document.getElementById("SaveDialog");
            if (old) {
                old.parentNode.removeChild(old);
            }
            var _this = this;
            var sdom = `
          <div>
            <table>
                <tr>
                    <td>
                        Filename: <input id="save-filename"/>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td style="vertical-align: top;width:100%">
                     <ul style="width:100%" class="mylist boxborder" id="save-files">
                     
           
                    </ul>
                      
                    </td>
                    <td>
                        <button id="save-save" title="save" style="width:100%" class="mybutton">Save</button>
                        <button id="save-export" title="save" style="width:100%" class="mybutton">Export</button>
                        <button id="save-load" title="save" style="width:100%" class="mybutton">Load</button>
                        <input type="file" id="save-import" name="files[]" accept="application/json" style="display: none;"  />
                        <button id="save-doupload" title="save" style="width:100%" class="mybutton" onclick="document.getElementById('save-import').click();">Import</button>
                        <button id="save-delete" title="save" style="width:100%" class="mybutton">Delete</button>
                        <button id="save-cancel" title="save" style="width:100%" class="mybutton">Cancel</button>
            
                    </td>
                </tr>    

            </table>         
           </div> 
            `;
            var newdom = document.createRange().createContextualFragment(sdom).children[0];
            this.dom.removeChild(this.dom.children[0]);
            this.dom.appendChild(newdom);
            document.body.appendChild(this.dom);
            //        document.getElementById("citydialog-prev")
            setTimeout(() => {
                $("#SaveDialog-tabs").tabs({
                //collapsible: true
                });
                _this.bindActions();
            }, 500);
            //document.createElement("span");
        }
        bindActions() {
            var _this = this;
            var idfilename = document.getElementById("save-filename");
            document.getElementById("save-cancel").addEventListener("click", (ev) => {
                _this.close();
            });
            document.getElementById("save-save").addEventListener("click", (ev) => {
                if (idfilename.value === "") {
                    alert("Error:Filename is empty");
                    return;
                }
                _this.save(idfilename.value);
                _this.close();
            });
            document.getElementById("save-load").addEventListener("click", (ev) => {
                if (idfilename.value === "") {
                    alert("Error:Filename is empty");
                    return;
                }
                _this.load(idfilename.value);
                _this.close();
            });
            document.getElementById("save-files").addEventListener("click", (ev) => {
                idfilename.value = ev.target.getAttribute("value"); //.substring(4);
                var el = ev.target;
                var select = document.getElementById("save-files");
                for (var x = 0; x < select.children.length; x++) {
                    select.children[x].classList.remove("active-listitem");
                }
                el.classList.add("active-listitem");
            });
            document.getElementById("save-delete").addEventListener("click", (ev) => {
                window.localStorage.removeItem("save" + idfilename.value);
                _this.update();
            });
            document.getElementById("save-export").addEventListener("click", (ev) => {
                var text = _this.toJson();
                var fileBlob = new Blob([text], { type: "application/json" });
                var link = document.createElement("a");
                link.setAttribute("href", URL.createObjectURL(fileBlob));
                link.setAttribute("download", "export.json");
                link.appendChild(document.createTextNode("Save file"));
                document.body.appendChild(link);
                link.click();
                link.remove();
            });
            document.getElementById("save-import").addEventListener("change", function (evt) {
                var files = evt.target["files"];
                var data = {};
                var downloaded = 0;
                var file = files[0];
                var reader = new FileReader();
                reader.addEventListener("load", function () {
                    var s = reader.result;
                    _this.loadContent(s);
                    //alert(s);
                }, false);
                reader.readAsText(file);
            });
        }
        update() {
            var list = [];
            var ret = "";
            for (var key in window.localStorage) {
                if (key.startsWith("save")) {
                    ret += '<li value="' + key.substring(4) + '">' + key.substring(4) + '</li>';
                    //list.push();
                }
            }
            document.getElementById("save-files").innerHTML = ret;
            var last = window.localStorage.getItem("lastgame");
            if (last)
                document.getElementById("save-filename").value = last;
        }
        show() {
            var _this = this;
            this.dom.removeAttribute("hidden");
            //ui-tabs-active
            $(this.dom).dialog({
                title: "Statistics",
                width: "400px",
                draggable: true,
                //     position:{my:"left top",at:"right top",of:$(document)} ,
                open: function (event, ui) {
                    _this.update();
                },
                close: function () {
                },
                create: function (e) {
                    setTimeout(() => {
                        $(e.target).dialog("widget").find(".ui-dialog-titlebar-close")[0].addEventListener('touchstart', (e) => {
                            _this.close();
                        });
                    }, 200);
                }
            }).dialog("widget").draggable("option", "containment", "none");
            $(this.dom).parent().css({ position: "fixed" });
        }
        close() {
            $(this.dom).dialog("close");
        }
        toJson() {
            var sdata = JSON.stringify(this.game, (key, value) => {
                var ret = {};
                if (value instanceof HTMLElement) {
                    return undefined;
                }
                if (key === "lastUpdate")
                    return undefined;
                if ((value === null || value === void 0 ? void 0 : value.type) === "World") {
                    Object.assign(ret, value);
                    delete ret.companyCache;
                    delete ret.game;
                    return ret;
                }
                if ((value === null || value === void 0 ? void 0 : value.type) === "Company") {
                    Object.assign(ret, value);
                    delete ret.world;
                    return ret;
                }
                if ((value === null || value === void 0 ? void 0 : value.type) === "Transport") {
                    Object.assign(ret, value);
                    delete ret.world;
                    delete ret.company;
                    return ret;
                }
                if ((value === null || value === void 0 ? void 0 : value.type) === "Product") {
                    Object.assign(ret, value);
                    return ret;
                }
                return value;
            });
            return sdata;
        }
        save(filename) {
            this.game.pause();
            var sdata = this.toJson();
            window.localStorage.setItem("save" + filename, sdata);
            window.localStorage.setItem("lastgame", filename);
            //this.load();
            console.log(sdata);
            this.game.resume();
        }
        packArray(arr) {
            var test = arr[0];
            for (var x = 1; x < arr.length; x++) {
                if (arr[x] !== test)
                    return arr;
            }
            return test;
        }
        unpackArray(value) {
            if (Array.isArray(value))
                return value;
            var ret = [];
            for (var x = 0; x < parameter.allProducts.length; x++) {
                ret.push(value);
            }
            return ret;
        }
        loadContent(data) {
            this.game.close();
            var ret = JSON.parse(data, (key, value) => {
                var r = value;
                if (value === null)
                    return undefined;
                if (key === "parameter") {
                    console.log("develop state - everytime new parameters");
                    var sic = parameter.allLevels;
                    Object.assign(parameter, value);
                    parameter.allLevels = sic;
                    for (var x = 0; x < parameter.allProducts.length; x++) {
                        var temp = parameter.allProducts[x];
                        parameter.allProducts[x] = new product_2.Product(); //(parameter.allProducts[x]);
                        Object.assign(parameter.allProducts[x], temp);
                    }
                }
                if ((value === null || value === void 0 ? void 0 : value.type) === "Company") {
                    r = new company_2.Company();
                    Object.assign(r, value);
                    return r;
                }
                if ((value === null || value === void 0 ? void 0 : value.type) === "Product") {
                    r = new product_2.Product();
                    Object.assign(r, value);
                    return r;
                }
                if ((value === null || value === void 0 ? void 0 : value.type) === "Transport") {
                    r = new transport_1.Transport();
                    Object.assign(r, value);
                    return r;
                }
                if ((value === null || value === void 0 ? void 0 : value.type) === "World") {
                    delete value._intervall;
                    r = new world_1.World();
                    Object.assign(r, value);
                    return r;
                }
                return r;
            });
            var game = this.game;
            delete ret.timer;
            delete ret.updateUIID;
            Object.assign(this.game, ret);
            game.world.game = game;
            game.date = new Date(game.date);
            /*for (var x = 0; x < game.world.airplanes.length; x++) {
                game.world.airplanes[x].world = game.world;
                for (var y = 0; y < game.world.airplanes[x].route.length; y++) {
                    game.world.airplanes[x].route[y].airplane = game.world.airplanes[x];
                }
            }*/
            game.world.updateCompanyCache();
            for (var x = 0; x < game.world.companies.length; x++) {
                game.world.companies[x].world = game.world;
                for (var y = 0; y < game.world.companies[x].transports.length; y++) {
                    game.world.companies[x].transports[y].world = game.world;
                    game.world.companies[x].transports[y].company = game.world.companies[x];
                }
            }
            /*  if (game.world.freeCompanies === undefined) {
                  game.world.freeCompanies = [];
                  var z = 100000;
                  for (var x = 1; x <= game.width; x++) {
                      for (var y = 1; y <= game.height; y++) {
                          var comp;
                          if (x <= 8 && y <= 20)
                              continue;
                          if (y % 2 === 1)
                              comp = new Company(game.world, z, -2, 0, 0, 0, x * 4 - 1, y);
                          else
                              comp = new Company(game.world, z, -2, 0, 0, 0, x * 4 + 1, y);
                          game.world.freeCompanies.push(comp);
                          z++;
                      }
                  }
              }*/
            for (var x = 0; x < game.world.freeCompanies.length; x++) {
                game.world.freeCompanies[x].world = game.world;
            }
            if (Number(game.version) < 2.7) {
                parameter.allLevels = [
                    { maxPeople: 40, maxSoldiers: 100, maxPlaces: 10, buildingLimit: 2 },
                    { maxPeople: 600, maxSoldiers: 150, maxPlaces: 50, buildingLimit: 1000 },
                    { maxPeople: 1600, maxSoldiers: 150, maxPlaces: 100, buildingLimit: 2000 },
                    { maxPeople: 2400, maxSoldiers: 150, maxPlaces: 2000, buildingLimit: 3000 },
                    { maxPeople: 5000, maxSoldiers: 150, maxPlaces: 300, buildingLimit: 4000 },
                    { maxPeople: 9999999999, maxSoldiers: 9999999999, maxPlaces: 9999999999, buildingLimit: 9999999999 },
                ];
            }
            if (Number(game.version) < 3.4) {
                game.enemyBases = [0, 0, 0, 0, 0, 0, 0];
                for (var x = 0; x < game.world.companies.length; x++) {
                    if (game.world.companies[x].enemyBaseSoldierCount !== undefined) {
                        game.enemyBases[game.world.companies[x].enemy - 1] = game.world.companies[x].companyID;
                    }
                    if (game.world.companies[x].enemy !== undefined) {
                        game.world.companies[x].soldiercount = game.world.companies[x].workersIn;
                        game.world.companies[x].workersIn = 0;
                    }
                }
            }
            game.version = game_1.gameversion;
            /*  if (game.world.cities[1].people > 0) {
                  //migration
                  for (var x = 1; x < game.world.cities.length; x++) {
                      game.world.cities[0].people += game.world.cities[x].people;
                      game.world.cities[x].people = 0;
                  }
                  for (var x = 1; x < parameter.allProducts.length; x++) {
                      game.world.cities[0].score[x] = 50;
      
                  }
                  game.world.cities[0].people = Math.round(game.world.cities[0].people);
                  game.world.cities[0].shops = game.world.cities[0].shops * 7;
                  game.world.cities[0].houses = Math.round(game.world.cities[0].people / parameter.peopleInHouse);
              }
              console.log("People: " + game.world.cities[0].people.toLocaleString());
      */
            game.render(this.game.dom);
            game.resume();
        }
        load(filename) {
            this.game.pause();
            var data = window.localStorage.getItem("save" + filename);
            this.loadContent(data);
            window.localStorage.setItem("lastgame", filename);
        }
    }
    exports.SaveDialog = SaveDialog;
    function test() {
        SaveDialog.getInstance().show();
    }
    exports.test = test;
});
define("game/companydialog", ["require", "exports", "game/icons", "game/company", "game/product", "game/transport", "game/game"], function (require, exports, icons_2, company_3, product_3, transport_2, game_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CompanyDialog = void 0;
    //@ts-ignore
    window.company = function () {
        return CompanyDialog.getInstance().company;
    };
    class CompanyDialog {
        constructor() {
            this.maxCompanies = 14;
            this.hasPaused = false;
            this.create();
        }
        static getInstance() {
            if (CompanyDialog.instance === undefined)
                CompanyDialog.instance = new CompanyDialog();
            return CompanyDialog.instance;
        }
        create() {
            //template for code reloading
            var sdom = `
          <div hidden id="companydialog" class="companydialog">
            <div></div>
           </div>
        `;
            this.dom = document.createRange().createContextualFragment(sdom).children[0];
            var old = document.getElementById("companydialog");
            if (old) {
                old.parentNode.removeChild(old);
            }
            var products = parameter.allProducts;
            var _this = this;
            var city = _this.company;
            var sdom = `
          <div>
        
            <div id="companydialog-tabs">
                <ul>
                    <li><a href="#companydialog-production" id="companydialog-production-tab" class="companydialog-tabs">Produktion</a></li>
                    <li><a href="#companydialog-transport" id="companydialog-transport-tab"  class="companydialog-tabs">Transport</a></li>
                    <li><a href="#companydialog-conquer" id="companydialog-conquer-tab"  class="companydialog-tabs"><img src="${company_3.Company.getImageUrl(parameter.allProducts[product_3.Product.productSoldier].image)}" width="20" height="20"></a></li>
                    <li><a href="#companydialog-build" id="companydialog-build-tab"  class="companydialog-tabs">Bauen</a></li>
                    <li><a href="#companydialog-delete" id="companydialog-delete-tab"  class="companydialog-tabs">❌</a></li>
                     <li><a href="#companydialog-gate" id="companydialog-gate-tab"  class="companydialog-tabs">Ziel</a></li>
                </ul>
                <div id="companydialog-production"> ` + this.createProductionTab() + `
                </div>
                <div id="companydialog-transport">` + this.createTransportTab() + `
                </div>
                <div id="companydialog-conquer">` + this.createConquerTab() + `
                </div>
                 <div id="companydialog-build">` + this.createBuildTab() + `
                </div>
                 <div id="companydialog-delete">
                    Soll das Geb&auml;ude abgerissen werden?<br/>
                    <button id="destroy-building"  class="mybutton"> Ja ❌ </button>
                </div>
           
                 <div id="companydialog-gate">` + this.createGateTab() + `
                </div>
                     </div>
            </div>
          </div>
        `;
            var newdom = document.createRange().createContextualFragment(sdom).children[0];
            this.dom.removeChild(this.dom.children[0]);
            this.dom.appendChild(newdom);
            $("#companydialog-tabs").tabs({
            //collapsible: true
            });
            $("#companydialog-build-tabs").tabs({ beforeActivate: function (event, ui) { _this.buildTabActivated(event, ui); } });
            setTimeout(() => {
                $("#companydialog-tabs").tabs({
                //collapsible: true
                });
                $("#companydialog-build-tabs").tabs({ beforeActivate: function (event, ui) { _this.buildTabActivated(event, ui); } });
            }, 100);
            document.body.appendChild(this.dom);
            //        document.getElementById("companydialog-prev")
            setTimeout(() => { _this.bindActions(); }, 500);
            //document.createElement("span");
        }
        buildTabActivated(evt, ui) {
            var level = parseInt(evt.currentTarget.id.split("_")[1]) + 1;
            if (this.company.world.game.level < (level)) {
                game_2.Game.showInfo("kann erst ab Level " + (level + 1) + " gebaut werden.");
            }
        }
        createConquerTab() {
            var _this = this;
            return `
                    <span id="info-soldiers"></span>
                    <button id="add-soldier"  class="mybutton">+<img src="${company_3.Company.getImageUrl(parameter.allProducts[product_3.Product.productSoldier].image)}" width="20" height="20"> </button>  <br/>
                    <button id="add-defense"  class="mybutton">+<img src="${company_3.Company.getImageUrl("Schild.png")}" width="20" height="20"> </button>  <br/>
               `;
        }
        createBuildTab() {
            var _this = this;
            var links = "";
            var tabs = "";
            var prods = [];
            for (var x = 0; x < parameter.allLevels.length; x++) {
                prods.push([]);
            }
            for (var x = 0; x < parameter.allProducts.length; x++) {
                var p = parameter.allProducts[x];
                prods[p.level - 1].push(p);
            }
            for (var x = 0; x < parameter.allLevels.length; x++) {
                links = links + `<li><a href="#companydialog-build-${x}" id="companydialog-bild-tab_${x}" class="companydialog-tabs">${x + 1}</a></li>`;
                var icons = "";
                for (var i = 0; i < prods[x].length; i++) {
                    var p = prods[x][i];
                    var prop = (p.id === product_3.Product.productGate) ? "hidden" : "";
                    icons += `<button id="companydialog-build-product_${p.id}" ` + prop + ` class="companydialog-build-product">+
                            <img  src="${company_3.Company.getImageUrl(p.image)}" width="30" height="30" title="${p.name}"> 
                        </button>`;
                }
                tabs = tabs + ` <div id="companydialog-build-${x}">` + icons + `</div>`;
            }
            /*                            ${for(var i=0;i<4;i++){
            
                                }}
                                <li><a href="#companydialog-bild-1" id="companydialog-bild-tab-1" class="companydialog-tabs">1</a></li>
                                <li><a href="#companydialog-bild-2" id="companydialog-bild-tab-2" class="companydialog-tabs">2</a></li>
                                <li><a href="#companydialog-bild-3" id="companydialog-bild-tab-3" class="companydialog-tabs">3</a></li>
                                <li><a href="#companydialog-bild-4" id="companydialog-bild-tab-4" class="companydialog-tabs">4</a></li>*/
            return `
             <div id="companydialog-build-tabs">
                <ul>` + links +
                `</ul>
                ` + tabs + `
                
            </div>

               
               `;
        }
        createProductionTab() {
            var _this = this;
            return `<span id="production-info" style="color:red"></span>
                <table id="companydialog-production-table" style="height:100%;weight:100%;">
                       
                        <tr>
                            <td>Produktion&nbsp;</td>
                            <td></td>
                            <td  style="text-align:right;min-width:70px"><span id="workers">1</span></td>
                            <td >
                                <button id="add-worker"  class="mybutton">&nbsp;+&nbsp;</button>
                                <button id="remove-worker"  class="mybutton">&nbsp;-&nbsp;</button> 
                            </td>
                         
                        </tr>
                      
                        <tr id="companydialog-production-table-rawmaterial">
                            <td>Rohstoffe&nbsp;</td>
                            <td></td>
                            <td style="text-align:right;"><span id="workersIn">1</span></td>
                            <td>
                                <button id="in-add-worker"  class="mybutton">&nbsp;+&nbsp;</button>  
                                <button id="in-remove-worker"  class="mybutton">&nbsp;-&nbsp;</button>  
                            </td>
                              
                                
                            
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td> 
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td  style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td  style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td  style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td  style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                        <tr style="border: solid;border-width: 1px 0;">
                            <td>Lager&nbsp;</td>
                            <td><img id="companydialog-production-table-icon" src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;"><b><span id="workersOut">1</span></b></td>
                            <td>
                                <button id="out-add-worker"  class="mybutton">&nbsp;+&nbsp;</button>  
                                <button id="out-remove-worker"  class="mybutton">&nbsp;-&nbsp;</button>  
                            </td>
                        </tr>
                </table>
               
               `;
        }
        createGateTab() {
            var _this = this;
            return `
                 <div id="infonextlevel">
                    
                </div>
                <table id="companydialog-gate-table" style="margin-left:40px;height:100%;weight:200px;">
                       
                    
                         <tr>
                            <td style="padding-left:9px">Mehl</td> 
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td  style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td  style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td  style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td  style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                         <tr>
                            <td style="padding-left:9px">Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td  style="text-align:right;">0/0</td>
                        </tr>
                       
                </table>
               `;
        }
        createTransportTab() {
            var _this = this;
            return `

                 <table>
                    <tr>
                        <td style="vertical-align:top">
                             <button id="transport-up" class="mybutton">` + icons_2.Icons.up + `</button>
                             <button id="transport-down"  class="mybutton">` + icons_2.Icons.down + `</button>
                             <button id="transport-add"  class="mybutton">` + icons_2.Icons.plus + `</button>
                             <button id="transport-del"  class="mybutton">` + icons_2.Icons.remove + `</button><br/>
                            <ul id="companydialog-transport-list" size="10" class="mylist boxborder" style="width:180px;height:380px;overflow-y: scroll;">
                            </ul>
                        </td>
                        <td id="transportdetails" style="vertical-align:top">
                        
                            <button id="transport-add-worker"  class="mybutton" style="width:70px" >&nbsp;+&nbsp;</button>
                            <button id="transport-remove-worker"  class="mybutton" style="width:70px">&nbsp;-&nbsp;</button><br/>
                                <ul id="companydialog-transport-productlist"  class="mylist boxborder"  size="10" style="height:380px;width:160px;overflow-y: scroll;">
                                </ul>
                            
                        </td>
                    
                        
                    </tr>
                </table>
               `;
        }
        bindActions() {
            var _this = this;
            document.getElementById("add-worker").addEventListener("click", (ev) => {
                for (var x = 0; x < parameter.peopleWithOneClick; x++) {
                    if ((this.company.workers + (this.company.workersComming ? this.company.workersComming : 0)) < this.company.calcMaxWorker())
                        _this.company.addWorker("workers");
                }
            });
            document.getElementById("remove-worker").addEventListener("click", (ev) => {
                _this.company.removeWorker("workers");
            });
            document.getElementById("destroy-building").addEventListener("click", (ev) => {
                var candestroy = true;
                if (_this.company.workersComming || _this.company.workersInComming || this.company.workersOutComming)
                    candestroy = false;
                _this.company.transports.forEach((t) => {
                    if (t.workersComming)
                        candestroy = false;
                });
                if (!candestroy) {
                    alert("Kann Gebäude nicht zerstören, solange noch Helfer unterwegs sind.");
                    return;
                }
                if (_this.company.productid !== -1 && parameter.allProducts[_this.company.productid].level === 1 && _this.company.world.findCompanyThatProduces(_this.company.productid).length === 1) {
                    alert("Das letzte Gebäude dieser Art kann nicht abgerissen werden.");
                    return;
                }
                _this.company.destroy();
            });
            // (<HTMLButtonElement>document.getElementById("add-worker")).disabled = ((this.company.workers + (this.company.workersComming ? this.company.workersComming : 0)) >= this.company.calcMaxWorker());
            // (<HTMLButtonElement>document.getElementById("in-add-worker")).disabled = ((this.company.workersIn + (this.company.workersInComming ? this.company.workersInComming : 0)) >= this.company.calcMaxWorker());
            // (<HTMLButtonElement>document.getElementById("out-add-worker")).disabled = ((this.company.workersOut + (this.company.workersOutComming ? this.company.workersOutComming : 0)) >= (factSoldier * this.company.calcMaxWorker()));
            document.getElementById("in-add-worker").addEventListener("click", (ev) => {
                for (var x = 0; x < parameter.peopleWithOneClick; x++) {
                    if ((_this.company.workersIn + (_this.company.workersInComming ? _this.company.workersInComming : 0)) < _this.company.calcMaxWorker())
                        _this.company.addWorker("workersIn");
                }
            });
            document.getElementById("in-remove-worker").addEventListener("click", (ev) => {
                _this.company.removeWorker("workersIn");
            });
            document.getElementById("out-add-worker").addEventListener("click", (ev) => {
                for (var x = 0; x < parameter.peopleWithOneClick; x++) {
                    if ((_this.company.workersOut + (_this.company.workersOutComming ? _this.company.workersOutComming : 0)) < _this.company.calcMaxWorker())
                        _this.company.addWorker("workersOut");
                }
            });
            document.getElementById("out-remove-worker").addEventListener("click", (ev) => {
                _this.company.removeWorker("workersOut");
            });
            document.getElementById("transport-add-worker").addEventListener("click", (event) => {
                var trans = _this.getSelectedTransport();
                for (var x = 0; x < parameter.peopleWithOneClick; x++) {
                    if ((trans.workers + (trans.workersComming ? trans.workersComming : 0)) < _this.company.calcMaxWorker())
                        _this.company.addWorker(trans);
                }
                _this.update();
            });
            document.getElementById("transport-remove-worker").addEventListener("click", (event) => {
                var selected = this.getSelectedTransport();
                _this.company.removeWorker(selected);
            });
            document.getElementById("transport-del").addEventListener("click", (event) => {
                var selected = this.getSelectedTransport();
                // if (selected.workersComming) {
                //     alert("Der Transport kann nicht zerstört werden, solange noch Helfer unterwegs sind.");
                //     return;
                // }
                while (selected.workers > 0) {
                    _this.company.removeWorker(selected);
                }
                selected.destroy(_this.company.transports);
            });
            document.getElementById("transport-add").addEventListener("click", (event) => {
                var trans = new transport_2.Transport(this.company);
                trans.active = true;
                trans.render();
                if (_this.company.productid === product_3.Product.productStone || _this.company.productid === product_3.Product.productWood) {
                    trans.autodeliver = true;
                }
                this.company.transports.push(trans);
                if (trans)
                    _this.company.addWorker(trans);
                _this.update();
            });
            document.getElementById("add-soldier").addEventListener("click", (ev) => {
                var run = (trans, delay, count) => {
                    setTimeout(() => { trans.productCount = count; trans.active = true; }, delay);
                };
                var isTowerOrCastle = _this.company.enemy !== undefined ? _this.company : undefined;
                var company = _this.company.world.findSoldier(isTowerOrCastle); // findCompanyThatProduces(Product.productSoldier)[0];
                if (company === undefined) {
                    game_2.Game.showInfo("Kein Turm oder Burg mit Soldaten in der Nähe für Angriff.");
                    return;
                }
                if (_this.company.soldiersComing === undefined || isNaN(_this.company.soldiersComing))
                    _this.company.soldiersComing = 0;
                var max = 0;
                if (company)
                    max = Math.min(isTowerOrCastle ? company.soldiercount : company.produced, _this.company.calcMaxSoldiers() - _this.company.soldiercount - _this.company.soldiersComing);
                if (this.company.enemy !== undefined)
                    max = company.soldiercount;
                max = Math.min(max, parameter.soldierWithOneClick);
                if (max === 0 || isNaN(max))
                    return;
                var p = this.company.world.freeCompanies.indexOf(this.company);
                if (p !== -1) {
                    this.company.world.freeCompanies.splice(p, 1);
                    this.company.world.companies.push(this.company);
                    //                this.company.companyID = this.company.world.companies.length - 1;
                }
                if (this.company.productid == -2) {
                    this.company.productid = -3;
                    _this.company.domIcon.src = company_3.Company.getImageUrl("Attacke.png");
                }
                if (isTowerOrCastle)
                    company.soldiercount -= max;
                else
                    company.produced -= max;
                var first = 0;
                var m = max;
                if (m > 40) {
                    m = 40;
                    first = max - 40 + 1;
                }
                for (var x = 0; x < m; x++) {
                    var trans = new transport_2.Transport(company);
                    trans.companyTarget = _this.company.companyID;
                    trans.workers = 1;
                    var count = ((x === 0 && first) ? first : 1);
                    if (this.company.enemy !== undefined) {
                        if (_this.company.enemiesComming === undefined)
                            _this.company.enemiesComming = 0;
                        _this.company.enemiesComming += count;
                    }
                    else
                        _this.company.soldiersComing += count;
                    trans.transferInfo = { productid: product_3.Product.productSoldier };
                    trans.render();
                    run(trans, x * 100, count);
                    company.transports.push(trans);
                }
                //_this.company.workersOut++;
                _this.update(true);
            });
            document.getElementById("add-defense").addEventListener("click", (ev) => {
                var run = (trans, delay, count) => {
                    setTimeout(() => { trans.productCount = count; trans.active = true; }, delay);
                };
                var isTowerOrCastle = _this.company;
                var company = _this.company.world.findSoldier(isTowerOrCastle); // findCompanyThatProduces(Product.productSoldier)[0];
                if (company === undefined) {
                    game_2.Game.showInfo("Kein Turm oder Burg mit Soldaten in der Nähe.");
                    return;
                }
                if (_this.company.soldiersComing === undefined || isNaN(_this.company.soldiersComing))
                    _this.company.soldiersComing = 0;
                var max = 0;
                if (company)
                    max = Math.min(isTowerOrCastle ? company.soldiercount : company.produced, _this.company.calcMaxSoldiers() - _this.company.soldiercount - _this.company.soldiersComing);
                max = Math.min(max, parameter.soldierWithOneClick);
                if (max === 0 || isNaN(max))
                    return;
                var p = this.company.world.freeCompanies.indexOf(this.company);
                company.soldiercount -= max;
                var first = 0;
                var m = max;
                if (m > 40) {
                    m = 40;
                    first = max - 40 + 1;
                }
                for (var x = 0; x < m; x++) {
                    var trans = new transport_2.Transport(company);
                    trans.companyTarget = _this.company.companyID;
                    trans.workers = 1;
                    var count = ((x === 0 && first) ? first : 1);
                    _this.company.soldiersComing += count;
                    trans.transferInfo = { productid: product_3.Product.productSoldier };
                    trans.render();
                    run(trans, x * 100, count);
                    company.transports.push(trans);
                }
                //_this.company.workersOut++;
                _this.update(true);
            });
            for (var x = 0; x < parameter.allProducts.length; x++) {
                document.getElementById("companydialog-build-product_" + x).addEventListener("click", (evt) => {
                    var id = parseInt(evt.currentTarget.id.split("_")[1]);
                    var serror = "";
                    var count = parameter.allProducts[id].level;
                    if (id === product_3.Product.productTower)
                        count = 15;
                    if (id === product_3.Product.productCastle)
                        count = 50;
                    var transwood = _this.getBuildTransport(product_3.Product.productWood, count);
                    if (_this.company.world.findUsedCompanies().length > _this.company.world.game.getCurrentLevel().maxPlaces)
                        serror = "Das Maximalle Gebäudelimit für diesen Level wurde erreicht.";
                    if (!transwood)
                        serror = "Kein " + count + " Holz gefunden oder kein Bautransport gefunden, der " + count + " Holz transportieren kann.";
                    var transstone = this.getBuildTransport(product_3.Product.productStone, count);
                    if (!transstone)
                        serror += "Kein " + count + " Stein gefunden oder kein Bautransport gefunden, der " + count + " Stein transportieren kann.";
                    if (this.company.productid !== -1)
                        serror = "das Gebiet muss entweder erobert werden oder ist bereits bebaut.";
                    if (serror !== "") {
                        game_2.Game.showInfo(serror);
                        return;
                    }
                    else {
                        _this.company.buildingInProgress = id;
                        var transferInfo = {
                            productid: id
                        };
                        _this.company.woodsComming = count;
                        _this.company.stonesComming = count;
                        transstone.companyTarget = _this.company.companyID;
                        transstone.active = true;
                        transstone.transferInfo = transferInfo;
                        transwood.companyTarget = _this.company.companyID;
                        transwood.active = true;
                        transwood.transferInfo = transferInfo;
                        // this.company.changeProduct(id);
                    }
                });
            }
            document.getElementById("companydialog-transport-productlist").addEventListener("click", (ev) => {
                var el = ev.target;
                if (el.tagName === "UL") {
                    return;
                }
                var select = document.getElementById("companydialog-transport-productlist");
                for (var x = 0; x < select.children.length; x++) {
                    select.children[x].classList.remove("active-listitem");
                }
                el.classList.add("active-listitem");
                var val = el.getAttribute("value");
                var trans = _this.getSelectedTransport();
                var comp = parseInt(val);
                trans.changeCompanyTaget(comp);
                _this.update();
            });
            document.getElementById("companydialog-transport-list").addEventListener("click", (ev) => {
                var el = ev.target;
                if (el.tagName === "UL") {
                    return;
                }
                if (el.parentNode.tagName == "LI")
                    el = el.parentNode;
                else if (el.parentNode.parentNode.tagName == "LI")
                    el = el.parentNode.parentNode;
                var select = document.getElementById("companydialog-transport-list");
                for (var x = 0; x < select.children.length; x++) {
                    select.children[x].classList.remove("active-listitem");
                }
                el.classList.add("active-listitem");
                el.scrollIntoView();
                _this.update();
                /* var trans = _this.getSelectedTransport();
                 debugger;
                 var comp = parseInt((<any>event.target).value);
                 trans.changeCompanyTaget(comp);
                 _this.update();*/
            });
        }
        selectCompanyIfNeeded(compid) {
            var select = document.getElementById("companydialog-transport-productlist");
            for (var x = 0; x < select.children.length; x++) {
                var val = parseInt(select.children[x].getAttribute("value"));
                if (val === compid && !select.children[x].classList.contains("active-listitem")) {
                    select.children[x].classList.add("active-listitem");
                    select.children[x].scrollIntoView();
                }
                if (val !== compid && select.children[x].classList.contains("active-listitem"))
                    select.children[x].classList.remove("active-listitem");
            }
        }
        getSelectedTransport() {
            var select = document.getElementById("companydialog-transport-list");
            for (var x = 0; x < select.children.length; x++) {
                if (select.children[x].classList.contains("active-listitem")) {
                    var val = select.children[x].getAttribute("value");
                    var selectedtransport = parseInt(val === "" ? "-1" : val);
                    return this.company.transports[selectedtransport];
                }
            }
            return undefined;
        }
        getBuildTransport(prodId, count) {
            var wood = this.company.world.findCompanyThatProduces(prodId);
            for (var i = 0; i < wood.length; i++) {
                for (var j = 0; j < wood[i].transports.length; j++) {
                    var trans = wood[i].transports[j];
                    if (trans.companyTarget === undefined && trans.autodeliver && trans.productCount >= count) {
                        return trans;
                    }
                }
            }
            return undefined;
        }
        updateBuild() {
            for (var x = 0; x < parameter.allProducts.length; x++) {
                var button = document.getElementById("companydialog-build-product_" + x);
                var prod = parameter.allProducts[x];
                if (this.company.world.game.level >= (prod.level) &&
                    this.company.world.findCompanyThatProduces(prod.id, true).length < this.company.world.game.getCurrentLevel().buildingLimit &&
                    button.disabled) {
                    button.disabled = false;
                }
                else if ((this.company.world.game.level < (prod.level) ||
                    this.company.world.findCompanyThatProduces(prod.id, true).length >= this.company.world.game.getCurrentLevel().buildingLimit)
                    && button.disabled === false) {
                    button.disabled = true;
                }
            }
        }
        updateTransport() {
            var list = document.getElementById("companydialog-transport-list");
            if (list.children.length !== this.company.transports.length) {
                var s = "";
                for (var x = 0; x < this.company.transports.length; x++) {
                    s = s + '<li value="' + x + `"></li>`;
                }
                list.innerHTML = s;
            }
            for (var x = 0; x < this.company.transports.length; x++) {
                var s = "";
                var trans = this.company.transports[x];
                var target = this.company.world.companyCache[trans === null || trans === void 0 ? void 0 : trans.companyTarget];
                var prod = parameter.allProducts[target === null || target === void 0 ? void 0 : target.productid];
                var count = trans.productCount + "/" + trans.getCapacity();
                s = s + '<img src="' + company_3.Company.getImageUrl((prod === null || prod === void 0 ? void 0 : prod.image) === undefined ? "Dummy.png" : prod.image) + '" height="25">' + trans.getName() + " " + '<span>' + count + (trans.workersComming ? ("+" + trans.workersComming) : "") + '</span>';
                var entr = list.children[x];
                if (entr.innerHTML !== s)
                    entr.innerHTML = s;
            }
            var list2 = document.getElementById("companydialog-transport-productlist");
            var s = ``;
            var companies = this.company.world.findCompanyThatConsumes(this.company.productid);
            for (var x = 0; x < companies.length; x++) {
                var comp = companies[x];
                var prod = parameter.allProducts[comp.productid];
                s = s + `<li value="` + comp.companyID + '" class=""><img src="' + company_3.Company.getImageUrl((prod === null || prod === void 0 ? void 0 : prod.image) === undefined ? "Dummy.png" : prod.image) + `" height="25">${comp.name}</li>`;
            }
            if ((trans === null || trans === void 0 ? void 0 : trans.getName()) === "Bautransport")
                s += `<li value="-1" class="">Bautransport</li>`;
            else
                s += `<li value="-1" class="">inaktiv</li>`;
            if (list2.innerHTML.replace('active-listitem', "") !== s) {
                list2.innerHTML = s;
            }
            var selectedtransport = this.getSelectedTransport();
            if (selectedtransport === undefined) {
                document.getElementById("transportdetails").setAttribute("hidden", "");
                document.getElementById("companydialog-transport-productlist").setAttribute("hidden", "");
                document.getElementById("transport-up").setAttribute("hidden", "");
                document.getElementById("transport-down").setAttribute("hidden", "");
                document.getElementById("transport-add-worker").setAttribute("hidden", "");
                document.getElementById("transport-remove-worker").setAttribute("hidden", "");
                document.getElementById("transport-del").setAttribute("hidden", "");
            }
            else {
                document.getElementById("transportdetails").removeAttribute("hidden");
                document.getElementById("companydialog-transport-productlist").removeAttribute("hidden");
                document.getElementById("transport-up").removeAttribute("hidden");
                document.getElementById("transport-down").removeAttribute("hidden");
                document.getElementById("transport-add-worker").removeAttribute("hidden");
                document.getElementById("transport-remove-worker").removeAttribute("hidden");
                document.getElementById("transport-del").removeAttribute("hidden");
            }
            if (this.company.world.tickCount % 5 === 0) { //selection of companyTarget not work
                var tar = selectedtransport === null || selectedtransport === void 0 ? void 0 : selectedtransport.companyTarget;
                if (tar === undefined)
                    tar = -1;
                this.selectCompanyIfNeeded(tar);
                /*if (list2.value !== tar?.toString()) {
                    list2.value = tar?.toString();
                }*/
            }
            var tt = this.getSelectedTransport();
            if (tt) {
                if (document.getElementById("transport-add-worker").disabled !== ((tt.workers + (tt.workersComming ? tt.workersComming : 0)) >= this.company.calcMaxWorker()))
                    document.getElementById("transport-add-worker").disabled = ((tt.workers + (tt.workersComming ? tt.workersComming : 0)) >= this.company.calcMaxWorker());
            }
            //if(list2.value!==
        }
        updateGate() {
            var prods = this.company.world.getProductsToBuildForLevel(this.company.world.game.level, true);
            // if (prods.length > 0) {
            var sgeb = "";
            for (var x = 0; x < prods.length; x++) {
                var prod = prods[x];
                sgeb += '<img src="' + company_3.Company.getImageUrl(prod.image) + '"  height="25"></img>';
            }
            var info;
            /*  if (this.company.world.game.level === parameter.allLevels.length) {
                  info = `Alle Ziele erreicht. <br/><br/>
                              Tipp: <br/>
                              Schicke Soldaten in die Produktionsgeb&auml;ude, um dort mehr Arbeiter zu besch&auml;ftigen und die Wirtschaft in Schwung zu bringen.`;
                  if (document.getElementById("infonextlevel").innerHTML !== info) {
                      document.getElementById("infonextlevel").innerHTML = info;
                  }
      
              } else {*/
            info = ` Um in den n&auml;chsten Level zu kommen, muss folgendes erf&uuml;lt werden:<br/>
                        <ol>`;
            // }
            if (sgeb !== "")
                info += `<LI>    Diese Geb&auml;de m&uuml;ssen noch gebaut werden:<br/><span>${sgeb}</span></LI>`;
            var table = document.getElementById("companydialog-gate-table");
            var prod = parameter.allProducts[this.company.productid];
            var ready = true;
            for (var x = 0; x < this.company.rawmaterials.length; x++) {
                var tr = table.children[0].children[x];
                if (tr.hasAttribute("hidden"))
                    tr.removeAttribute("hidden");
                var pconsume = parameter.allProducts[prod.consume[x]];
                var sname = pconsume.name;
                var icon = company_3.Company.getImageUrl(pconsume.image);
                var count = this.company.rawmaterials[x] + "/" + (parameter.capacityPerHelper + this.company.workersIn * parameter.capacityPerHelper);
                if (this.company.rawmaterials[x] !== (parameter.capacityPerHelper + this.company.workersIn * parameter.capacityPerHelper))
                    ready = false;
                if (tr.children[0].textContent !== sname)
                    tr.children[0].textContent = sname;
                if (tr.children[1].children[0].src !== icon)
                    tr.children[1].children[0].src = icon;
                if (tr.children[2].textContent !== count)
                    tr.children[2].textContent = count;
            }
            if (!ready)
                info += `<LI>    Folgende Produkte werden hier ben&ouml;tigt:</LI>
                      `;
            info += `</ol>`;
            if (document.getElementById("infonextlevel").innerHTML !== info) {
                document.getElementById("infonextlevel").innerHTML = info;
            }
            for (var x = this.company.rawmaterials.length; x < 16; x++) {
                var tr = table.children[0].children[x];
                if (!tr.hasAttribute("hidden"))
                    tr.setAttribute("hidden", "");
            }
        }
        updateProduction() {
            var _a, _b, _c;
            if (((_a = this.company) === null || _a === void 0 ? void 0 : _a.productid) === -1 || ((_b = this.company) === null || _b === void 0 ? void 0 : _b.productid) === -2 || ((_c = this.company) === null || _c === void 0 ? void 0 : _c.productid) === -3)
                return;
            var srcicon = company_3.Company.getImageUrl(parameter.allProducts[this.company.productid].image);
            if (document.getElementById("companydialog-production-table-icon").src !== srcicon)
                document.getElementById("companydialog-production-table-icon").src = srcicon;
            document.getElementById("workers").textContent = this.company.workers.toString() + (this.company.workersComming ? ("+" + this.company.workersComming) : "");
            var maxprod = 0;
            for (var x = 0; x < this.company.rawmaterials.length; x++) {
                if (this.company.rawmaterials[x] > maxprod)
                    maxprod = this.company.rawmaterials[x];
            }
            document.getElementById("workersIn").textContent = maxprod + "/" + (this.company.workersIn * parameter.capacityPerHelper + parameter.capacityPerHelper) +
                (this.company.workersInComming ? ("+" + this.company.workersInComming * parameter.capacityPerHelper) : "");
            var factSoldier = 1;
            if (this.company.productid === product_3.Product.productSoldier)
                factSoldier = 10;
            document.getElementById("workersOut").textContent =
                this.company.produced + "/" + (this.company.workersOut * parameter.capacityPerHelper + parameter.capacityPerHelper) +
                    (this.company.workersOutComming ? ("+" + this.company.workersOutComming * parameter.capacityPerHelper) : "");
            var table = document.getElementById("companydialog-production-table");
            var prod = parameter.allProducts[this.company.productid];
            var temp = document.getElementById("companydialog-production-table");
            if (this.company.world.game.level < prod.level && !temp.hasAttribute("hidden"))
                temp.setAttribute("hidden", "");
            if (this.company.world.game.level >= prod.level && temp.hasAttribute("hidden"))
                temp.removeAttribute("hidden");
            /*if (this.company.productid === Product.productHelper || this.company.productid === Product.productSoldier) {
                if (!table.children[0].children[0].hasAttribute("hidden")) {
                    table.children[0].children[0].setAttribute("hidden", "");
                    table.children[0].children[1].setAttribute("hidden", "");
                }
            } else {
                if (table.children[0].children[0].hasAttribute("hidden")) {
                    table.children[0].children[0].removeAttribute("hidden");
                    table.children[0].children[1].removeAttribute("hidden");
                }
            }*/
            for (var x = 0; x < this.company.rawmaterials.length; x++) {
                var tr = table.children[0].children[x + 2];
                if (tr.hasAttribute("hidden"))
                    tr.removeAttribute("hidden");
                var pconsume = parameter.allProducts[prod.consume[x]];
                if (pconsume === undefined)
                    pconsume = pconsume;
                var sname = pconsume.name;
                var icon = company_3.Company.getImageUrl(pconsume.image);
                var count = this.company.rawmaterials[x] + "/" + (parameter.capacityPerHelper + this.company.workersIn * parameter.capacityPerHelper);
                if (tr.children[0].textContent !== sname)
                    tr.children[0].textContent = sname;
                if (tr.children[1].children[0].src !== icon)
                    tr.children[1].children[0].src = icon;
                if (tr.children[2].textContent !== count)
                    tr.children[2].textContent = count;
            }
            for (var x = this.company.rawmaterials.length; x < 16; x++) {
                var tr = table.children[0].children[x + 2];
                if (!tr.hasAttribute("hidden"))
                    tr.setAttribute("hidden", "");
            }
            var prodinfo = document.getElementById("production-info");
            var sprodinfo = "";
            if (this.company.productid === product_3.Product.productHelper && this.company.world.game.people >= this.company.world.game.getCurrentLevel().maxPeople)
                sprodinfo += "Level-Limit (" + this.company.world.game.getCurrentLevel().maxPeople + ") f&uuml;r Helfer erreicht. Es k&ouml;nnen keine weitere Helfer produziert werden.";
            var sold = 0;
            var csold = this.company.world.findCompanyThatProduces(product_3.Product.productSoldier);
            csold.forEach(s => sold = sold + s.produced);
            if (this.company.productid === product_3.Product.productSoldier && sold >= this.company.world.game.getCurrentLevel().maxSoldiers)
                sprodinfo += "Level-Limit (" + this.company.world.game.getCurrentLevel().maxSoldiers + ") f&uuml;r Soldaten erreicht. Es k&ouml;nnen keine weitere Soldaten produziert werden.";
            if (prodinfo.innerHTML !== sprodinfo)
                prodinfo.innerHTML = sprodinfo;
            document.getElementById("add-worker").disabled = ((this.company.workers + (this.company.workersComming ? this.company.workersComming : 0)) >= this.company.calcMaxWorker());
            document.getElementById("in-add-worker").disabled = ((this.company.workersIn + (this.company.workersInComming ? this.company.workersInComming : 0)) >= this.company.calcMaxWorker());
            document.getElementById("out-add-worker").disabled = ((this.company.workersOut + (this.company.workersOutComming ? this.company.workersOutComming : 0)) >= (factSoldier * this.company.calcMaxWorker()));
            var rawMaterial = document.getElementById("companydialog-production-table-rawmaterial");
            var rawMaterialvisible = true;
            if (this.company.rawmaterials.length === 0)
                rawMaterialvisible = false;
            if (!rawMaterial.hasAttribute("hidden") && !rawMaterialvisible)
                rawMaterial.setAttribute("hidden", "");
            if (rawMaterial.hasAttribute("hidden") && rawMaterialvisible)
                rawMaterial.removeAttribute("hidden");
        }
        update(force = false) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
            if (!this.company)
                return;
            try {
                if (!$(this.dom).dialog('isOpen')) {
                    return;
                }
            }
            catch (_r) {
                return;
            }
            this.updateTitle();
            //production,transport,conquer,build,delete,gate
            var tabs = [false, false, true, false, true, false];
            var tabnames = ["companydialog-production-tab", "companydialog-transport-tab", "companydialog-conquer-tab", "companydialog-build-tab", "companydialog-delete-tab", "companydialog-gate-tab"];
            if (this.company.productid === -2 || this.company.productid === -3) {
                /* var button = <HTMLButtonElement>document.getElementById("add-soldier");
                 if (this.company.soldiersComing && !button.disabled)
                     button.disabled = true;
                 if (!this.company.soldiersComing && button.disabled)
                     button.disabled = false;*/
                tabs[2] = true;
                tabs[4] = false;
            }
            else if (this.company.productid === -1) {
                if (!this.company.buildingInProgress && document.getElementById("companydialog-build-tabs").hasAttribute("hidden")) {
                    document.getElementById("companydialog-build-tabs").removeAttribute("hidden");
                }
                if (this.company.buildingInProgress && !document.getElementById("companydialog-build-tabs").hasAttribute("hidden")) {
                    document.getElementById("companydialog-build-tabs").setAttribute("hidden", "");
                }
                tabs[3] = true;
            }
            else {
                tabs[0] = true;
                tabs[1] = true;
                // if (this.company.world.game.level == parameter.allLevels.length)
                //      tabs[2] = true;
            }
            if (this.company.productid == product_3.Product.productSoldier || this.company.productid == product_3.Product.productHelper) {
                tabs[1] = false;
            }
            if (this.company.productid == product_3.Product.productGate) {
                tabs[0] = false;
                tabs[1] = false;
                tabs[2] = false;
                tabs[3] = false;
                tabs[4] = false;
                tabs[5] = true;
            }
            if (this.company.productid == product_3.Product.productTower || this.company.productid == product_3.Product.productCastle) {
                tabs[0] = false;
                tabs[1] = false;
                tabs[2] = true;
                tabs[3] = false;
                tabs[4] = this.company.enemy === undefined ? true : false;
                tabs[5] = false;
            }
            if (!tabs[0] && !tabs[1] && !tabs[2] && !tabs[3] && !tabs[4] && ![tabs[5]])
                tabs[5] = true;
            var active = -1;
            if (this.company.isConquered === false && this.company.enemy === undefined) {
                tabs[0] = false;
                tabs[1] = false;
                tabs[2] = false;
                tabs[3] = false;
                tabs[4] = false;
                tabs[5] = false;
            }
            for (var x = 0; x < tabs.length; x++) {
                if (active === -1 && tabs[x])
                    active = x;
                var tabname = tabnames[x];
                if (tabs[x] && document.getElementById(tabname).parentElement.hasAttribute("hidden")) {
                    document.getElementById(tabname).parentElement.removeAttribute("hidden");
                }
                if (!tabs[x] && !document.getElementById(tabname).parentElement.hasAttribute("hidden")) {
                    document.getElementById(tabname).parentElement.setAttribute("hidden", "");
                }
            }
            if (tabs[$("#companydialog-tabs").tabs('option', 'active')] === false) { //aktver tab is hiding
                $("#companydialog-tabs").tabs("option", "active", active);
            }
            /*
                    if (this.company.productid === -2) {
                        if (!document.getElementById("companydialog-production-tab").parentElement.hasAttribute("hidden")) {
                            document.getElementById("companydialog-production-tab").parentElement.setAttribute("hidden", "");
                            $("#companydialog-tabs").tabs("option", "active", 2);
                        }
                        if (!document.getElementById("companydialog-transport-tab").parentElement.hasAttribute("hidden"))
                            document.getElementById("companydialog-transport-tab").parentElement.setAttribute("hidden", "");
                        if (!document.getElementById("companydialog-build-tab").parentElement.hasAttribute("hidden"))
                            document.getElementById("companydialog-build-tab").parentElement.setAttribute("hidden", "");
                        if (document.getElementById("companydialog-conquer-tab").parentElement.hasAttribute("hidden"))
                            document.getElementById("companydialog-conquer-tab").parentElement.removeAttribute("hidden");
            
                    } else if (this.company.productid === -1) {
                        if (!document.getElementById("companydialog-conquer-tab").parentElement.hasAttribute("hidden")) {
                            document.getElementById("companydialog-conquer-tab").parentElement.setAttribute("hidden", "");
                            $("#companydialog-tabs").tabs("option", "active", 3);
                        }
                        if (!document.getElementById("companydialog-transport-tab").parentElement.hasAttribute("hidden")) {
                            document.getElementById("companydialog-transport-tab").parentElement.setAttribute("hidden", "");
                            $("#companydialog-tabs").tabs("option", "active", 3);
                        }
                        if (!document.getElementById("companydialog-production-tab").parentElement.hasAttribute("hidden"))
                            document.getElementById("companydialog-production-tab").parentElement.setAttribute("hidden", "");
                        if (document.getElementById("companydialog-build-tab").parentElement.hasAttribute("hidden"))
                            document.getElementById("companydialog-build-tab").parentElement.removeAttribute("hidden");
            
                    } else {
                        if (document.getElementById("companydialog-production-tab").parentElement.hasAttribute("hidden"))
                            document.getElementById("companydialog-production-tab").parentElement.removeAttribute("hidden");
                        if (document.getElementById("companydialog-transport-tab").parentElement.hasAttribute("hidden"))
                            document.getElementById("companydialog-transport-tab").parentElement.removeAttribute("hidden");
                        if (!document.getElementById("companydialog-build-tab").parentElement.hasAttribute("hidden"))
                            document.getElementById("companydialog-build-tab").parentElement.setAttribute("hidden", "");
                        if (!document.getElementById("companydialog-conquer-tab").parentElement.hasAttribute("hidden")) {
                            document.getElementById("companydialog-conquer-tab").parentElement.setAttribute("hidden", "");
                            $("#companydialog-tabs").tabs("option", "active", 0);
                        }
            
                    }*/
            if ((_c = (_b = (_a = document.getElementById("companydialog-production-tab")) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList) === null || _c === void 0 ? void 0 : _c.contains("ui-tabs-active"))
                this.updateProduction();
            if ((_f = (_e = (_d = document.getElementById("companydialog-transport-tab")) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.classList) === null || _f === void 0 ? void 0 : _f.contains("ui-tabs-active"))
                this.updateTransport();
            if ((_j = (_h = (_g = document.getElementById("companydialog-build-tab")) === null || _g === void 0 ? void 0 : _g.parentElement) === null || _h === void 0 ? void 0 : _h.classList) === null || _j === void 0 ? void 0 : _j.contains("ui-tabs-active"))
                this.updateBuild();
            if ((_m = (_l = (_k = document.getElementById("companydialog-conquer-tab")) === null || _k === void 0 ? void 0 : _k.parentElement) === null || _l === void 0 ? void 0 : _l.classList) === null || _m === void 0 ? void 0 : _m.contains("ui-tabs-active"))
                this.updateSoldiers();
            if ((_q = (_p = (_o = document.getElementById("companydialog-gate-tab")) === null || _o === void 0 ? void 0 : _o.parentElement) === null || _p === void 0 ? void 0 : _p.classList) === null || _q === void 0 ? void 0 : _q.contains("ui-tabs-active"))
                this.updateGate();
        }
        updateTitle() {
            var _a;
            //     var sicon = '';
            var _this = this;
            if ($(this.dom).parent().find('.ui-dialog-title').length > 0) {
                var prod = parameter.allProducts[this.company.productid];
                var pic = prod === null || prod === void 0 ? void 0 : prod.image;
                $(this.dom).parent().find('.ui-dialog-title')[0].innerHTML = '<img style="float: right" id="companydialog-icon" src="' + company_3.Company.getImageUrl(pic) +
                    '"  height="15"></img> ' + ((_a = this.company) === null || _a === void 0 ? void 0 : _a.name) + "(" + this.company.produced + ")";
            }
        }
        updateSoldiers() {
            var ges = (this.company.soldiersComing ? this.company.soldiersComing : 0) + this.company.soldiercount;
            var max = this.company.calcMaxSoldiers();
            var soldiers = "Soldaten im Gebäude " + this.company.soldiercount + (this.company.soldiersComing ? ("+" + this.company.soldiersComing) : "") + (this.company.enemiesComming ? ("-" + this.company.enemiesComming) : "");
            if (max < 9999999999) {
                soldiers += "/" + max;
            }
            var button = document.getElementById("add-soldier");
            if (ges >= max && !button.disabled)
                button.disabled = true;
            if (ges < max && button.disabled)
                button.disabled = false;
            if (this.company.soldiercount === 0 && !this.company.soldiersComing && this.company.world.companies.length >= this.company.world.game.getCurrentLevel().maxPlaces) {
                button.disabled = true;
                soldiers += "\r\nDie maximale Anzahl von Gebäuden für dieses Level wurde erreicht.";
            }
            if (this.company.enemy !== undefined) {
                button.disabled = false;
            }
            if (document.getElementById("info-soldiers").textContent !== soldiers)
                document.getElementById("info-soldiers").textContent = soldiers;
        }
        /*private savePos() {
            var _this = this;
            var o = $(_this.dom).dialog("open").closest('.ui-dialog').offset();
           // Game.showInfo("Top: " + o.top + " Left : " + o.left);
            if (o.top < 0 || o.left < 0)
                return;
            _this.savePosTop = o.top;
            _this.savePosLeft = o.left;
    
        }*/
        repairComingIfNeeded() {
            var _a, _b, _c;
            var workers = 0;
            var workersIn = 0;
            var workersOut = 0;
            var soldier = 0;
            var wood = 0;
            var stone = 0;
            if (this.company === undefined)
                return;
            for (var x = 0; x < this.company.world.companies.length; x++) {
                var comp = this.company.world.companies[x];
                if (comp.productid === product_3.Product.productStone || comp.productid == product_3.Product.productWood || comp.productid === product_3.Product.productCastle || comp.productid === product_3.Product.productTower || comp.productid === product_3.Product.productSoldier || comp.productid === product_3.Product.productHelper) {
                    for (let t = 0; t < comp.transports.length; t++) {
                        var trans = comp.transports[t];
                        if (trans.companyTarget === this.company.companyID) {
                            if (comp.productid === product_3.Product.productStone) {
                                stone += trans.productCount;
                            }
                            if (comp.productid === product_3.Product.productWood) {
                                wood += trans.productCount;
                            }
                            if (comp.productid === product_3.Product.productHelper && ((_a = trans.transferInfo) === null || _a === void 0 ? void 0 : _a.workertype) === "workers") {
                                workers += trans.productCount;
                            }
                            if (comp.productid === product_3.Product.productHelper && ((_b = trans.transferInfo) === null || _b === void 0 ? void 0 : _b.workertype) === "workersIn") {
                                workersIn += trans.productCount;
                            }
                            if (comp.productid === product_3.Product.productHelper && ((_c = trans.transferInfo) === null || _c === void 0 ? void 0 : _c.workertype) === "workersOut") {
                                workersOut += trans.productCount;
                            }
                            if (comp.productid === product_3.Product.productCastle || comp.productid === product_3.Product.productTower || comp.productid === product_3.Product.productSoldier) {
                                soldier += trans.productCount;
                            }
                        }
                    }
                }
            }
            if (wood === 0)
                this.company.woodsComming = 0;
            if (stone = 0)
                this.company.stonesComming = 0;
            if (soldier === 0)
                this.company.soldiersComing = 0;
            if (workers === 0)
                this.company.workersComming = 0;
            if (workersIn === 0)
                this.company.workersInComming = 0;
            if (workersOut === 0)
                this.company.workersOutComming = 0;
            this.update();
        }
        show() {
            var _this = this;
            this.repairComingIfNeeded();
            // if (_this.savePosTop !== undefined) {
            //   this.savePos();
            // }
            this.update();
            if ($(this.dom).hasClass("ui-dialog-content") &&
                $(this.dom).dialog("isOpen")) {
                return;
            }
            this.dom.removeAttribute("hidden");
            $(this.dom).dialog({
                top: "10px",
                left: "10px",
                width: "390px",
                //top:(_this.savePosTop?(_this.savePosTop+"px"):undefined),
                //left:(_this.savePosLeft?(_this.savePosLeft+"px"):undefined),
                draggable: true,
                // position: { my: "left top", at: "right top", of: $(AirplaneDialog.getInstance().dom) },
                open: function (event, ui) {
                    _this.update(true);
                },
                beforeClose: function (e) {
                },
                close: function (ev, ev2) {
                    if (_this.hasPaused) {
                        _this.company.world.game.resume();
                    }
                },
                create: function (e) {
                    setTimeout(() => {
                        $(e.target).dialog("widget").find(".ui-dialog-titlebar-close")[0].addEventListener('touchstart', (e) => {
                            _this.close();
                        });
                    }, 200);
                },
                resizable: false
            }).dialog("widget").draggable("option", "containment", "none");
            //_this.savePos();
            //    $(this.dom).position({of: $(window)});
            setTimeout(() => {
                $(this.dom).closest("div[role='dialog']").css({ top: "40px", left: "10px" });
                $(this.dom).parent().css({ position: "fixed" });
                // $(this.dom).dialog('option', 'position', [1,1]);
            }, 100);
        }
        close() {
            $(this.dom).dialog("close");
        }
    }
    exports.CompanyDialog = CompanyDialog;
});
define("game/game", ["require", "exports", "game/world", "game/tools", "game/icons", "game/company", "game/product", "game/diagramdialog", "game/savedialog", "game/tools", "game/companydialog"], function (require, exports, world_2, tools_1, icons_3, company_4, product_4, diagramdialog_1, savedialog_1, tools_2, companydialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.test = exports.Game = exports.gameversion = exports.Parameter = exports.Level = void 0;
    var gameversion = "3.8";
    exports.gameversion = gameversion;
    window.onbeforeunload = function () {
        return "Do you want to exit?";
    };
    //@ts-ignore
    $.notify.defaults({ position: "bottom right", className: "info" });
    class Level {
    }
    exports.Level = Level;
    class Parameter {
        constructor() {
            this.autoCloseDialog = true;
            this.zoomfactor = 30;
            this.peopleWithOneClick = 1;
            this.soldierWithOneClick = 10;
            this.buildWithDoubleClick = 0;
            this.soldiersToConquer = 10;
            this.transportCapacityPerHelper = 1;
            this.capacityPerHelper = 1;
            this.enemyReproduction = 120;
        }
    }
    exports.Parameter = Parameter;
    function createParameter() {
        window.parameter = new Parameter();
        globalThis.parameter = new Parameter();
        //7*6
        parameter.allProducts = product_4.Product.init([
            new product_4.Product("Tor", "Tor.png", 1, []),
            new product_4.Product("Wasser", "Wasser.png", 1, [], undefined, undefined, 30),
            new product_4.Product("Beeren", "Beeren.png", 1, ["Wasser"], 1, undefined, 30),
            new product_4.Product("Helfer", "Helfer.png", 1, ["Beeren"], undefined, undefined, 30),
            new product_4.Product("Soldat", "Soldat.png", 1, ["Bier"]),
            new product_4.Product("Stein", "Stein.png", 1, ["Beeren"]),
            new product_4.Product("Holz", "Holz.png", 1, ["Beeren"]),
            new product_4.Product("Getreide", "Getreide.png", 2, ["Wasser"]),
            new product_4.Product("Mehl", "Mehl.png", 2, ["Getreide"]),
            new product_4.Product("Brot", "Brot.png", 2, ["Mehl", "Holz"]),
            new product_4.Product("Schwein", "Schwein.png", 2, ["Getreide", "Wasser"]),
            new product_4.Product("Fleisch", "Fleisch.png", 2, ["Schwein"]),
            new product_4.Product("Burger", "Burger.png", 2, ["Brot", "Fleisch", "Holz"], 2),
            new product_4.Product("Bier", "Bier.png", 2, ["Getreide", "Wasser"], undefined, 2),
            new product_4.Product("Gras", "Gras.png", 3, ["Wasser"]),
            new product_4.Product("Milch", "Milch.png", 3, ["Gras"]),
            new product_4.Product("Fisch", "Fisch.png", 3, ["Beeren"]),
            new product_4.Product("Kakao", "Kakao.png", 3, ["Bier", "Fisch"]),
            new product_4.Product("Kohle", "Kohle.png", 3, ["Fleisch"]),
            new product_4.Product("Kakaomilch", "Kakaomilch.png", 3, ["Milch", "Kakao"], 3),
            new product_4.Product("Eisenerz", "Eisenerz.png", 3, ["Brot"]),
            new product_4.Product("Eisen", "Eisen.png", 3, ["Eisenerz", "Kohle"]),
            new product_4.Product("Schwert", "Schwet.png", 3, ["Eisen", "Holz"], undefined, 3),
            new product_4.Product("Brett", "Brett.png", 4, ["Holz"]),
            new product_4.Product("Werkzeug", "Werkzeug.png", 4, ["Eisen", "Brett"]),
            new product_4.Product("Tisch", "Tisch.png", 4, ["Brett", "Werkzeug"], 4),
            new product_4.Product("Wolle", "Wolle.png", 4, ["Gras", "Wasser"]),
            new product_4.Product("Stoff", "Stoff.png", 4, ["Wolle"]),
            new product_4.Product("Kleidung", "Kleidung.png", 4, ["Stoff"]),
            new product_4.Product("Rüstung", "Ruestung.png", 4, ["Kleidung", "Eisen", "Kohle", "Werkzeug"], undefined, 4),
            new product_4.Product("Käse", "Kaese.png", 5, ["Milch"]),
            new product_4.Product("Papier", "Papier.png", 5, ["Holz"]),
            new product_4.Product("Pizza", "Pizza.png", 5, ["Fleisch", "Käse", "Mehl", "Papier"], 5),
            new product_4.Product("Leder", "Leder.png", 5, ["Fisch"]),
            new product_4.Product("Stiefel", "Stiefel.png", 5, ["Leder", "Stoff", "Wolle"], undefined, 5),
            new product_4.Product("Ei", "Ei.png", 6, ["Gras", "Getreide"]),
            new product_4.Product("Torte", "Torte.png", 6, ["Mehl", "Beeren", "Ei"]),
            new product_4.Product("Gold", "Gold.png", 6, ["Torte"]),
            new product_4.Product("Schmuck", "Schmuck.png", 6, ["Gold"]),
            new product_4.Product("Eierlikör", "Eierlikoer.png", 6, ["Ei", "Milch"]),
            new product_4.Product("Geschenk", "Geschenk.png", 6, ["Schmuck", "Eierlikör", "Papier"], 6),
            new product_4.Product("Helm", "Helm.png", 6, ["Eisen", "Kohle", "Wolle", "Schmuck"], undefined, 6),
            new product_4.Product("Turm", "Turm.png", 6, []),
            new product_4.Product("Burg", "Burg.png", 6, [])
            // new Product("Spielzeug",    "",         6,  ["Kleidung","Papier"])
        ]);
        parameter.allLevels = [
            { maxPeople: 40, maxSoldiers: 100, maxPlaces: 10, buildingLimit: 2 },
            { maxPeople: 600, maxSoldiers: 150, maxPlaces: 50, buildingLimit: 1000 },
            { maxPeople: 1600, maxSoldiers: 150, maxPlaces: 100, buildingLimit: 2000 },
            { maxPeople: 2400, maxSoldiers: 150, maxPlaces: 2000, buildingLimit: 3000 },
            { maxPeople: 5000, maxSoldiers: 150, maxPlaces: 300, buildingLimit: 4000 },
            { maxPeople: 9999999999, maxSoldiers: 9999999999, maxPlaces: 9999999999, buildingLimit: 9999999999 },
        ];
        return parameter;
    }
    ;
    //global.parameter=new Parametetr();
    class Game {
        constructor() {
            this.version = gameversion;
            this.isAlive = true;
            this.level = 1;
            this.people = 0;
            this.width = 9 * 3;
            this.height = 29 * 3;
            this.created = false;
            this.debugSoldierCreated = 0;
            this.debugEnemyCreated = 0;
            this.enemyBases = [];
            var _this = this;
            Game.instance = this;
            this.parameter = createParameter();
            this.speed = Game.temposcale[6];
            this.lastUpdate = Date.now();
            this.date = new Date("Sat Jan 01 2000 00:00:00");
            companydialog_1.CompanyDialog.instance = undefined;
            this.updateUIID = setTimeout(() => {
                _this.nextTick();
            }, 100);
            console.log("set intervall" + this.updateUIID);
            var _this = this;
            requestAnimationFrame((par) => _this.updateUI(par));
        }
        async updateUI(timestamp) {
            var _a;
            var _this = this;
            var h = Date.now() - this.lastRefresh;
            if (h < 100)
                await new Promise((res) => setTimeout(res, 100 - h));
            this.domCanavas.getContext('2d').clearRect(0, 0, 3320, 2710);
            //if (this.world?.lastRefreshCount === this.world.tickCount) {
            // requestAnimationFrame((par) => _this.updateUI(par));
            // return;
            // }
            this.lastRefresh = Date.now();
            (_a = this.world) === null || _a === void 0 ? void 0 : _a.lastRefreshCount = this.world.tickCount;
            this.updateTitle();
            var rect = { top: 0, left: 0, width: 100000, height: 100000 };
            /*  var prect=this.dom.parentNode.getBoundingClientRect()
             
              rect.width=prect.width;
              rect.height=prect.height;
              var crect=this.dom.getBoundingClientRect();
              
              rect.top=45-$(this.dom.parentNode.parentNode).offset().top-crect.y;
              rect.left=2+$(this.dom.parentNode.parentNode).offset().left-crect.x;
              if(rect.height>window.innerHeight){
                rect.height=window.innerHeight;
                rect.top=$(this.dom.parentNode.parentNode).offset().top-crect.y;
              }*/
            //  document.getElementById("mess").style.width=rect.width+"px";
            //  document.getElementById("mess").style.height=rect.height+"px"
            //   document.getElementById("mess").style.top=rect.top+"px";
            //   document.getElementById("mess").style.left=(rect.left)+"px"
            for (var x = 0; x < this.world.companies.length; x++) {
                try {
                    var comp = this.world.companies[x];
                    comp.updateUI(rect);
                }
                catch (err) {
                    console.error(err);
                }
            }
            for (var x = 0; x < this.world.freeCompanies.length; x++) {
                try {
                    var comp = this.world.freeCompanies[x];
                    comp.updateUI(rect);
                }
                catch (err) {
                    console.error(err);
                }
            }
            if (this.isAlive)
                requestAnimationFrame((par) => _this.updateUI(par));
        }
        getCurrentLevel() {
            if (this.level >= parameter.allLevels.length)
                return parameter.allLevels[parameter.allLevels.length - 1];
            else
                return parameter.allLevels[this.level - 1];
        }
        updateTitle() {
            try {
                var m = this.people;
                if (document.getElementById("idpeople").textContent !== (0, tools_2.getLocalNumber)(m))
                    document.getElementById("idpeople").textContent = (0, tools_2.getLocalNumber)(m);
                if (document.getElementById("idlevel").textContent !== this.level.toString())
                    document.getElementById("idlevel").textContent = this.level.toString();
                if (document.getElementById("iddebuginfo").textContent !== ("+" + this.debugSoldierCreated + "-" + this.debugEnemyCreated))
                    document.getElementById("iddebuginfo").textContent = ("+" + this.debugSoldierCreated + "-" + this.debugEnemyCreated);
            }
            catch (ex) {
                console.log("stop game");
                return;
            }
        }
        static showInfo(info) {
            //@ts-ignore
            $.notify(info);
        }
        randomEnemy() {
            var comp = this.world.freeCompanies[(0, tools_1.getRandomInt)(this.world.freeCompanies.length - 1)];
            //var neighbours=comp.
            if (Math.floor(comp.x / 4) <= (this.width - 2) && comp.y <= (this.height - 2))
                return this.randomEnemy();
            else {
                var neighbours = comp.findCompaniesAround(12);
                for (let x = 0; x < neighbours.length; x++) {
                    var test = neighbours[x];
                    if (test.enemy !== undefined)
                        return this.randomEnemy();
                }
            }
            return comp;
        }
        createEnemy(num) {
            var comp = undefined;
            comp = this.randomEnemy();
            this.world.freeCompanies.splice(this.world.freeCompanies.indexOf(comp), 1);
            this.world.companies.push(comp);
            comp.enemy = num;
            comp.changeProduct(product_4.Product.productCastle);
            if (num > 4) //TO LARGE
                num = 4;
            comp.soldiercount = num * 350;
            this.debugEnemyCreated += comp.soldiercount;
            comp.enemyBaseSoldierCount = (num * 250);
            this.world.game.enemyBases.push(comp.companyID);
        }
        checkNextLevel() {
            var prods = this.world.getProductsToBuildForLevel(this.level, true);
            if (prods.length === 0) {
                var gate = this.world.findCompanyThatProduces(product_4.Product.productGate)[0];
                var gatefull = true;
                gate.rawmaterials.forEach(val => {
                    if (val <= gate.workersIn) {
                        gatefull = false;
                    }
                });
                if (!gatefull || gate.rawmaterials.length === 0)
                    return;
                this.level++;
                if (this.level === parameter.allLevels.length) {
                    for (var x = 1; x <= 7; x++) {
                        this.createEnemy(x);
                    }
                    /*   if (parameter.allProducts[Product.productGate].consume.length > 0) {
                         parameter.allProducts[Product.productGate].consume = [];
                         var gate = this.world.findCompanyThatProduces(Product.productGate)[0];
                         gate.rawmaterials = [];
                         for (var l = 4; l < 6; l++) {
                           var prods = this.world.getProductsToBuildForLevel(l);
                           var p = getRandomInt(prods.length);
                           gate.rawmaterials.push(0);
                           parameter.allProducts[prods[p].id].consume;
               
                         }
                         gate.workersIn += 20;*/
                }
                if (this.level <= parameter.allLevels.length) {
                    var prodHelper = parameter.allProducts[product_4.Product.productHelper];
                    var productSoldier = parameter.allProducts[product_4.Product.productSoldier];
                    for (var x = 0; x < parameter.allProducts.length; x++) {
                        var prod = parameter.allProducts[x];
                        if (prod.forpeoplelevel === this.level && prodHelper.consume.indexOf(prod.id) === -1) {
                            prodHelper.consume.push(prod.id);
                            this.world.findCompanyThatProduces(product_4.Product.productHelper).forEach(p => p.rawmaterials.push(0));
                        }
                        if (prod.forsoldierlevel === this.level && productSoldier.consume.indexOf(prod.id) === -1) {
                            productSoldier.consume.push(prod.id);
                            this.world.findCompanyThatProduces(product_4.Product.productSoldier).forEach(p => p.rawmaterials.push(0));
                        }
                    }
                }
                this.setProductsInGate();
                alert("Glückwunsch, Du hast Level " + this.level + " erreicht. Weitere Gebäude wurden freigeschaltet.");
            }
            //this.updateTitle();
        }
        setProductsInGate() {
            var gate = this.world.findCompanyThatProduces(product_4.Product.productGate)[0];
            var helper = this.world.findCompanyThatProduces(product_4.Product.productHelper)[0];
            var soldier = this.world.findCompanyThatProduces(product_4.Product.productSoldier)[0];
            var pgate = parameter.allProducts[product_4.Product.productGate];
            var phelper = parameter.allProducts[product_4.Product.productHelper];
            var psoldier = parameter.allProducts[product_4.Product.productSoldier];
            if (this.level >= parameter.allLevels.length) {
                pgate.consume = [];
                var gate = this.world.findCompanyThatProduces(product_4.Product.productGate)[0];
                gate.rawmaterials = [];
                for (var l = 4; l <= 6; l++) {
                    var prods = this.world.getProductsToBuildForLevel(l, false, true);
                    var p = (0, tools_1.getRandomInt)(prods.length);
                    gate.rawmaterials.push(0);
                    pgate.consume.push(prods[p].id);
                }
                gate.workersIn = this.level * 10;
                if (gate.workersIn > 150)
                    gate.workersIn = 150;
            }
            else {
                gate.rawmaterials = [];
                pgate.consume = [];
                gate.workersIn = this.world.getProductsToBuildForLevel(this.level + 1).length * 10 - 1;
                parameter.allProducts.forEach(p => {
                    if ((this.level) === p.forpeoplelevel) {
                        pgate.consume.push(p.id);
                        gate.rawmaterials.push(this.world.getProductsToBuildForLevel(this.level + 1).length * 5);
                    }
                    if ((this.level) === p.forsoldierlevel) {
                        pgate.consume.push(p.id);
                        gate.rawmaterials.push(0);
                    }
                });
            }
            if (this.level <= parameter.allLevels.length) {
                parameter.allProducts.forEach(p => {
                    if ((this.level) === p.forpeoplelevel) {
                        var idx = phelper.consume.indexOf(p.id);
                        helper.rawmaterials[idx] = this.world.getProductsToBuildForLevel(this.level).length * 5;
                    }
                    if ((this.level) === p.forsoldierlevel) {
                        var idx = psoldier.consume.indexOf(p.id);
                        soldier.rawmaterials[idx] = this.world.getProductsToBuildForLevel(this.level).length * 10;
                    }
                });
            }
        }
        nextTick() {
            if (this.created === false)
                return;
            var _this = this;
            this.checkNextLevel();
            this.world.nextTick();
            this.updateUIID = setTimeout(() => {
                _this.nextTick();
            }, 100);
            companydialog_1.CompanyDialog.getInstance().update();
            //this.updateUI(undefined);
            //AirplaneDialog.getInstance().update();
        }
        updateSize() {
            var mapWidth = this.width * parameter.zoomfactor * 4;
            var mapHeight = this.height * parameter.zoomfactor;
            this.domWorld.style.width = (mapWidth + 80) + "px";
            this.domWorld.style.height = (mapHeight + 100) + "px";
            this.domWorld.parentNode.style.width = (mapWidth + 80) + "px";
            this.domWorld.parentNode.style.height = (mapHeight + 100) + "px";
        }
        //never call this outside the timer - then would be 2 updates
        /*private nevercallthisfunction() {
          //var t=new Date().getTime();
          var intervall = 1000 / this.speed;
          var _this = this;
          var diff = 1000 * 60 * 60;//update always at full clock//((Date.now() - this.lastUpdate)) * 60 * 60 * this.speed;
          this.date = new Date(this.date.getTime() + diff);
       
          if (this.world)
            this.world.nextTick();
          this.lastUpdate = Date.now();
          this.timer = setTimeout(() => {
            _this.nevercallthisfunction();
       
          }, intervall);
       
        }
      */
        newGame() {
            this.world = new world_2.World();
            this.world.game = this;
            this.world.newGame();
        }
        getMoney() {
            return this._money;
        }
        changeMoney(change, why, city = undefined) {
            this._money += change;
            //  console.log(change+" "+why);
        }
        setHeaderColor(color) {
            if (this.domHeader.mycolor !== color) {
                this.domHeader.mycolor = color;
                this.domHeader.style.color = color;
            }
        }
        render(dom) {
            var _this = this;
            dom.style.backgroundImage = "url(" + company_4.Company.getImageUrl("Wiese.png") + ")";
            dom.style.paddingLeft = "10px";
            dom.innerHTML = "";
            dom.style.backgroundColor = "lightblue";
            this.dom = dom;
            //<div style="height:15px;position:fixed;z-index:10000;background-color:lightblue;">
            var sdomHeader = `
          <div style="height:15px;position:fixed;z-index:10000;">
            Traffics2 ` + gameversion + ` 
            <span id="gamedate"></span> &nbsp;&nbsp;&nbsp;&nbsp;  
            <span id="idpeople"></span>` + "👤" + `
            Level <span id="idlevel"></span>` + `
            <span id="iddebuginfo"></span>
            <button id="save-game"  class="mybutton">` + icons_3.Icons.save + `</button> 
            <!--button id="debug-game"  class="mybutton">` + icons_3.Icons.debug + `</button--> 
            <button id="show-diagram"  class="mybutton">` + icons_3.Icons.diagram + `</button> 
          </div>  
        `;
            this.domHeader = document.createRange().createContextualFragment(sdomHeader).children[0];
            var sdomWorld = `
          <div id="world" style="position:absolute;top:20px;">
          </div>  
        `;
            this.domCanavas = document.createRange().createContextualFragment('<canvas id="stage"  style="position:absolute;" width="3320" height="2710">').children[0];
            this.dom.appendChild(this.domCanavas);
            this.domWorld = document.createRange().createContextualFragment(sdomWorld).children[0];
            this.dom.appendChild(this.domHeader);
            // var headerPlaceeholder = <any>document.createRange().createContextualFragment('<div style="height:15px"></div>').children[0]
            // this.dom.appendChild(headerPlaceeholder);
            this.dom.appendChild(this.domWorld);
            //var mess= <any>document.createRange().createContextualFragment('<div id="mess" style="position:absolute;top:100px;left:100px;height:100px;width:100px;border: 1px dotted blue;">').children[0];
            //this.dom.appendChild(mess);
            this.world.render(this.domWorld);
            this.updateSize();
            setTimeout(() => {
                _this.bindActions();
            }, 500);
        }
        bindActions() {
            var _this = this;
            document.getElementById("gamedate").addEventListener("mousedown", () => {
                console.log("down");
            });
            document.getElementById("save-game").addEventListener("click", () => {
                savedialog_1.SaveDialog.getInstance().game = _this;
                savedialog_1.SaveDialog.getInstance().show();
            });
            /*  document.getElementById("debug-game").addEventListener("click", () => {
                // _this.world.showMoveIcon();
                //Product.randomUpdateConsumtion(_this.world,9,18,3,false);
               Product.randomUpdateConsumtion(this.world);
               });*/
            document.getElementById("show-diagram").addEventListener("click", () => {
                diagramdialog_1.DiagramDialog.getInstance().world = this.world;
                diagramdialog_1.DiagramDialog.getInstance().show();
            });
            /*document.getElementById("game-slower").addEventListener("click", () => {
              if (_this.speed === Game.temposcale[0]) {
                _this.pause();
                console.log("pause");
                return;
              }
              var pos = Game.temposcale.indexOf(_this.speed);
              pos--;
              if (pos == -1)
                return;
              _this.speed = Game.temposcale[pos];
              _this.pause();
              _this.resume();
            });
            document.getElementById("game-faster").addEventListener("click", () => {
              if (_this.isPaused()) {
                _this.resume();
                return;
              }
              var pos = Game.temposcale.indexOf(_this.speed);
              pos++;
              if (pos >= Game.temposcale.length) {
                console.log("max");
                return;
              }
              _this.speed = Game.temposcale[pos];
              _this.pause();
              _this.resume();
            });*/
        }
        resume() {
            //  if (this.timer === 0)
            // this.nevercallthisfunction();
        }
        isPaused() {
            return this.timer === 0;
        }
        pause() {
            clearTimeout(this.timer);
            this.timer = 0;
        }
        destroy() {
            this.isAlive = false;
            this.world.destroy();
            clearTimeout(this.timer);
            clearTimeout(this.updateUIID);
            console.log("clear intervall" + this.updateUIID);
        }
        close() {
            ///clearInterval(this.updateUIID);
            //clearTimeout(this.timer);
        }
    }
    exports.Game = Game;
    Game.temposcale = [0.01, 0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256];
    function test() {
    }
    exports.test = test;
});
define("game/world", ["require", "exports", "game/company", "game/product", "game/tools", "game/transport"], function (require, exports, company_5, product_5, tools_3, transport_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.World = void 0;
    class World {
        constructor() {
            this.type = "World";
            this.lastUpdate = undefined;
            this.tickCount = 0;
            this.lastRefreshCount = 0;
            var _this = this;
            // console.log("CreateIntervall"+ this._intervall );
        }
        updateCompanyCache() {
            this.companyCache = {};
            for (let x = 0; x < this.companies.length; x++) {
                let comp = this.companies[x];
                this.companyCache[comp.companyID] = comp;
            }
            for (let x = 0; x < this.freeCompanies.length; x++) {
                let comp = this.freeCompanies[x];
                this.companyCache[comp.companyID] = comp;
            }
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
            this.tickCount++;
            this.game.setHeaderColor("black");
            for (var x = 0; x < this.companies.length; x++) {
                this.companies[x].nextTick();
                //            this.companies[x].update();
            }
            /* for (var x = 0; x < this.transports.length; x++) {
                 this.transports[x].nextTick();
     
             }      */
        }
        getProductsToBuildForLevel(level, onlyIfNotAlreadyBuildt = false, withoutTowerOrCastle = false) {
            var ret = [];
            for (var x = 0; x < parameter.allProducts.length; x++) {
                var prod = parameter.allProducts[x];
                if (withoutTowerOrCastle && (prod.id == product_5.Product.productTower || prod.id == product_5.Product.productCastle))
                    continue;
                if ((level) === prod.level) {
                    if (onlyIfNotAlreadyBuildt === false || this.findCompanyThatProduces(prod.id).length === 0) {
                        ret.push(prod);
                    }
                }
            }
            return ret;
        }
        newGame() {
            //createCities(this, 15);
            this.companies = [];
            this.freeCompanies = [];
            var all = [];
            //mix
            /*for (var x = 0; x < (this.game.width * this.game.height * 5); x++) {
                var rand1 = getRandomInt(this.game.width * this.game.height-(this.game.width * this.game.height/2));
                var rand2 = getRandomInt(this.game.width * this.game.height-(this.game.width * this.game.height/2));
                var temp = all[rand2];
                all[rand2] = all[rand1];
                all[rand1] = temp;
            }*/
            var z = 0;
            var top = [];
            for (var x = 1; x <= this.game.width; x++) {
                for (var y = 1; y <= this.game.height; y++) {
                    var comp;
                    if (y % 2 === 1)
                        comp = new company_5.Company(this, z, -2, 0, 0, 0, x * 4 - 1, y);
                    else
                        comp = new company_5.Company(this, z, -2, 0, 0, 0, x * 4 + 1, y);
                    this.freeCompanies.push(comp);
                    if (x < 5 && y < 16) {
                        top.push(comp);
                    }
                    comp.isConquered = !(comp.x > 42 || comp.y > 34);
                    z++;
                }
            }
            parameter.allProducts.forEach(p => {
                if (p.level === 1) {
                    var r = (0, tools_3.getRandomInt)(top.length - 1);
                    var found = top[r];
                    this.freeCompanies.splice(this.freeCompanies.indexOf(found), 1);
                    top.splice(top.indexOf(found), 1);
                    this.companies.push(found);
                    found.changeProduct(p.id);
                }
            });
            var id = 1;
            for (var x = 0; x < this.companies.length; x++) {
                this.companies[x].companyID = id++;
            }
            for (var x = 0; x < this.freeCompanies.length; x++) {
                this.freeCompanies[x].companyID = id++;
            }
            /* this.companies.push(new Company(this,0,0,1,[1],1,3,1));
             this.companies.push(new Company(this,1,1,1,[1],1,7,1));
             this.companies.push(new Company(this,2,2,1,[1],1,11,1));
     
             this.companies.push(new Company(this,3,3,1,[1],1,5,2));
             this.companies.push(new Company(this,4, 4,1,[1],1,9,2));
             this.companies.push(new Company(this,5,5,1,[1],1,13,2));
             
             this.companies.push(new Company(this,6,6,1,[1],1,3,3));
             this.companies.push(new Company(this,7,7,1,[1],1,7,3));
             this.companies.push(new Company(this,8,8,1,[1],1,11,3));
     
             this.companies.push(new Company(this,9,9,1,[1],1,5,4));
             this.companies.push(new Company(this,10,10,1,[1],1,9,4));
             this.companies.push(new Company(this,11,11,1,[1],1,13,4));*/
            /* for (var i = 1; i < this.companies.length; i++) {
                 if (this.companies[i].productid === -1)
                     continue;
                 var prod = parameter.allProducts[this.companies[i].productid];
                 var compstarget = this.findCompanyThatConsumes(this.companies[i].productid);
                 for (var x = 0; x < compstarget.length; x++) {
                     var trans = new Transport(this.companies[i]);
                     trans.active = true;
                     trans.worker=1;
                     trans.companyTarget = compstarget[x]?.companyID;
                     //trans.productCount=5;
                     this.companies[i].transports.push(trans);
                     //  trans.moveTo(trans.companyTarget);
                 }
             }*/
            this.updateCompanyCache();
            var helper = this.findCompanyThatProduces(product_5.Product.productHelper)[0];
            var soldier = this.findCompanyThatProduces(product_5.Product.productSoldier)[0];
            helper.workers = 1;
            helper.rawmaterials[0] = 10;
            // helper.produced = 10;
            this.game.people = 4; //2xBautransport 1Soldier 1Helper
            soldier.workers = 1;
            //soldier.rawmaterials[0]=this.getProductsToBuildForLevel(2).length*10;;
            //Bautransport
            var holz = this.findCompanyThatProduces(product_5.Product.productWood)[0];
            var trans = new transport_3.Transport(holz);
            trans.active = true;
            trans.workers = 1;
            trans.autodeliver = true;
            holz.transports.push(trans);
            var stein = this.findCompanyThatProduces(product_5.Product.productStone)[0];
            var trans2 = new transport_3.Transport(stein);
            trans2.active = true;
            trans2.workers = 1;
            trans2.autodeliver = true;
            stein.transports.push(trans2);
            this.game.setProductsInGate();
            //var gate=this.findCompanyThatProduces(Product.productGate)[0];
            this.game.created = true;
        }
        findSoldier(attackBuilding = undefined) {
            var max = 0;
            var maxc = undefined;
            if (attackBuilding) {
                var comps = attackBuilding.findCompaniesAround(1, attackBuilding.productid === product_5.Product.productCastle ? 5 : 3, true);
                for (var x = 0; x < comps.length; x++) {
                    if (comps[x].enemy === undefined && (comps[x].productid === product_5.Product.productCastle || comps[x].productid === product_5.Product.productTower))
                        if (comps[x].soldiercount > max) {
                            maxc = comps[x];
                            max = comps[x].soldiercount;
                        }
                }
            }
            else {
                var comps = this.findCompanyThatProduces(product_5.Product.productSoldier, false);
                for (var x = 0; x < comps.length; x++) {
                    if (comps[x].produced > max) {
                        maxc = comps[x];
                        max = comps[x].produced;
                    }
                }
            }
            return maxc;
        }
        findCompanyThatProducesByName(prodname) {
            var ret = [];
            var prodid = -1;
            parameter.allProducts.forEach(p => { if (p.name === prodname)
                prodid = p.id; });
            if (prodid === -1)
                return [];
            return this.findCompanyThatProduces(prodid);
        }
        findCompanyThatProduces(prodid, withBuildingInProgress = false, withEnemy = false) {
            var ret = [];
            for (var x = 0; x < this.companies.length; x++) {
                if (this.companies[x].productid === prodid || (withBuildingInProgress === true && this.companies[x].buildingInProgress === prodid)) {
                    if (this.companies[x].enemy === undefined || withEnemy)
                        ret.push(this.companies[x]);
                }
            }
            return ret;
        }
        findCompanyThatConsumes(prodid) {
            var _a;
            var ret = [];
            for (var x = 0; x < this.companies.length; x++) {
                var prod = parameter.allProducts[this.companies[x].productid];
                if (((_a = prod === null || prod === void 0 ? void 0 : prod.consume) === null || _a === void 0 ? void 0 : _a.indexOf(prodid)) > -1)
                    ret.push(this.companies[x]);
            }
            return ret;
        }
        findUsedCompanies() {
            var ret = [];
            for (var x = 0; x < this.companies.length; x++) {
                var prod = this.companies[x].productid;
                if (prod > -2)
                    ret.push(this.companies[x]);
            }
            return ret;
        }
        render(dom) {
            var _this = this;
            this.dom = dom;
            for (var x = 0; x < this.companies.length; x++) {
                this.companies[x].render();
                //            this.companies[x].update();
            }
            for (var x = 0; x < this.freeCompanies.length; x++) {
                this.freeCompanies[x].render();
                //            this.companies[x].update();
            }
        }
        destroy() {
        }
    }
    exports.World = World;
});
define("game/company", ["require", "exports", "game/tools", "game/companydialog", "game/transport", "game/product", "game/game"], function (require, exports, tools_4, companydialog_2, transport_4, product_6, game_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.test = exports.Company = void 0;
    class Company {
        // static workerInCompany=20;
        constructor(world = undefined, companyID = undefined, productid = undefined, workers = undefined, workersIn = undefined, workersOut = undefined, x = undefined, y = undefined) {
            this.type = "Company";
            this.produced = 0;
            this.inproduction = 0;
            this.speed = 10;
            this.soldiercount = 0;
            this.rawmaterials = [];
            this.transports = [];
            this.companyID = companyID;
            this.productid = productid;
            this.workers = workers;
            this.workersIn = workersIn;
            this.workersOut = workersOut;
            this.x = x;
            this.y = y;
            this.world = world;
            workersIn = 0;
            if (productid !== undefined) {
                this.changeProduct(productid);
            }
        }
        changeProduct(prodid) {
            this.productid = prodid;
            var prod = parameter.allProducts[this.productid];
            var con = [];
            if (prod) {
                if (this.domIcon) {
                    var url = prod.image;
                    if (this.enemy !== undefined)
                        url = "Burg" + (this.enemy + 1) + ".png";
                    this.domIcon.src = Company.getImageUrl(url);
                }
                for (var x = 0; x < prod.consume.length; x++) {
                    con.push(0);
                }
                if (prod.speed)
                    this.speed = prod.speed;
            }
            this.workers = 0;
            this.workersIn = 0;
            this.workersOut = 0;
            this.rawmaterials = con;
            this.updateName();
        }
        updateFreeOrNotFree() {
            let posf = this.world.freeCompanies.indexOf(this);
            let posc = this.world.companies.indexOf(this);
            if (this.productid != -2 && posf > -1) {
                this.world.freeCompanies.splice(posf, 1);
            }
            if (this.productid != -2 && posc == -1) {
                this.world.companies.push(this);
            }
            if (this.productid == -2 && posc > -1) {
                this.world.companies.splice(posc, 1);
            }
            if (this.productid == -2 && posf == -1) {
                this.world.freeCompanies.push(this);
            }
        }
        updateName() {
            var prod = parameter.allProducts[this.productid];
            var con = [];
            if (prod) {
                for (var x = 0; x < prod.consume.length; x++) {
                    con.push(0);
                }
                this.rawmaterials = con;
                var counter = 0;
                for (var t = 0; t < 10000; t++) {
                    var test = t === 0 ? prod.name : (prod.name + t);
                    var found = false;
                    for (var x = 0; x < this.world.companies.length; x++) {
                        if (this.world.companies[x].name === test)
                            found = true;
                    }
                    if (!found) {
                        this.name = test;
                        break;
                    }
                }
            }
            else {
                this.name = "";
            }
        }
        nextTick() {
            this.update();
            for (var x = 0; x < this.transports.length; x++) {
                this.transports[x].nextTick();
            }
            if (this.workers === 0)
                return;
            //if (this.world.tickCount % 10 === 0) {
            var max = this.workersOut * parameter.capacityPerHelper + parameter.capacityPerHelper;
            this.inproduction = this.inproduction + this.workers * this.speed;
            var prodnow = Math.floor(this.inproduction / 1000);
            prodnow = Math.min(prodnow, max - this.produced, ...this.rawmaterials);
            if (this.productid === product_6.Product.productHelper && this.world.game.people >= this.world.game.getCurrentLevel().maxPeople)
                prodnow = 0;
            var allsodiers = 0;
            this.world.findCompanyThatProduces(product_6.Product.productSoldier).forEach(s => allsodiers += s.produced);
            if (this.productid === product_6.Product.productSoldier && allsodiers >= this.world.game.getCurrentLevel().maxSoldiers)
                prodnow = 0;
            if (prodnow > 0) {
                this.inproduction = this.inproduction % 1000;
                this.produced = this.produced + prodnow;
                for (var x = 0; x < this.rawmaterials.length; x++) {
                    this.rawmaterials[x] = this.rawmaterials[x] - prodnow;
                }
                if (this.productid === product_6.Product.productHelper) {
                    this.world.game.people = this.world.game.people + prodnow;
                }
                if (this.productid === product_6.Product.productSoldier) {
                    this.world.game.debugSoldierCreated += prodnow;
                }
            }
            //}
            this.update();
        }
        findEnemyBase(num) {
            for (let x = 0; x < this.world.companies.length; x++) {
                let comp = this.world.companies[x];
                if (comp.enemy === num && comp.enemyBaseSoldierCount !== undefined) {
                    return comp;
                }
            }
            return undefined;
        }
        findEnemyBuildings(num) {
            var ret = [];
            for (let x = 0; x < this.world.companies.length; x++) {
                let comp = this.world.companies[x];
                if (comp.enemy === num) {
                    ret.push(comp);
                }
            }
            return ret;
        }
        enemyAttackCompany(company) {
            // if (company.tickLastInvader !== undefined && this.world.tickCount - company.tickLastInvader < (5 * 60))
            //   return;
            var _this = this;
            var mainBase = this.getEnemyBase(); //this.world.companyCache[this.world.game.enemyBases[this.enemy]];
            var max = mainBase.soldiercount - 200;
            if (max < 0)
                max = 0;
            max = Math.min(100, max, (0, tools_4.getRandomInt)(5) === 1 ? this.soldiercount : (0, tools_4.getRandomInt)(this.soldiercount)); //20% with max
            // var max = Math.min(100, company.soldiercount);
            if (max === 0)
                max = 1;
            this.soldiercount -= max;
            var run = (trans, delay, count) => {
                setTimeout(() => { trans.productCount = count; trans.active = true; }, delay);
            };
            if (max <= 0)
                return;
            game_3.Game.showInfo("Angriff " + company.name);
            for (var x = 0; x < max; x++) {
                var trans = new transport_4.Transport(this);
                trans.companyTarget = company.companyID;
                trans.workers = 1;
                var count = 1;
                //_this.soldiersComing += count;
                trans.transferInfo = { productid: product_6.Product.productSoldier };
                trans.render();
                run(trans, x * 100, count);
                this.transports.push(trans);
            }
            if (company.enemiesComming === undefined)
                company.enemiesComming = 0;
            company.enemiesComming += max;
            company.tickLastInvader = this.world.tickCount; // - this.company.tickLastInvader) < 5
        }
        getEnemyBase() {
            if (this.enemy === undefined)
                return undefined;
            var base = this.world.companyCache[this.world.game.enemyBases[this.enemy - 1]];
            return base;
        }
        enemyAttackCompanyOld(company) {
            if (company.tickLastInvader !== undefined && this.world.tickCount - company.tickLastInvader < (5 * 60))
                return;
            var _this = this;
            game_3.Game.showInfo("Angriff " + company.name);
            var max = Math.min(100, company.soldiercount);
            if (max === 0)
                max = 1;
            this.soldiercount -= max;
            var run = (trans, delay, count) => {
                setTimeout(() => { trans.productCount = count; trans.active = true; }, delay);
            };
            for (var x = 0; x < max; x++) {
                var trans = new transport_4.Transport(this);
                trans.companyTarget = company.companyID;
                trans.workers = 1;
                var count = 1;
                //_this.soldiersComing += count;
                trans.transferInfo = { productid: product_6.Product.productSoldier };
                trans.render();
                run(trans, x * 100, count);
                this.transports.push(trans);
            }
            company.tickLastInvader = this.world.tickCount; // - this.company.tickLastInvader) < 5
        }
        enemyExpand() {
            var soldiercount = this.soldiercount - this.enemyBaseSoldierCount;
            //  if (soldiercount > 100) {
            var radius = 2;
            if (this.productid === product_6.Product.productCastle) {
                radius = 3;
            }
            if (this.enemy === undefined)
                return;
            let enemyBuildings = this.findEnemyBuildings(this.enemy);
            var outPosts = [];
            for (let i = 0; i < enemyBuildings.length; i++) {
                let enemyBuilding = enemyBuildings[i];
                let comps = enemyBuilding.findCompaniesAround(radius, radius, false, true);
                comps.forEach(c => { if (c.productid == -2)
                    outPosts.push(c); });
            }
            var rating1 = [];
            var rating2 = [];
            var rating3 = [];
            var rating4 = [];
            var rating5 = [];
            for (let x = 0; x < outPosts.length; x++) {
                let outPost = outPosts[x];
                let conqueredLand = false;
                let besideMe = false;
                let besideEnemy = false;
                let comps = outPost.findCompaniesAround(1, radius, true, false);
                comps.forEach(c => { if (c.isConquered)
                    conqueredLand = true; }); //Angreifer in Sicht
                let comps2 = outPost.findCompaniesAround(1, radius, true, false);
                if (comps2.length > 1)
                    besideMe = true; //nicht in Nachbarschaft bauen
                //comps = outPost.findCompaniesAround(1, radius , true, false);
                comps.forEach(c => { if (c.enemy !== this.enemy && this.enemy !== undefined)
                    besideEnemy = true; }); //nicht bei anderen Feinden bauen
                if (conqueredLand && !besideEnemy && !besideMe)
                    rating1.push(outPost);
                else if (!besideEnemy && !besideMe)
                    rating2.push(outPost);
                else if (besideEnemy && !besideMe)
                    rating3.push(outPost);
                else if (besideMe)
                    rating4.push(outPost);
                else
                    rating5.push(outPost);
            }
            var currentRating = rating1;
            if (currentRating.length === 0)
                currentRating = rating2;
            if (currentRating.length === 0)
                currentRating = rating3;
            if (currentRating.length === 0)
                currentRating = rating4;
            if (currentRating.length > 0) {
                let comp = currentRating[(0, tools_4.getRandomInt)(currentRating.length)];
                //        comp.companyID = this.world.companies.length - 1;
                comp.enemy = this.enemy;
                comp.changeProduct(product_6.Product.productCastle);
                comp.soldiercount = 100;
                comp.updateFreeOrNotFree();
                //comp.enemyBaseSoldierCount=100;
                this.soldiercount -= 100;
                //build new Building here
            }
        }
        enemyAttack() {
            //  if (soldiercount > 100) {
            var radius = 2;
            if (this.productid === product_6.Product.productCastle) {
                radius = 3;
            }
            if (this.enemy === undefined)
                return;
            var angriff = [];
            var comps = this.findCompaniesAround(1, radius + 2, true, false);
            //no attack 60seconds at the same building
            comps.forEach(c => {
                if (c.enemy === undefined && c.productid > -1) {
                    angriff.push(c);
                }
            });
            if (angriff.length > 0) {
                let comp = angriff[(0, tools_4.getRandomInt)(angriff.length)];
                this.enemyAttackCompany(comp);
                return;
            }
        }
        enemyAttackOld() {
            var soldiercount = this.soldiercount - this.enemyBaseSoldierCount;
            //  if (soldiercount > 100) {
            var radius = 2;
            if (this.productid === product_6.Product.productCastle) {
                radius = 3;
            }
            if (this.enemy === undefined)
                return;
            let enemyBuildings = this.findEnemyBuildings(this.enemy);
            var angriff = [];
            for (let i = 0; i < enemyBuildings.length; i++) {
                let enemyBuilding = enemyBuildings[i];
                var comps = enemyBuilding.findCompaniesAround(1, radius + 2, true, false);
                //no attack 60seconds at the same building
                comps.forEach(c => {
                    if (c.enemy === undefined && c.productid > -1) {
                        angriff.push(c);
                    }
                });
            }
            if (angriff.length > 0) {
                let comp = angriff[(0, tools_4.getRandomInt)(angriff.length)];
                this.enemyAttackCompany(comp);
                return;
            }
        }
        updateUI(rect) {
            var fact = parameter.zoomfactor;
            const context = this.world.game.domCanavas.getContext('2d');
            if (!this.isConquered) {
                let y = ((this.y - 1) * fact);
                let x = (this.x - 3) * fact + fact - 25;
                context.fillStyle = '#f00';
                context.fillStyle = "rgba(	4,75,148, 0.2)";
                context.beginPath();
                context.moveTo(x + 1 * fact, y + 0);
                context.lineTo(x + 2 * fact, y + 0);
                context.lineTo(x + 3 * fact, y + 1 * fact);
                context.lineTo(x + 2 * fact, y + 2 * fact);
                context.lineTo(x + 1 * fact, y + 2 * fact);
                context.lineTo(x + 0, y + 1 * fact);
                context.closePath();
                context.fill();
                return;
            }
            if (this.dom) {
                //border
                let y = ((this.y - 1) * fact);
                let x = (this.x - 3) * fact + fact - 25;
                context.strokeStyle = 'white';
                context.beginPath();
                context.moveTo(x + 1 * fact, y + 0);
                context.lineTo(x + 2 * fact, y + 0);
                context.lineTo(x + 3 * fact, y + 1 * fact);
                context.lineTo(x + 2 * fact, y + 2 * fact);
                context.lineTo(x + 1 * fact, y + 2 * fact);
                context.lineTo(x + 0, y + 1 * fact);
                context.closePath();
                context.stroke();
                //produced count
                var s = this.produced === 0 ? "" : this.produced.toString();
                x = (this.x - 3) * fact + 20 + 30;
                y = (this.y - 1) * fact + 10 + 60;
                if (this.world.tickCount % 4 === 0) {
                    if (x > rect.left && x < (rect.left + rect.width) && y > rect.top && y < (rect.top + rect.height) && this.dom.mytext !== s) {
                        this.dom.textContent = s;
                        this.dom.mytext = s;
                    }
                }
                for (var i = 0; i < this.transports.length; i++) {
                    this.transports[i].updateUI(rect);
                }
                //icon
                y = ((this.y - 1) * fact);
                x = (this.x - 3) * fact + fact - 5;
                context.drawImage(this.domIcon, x, y, parameter.zoomfactor + 14, parameter.zoomfactor + 14);
                //this.domProduced = <any>document.createRange().createContextualFragment(`<div  style="color:black;text-align: center;width:40px;font-size:10pt;top:${((this.y - 1) * fact + 43) + "px"};left:${((this.x - 3) * fact + 26) + "px"};position:absolute"></div>`).children[0];
            }
        }
        update() {
            if (this.enemyBaseSoldierCount !== undefined) {
                if ((0, tools_4.getRandomInt)(parameter.enemyReproduction) === 1) {
                    this.soldiercount++;
                    this.world.game.debugEnemyCreated++;
                }
                if (this.enemy !== undefined && this.enemyBaseSoldierCount !== undefined && (this.soldiercount - this.enemyBaseSoldierCount) > 100) {
                    this.enemyExpand();
                    //var base=this.findEnemyBase(this.enemy);
                }
                /*if (this.enemyBaseSoldierCount > 200 && getRandomInt(7 * 10 * 60) === 1) { //one per 7 Minute we attack
                 this.enemyAttack();
                }*/
            }
            //enemy get support from base
            if (this.enemy !== undefined && this.enemyBaseSoldierCount === undefined && (0, tools_4.getRandomInt)(7 * 10 * 60) === 1 && this.soldiercount < 100) {
                var base = this.getEnemyBase(); //this.world.companyCache[this.world.game.enemyBases[this.enemy]];
                if (base === undefined)
                    var h = 9;
                if (base.soldiercount > 300) {
                    var max = 100 - this.soldiercount;
                    this.soldiercount += max;
                    base.soldiercount -= max;
                }
            }
            if (this.enemy !== undefined && this.soldiercount > 50 && (0, tools_4.getRandomInt)(7 * 10 * 60) === 1) {
                this.enemyAttack();
            }
            /*var pin = "";
            var prod = this.productid === -1 ? undefined : parameter.allProducts[this.productid];
            if (prod) {
              for (var x = 0; x < this.rawmaterials.length; x++) {
                console.log(prod.name);
                var pp = parameter.allProducts[prod.consume[x]];
                if (pp === undefined) {
                  pp = pp;
                }
                pin = pin + pp.name + ":" + this.rawmaterials[x]+" ";
              }
            }
            if(this.domInput)
              this.domInput.textContent=pin;*/
        }
        static getImageUrl(image) {
            if (image === undefined)
                return "";
            if (window.location.pathname.indexOf("/sample/") !== -1) {
                return "https://uwei.github.io/traffics/v2/images/" + image;
            }
            return "images/" + image;
            //return "http://localhost/game/client/game/images/" + image;
        }
        rerender() {
            //this.world.dom.removeChild(this.dom);
            this.render();
        }
        render() {
            var _this = this;
            var text = "";
            var fact = parameter.zoomfactor;
            // console.log(this.productid);
            var prod = this.productid === -1 ? undefined : parameter.allProducts[this.productid];
            var name = prod === undefined ? "" : prod.name;
            this.dom = document.createRange().createContextualFragment(`<div  style="font-size:10pt;text-align: center;display: flex;justify-content: center;align-items: flex-end;width:50px;height:60px;border:font-size:10pt;top:${((this.y - 1) * fact - 20) + "px"};left:${((this.x - 3) * fact + 20) + "px"};position:absolute"></div>`).children[0];
            this.world.dom.appendChild(this.dom);
            if (this.productid === -1)
                this.domIcon = document.createRange().createContextualFragment(`<img src="${Company.getImageUrl("Baustelle.png")}" title="Baustelle" width="${parameter.zoomfactor}" height="${parameter.zoomfactor + 14}" style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact + fact - 5) + "px"};position:absolute">`).children[0];
            else if (this.productid === -3)
                this.domIcon = document.createRange().createContextualFragment(`<img src="${Company.getImageUrl("Attacke.png")}" title="Erobern" width="${parameter.zoomfactor}" height="${parameter.zoomfactor + 14}" style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact + fact - 5) + "px"};position:absolute">`).children[0];
            else if (this.enemy !== undefined)
                this.domIcon = document.createRange().createContextualFragment(`<img src="${Company.getImageUrl("Burg" + (this.enemy + 1) + ".png")}" title="${prod.name}" width="${parameter.zoomfactor + 14}" height="${parameter.zoomfactor + 14}" style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact + fact - 5) + "px"};position:absolute">`).children[0];
            else if (prod !== undefined && prod.image !== "")
                this.domIcon = document.createRange().createContextualFragment(`<img src="${Company.getImageUrl(prod.image)}" title="${prod.name}" width="${parameter.zoomfactor + 14}" height="${parameter.zoomfactor + 14}" style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact + fact - 5) + "px"};position:absolute">`).children[0];
            else
                this.domIcon = document.createRange().createContextualFragment(`<img src="${Company.getImageUrl("Dummy.png")}" title="" width="${parameter.zoomfactor}" height="${parameter.zoomfactor + 14}" style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact + fact - 5) + "px"};position:absolute">`).children[0];
            // this.dom.setAttribute("src", "<span  class='mdi  mdi-content-save-outline'></span>");
            //this.dom.style.cursor="url(https://www.w3schools.com/cssref/myBall.cur),auto";
            this.dom.setAttribute("companyid", this.companyID.toString());
            this.dom.addEventListener("click", (ev) => {
                _this.onclick(ev);
                return undefined;
            });
            $(this.dom).on("dblclick", function (e) {
                _this.onDbleClick();
            });
            this.dom["company"] = this;
            for (var x = 0; x < this.transports.length; x++) {
                this.transports[x].render();
            }
            //console.log(this.dom.style.top + "   " + ((this.x + 3) * fact).toString() + "px");
        }
        renderOld() {
            var _this = this;
            var text = "";
            var fact = parameter.zoomfactor;
            // console.log(this.productid);
            var prod = this.productid === -1 ? undefined : parameter.allProducts[this.productid];
            var name = prod === undefined ? "" : prod.name;
            if (!this.isConquered) {
                text = `<div>
              <svg style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact) + "px"};width:${fact * 3};height:${fact * 2};position:absolute" class="company">
                <polygon points="${1 * fact},0 ${2 * fact},0 ${3 * fact},${1 * fact} ${2 * fact},${2 * fact} ${1 * fact},${2 * fact} 0,${1 * fact}" style="fill="#044B94" fill-opacity="0.4";stroke:white;stroke-width:1;" />
               </svg>
            </div>
        `;
                ;
            }
            else {
                text = `<div>
              <svg style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact) + "px"};width:${fact * 3};height:${fact * 2};position:absolute" class="company">
                <polygon points="${1 * fact},0 ${2 * fact},0 ${3 * fact},${1 * fact} ${2 * fact},${2 * fact} ${1 * fact},${2 * fact} 0,${1 * fact}" style="fill:none;stroke:white;stroke-width:1;" />
               </svg>
            </div>
        `;
                ;
            }
            /* text = `<div>
                       <svg style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact) + "px"};width:${fact * 3};height:${fact * 2};position:absolute" class="company">
                         
                        </svg>
                     </div>
                 `;*/
            var icon = "";
            if (this.productid === -1)
                this.domIcon = document.createRange().createContextualFragment(`<img src="${Company.getImageUrl("Baustelle.png")}" title="Baustelle" width="${parameter.zoomfactor}" height="${parameter.zoomfactor + 14}" style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact + fact - 5) + "px"};position:absolute">`).children[0];
            else if (this.productid === -3)
                this.domIcon = document.createRange().createContextualFragment(`<img src="${Company.getImageUrl("Attacke.png")}" title="Erobern" width="${parameter.zoomfactor}" height="${parameter.zoomfactor + 14}" style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact + fact - 5) + "px"};position:absolute">`).children[0];
            else if (this.enemy !== undefined)
                this.domIcon = document.createRange().createContextualFragment(`<img src="${Company.getImageUrl("Burg" + (this.enemy + 1) + ".png")}" title="${prod.name}" width="${parameter.zoomfactor + 14}" height="${parameter.zoomfactor + 14}" style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact + fact - 5) + "px"};position:absolute">`).children[0];
            else if (prod !== undefined && prod.image !== "")
                this.domIcon = document.createRange().createContextualFragment(`<img src="${Company.getImageUrl(prod.image)}" title="${prod.name}" width="${parameter.zoomfactor + 14}" height="${parameter.zoomfactor + 14}" style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact + fact - 5) + "px"};position:absolute">`).children[0];
            else
                this.domIcon = document.createRange().createContextualFragment(`<img src="${Company.getImageUrl("Dummy.png")}" title="" width="${parameter.zoomfactor}" height="${parameter.zoomfactor + 14}" style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact + fact - 5) + "px"};position:absolute">`).children[0];
            this.dom = document.createRange().createContextualFragment(text).children[0];
            this.domProduced = document.createRange().createContextualFragment(`<div  style="color:black;text-align: center;width:40px;font-size:10pt;top:${((this.y - 1) * fact + 43) + "px"};left:${((this.x - 3) * fact + 26) + "px"};position:absolute"></div>`).children[0];
            this.domInput = document.createRange().createContextualFragment(`<span  style="font-size:6pt;top:${((this.y - 1) * fact + 10) + "px"};left:${((this.x - 3) * fact + 20) + "px"};position:absolute"></span>`).children[0];
            this.dom.appendChild(this.domProduced);
            this.dom.appendChild(this.domInput);
            this.dom.appendChild(this.domIcon);
            //this.world.dom.appendChild(this.dom);
            this.world.dom.appendChild(this.domProduced);
            // this.dom.setAttribute("src", "<span  class='mdi  mdi-content-save-outline'></span>");
            //this.dom.style.cursor="url(https://www.w3schools.com/cssref/myBall.cur),auto";
            this.dom.setAttribute("companyid", this.companyID.toString());
            this.dom.addEventListener("click", (ev) => {
                _this.onclick(ev);
                return undefined;
            });
            $(this.dom).on("dblclick", function (e) {
                _this.onDbleClick();
            });
            this.dom["company"] = this;
            for (var x = 0; x < this.transports.length; x++) {
                this.transports[x].render();
            }
            //console.log(this.dom.style.top + "   " + ((this.x + 3) * fact).toString() + "px");
        }
        onDbleClick() {
            if (!parameter.buildWithDoubleClick)
                return;
            if (this.productid === product_6.Product.productTower || this.productid === product_6.Product.productCastle || this.productid === product_6.Product.productHelper || this.productid === product_6.Product.productGate || this.productid === product_6.Product.productSoldier) {
                return;
            }
            let calc = 0;
            for (var x = 0; x < parameter.buildWithDoubleClick; x++) {
                if ((this.workers + (this.workersComming ? this.workersComming : 0)) < this.calcMaxWorker())
                    calc++;
                if ((this.workersIn + (this.workersInComming ? this.workersInComming : 0)) < this.calcMaxWorker())
                    calc++;
                if ((this.workersOut + (this.workersOutComming ? this.workersOutComming : 0)) < this.calcMaxWorker())
                    calc++;
                for (var t = 0; t < this.transports.length; t++) {
                    var trans = this.transports[t];
                    if ((trans.workers + (trans.workersComming ? trans.workersComming : 0)) < this.calcMaxWorker())
                        calc++;
                }
            }
            var companies = this.world.findCompanyThatProduces(product_6.Product.productHelper);
            var max = 0;
            for (var x = 0; x < companies.length; x++) {
                if (companies[x].produced > 0) {
                    max = companies[x].produced; // - company.transports.length;
                }
            }
            if (max < calc) {
                game_3.Game.showInfo("keine " + calc + " Helfer gefunden.");
                return;
            }
            for (var x = 0; x < parameter.buildWithDoubleClick; x++) {
                if ((this.workers + (this.workersComming ? this.workersComming : 0)) < this.calcMaxWorker())
                    this.addWorker("workers");
                if ((this.workersIn + (this.workersInComming ? this.workersInComming : 0)) < this.calcMaxWorker())
                    this.addWorker("workersIn");
                if ((this.workersOut + (this.workersOutComming ? this.workersOutComming : 0)) < this.calcMaxWorker())
                    this.addWorker("workersOut");
                for (var t = 0; t < this.transports.length; t++) {
                    var trans = this.transports[t];
                    for (var xx = 0; xx < parameter.peopleWithOneClick; xx++) {
                        if ((trans.workers + (trans.workersComming ? trans.workersComming : 0)) < this.calcMaxWorker())
                            this.addWorker(trans);
                    }
                }
            }
        }
        addWorker(workertype) {
            var serror = "";
            var company;
            var companies = this.world.findCompanyThatProduces(product_6.Product.productHelper);
            var max = 0;
            for (var x = 0; x < companies.length; x++) {
                if (companies[x].produced > 0) {
                    company = companies[x];
                    max = company.produced; // - company.transports.length;
                }
            }
            if (max < 1) {
                game_3.Game.showInfo("nicht genug Helfer");
                return;
            }
            var trans = new transport_4.Transport(company);
            trans.workers = 1;
            trans.companyTarget = this.companyID;
            trans.active = true;
            trans.render();
            trans.transferInfo = { productid: company.productid, workertype: workertype };
            company.transports.push(trans);
            if (workertype === "workers")
                this.workersComming = (this.workersComming ? this.workersComming + 1 : 1);
            else if (workertype === "workersIn")
                this.workersInComming = (this.workersInComming ? this.workersInComming + 1 : 1);
            else if (workertype === "workersOut")
                this.workersOutComming = (this.workersOutComming ? this.workersOutComming + 1 : 1);
            else
                workertype.workersComming = (workertype.workersComming ? workertype.workersComming + 1 : 1);
        }
        expand() {
            if (this.productid === product_6.Product.productTower || this.productid === product_6.Product.productCastle) {
                var radius = 2;
                if (this.productid === product_6.Product.productCastle) {
                    radius = 3;
                }
                var comps = this.findCompaniesAround(1, radius, true, true);
                for (let x = 0; x < comps.length; x++) {
                    comps[x].isConquered = true;
                    comps[x].rerender();
                }
            }
            //   if(this.productid === Product.productCastle){Product.productTower
        }
        calcMaxWorker() {
            // (this.world.game.level < parameter.allLevels.length) {
            var ret = this.world.game.level;
            if (ret === 1)
                ret = 2;
            return ret + Math.floor(this.soldiercount / 5);
            //  }
            //return 6 + Math.floor(this.soldiercount / 10);
        }
        calcMaxSoldiers() {
            var max = parameter.soldiersToConquer;
            //if (this.enemy !== undefined)
            //  return this.workersIn;
            if (this.productid === -1) {
                return 10;
            }
            if (this.productid === product_6.Product.productTower) {
                return 20;
            }
            if (this.productid === product_6.Product.productCastle) {
                return 100;
            }
            if (this.soldiercount < 10)
                return 10;
            else
                return 9999999999999999;
        }
        removeWorker(workertype) {
            var compHelper = this.world.findCompanyThatProduces(product_6.Product.productHelper)[0];
            if (compHelper === undefined)
                debugger;
            var trans = new transport_4.Transport(compHelper);
            trans.workers = 1;
            trans.x = this.x;
            trans.y = this.y;
            if (workertype === "workers") {
                if (this.workers === 0)
                    return;
                this.workers--;
            }
            else if (workertype === "workersIn") {
                if (this.workersIn === 0)
                    return;
                this.workersIn--;
            }
            else if (workertype === "workersOut") {
                if (this.workersOut === 0)
                    return;
                this.workersOut--;
            }
            else {
                if (workertype.workers === 0)
                    return;
                workertype.workers--;
                trans.x = workertype.x;
                trans.y = workertype.y;
            }
            trans.active = true;
            trans.transferInfo = { goHome: true, productid: product_6.Product.productHelper };
            trans.moveTo(compHelper.companyID);
            trans.render();
            compHelper.transports.push(trans);
        }
        soldierGoHome() {
            var compSoldier;
            var compSoldiers = this.world.findCompanyThatProduces(product_6.Product.productSoldier);
            for (var x = 0; x < compSoldiers.length; x++) {
                if (compSoldiers[x] !== this)
                    compSoldier = compSoldiers[x];
            }
            var trans = new transport_4.Transport(compSoldier);
            trans.workers = 1;
            trans.x = this.x;
            trans.y = this.y;
            trans.active = true;
            trans.transferInfo = { goHome: true, productid: product_6.Product.productSoldier };
            trans.moveTo(compSoldier.companyID);
            trans.render();
            compSoldier.transports.push(trans);
        }
        helperGoHome() {
            var compHelper;
            var compHelpers = this.world.findCompanyThatProduces(product_6.Product.productHelper);
            for (var x = 0; x < compHelpers.length; x++) {
                if (compHelpers[x] !== this)
                    compHelper = compHelpers[x];
            }
            var trans = new transport_4.Transport(compHelper);
            trans.workers = 1;
            trans.x = this.x;
            trans.y = this.y;
            trans.active = true;
            trans.transferInfo = { goHome: true, productid: product_6.Product.productSoldier };
            trans.moveTo(compHelper.companyID);
            trans.render();
            compHelper.transports.push(trans);
        }
        findCompaniesAround(radiusFrom, radiusTo, inCompanies = true, inFreeCompanies = false) {
            var x = this.x;
            var y = this.y;
            var found = [];
            if (inCompanies) {
                for (var i = 0; i < this.world.companies.length; i++) {
                    var test = this.world.companies[i];
                    var dist = Math.round(Math.sqrt(Math.pow(this.x - test.x, 2) + Math.pow(this.y - test.y, 2)) / 2);
                    if (dist >= radiusFrom && dist <= radiusTo) {
                        found.push(test);
                    }
                }
            }
            if (inFreeCompanies) {
                for (var i = 0; i < this.world.freeCompanies.length; i++) {
                    var test = this.world.freeCompanies[i];
                    var dist = Math.round(Math.sqrt(Math.pow(this.x - test.x, 2) + Math.pow(this.y - test.y, 2)) / 2);
                    if (dist >= radiusFrom && dist <= radiusTo) {
                        found.push(test);
                    }
                }
            }
            /*for (var i = 0; i < this.world.freeCompanies.length; i++) {
              var test = this.world.freeCompanies[i];
              if ((test.x >= (this.x - (radiusTo * 2)) && test.x <= (this.x - (radiusFrom * 2))) || (test.x >= (this.x + (radiusFrom * 2)) && test.x <= (this.x + (radiusFrom * 2)))&&
                 (test.y >= (this.y - (radiusTo * 2)) && test.y <= (this.y - (radiusFrom * 2))) || (test.y >= (this.y + (radiusFrom * 2)) && test.y <= (this.y + (radiusFrom * 2)))) {
                    found.push(test);
              }
            }*/
            return found;
        }
        destroy() {
            //Soldiers go home
            if (this.productid === product_6.Product.productTower || this.productid === product_6.Product.productCastle) {
                for (var x = 0; x < this.soldiercount; x++) {
                    setTimeout(() => this.soldierGoHome(), x * 100);
                }
            }
            delete this.enemiesComming;
            delete this.enemyAttack;
            delete this.enemy;
            delete this.enemyBaseSoldierCount;
            this.soldiersComing = 0;
            this.stonesComming = 0;
            this.woodsComming = 0;
            this.workersComming = 0;
            this.workersInComming = 0;
            this.workersOutComming = 0;
            this.soldiercount = 0;
            this.productid = -2;
            while (this.workers > 0)
                this.removeWorker("workers");
            while (this.workersIn > 0)
                this.removeWorker("workersIn");
            while (this.workersOut > 0)
                this.removeWorker("workersOut");
            for (var x = 0; x < this.transports.length; x++) {
                while (this.transports[x].workers > 0) {
                    this.removeWorker(this.transports[x]);
                }
                this.transports[x].destroy(this.transports);
                x--;
            }
            var _this = this;
            this.produced = 0;
            this.rerender();
            delete this.buildingInProgress;
            this.domIcon.src = Company.getImageUrl("Dummy.png");
            this.updateFreeOrNotFree();
        }
        onclick(th) {
            th.preventDefault();
            var h = companydialog_2.CompanyDialog.getInstance();
            h.show();
            h.company = this;
        }
        toString() {
            return this.name + "(" + this.produced + ")";
        }
    }
    exports.Company = Company;
    function test() {
        console.log((0, tools_4.getRandomInt)(2));
        console.log((0, tools_4.getRandomInt)(2));
        console.log((0, tools_4.getRandomInt)(2));
        console.log((0, tools_4.getRandomInt)(2));
        console.log((0, tools_4.getRandomInt)(2));
    }
    exports.test = test;
});
define("game/startgame", ["require", "exports", "jassijs/ui/Panel", "jassijs/base/Windows", "game/game", "jassijs/base/Actions"], function (require, exports, Panel_1, Windows_1, game_4, Actions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.test = exports.PPanel = void 0;
    class PPanel extends Panel_1.Panel {
        constructor() {
            super();
            this.game = new game_4.Game();
            //this.width = "1050px";
            // this.height = "650px"; 
            this.game.newGame();
            var domGame = document.createRange().createContextualFragment('<div id="game"></div>').children[0];
            this.dom.style.height = "100%";
            this.dom.append(domGame);
            this.game.render(domGame);
        }
        destroy() {
            this.game.destroy();
            super.destroy();
        }
        static async show() {
            test();
        }
    }
    __decorate([
        (0, Actions_1.$Action)({
            name: "Game",
            icon: "mdi  mdi-airplane",
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], PPanel, "show", null);
    exports.PPanel = PPanel;
    function createStyle() {
        var cssId = 'game.css'; // you could encode the css path itself to generate id..
        if (document.getElementById(cssId))
            document.getElementById(cssId).parentNode.removeChild(document.getElementById(cssId));
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = cssId;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'game/style.css';
        link.media = 'all';
        head.appendChild(link);
    }
    function test() {
        createStyle();
        var ret = new PPanel();
        //ret.dom.style.backgroundColor="white";
        var wd = Windows_1.default.findComponent("Game");
        wd === null || wd === void 0 ? void 0 : wd.destroy();
        Windows_1.default.add(ret, "Game");
    }
    exports.test = test;
});
