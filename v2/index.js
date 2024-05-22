var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
        constructor(name = undefined, image = undefined, level = undefined, consume = undefined, forpeoplelevel = undefined, forsodierlevel = undefined) {
            this.type = "Product";
            //Object.assign(this, prod);
            this.name = name;
            this.image = image;
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
    function test() {
    }
    exports.test = test;
});
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
define("game/route", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Route = void 0;
    class Route {
        constructor() {
            this.type = "Route";
            this.unloadShopAmount = [];
            this.loadShopAmount = [];
            this.loadShopUntilAmount = [];
            for (var x = 0; x < parameter.allProducts.length; x++) {
                this.unloadShopAmount.push(undefined);
                this.loadShopAmount.push(undefined);
                this.loadShopUntilAmount.push(undefined);
            }
        }
        /* unloadMarket() {
             var city = this.airplane.world.cities[this.cityid];
             for (var x = 0; x < parameter.allProducts.length; x++) {
                 var max = this.airplane.products[x];
     
                 if (this.unloadMarketAmount[x] !== undefined) {
                     max = Math.min(this.airplane.products[x], this.unloadMarketAmount[x]);
                     if (max < 0)
                         max = 0;
                 } else
                     max = 0;
                 if (max) {
                     for (var y = 0; y < max; y++) {
                         var price = parameter.allProducts[x].calcPrice(city.people, city.market[x], false);//city.isProducedHere(x));
                         if (price >= this.unloadMarketPrice[x]) {
                             city.world.game.changeMoney(1 * price, "airplane sells from market", city);
                             city.market[x] += 1;
                             this.airplane.products[x] -= 1;
                             this.airplane.refreshLoadedCount();
                         } else {
                             break;
     
                         }
                     }
     
                 }
             }
         }*/
        unloadShop() {
            var city = this.airplane.world.cities[this.cityid];
            for (var x = 0; x < parameter.allProducts.length; x++) {
                var max = this.unloadShopAmount[x];
                if (max !== undefined) {
                    max = Math.min(max, this.airplane.products[x]);
                    if (max) {
                        var diff = city.shops * parameter.capacityShop - city.getCompleteAmount();
                        if (diff > 0)
                            max = Math.min(max, diff);
                        else
                            max = 0;
                        this.airplane.products[x] -= max;
                        this.airplane.refreshLoadedCount();
                        city.shop[x] += max;
                        diff = city.shops * parameter.capacityShop - city.getCompleteAmount();
                        if (diff <= 0) {
                            city.domShopfull.style.display = "initial";
                        }
                    }
                }
            }
        }
        loadShop() {
            var city = this.airplane.world.cities[this.cityid];
            for (var x = 0; x < parameter.allProducts.length; x++) {
                var minStock = city.shopMinStock[x] ? city.shopMinStock[x] : 0;
                var max = this.loadShopUntilAmount[x];
                if (max === undefined) {
                    if (this.loadShopAmount[x]) {
                        max = this.loadShopAmount[x];
                        //  if (x === 2)
                        //    console.log(city.name + " " + city.shop[x] + "  min" + minStock);
                        var tt = city.shop[x] - minStock;
                        if (max !== 0 && max !== undefined && (max > tt)) {
                            if (x === 17)
                                max = max;
                            max = city.shop[x] - minStock;
                        }
                        var notAvailable = this.loadShopAmount[x] - max;
                        this.airplane.world.game.statistic.successfulLoad[0][x] += max;
                        this.airplane.world.game.statistic.unsuccessfulLoad[0][x] += notAvailable;
                    }
                }
                else {
                    max = city.shop[x] - (this.loadShopUntilAmount[x] + minStock);
                }
                if (max < 0)
                    max = 0;
                if (this.maxLoad !== undefined && max !== undefined) {
                    max = Math.min(this.maxLoad - this.airplane.products[x], max);
                }
                if (max < 0)
                    max = 0;
                if (max && max > (this.airplane.capacity - this.airplane.loadedCount))
                    max = this.airplane.capacity - this.airplane.loadedCount;
                if (max) {
                    this.airplane.products[x] += max;
                    this.airplane.refreshLoadedCount();
                    city.shop[x] -= max;
                }
            }
        }
        /*  loadMarket() {
              var city = this.airplane.world.cities[this.cityid];
              for (var x = 0; x < parameter.allProducts.length; x++) {
                  var max = this.loadMarketAmount[x];
                  if (this.maxLoad !== undefined&&max) {
                      max = Math.min(max,this.maxLoad - this.airplane.products[x]);
                      if (max < 0)
                          max = 0;
                  }
                  if (max && max > (this.airplane.capacity - this.airplane.loadedCount))
                      max = this.airplane.capacity - this.airplane.loadedCount;
                  if (max) {
                      for (var y = 0; y < max; y++) {
                          var price = parameter.allProducts[x].calcPrice(city.people, city.market[x] - 1, city.isProducedHere(x));
                          if (price <= this.loadMarketPrice[x]) {
                              city.world.game.changeMoney(-1 * price, "airplane buys from market", city);
                              city.market[x] -= 1;
                              this.airplane.products[x] += 1;
                              this.airplane.refreshLoadedCount();
                          } else {
                              break;
      
                          }
                      }
      
                  }
              }
          }*/
        load() {
            this.loadShop();
            // this.loadMarket();
        }
        unload() {
            //  this.unloadMarket();
            this.unloadShop();
        }
    }
    exports.Route = Route;
});
define("game/routedialog", ["require", "exports", "game/icons"], function (require, exports, icons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RouteDialog = void 0;
    class RouteDialog {
        constructor() {
            this.dropCitiesEnabled = false;
            this.create();
        }
        static getInstance() {
            if (RouteDialog.instance === undefined)
                RouteDialog.instance = new RouteDialog();
            return RouteDialog.instance;
        }
        create() {
            //template for code reloading
            var sdom = `
          <div hidden id="routedialog" class="routedialog">
            <div></div>
           </div>
        `;
            this.dom = document.createRange().createContextualFragment(sdom).children[0];
            var old = document.getElementById("routedialog");
            if (old) {
                old.parentNode.removeChild(old);
            }
            var airplane = this.airplane;
            var products = parameter.allProducts;
            var _this = this;
            var sdom = `
          <div>
          <div>
            <input id="routedialog-airplane-prev" type="button" value="<" class="mybutton"/>
            <div id="routedialog-airplane-name" style="display:inline;width:50px"></div>
            <input id="routedialog-airplane-next" type="button" value=">" class="mybutton"/>
            <select id="route-select" >
            </select>
            <input id="routedialog-route-next" type="button" value=">" class="mybutton"/>
           
                      
          </div>
          
            <div id="routedialog-tabs">
                <div id="routedialog-load">
                
                      <table id="routedialog-load-table" style="height:100%;weight:100%;">
                        <tr >
                            <th>Name</th>
                            <th></th>
                             <th>unload<br/>
                                <button id="route-unload-warehous-fill" title="fill first row down">` + icons_1.Icons.fillDown + `</button>
                                <button id="route-unload-warehous-fill9" title="fill 99999999 down">` + icons_1.Icons.nine + `</button>
                            </th>
                            <th>load<br/>
                                <button id="route-load-shop-fill" title="fill first row down">` + icons_1.Icons.fillDown + `</button>
                                <button id="route-load-fill-consumtion" title="fill consumtion">` + icons_1.Icons.food + `</button>
                            </th>

                            <th>load<br/>everything except<br/>
                                <button id="route-load-shop-until-fill" title="fill first row down">` + icons_1.Icons.fillDown + `</button>
                                <button id="route-load-fill-consumtion-until" title="fill consumtion">` + icons_1.Icons.food + `</button>
                            </th>


                        </tr>
                       ${(function fun() {
                var ret = "";
                function price(id, change) {
                    console.log(id + " " + change);
                }
                for (var x = 0; x < parameter.allProducts.length; x++) {
                    ret = ret + "<tr>";
                    ret = ret + "<td>" + parameter.allProducts[x].getIcon() + "</td>";
                    ret = ret + "<td>" + parameter.allProducts[x].name + "</td>";
                    ret = ret + '<td>' + '<input type="number" min="0" class="unload-shop-amount" id="unload-shop-amount_' + x + '"' +
                        'style="width: 50px;"' + '"></td>';
                    ret = ret + '<td>' + '<input type="number" min="0" class="load-shop-amount" id="load-shop-amount_' + x + '"' +
                        'style="width: 50px;"' + '"></td>';
                    ret = ret + '<td>' + '<input type="number" min="0" class="load-shop-until-amount" id="load-shop-until-amount_' + x + '"' +
                        'style="width: 50px;"' + '"></td>';
                    ret = ret + "</tr>";
                }
                return ret;
            })()}
                    </table>    
                 </div>
                <div>
                
            </div>
          </div>
        `;
            var newdom = document.createRange().createContextualFragment(sdom).children[0];
            this.dom.removeChild(this.dom.children[0]);
            this.dom.appendChild(newdom);
            setTimeout(() => {
                $("#routedialog-tabs").tabs({
                //collapsible: true
                });
                //  $( "#route-list" ).sortable();
            }, 100);
            document.body.appendChild(this.dom);
            //        document.getElementById("citydialog-prev")
            setTimeout(() => {
                _this.bindActions();
            }, 500);
            //document.createElement("span");
        }
        bindActions() {
            var _this = this;
            for (var x = 0; x < parameter.allProducts.length; x++) {
                document.getElementById("unload-shop-amount_" + x).addEventListener("change", (e) => {
                    var ctrl = e.target;
                    var id = parseInt(ctrl.id.split("_")[1]);
                    _this.route.unloadShopAmount[id] = ctrl.value === "" ? undefined : parseInt(ctrl.value);
                });
                document.getElementById("load-shop-amount_" + x).addEventListener("change", (e) => {
                    var ctrl = e.target;
                    var id = parseInt(ctrl.id.split("_")[1]);
                    _this.route.loadShopAmount[id] = ctrl.value === "" ? undefined : parseInt(ctrl.value);
                });
                document.getElementById("load-shop-until-amount_" + x).addEventListener("change", (e) => {
                    var ctrl = e.target;
                    var id = parseInt(ctrl.id.split("_")[1]);
                    _this.route.loadShopUntilAmount[id] = ctrl.value === "" ? undefined : parseInt(ctrl.value);
                });
            }
            document.getElementById("route-select").addEventListener("change", (e) => {
                var val = document.getElementById("route-select").value;
                var id = parseInt(val);
                _this.route = _this.airplane.route[id];
                _this.update();
            });
            document.getElementById("route-unload-warehous-fill").addEventListener("click", (e) => {
                for (var x = 1; x < _this.route.unloadShopAmount.length; x++) {
                    this.route.unloadShopAmount[x] = this.route.unloadShopAmount[0];
                }
                _this.update();
            });
            document.getElementById("route-unload-warehous-fill9").addEventListener("click", (e) => {
                for (var x = 0; x < _this.route.unloadShopAmount.length; x++) {
                    this.route.unloadShopAmount[x] = 9999999999;
                }
                _this.update();
            });
            document.getElementById("route-load-shop-fill").addEventListener("click", (e) => {
                for (var x = 1; x < _this.route.loadShopAmount.length; x++) {
                    this.route.loadShopAmount[x] = this.route.loadShopAmount[0];
                }
                _this.update();
            });
            document.getElementById("route-load-shop-until-fill").addEventListener("click", (e) => {
                for (var x = 1; x < _this.route.loadShopUntilAmount.length; x++) {
                    this.route.loadShopUntilAmount[x] = this.route.loadShopUntilAmount[0];
                }
                _this.update();
            });
            document.getElementById("route-load-fill-consumtion").addEventListener("click", (e) => {
                RouteDialog.loadFillConsumtion(_this.route, true);
                _this.update();
            });
            document.getElementById("route-load-fill-consumtion-until").addEventListener("click", (e) => {
                RouteDialog.loadFillConsumtion(this.route, false);
                _this.update();
            });
            document.getElementById("routedialog-airplane-prev").addEventListener("click", (e) => {
                _this.prevAirplane();
            });
            document.getElementById("routedialog-airplane-next").addEventListener("click", (e) => {
                _this.nextAirplane();
            });
            document.getElementById("routedialog-route-next").addEventListener("click", (e) => {
                _this.nextRoute();
            });
        }
        prevAirplane() {
            var _this = this;
            var pos = _this.airplane.world.airplanes.indexOf(_this.airplane);
            pos--;
            if (pos === 0)
                pos = _this.airplane.world.airplanes.length - 1;
            _this.airplane = _this.airplane.world.airplanes[pos];
            _this.route = undefined;
            if (_this.airplane.world.airplanes[pos].route.length === 0) {
                _this.route = undefined;
                this.prevAirplane();
                return;
            }
            _this.route = _this.airplane.world.airplanes[pos].route[0];
            _this.update(true);
        }
        nextAirplane() {
            var _this = this;
            var pos = _this.airplane.world.airplanes.indexOf(_this.airplane);
            pos++;
            if (pos >= _this.airplane.world.airplanes.length)
                pos = 0;
            _this.airplane = _this.airplane.world.airplanes[pos];
            if (_this.airplane.world.airplanes[pos].route.length === 0) {
                _this.route = undefined;
                this.nextAirplane();
                return;
            }
            _this.route = _this.airplane.world.airplanes[pos].route[0];
            _this.update(true);
        }
        nextRoute() {
            var _this = this;
            var pos = _this.airplane.route.indexOf(this.route);
            pos++;
            if (pos === _this.airplane.route.length) {
                pos = 0;
            }
            _this.route = _this.airplane.route[pos];
            _this.update();
        }
        copyRoute() {
            var pos = this.route.airplane.route.indexOf(this.route);
            if (pos === 0)
                return;
            pos--;
            var source = this.route.airplane.route[pos];
            this.route.maxLoad = source.maxLoad;
            for (var x = 0; x < parameter.allProducts.length; x++) {
                this.route.loadShopAmount[x] = source.loadShopAmount[x];
                this.route.loadShopUntilAmount[x] = source.loadShopUntilAmount[x];
                this.route.unloadShopAmount[x] = source.unloadShopAmount[x];
            }
            this.update();
        }
        static loadFillConsumtion(route, allCities) {
            var _this = this;
            var all = route.airplane.route;
            var lenpixel = 0;
            var lastpos = undefined;
            for (var x = 0; x < all.length; x++) {
                var city = route.airplane.world.cities[all[x].cityid];
                if (lastpos === undefined) {
                    lastpos = [city.x, city.y];
                    var lastcity = route.airplane.world.cities[all[all.length - 1].cityid];
                    var dist = Math.round(Math.sqrt(Math.pow(lastpos[0] - lastcity.x, 2) + Math.pow(lastpos[1] - lastcity.y, 2))); //Pytharoras
                    lenpixel += dist;
                }
                else {
                    var dist = Math.round(Math.sqrt(Math.pow(lastpos[0] - city.x, 2) + Math.pow(lastpos[1] - city.y, 2))); //Pytharoras
                    lenpixel += dist;
                    lastpos = [city.x, city.y];
                }
            }
            var days = lenpixel / route.airplane.speed; //t=s/v; in Tage
            var totalDays = (Math.round(days * 24) + 1 + all.length * 3 + all.length * 3) / 24; //+4h load and unload
            if (totalDays < 3)
                totalDays = 3;
            console.log(totalDays);
            var store = allCities ? route.loadShopAmount : route.loadShopUntilAmount;
            for (var x = 0; x < parameter.allProducts.length; x++) {
                store[x] = 0;
            }
            for (var x = 0; x < all.length; x++) {
                var city = route.airplane.world.cities[all[x].cityid];
                var cause;
                if (allCities) {
                    cause = (all[x].cityid !== route.cityid);
                }
                else {
                    cause = all[x].cityid === route.cityid;
                }
                if (cause) {
                    var allPeople = 0;
                    for (var c = 0; c < city.companies.length; c++) {
                        var buildings = city.companies[c].buildings;
                        buildings += city.getBuildingInProgress(city.companies[c].productid);
                        allPeople += buildings * parameter.workerInCompany;
                        var prod = parameter.allProducts[city.companies[c].productid];
                        if (prod.input1)
                            store[prod.input1] += Math.round((1.3 * buildings * prod.input1Amount * totalDays));
                        if (prod.input2)
                            store[prod.input2] += Math.round((1.3 * buildings * prod.input2Amount * totalDays));
                    }
                    for (var y = 0; y < parameter.allProducts.length; y++) {
                        store[y] += Math.round(1.3 * totalDays * parameter.allProducts[y].dailyConsumtion * (allPeople + parameter.neutralStartPeople));
                    }
                }
            }
        }
        update(force = false) {
            try {
                if (!$(this.dom).dialog('isOpen')) {
                    return;
                }
            }
            catch (_a) {
                return;
            }
            document.getElementById("routedialog-airplane-name").innerHTML = this.airplane.name;
            var select = document.getElementById("route-select");
            select.innerHTML = "";
            for (var x = 0; x < this.airplane.route.length; x++) {
                var opt = document.createElement("option");
                var city = this.airplane.world.cities[this.airplane.route[x].cityid];
                opt.value = "" + x;
                opt.text = city.name;
                select.appendChild(opt);
            }
            if (this.route)
                select.value = "" + this.airplane.route.indexOf(this.route);
            else {
                document.getElementById("unload-shop-amount").value = "";
                document.getElementById("load-shop-amount").value = "";
                document.getElementById("load-shop-until-amount").value = "";
                return;
            }
            for (var x = 0; x < parameter.allProducts.length; x++) {
                if (document.activeElement !== document.getElementById("unload-shop-amount_" + x))
                    document.getElementById("unload-shop-amount_" + x).value = (this.route.unloadShopAmount[x] === undefined) ? "" : this.route.unloadShopAmount[x].toString();
                if (document.activeElement !== document.getElementById("load-shop-amount_" + x))
                    document.getElementById("load-shop-amount_" + x).value = (this.route.loadShopAmount[x] === undefined) ? "" : this.route.loadShopAmount[x].toString();
                if (document.activeElement !== document.getElementById("load-shop-until-amount_" + x))
                    document.getElementById("load-shop-until-amount_" + x).value = (this.route.loadShopUntilAmount[x] === undefined) ? "" : this.route.loadShopUntilAmount[x].toString();
            }
        }
        show() {
            var _this = this;
            this.dom.removeAttribute("hidden");
            this.update();
            //ui-tabs-active
            $(this.dom).dialog({
                width: "400px",
                draggable: true,
                //     position:{my:"left top",at:"right top",of:$(document)} ,
                open: function (event, ui) {
                    _this.update(true);
                },
                close: function () {
                }
            }).dialog("widget").draggable("option", "containment", "none");
            $(this.dom).parent().css({ position: "fixed" });
        }
        close() {
            $(this.dom).dialog("close");
        }
    }
    exports.RouteDialog = RouteDialog;
});
define("game/squadrondialog", ["require", "exports", "game/icons"], function (require, exports, icons_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SquadronDialog = void 0;
    class SquadronDialog {
        constructor() {
            this.create();
        }
        static getInstance() {
            if (SquadronDialog.instance === undefined)
                SquadronDialog.instance = new SquadronDialog();
            return SquadronDialog.instance;
        }
        getActiveItem(list) {
            var select = document.getElementById(list);
            for (var x = 0; x < select.children.length; x++) {
                if (select.children[x].classList.contains("active-listitem"))
                    return select.children[x].getAttribute("value");
            }
            return "";
        }
        bindActions() {
            var _this = this;
            document.getElementById("airplanes-in-city").addEventListener("click", (ev) => {
                var el = ev.target;
                if (!(el instanceof HTMLLIElement))
                    return;
                var select = document.getElementById("airplanes-in-city");
                for (var x = 0; x < select.children.length; x++) {
                    select.children[x].classList.remove("active-listitem");
                }
                el.classList.add("active-listitem");
            });
            document.getElementById("airplanes-in-squadron").addEventListener("click", (ev) => {
                var el = ev.target;
                var select = document.getElementById("airplanes-in-squadron");
                for (var x = 0; x < select.children.length; x++) {
                    select.children[x].classList.remove("active-listitem");
                }
                el.classList.add("active-listitem");
            });
            document.getElementById("sqadron-add").addEventListener('click', (e) => {
                var val = _this.getActiveItem("airplanes-in-city"); //(<HTMLSelectElement>document.getElementById("airplanes-in-city")).value;
                if (val === "no airplanes in city" || val === "")
                    return;
                var ap = _this.airplane.world.findAirplane(val);
                var pos = _this.airplane.world.airplanes.indexOf(ap);
                var appos = _this.airplane.world.airplanes.indexOf(ap);
                _this.airplane.world.airplanes.splice(pos, 1);
                _this.airplane.squadron.push(ap);
                _this.airplane.updateSquadron();
                ap.updateSquadron();
                _this.airplane.world.dom.removeChild(ap.dom);
                ap.dom.style.display = "none";
                _this.update();
                // _this.airplane.
            });
            document.getElementById("sqadron-del").addEventListener('click', (e) => {
                var val = _this.getActiveItem("airplanes-in-squadron");
                //  var val = (<HTMLSelectElement>document.getElementById("airplanes-in-squadron")).value;
                if (val === "")
                    return;
                var ap = _this.airplane.world.findAirplane(val);
                var pos = _this.airplane.squadron.indexOf(ap);
                _this.airplane.squadron.splice(pos, 1);
                _this.airplane.world.airplanes.push(ap);
                _this.airplane.updateSquadron();
                ap.updateSquadron();
                if (ap.dom === undefined) {
                    ap.world = _this.airplane.world;
                    ap.render();
                }
                else {
                    ap.dom.style.display = "initial";
                }
                _this.airplane.world.dom.appendChild(ap.dom);
                ap.x = _this.airplane.x;
                ap.y = _this.airplane.y;
                _this.update();
            });
        }
        create() {
            //template for code reloading
            var sdom = `
          <div hidden id="squadrondialog" class="squadrondialog">
            <div></div>
           </div>
        `;
            this.dom = document.createRange().createContextualFragment(sdom).children[0];
            var old = document.getElementById("squadrondialog");
            if (old) {
                old.parentNode.removeChild(old);
            }
            var airplane = this.airplane;
            var products = parameter.allProducts;
            var _this = this;
            var sdom = `
          <div>
                <table>
                    <tr>
                        <td>
                            Airplanes in city
                           <ul id="airplanes-in-city" class="mylist boxborder" style="height: 250px;width:150px">
                                <li value="no airplanes in city">no airplanes in city</li>
                            </ul>
                        </td>
                        <td>
                             <button id="sqadron-add" class="mybutton">` + icons_2.Icons.toright + `</button>
                             <button id="sqadron-del"  class="mybutton">` + icons_2.Icons.toleft + `</button><br/>
                        </td>
                        <td>
                            Airlanes in Squadron
                           <ul id="airplanes-in-squadron" class="mylist boxborder" style="height: 250px;width:150px">
                                
                            </ul>
                        </td>
                        
                    </tr>
                </table>
                       ${(function fun() {
                var ret = "";
                return ret;
            })()}
            
          </div>
        `;
            var newdom = document.createRange().createContextualFragment(sdom).children[0];
            this.dom.removeChild(this.dom.children[0]);
            this.dom.appendChild(newdom);
            document.body.appendChild(this.dom);
            //        document.getElementById("citydialog-prev")
            setTimeout(() => {
                _this.bindActions();
            }, 500);
            //document.createElement("span");
        }
        update() {
            try {
                if (!$(this.dom).dialog('isOpen')) {
                    return;
                }
            }
            catch (_a) {
                return;
            }
            var selectCity = document.getElementById("airplanes-in-city");
            var selectSquadron = document.getElementById("airplanes-in-squadron");
            var city = this.airplane.getCurrentCity();
            if (city !== undefined) {
                selectCity.innerHTML = "";
                var aps = city.getAirplanesInCity();
                var s = "";
                for (var x = 0; x < aps.length; x++) {
                    if (aps[x] !== this.airplane) {
                        var toadd = aps[x];
                        s += '<li value="' + toadd.name + '">' + toadd.name + '</li>';
                    }
                }
                selectCity.innerHTML = s;
            }
            if (selectCity.innerHTML === "") {
                selectCity.innerHTML = '<li value="no airplanes in city">no airplanes in city</li>';
            }
            selectSquadron.innerHTML = "";
            //selectSquadron.appendChild(opt);
            var s = "";
            for (var x = 0; x < this.airplane.squadron.length; x++) {
                var toadd = this.airplane.squadron[x];
                s += '<li value="' + toadd.name + '">' + toadd.name + '</li>';
            }
            selectSquadron.innerHTML = s;
        }
        show() {
            var _this = this;
            this.dom.removeAttribute("hidden");
            this.update();
            //ui-tabs-active
            $(this.dom).dialog({
                title: "Modify Squadron",
                width: "400px",
                draggable: true,
                //     position:{my:"left top",at:"right top",of:$(document)} ,
                open: function (event, ui) {
                    _this.update();
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
    }
    exports.SquadronDialog = SquadronDialog;
});
define("game/airplanedialog", ["require", "exports", "game/icons", "game/route", "game/routedialog"], function (require, exports, icons_3, route_1, routedialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AirplaneDialog = void 0;
    //@ts-ignore
    window.airplane = function () {
        return AirplaneDialog.getInstance().airplane;
    };
    class AirplaneDialog {
        constructor() {
            this.hasPaused = false;
            this.dropCitiesEnabled = false;
            this.create();
        }
        static getInstance() {
            if (AirplaneDialog.instance === undefined)
                AirplaneDialog.instance = new AirplaneDialog();
            return AirplaneDialog.instance;
        }
        set airplane(value) {
            this._airplane = value;
            this.updateRoute();
        }
        get airplane() {
            return this._airplane;
        }
        create() {
            //template for code reloading
            var sdom = `
          <div hidden id="airplanedialog" class="airplanedialog">
            <div></div>
           </div>
        `;
            this.dom = document.createRange().createContextualFragment(sdom).children[0];
            var old = document.getElementById("airplanedialog");
            if (old) {
                old.parentNode.removeChild(old);
            }
            var airplane = this.airplane;
            var products = window.parameter.allProducts;
            var _this = this;
            var sdom = `
          <div>
          <div>
            <input id="airplanedialog-prev" type="button" value="<"/>
            <input id="airplanedialog-next" type="button" value=">"/>
          </div>
            <div id="airplanedialog-tabs">
                <ul>
                    <li><a href="#airplanedialog-products" class="airplanedialog-tabs">` + icons_3.Icons.table.replace('<span', '<span title="Load"') + `</a></li>
                    <li><a href="#airplanedialog-info" class="airplanedialog-tabs">` + icons_3.Icons.info.replace('<span', '<span title="Info"') + `</a></li>
                    <li  id="airplanedialog-route-tab"><a href="#airplanedialog-route" class="airplanedialog-tabs">` + icons_3.Icons.route.replace('<span', '<span title="Route"') + `</a></li>
                </ul>
                <div id="airplanedialog-products">
                    <div id="airplanedialog-products-list">
                            
                    </div>         
                </div>
                <div id="airplanedialog-info">
                    <input type="text" id="airplanedialog-name"> </input>
                    <span id="airplanedialog-type">Type:</span><br/>
                    <span id="airplanedialog-speed">Speed:</span><br/>
                    <span id="airplanedialog-capacity">Capacity:</span><br/> 
                    <span id="airplanedialog-costs">Daily Costs:</span><br/> 
                    <button style="font-size:14px" id="upgrade-squadron" class="mybutton">Upgrade</button>
                    <button style="font-size:14px" id="delete-airplane" class="mybutton">` + icons_3.Icons.remove + `</button>
                 </div>
                 <div id="airplanedialog-route" style="min-height:80px">
                    
                    <input type="checkbox" id="route-active"> active</input>
                    <button style="font-size:14px" id="edit-route" class="mybutton">` + icons_3.Icons.edit + `</button>
                    <button style="font-size:14px"  id="delete-route" class="mybutton">` + icons_3.Icons.remove + `</button>
                    <ul style="min-heigt:40px" class="mylist" id="route-list">
                     
           
                    </ul>
                <div>
                
            </div>
          </div>
        `;
            var newdom = document.createRange().createContextualFragment(sdom).children[0];
            this.dom.removeChild(this.dom.children[0]);
            this.dom.appendChild(newdom);
            $("#airplanedialog-tabs").tabs({
            //collapsible: true
            });
            setTimeout(() => {
                $("#airplanedialog-tabs").tabs({
                //collapsible: true
                });
                //  $( "#route-list" ).sortable();
            }, 100);
            document.body.appendChild(this.dom);
            //        document.getElementById("citydialog-prev")
            setTimeout(() => {
                document.getElementById("airplanedialog-next").addEventListener("click", (ev) => {
                    var pos = _this.airplane.world.airplanes.indexOf(_this.airplane);
                    pos++;
                    if (pos >= _this.airplane.world.airplanes.length)
                        pos = 0;
                    _this.selectAirplace(_this.airplane.world.airplanes[pos]);
                });
                document.getElementById("airplanedialog-prev").addEventListener("click", (ev) => {
                    var pos = _this.airplane.world.airplanes.indexOf(_this.airplane);
                    pos--;
                    if (pos === -1)
                        pos = _this.airplane.world.airplanes.length - 1;
                    _this.airplane = _this.airplane.world.airplanes[pos];
                    _this.update(true);
                });
                document.getElementById("route-active").addEventListener('click', (e) => {
                    var act = (document.getElementById("route-active").checked ? 1 : -1);
                    if (act === -1 && _this.airplane.activeRoute === 0)
                        _this.airplane.activeRoute = -1;
                    else {
                        _this.airplane.activeRoute = act * Math.abs(_this.airplane.activeRoute);
                        _this.airplane.flyTo(_this.airplane.world.cities[_this.airplane.route[0].cityid]);
                    }
                });
                document.getElementById("airplanedialog-name").addEventListener("change", (e) => {
                    var t = e.target;
                    var val = t.value;
                    if (this.airplane.world.findAirplane(val) !== undefined) {
                        alert("an airplane with name " + val + " already exists");
                        return;
                    }
                    _this.airplane.name = val;
                    _this.update();
                });
                $('.airplanedialog-tabs').click(function (event) {
                    if (event.target.getAttribute("href") === "#airplanedialog-route" ||
                        event.target.parentNode.getAttribute("href") === "#airplanedialog-route") {
                        _this.enableDropCities(true);
                    }
                    else {
                        _this.enableDropCities(false);
                    }
                });
                document.getElementById("edit-route").addEventListener('click', (e) => {
                    _this.enableDropCities(false);
                    routedialog_1.RouteDialog.getInstance().airplane = _this.airplane;
                    routedialog_1.RouteDialog.getInstance().route = undefined;
                    if (_this.airplane.route.length > 0)
                        routedialog_1.RouteDialog.getInstance().route = _this.airplane.route[0];
                    else {
                        alert("no route defined");
                        return;
                    }
                    routedialog_1.RouteDialog.getInstance().show();
                });
                document.getElementById("upgrade-squadron").addEventListener('click', (e) => {
                    _this.airplane.upgrade();
                    _this.update();
                    //SquadronDialog.getInstance().airplane = _this.airplane;
                    //SquadronDialog.getInstance().show();
                });
                document.getElementById("delete-airplane").addEventListener('click', (e) => {
                    if (confirm(`Delete the the entire squadron?`)) {
                        _this.deleteAirplane(_this.airplane);
                    }
                });
                document.getElementById("delete-route").addEventListener('click', (e) => {
                    var select = document.getElementById("route-list");
                    for (var x = 0; x < select.children.length; x++) {
                        if (select.children[x].classList.contains("active-listitem")) {
                            $(select.children[x]).remove();
                        }
                    }
                    _this.updateData();
                });
                document.getElementById("route-list").addEventListener('click', (e) => {
                    _this.selectCity(e);
                });
                document.getElementById("route-list").addEventListener('touchstart', (e) => {
                    _this.selectCity(e);
                });
                $("#delete-route").droppable({
                    drop: (e, e2) => {
                        $(e2.draggable[0]).remove();
                        _this.updateData();
                    }
                });
            }, 500);
            //document.createElement("span");
        }
        deleteAirplane(ap) {
            var _a;
            for (var x = 0; x < ap.squadron.length; x++) {
                this.deleteAirplane(ap.squadron[x]);
                ap.squadron = [];
            }
            var pos = this.airplane.world.airplanes.indexOf(ap);
            if (pos !== -1)
                this.airplane.world.airplanes.splice(pos, 1);
            if ((_a = ap.dom) === null || _a === void 0 ? void 0 : _a.style)
                ap.dom.style.display = "none";
            if (ap.dom)
                this.airplane.world.dom.removeChild(ap.dom);
            this.update();
        }
        selectCity(e) {
            var el = $(e.target).closest('li')[0];
            if (el.id.split("-").length > 1) {
                var id = parseInt(el.id.split("-")[1]);
                var select = document.getElementById("route-list");
                for (var x = 0; x < select.children.length; x++) {
                    select.children[x].classList.remove("active-listitem");
                }
            }
            el.classList.add("active-listitem");
        }
        enableDropCities(enable) {
            var _this = this;
            console.log("route " + (enable ? "enable" : "disable"));
            if (this.dropCitiesEnabled && !enable) {
                for (var x = 0; x < this.airplane.world.cities.length; x++) {
                    try {
                        $(this.airplane.world.cities[x].dom).draggable('destroy');
                        $(this.airplane.world.cities[x].domDesc).draggable('destroy');
                    }
                    catch (_a) {
                    }
                }
            }
            if (this.dropCitiesEnabled === false && enable) {
                var config = {
                    connectToSortable: '#route-list',
                    helper: function (event) {
                        var id = parseInt(event.target.getAttribute("cityid") ? event.target.getAttribute("cityid") : event.target.parentNode.getAttribute("cityid"));
                        var city = _this.airplane.world.cities[id];
                        var ret = '<li id="route-' + id + '" class="ui-state-default"><img style="width:20px" src="' + city.icon + '" </img>' + city.name + "</li>";
                        return $(ret);
                        // return helper._position.dom;
                    },
                    revert: 'invalid'
                };
                $(".city").draggable(config);
                $(".citydesc").draggable(config);
                for (var x = 0; x < _this.airplane.world.cities.length; x++) {
                    if (this.airplane.world.cities[x].hasAirport === false) {
                        $(this.airplane.world.cities[x].dom).draggable('disable');
                        $(this.airplane.world.cities[x].domDesc).draggable('disable');
                    }
                }
            }
            this.dropCitiesEnabled = enable;
        }
        updateData() {
            var _this = this;
            var childs = document.getElementById("route-list").children;
            var old = [];
            for (var x = 0; x < _this.airplane.route.length; x++) {
                old.push(_this.airplane.route[x]);
            }
            _this.airplane.route = [];
            for (var x = 0; x < childs.length; x++) {
                if (childs[x].id === "route-dummy")
                    continue;
                var sid = childs[x].id.split("-")[1];
                var id = parseInt(sid);
                var found = undefined;
                for (var y = 0; y < old.length; y++) {
                    if (old[y].cityid === id) {
                        found = old[y];
                        old.splice(y, 1);
                        break;
                    }
                }
                if (found === undefined) {
                    found = new route_1.Route();
                    found.airplane = _this.airplane;
                    found.cityid = id;
                }
                _this.airplane.route.push(found);
            }
        }
        updateRoute() {
            var _this = this;
            if (document.getElementById("route-list") === null)
                return;
            var html = "";
            //if (this.airplane.route.length === 0)
            //  html = '<li id="route-dummy">drag and drop cities here</br></li>';
            var ids = [];
            for (var x = 0; x < this.airplane.route.length; x++) {
                var id = this.airplane.route[x].cityid;
                html += '<li id="route-' + id + '" class="ui-state-default"><img style="width:20px;" src="' + this.airplane.world.cities[id].icon + '" </img>' +
                    this.airplane.world.cities[id].name + "</li>";
                ids.push(this.airplane.route[x].cityid);
                //var sdom;
                //var dom:HTMLSpanElement= <any>document.createRange().createContextualFragment(sdom).children[0];
            }
            html += '<li id="route-dummy">drag and drop<br/> cities here</li>';
            document.getElementById("route-list").innerHTML = html;
            $("#route-list").sortable({
                update: (event, ui) => {
                    _this.updateData();
                    setTimeout(() => {
                        _this.updateRoute();
                    }, 50);
                }
            });
            //  $("airplanedialog-route").sortable
            //                   <span>`+this.airplane.world.cities[0].icon+this.airplane.world.cities[0].name+`</span> 
            //                 <span>`+this.airplane.world.cities[1].icon+this.airplane.world.cities[1].name+`</span> 
            //               <span>`+this.airplane.world.cities[3].icon+this.airplane.world.cities[3].name+`</span> 
        }
        selectAirplace(ap) {
            var _a;
            this.airplane = ap;
            (_a = ap.world.selection) === null || _a === void 0 ? void 0 : _a.unselect();
            ap.world.selection = ap;
            ap.select();
            this.update(true);
        }
        updateInfo() {
            if (document.activeElement !== document.getElementById("airplanedialog-name"))
                document.getElementById("airplanedialog-name").value = this.airplane.name;
            document.getElementById("airplanedialog-type").innerHTML = "Type: " + this.airplane.typeid;
            document.getElementById("airplanedialog-speed").innerHTML = "Speed: " + this.airplane.speed;
            document.getElementById("airplanedialog-capacity").innerHTML = "Capacity:" + this.airplane.loadedCount + "/" + this.airplane.capacity;
            document.getElementById("airplanedialog-costs").innerHTML = "Daily costs:" + this.airplane.costs;
        }
        update(force = false) {
            var _this = this;
            if (this.airplane === undefined)
                return;
            try {
                if (!$(this.dom).dialog('isOpen')) {
                    return;
                }
            }
            catch (_a) {
                return;
            }
            var ret = '<div style="display:grid;grid-template-columns: 30px 30px 30px 30px;">';
            for (var x = 0; x < parameter.allProducts.length; x++) {
                if (this.airplane.products[x] !== 0) {
                    ret = ret + '<div>' + parameter.allProducts[x].getIcon() + " " + this.airplane.products[x] + " " + "</div>";
                }
            }
            ret += "<div>";
            document.getElementById("airplanedialog-products-list").innerHTML = ret;
            this.updateTitle();
            document.getElementById("route-active").checked = (this.airplane.activeRoute > -1);
            this.updateInfo();
        }
        updateTitle() {
            var sicon = '';
            if ($(this.dom).parent().find('.ui-dialog-title').length > 0)
                $(this.dom).parent().find('.ui-dialog-title')[0].innerHTML = this.airplane.name + " " + this.airplane.status; //'<img style="float: right" id="citydialog-icon" src="' + this.city.icon + '"  height="15"></img> ' + this.city.name + " " + this.city.people;
        }
        show() {
            var _this = this;
            this.dom.removeAttribute("hidden");
            this.update();
            if ($("#airplanedialog-route-tab").hasClass("ui-tabs-active")) {
                _this.enableDropCities(true);
            }
            //ui-tabs-active
            var dlg = $(this.dom).dialog({
                width: "190px",
                draggable: true,
                //     position:{my:"left top",at:"right top",of:$(document)} ,
                open: function (event, ui) {
                    _this.update(true);
                },
                close: function () {
                    _this.close();
                },
                create: function (e) {
                    setTimeout(() => {
                        $(e.target).dialog("widget").find(".ui-dialog-titlebar-close")[0].addEventListener('touchstart', (e) => {
                            _this.close();
                        });
                    }, 200);
                },
                resizable: false
            });
            dlg.dialog("widget").draggable("option", "containment", "none");
            $(this.dom).parent().css({ position: "fixed" });
        }
        close() {
            this.enableDropCities(false);
            $(this.dom).dialog("close");
        }
    }
    exports.AirplaneDialog = AirplaneDialog;
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
            this.speed = 400;
            this.workers = 0;
            this.active = false;
            this.type = "Transport";
            this.curStep = 0;
            this.productCount = 0;
            this.autodeliver = false;
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
            var _a;
            var _this = this;
            this.dom = document.createRange().createContextualFragment("<span z-index:2;style='font-size:20px;transform:rotate(0turn)' class='mdi mdi-airplane'></span>").children[0]; //document.createElement("span");
            var im = (_a = parameter.allProducts[this.company.productid]) === null || _a === void 0 ? void 0 : _a.image;
            if (im !== undefined && im !== "")
                this.dom = document.createRange().createContextualFragment(`<img src="${company_1.Company.getImageUrl(im)}" width="20" height="20">`).children[0];
            this.dom.style.position = "absolute";
            this.dom.style.zIndex = "10";
            this.dom.addEventListener("click", (ev) => {
                _this.onclick(ev);
                return undefined;
            });
            this.update();
            this.world.dom.appendChild(this.dom);
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
            var comp = this.world.companies[this.companyTarget];
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
            var comp = this.world.companies[this.companyTarget];
            var prodid = this.company.productid;
            if (comp.productid === -2) {
                if (product_1.Product.productSoldier === ((_a = this === null || this === void 0 ? void 0 : this.transferInfo) === null || _a === void 0 ? void 0 : _a.productid)) {
                    if (comp.soldiercount >= parameter.soldiersToConquer)
                        return false;
                    comp.soldiercount++;
                    this.destroy(this.company.transports);
                    if (comp.soldiercount === parameter.soldiersToConquer) {
                        delete comp.soldiersComing;
                        comp.productid = -1;
                        comp.domIcon.src = company_1.Company.getImageUrl("Baustelle.png");
                    }
                }
                return true;
            }
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
                        var transfer = Math.min(this.productCount, parameter.allProducts[comp.buildingInProgress].level);
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
                            if (this.transferInfo.productid === product_1.Product.productHelper || this.transferInfo.productid === product_1.Product.productSoldier) {
                                comp.workers = 99999999999;
                                comp.workersOut = 99999999999;
                            }
                            this.transferInfo = undefined;
                        }
                        this.companyTarget = undefined;
                        return true;
                    }
                }
            }
            var prodindex = parameter.allProducts[comp.productid].consume.indexOf(prodid);
            var cap = comp.workersIn * parameter.transportCapacityPerHelper + parameter.transportCapacityPerHelper;
            var transfer = Math.min(this.productCount, cap - comp.rawmaterials[prodindex]);
            comp.rawmaterials[prodindex] += transfer;
            this.productCount -= transfer;
        }
        destroy(parent) {
            parent.splice(parent.indexOf(this), 1);
            this.world.dom.removeChild(this.dom);
        }
        isPositionTarget() {
            var t = this.world.companies[this.companyTarget];
            if (t && t.x === this.x && t.y === this.y)
                return true;
            return false;
        }
        isPositionHome() {
            var t = this.company;
            if (t && t.x === this.x && t.y === this.y)
                return true;
            return false;
        }
        nextTick() {
            if (this.nextTargetX === undefined)
                return;
            if (this.x === this.nextTargetX && this.y === this.nextTargetY) {
                //console.log("arrived");
                if (this.active && this.isPositionTarget()) {
                    this.unload();
                    this.moveTo(this.company.companyID);
                }
                if (this.active && this.isPositionHome()) {
                    if (this.load()) {
                        if (this.companyTarget !== undefined) //Bautransport
                            this.moveTo(this.companyTarget);
                    }
                }
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
            this.update();
        }
        moveTo(compid) {
            if (this.dom) {
                if (compid === this.company.companyID) {
                    this.dom.style.opacity = "0.5";
                }
                else {
                    this.dom.style.opacity = "1";
                }
            }
            this.nextTargetX = this.world.companies[compid].x;
            this.nextTargetY = this.world.companies[compid].y;
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
        update() {
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
            this.dom.style.top = y + "px";
            this.dom.style.left = x + "px";
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
define("game/diagramdialog", ["require", "exports", "game/icons", "game/tools"], function (require, exports, icons_4, tools_1) {
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
            document.getElementById("diagramdialog-refresh").addEventListener('click', (e) => {
                _this.update();
            });
            document.getElementById("buildWithOneClick").addEventListener('change', (e) => {
                var num = parseInt(document.getElementById("buildWithOneClick").value);
                parameter.numberBuildWithContextMenu = num;
                _this.update();
            });
            document.getElementById("buildShopsWithOneClick").addEventListener('change', (e) => {
                var num = parseInt(document.getElementById("buildShopsWithOneClick").value);
                parameter.numberBuildShopsWithContextMenu = num;
                _this.update();
            });
            document.getElementById("buildSpeedWithOneClick").addEventListener('change', (e) => {
                var num = parseInt(document.getElementById("buildSpeedWithOneClick").value);
                parameter.numberBuildSpeedWithContextMenu = num;
                _this.update();
            });
            document.getElementById("hideFlags").addEventListener("click", (e) => {
                var en = document.getElementById("hideFlags").checked;
                parameter.hideFlags = en;
                for (var x = 0; x < _this.world.cities.length; x++) {
                    _this.world.cities[x].showOrHideFlags();
                }
                // _this.city.renderShopinfo(en);
                //  _this.update();
            });
            document.getElementById("autoCloseDialog").addEventListener("click", (e) => {
                var en = document.getElementById("autoCloseDialog").checked;
                parameter.autoCloseDialog = en;
            });
            for (var x = 0; x < parameter.allProducts.length; x++) {
                document.getElementById("diagram-advertise_" + x).addEventListener("click", (evt) => {
                    var sid = evt.target.id;
                    var id = Number(sid.split("_")[1]);
                    var money = _this.world.cities.length * parameter.costsAdvertising;
                    _this.world.game.changeMoney(-money, "advertising");
                    _this.world.advertising[id] = new Date(_this.world.game.date.getTime() + 30 * 24 * 60 * 60 * 1000).getTime();
                    _this.update();
                });
            }
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
            <button id="diagramdialog-refresh" title="refresh data"  class="mybutton">` + icons_4.Icons.refresh + `</button>
                            
            <div id="diagramdialog-tabs">
                <ul>
                    <li><a href="#diagramdialog-buildings" id="diagramdialog-buildings-tab" class="diagramdialog-tabs">Buildings</a></li>
                    <li><a href="#diagramdialog-balance" id="diagramdialog-balance-tab" class="diagramdialog-tabs">Balance</a></li>
                    <li><a href="#diagramdialog-settings" id="diagramdialog-settings-tab" class="diagramdialog-tabs">Settings</a></li>
                </ul>
                 <div id="diagramdialog-buildings">` + _this.createBuildings() + `
                </div> 
                <div id="diagramdialog-balance">   
                    <table id="diagramdialog-balance-table">
                    </table>         
                </div>
                 <div id="diagramdialog-settings">   
                       build company with one click: <input id="buildWithOneClick"  value="""/><br/>
                       build shops with contextmenu: <input id="buildShopsWithOneClick"  value="""/><br/>
                       build speed with contextmenu: <input id="buildSpeedWithOneClick"  value="""/><br/>
                       <input type="checkbox" id="hideFlags" title="hide flags" >hide flags</input>
                       <input type="checkbox" id="autoCloseDialog" title="auto close dialog" >auto close dialog</input>
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
        createBuildings() {
            return `<table id="diagramdialog-buildings-table" style="height:100%;weight:100%;">
                        <tr>
                            <th>Name</th>
                            <th> </th>
                            <th style="align:right">Rate Load</th>
                            <th style="align:right">Buildings</th>
                            <th style="align:right">Consum.</th>
                            <th>Advertise</th>
                        </tr>
                       ${(function fun() {
                var ret = "";
                for (var x = 0; x < parameter.allProducts.length; x++) {
                    ret = ret + "<tr>";
                    ret = ret + "<td>" + parameter.allProducts[x].getIcon() + "</td>";
                    ret = ret + "<td>" + parameter.allProducts[x].name + "</td>";
                    ret = ret + '<td align=right>100,00</td>';
                    ret = ret + "<td align=right>0</td>";
                    ret = ret + '<td align=right>0</td>';
                    ret = ret + "<td>" + '<button id="diagram-advertise_' + x + '" class="mybutton"></button>' + "</td>";
                    ret = ret + "</tr>";
                }
                return ret;
            })()}
                    </table>
                    <span id="diagramdialog-buildings-last-change"></span>`;
        }
        update() {
            if (document.activeElement !== document.getElementById("buildWithOneClick"))
                document.getElementById("buildWithOneClick").value = "" + parameter.numberBuildWithContextMenu;
            if (document.activeElement !== document.getElementById("buildShopsWithOneClick"))
                document.getElementById("buildShopsWithOneClick").value = "" + parameter.numberBuildShopsWithContextMenu;
            if (document.activeElement !== document.getElementById("buildSpeedWithOneClick"))
                document.getElementById("buildSpeedWithOneClick").value = "" + parameter.numberBuildSpeedWithContextMenu;
            if (document.getElementById("hideFlags").checked !== parameter.hideFlags)
                document.getElementById("hideFlags").checked = parameter.hideFlags;
            if (document.getElementById("autoCloseDialog").checked !== parameter.autoCloseDialog)
                document.getElementById("autoCloseDialog").checked = parameter.autoCloseDialog;
            try {
                if (!$(this.dom).dialog('isOpen')) {
                    return;
                }
            }
            catch (_a) {
                return;
            }
            var table = document.getElementById("diagramdialog-buildings-table");
            var buildings = [];
            for (var x = 0; x < parameter.allProducts.length; x++) {
                buildings.push(0);
            }
            for (var x = 0; x < this.world.cities.length; x++) {
                for (var y = 0; y < this.world.cities[x].companies.length; y++) {
                    var comp = this.world.cities[x].companies[y];
                    buildings[comp.productid] += comp.buildings;
                }
            }
            for (var x = 0; x < parameter.allProducts.length; x++) {
                var tr = table.children[0].children[x + 1];
                var inprogr = 0;
                for (var y = 0; y < this.world.cities.length; y++) {
                    inprogr += this.world.cities[y].getBuildingInProgress(x);
                }
                var sh = buildings[x] === undefined ? "" : (0, tools_1.getLocalNumber)(buildings[x]);
                if (inprogr) {
                    sh = sh + "(" + inprogr + icons_4.Icons.hammer + ")";
                }
                tr.children[3].innerHTML = sh;
                var suc = 0;
                var unsuc = 0;
                for (var t = 0; t < 7; t++) {
                    suc += this.world.game.statistic.successfulLoad[t][x];
                    unsuc += this.world.game.statistic.unsuccessfulLoad[t][x];
                }
                var ges = unsuc + suc;
                var dif = ges - unsuc;
                tr.children[2].innerHTML = (Math.round(10000 * dif / ges) / 100).toLocaleString(undefined, { maximumFractionDigits: 2 }) + "&nbsp;";
                //tr.children[3].innerHTML = parameter.allProducts[x].dailyConsumtion.toLocaleString();
                //var test1=parameter.allProducts[x].getAmountForPeople()/(parameter.workerInCompany*parameter.allProducts.length);
                //var abw1=Math.round(1000*(parameter.allProducts[x].dailyConsumtion-test1)/parameter.allProducts[x].dailyConsumtion)/10;
                tr.children[4].innerHTML = (parameter.allProducts[x].getDiffConsumtion() * 100).toLocaleString(undefined, { maximumFractionDigits: 1 });
                var but = document.getElementById("diagram-advertise_" + x);
                if (this.world.advertising[x]) {
                    but.innerHTML = "until " + new Date(this.world.advertising[x]).toLocaleDateString();
                    but.setAttribute("disabled", "");
                }
                else {
                    but.removeAttribute("disabled");
                    but.innerHTML = "for " + (this.world.cities.length * parameter.costsAdvertising).toLocaleString() + " " + icons_4.Icons.money;
                }
            }
            //
            var table = document.getElementById("diagramdialog-balance-table");
            var content = `
            <tr>
                <th>What</th>
                <th>Yesterday</th>
                <th>Today</th>
            </tr>
        `;
            var allKeys = [];
            for (var key in this.world.game.statistic.today) {
                if (allKeys.indexOf(key) === -1)
                    allKeys.push(key);
            }
            for (var key in this.world.game.statistic.yesterday) {
                if (allKeys.indexOf(key) === -1)
                    allKeys.push(key);
            }
            allKeys.sort((a, b) => a.localeCompare(b));
            var gest = 0;
            var gesy = 0;
            for (var x = 0; x < allKeys.length; x++) {
                var k = allKeys[x];
                if (this.world.game.statistic.yesterday[k] != 0)
                    gesy += this.world.game.statistic.yesterday[k];
                if (this.world.game.statistic.today[k] != 0)
                    gest += this.world.game.statistic.today[k];
                content += `<tr>
                        <td>` + k + `</td>
                        <td style="text-align: right">` + "&nbsp;" + (this.world.game.statistic.yesterday[k] === undefined ? "" : this.world.game.statistic.yesterday[k].toLocaleString()) + `</td>
                        <td style="text-align: right">` + "&nbsp;" + (this.world.game.statistic.today[k] === undefined ? "" : this.world.game.statistic.today[k].toLocaleString()) + `</td>
                      </tr>`;
            }
            content += `<tr>
                        <td>Total</td>
                        <td style="text-align: right">` + "&nbsp;" + gesy.toLocaleString() + `</td>
                        <td style="text-align: right">` + "&nbsp;" + gest.toLocaleString() + `</td>
                      </tr>`;
            table.innerHTML = content;
            document.getElementById("diagramdialog-buildings-last-change").textContent = this.world.game.statistic.lastPriceChange;
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
define("game/savedialog", ["require", "exports", "game/product", "game/world", "game/company", "game/transport"], function (require, exports, product_2, world_1, company_2, transport_1) {
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
                        <input type="file" id="save-import" name="files[]" accept="application/json" style="display: none;"  />
                        <button id="save-save" title="save" style="width:100%" class="mybutton">Save</button>
                        <button id="save-load" title="save" style="width:100%" class="mybutton">Load</button>
                        <button id="save-delete" title="save" style="width:100%" class="mybutton">Delete</button>
                        <button id="save-export" title="save" style="width:100%" class="mybutton">Export</button>
                        <button id="save-doupload" title="save" style="width:100%" class="mybutton" onclick="document.getElementById('save-import').click();">Import</button>
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
                var _a, _b, _c, _d;
                var ret = {};
                if (value instanceof HTMLElement) {
                    return undefined;
                }
                if (key === "lastUpdate")
                    return undefined;
                if (((_a = value === null || value === void 0 ? void 0 : value.constructor) === null || _a === void 0 ? void 0 : _a.name) === "World") {
                    Object.assign(ret, value);
                    delete ret.game;
                    return ret;
                }
                if (((_b = value === null || value === void 0 ? void 0 : value.constructor) === null || _b === void 0 ? void 0 : _b.name) === "Company") {
                    Object.assign(ret, value);
                    delete ret.world;
                    return ret;
                }
                if (((_c = value === null || value === void 0 ? void 0 : value.constructor) === null || _c === void 0 ? void 0 : _c.name) === "Transport") {
                    Object.assign(ret, value);
                    delete ret.world;
                    delete ret.company;
                    return ret;
                }
                if (((_d = value === null || value === void 0 ? void 0 : value.constructor) === null || _d === void 0 ? void 0 : _d.name) === "Product") {
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
                    Object.assign(parameter, value);
                    //return parameter;
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
            for (var x = 0; x < game.world.companies.length; x++) {
                game.world.companies[x].world = game.world;
                for (var y = 0; y < game.world.companies[x].transports.length; y++) {
                    game.world.companies[x].transports[y].world = game.world;
                    game.world.companies[x].transports[y].company = game.world.companies[x];
                }
                //for(var y=0;y<this.world.cities[x].companies.length;y++){
                //  this.world.cities[x].companies[y].
                //}
            }
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
            /* if (parseFloat(ret.version) <= 1.2) {
                 game.parameter.allAirplaneTypes[0].buildingMaterial = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
             }*/
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
define("game/game", ["require", "exports", "game/world", "game/icons", "game/product", "game/diagramdialog", "game/savedialog", "game/tools", "game/companydialog"], function (require, exports, world_2, icons_5, product_3, diagramdialog_1, savedialog_1, tools_2, companydialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.test = exports.Game = exports.Parameter = exports.Level = void 0;
    var gameversion = "1.0";
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
            this.width = 8;
            this.height = 20;
            this.soldiersToConquer = 10;
            this.transportCapacityPerHelper = 1;
            this.capacityPerHelper = 1;
        }
    }
    exports.Parameter = Parameter;
    function createParameter() {
        window.parameter = new Parameter();
        globalThis.parameter = new Parameter();
        //7*6
        parameter.allProducts = product_3.Product.init([
            new product_3.Product("Tor", "Tor.png", 1, []),
            new product_3.Product("Wasser", "Wasser.png", 1, []),
            new product_3.Product("Beeren", "Beeren.png", 1, ["Wasser"], 1),
            new product_3.Product("Helfer", "Helfer.png", 1, ["Beeren"]),
            new product_3.Product("Soldat", "Soldat.png", 1, ["Bier"]),
            new product_3.Product("Stein", "Stein.png", 1, ["Beeren"]),
            new product_3.Product("Holz", "Holz.png", 1, ["Beeren"]),
            new product_3.Product("Getreide", "Getreide.png", 2, ["Wasser"]),
            new product_3.Product("Mehl", "Mehl.png", 2, ["Getreide"]),
            new product_3.Product("Brot", "Brot.png", 2, ["Mehl", "Holz"]),
            new product_3.Product("Schwein", "Schwein.png", 2, ["Getreide", "Wasser"]),
            new product_3.Product("Fleisch", "Fleisch.png", 2, ["Schwein"]),
            new product_3.Product("Burger", "Burger.png", 2, ["Brot", "Fleisch", "Holz"], 2),
            new product_3.Product("Bier", "Bier.png", 2, ["Getreide", "Wasser"], undefined, 2),
            new product_3.Product("Gras", "Gras.png", 3, ["Wasser"]),
            new product_3.Product("Milch", "Milch.png", 3, ["Gras"]),
            new product_3.Product("Fisch", "Fisch.png", 3, ["Beeren"]),
            new product_3.Product("Kakao", "Kakao.png", 3, ["Bier", "Fisch"]),
            new product_3.Product("Kohle", "Kohle.png", 3, ["Fleisch"]),
            new product_3.Product("Kakaomilch", "Kakaomilch.png", 3, ["Milch", "Kakao"], 3),
            new product_3.Product("Eisenerz", "Eisenerz.png", 3, ["Brot"]),
            new product_3.Product("Eisen", "Eisen.png", 3, ["Eisenerz", "Kohle"]),
            new product_3.Product("Schwert", "Schwet.png", 3, ["Eisen", "Holz"], undefined, 3),
            new product_3.Product("Brett", "Brett.png", 4, ["Holz"]),
            new product_3.Product("Werkzeug", "Werkzeug.png", 4, ["Eisen", "Brett"]),
            new product_3.Product("Tisch", "Tisch.png", 4, ["Brett", "Werkzeug"], 4),
            new product_3.Product("Wolle", "Wolle.png", 4, ["Gras", "Wasser"]),
            new product_3.Product("Stoff", "Stoff.png", 4, ["Wolle"]),
            new product_3.Product("Kleidung", "Kleidung.png", 4, ["Stoff"]),
            new product_3.Product("Rüstung", "Ruestung.png", 4, ["Kleidung", "Eisen", "Kohle", "Werkzeug"], undefined, 4),
            new product_3.Product("Käse", "Kaese.png", 5, ["Milch"]),
            new product_3.Product("Papier", "Papier.png", 5, ["Holz"]),
            new product_3.Product("Pizza", "Pizza.png", 5, ["Fleisch", "Käse", "Mehl", "Papier"], 5),
            new product_3.Product("Ei", "Ei.png", 6, ["Gras", "Getreide"]),
            new product_3.Product("Torte", "Torte.png", 6, ["Mehl", "Beeren", "Ei"]),
            new product_3.Product("Gold", "Gold.png", 6, ["Torte"]),
            new product_3.Product("Schmuck", "Schmuck.png", 6, ["Gold"]),
            new product_3.Product("Eierlikör", "Eierlikoer.png", 6, ["Ei", "Milch"]),
            new product_3.Product("Geschenk", "Geschenk.png", 6, ["Schmuck", "Eierlikör", "Papier"], 6),
            new product_3.Product("Helm", "Helm.png", 6, ["Eisen", "Kohle", "Wolle", "Schmuck"], undefined, 6)
            // new Product("Spielzeug",    "",         6,  ["Kleidung","Papier"])
        ]);
        parameter.allLevels = [
            { maxPeople: 30, maxSoldiers: 100, maxPlaces: 10, buildingLimit: 2 },
            { maxPeople: 150, maxSoldiers: 50, maxPlaces: 20, buildingLimit: 3 },
            { maxPeople: 180, maxSoldiers: 50, maxPlaces: 40, buildingLimit: 3 },
            { maxPeople: 240, maxSoldiers: 50, maxPlaces: 60, buildingLimit: 4 },
            { maxPeople: 300, maxSoldiers: 50, maxPlaces: 80, buildingLimit: 5 },
            { maxPeople: 360, maxSoldiers: 50, maxPlaces: 100, buildingLimit: 99999999 },
        ];
        return parameter;
    }
    ;
    //global.parameter=new Parametetr();
    class Game {
        constructor() {
            this.version = "5.4";
            this.mapWidth = 1000;
            this.mapHeight = 600;
            this.level = 1;
            this.people = 0;
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
        }
        updateTitle() {
            try {
                var m = this.people;
                if (document.getElementById("idpeople").textContent !== (0, tools_2.getLocalNumber)(m))
                    document.getElementById("idpeople").textContent = (0, tools_2.getLocalNumber)(m);
                if (document.getElementById("idlevel").textContent !== this.level.toString())
                    document.getElementById("idlevel").textContent = this.level.toString();
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
        checkNextLevel() {
            var lev = parameter.allLevels[this.level - 1];
            var prods = this.world.getProductsToBuildForLevel(this.level);
            if (prods.length === 0) {
                var gate = this.world.findCompanyThatProduces(product_3.Product.productGate)[0];
                var gatefull = true;
                gate.rawmaterials.forEach(val => {
                    if (val < gate.workersIn) {
                        gatefull = false;
                    }
                });
                if (!gatefull || gate.rawmaterials.length === 0)
                    return;
                this.level++;
                var prodHelper = parameter.allProducts[product_3.Product.productHelper];
                var productSoldier = parameter.allProducts[product_3.Product.productSoldier];
                for (var x = 0; x < parameter.allProducts.length; x++) {
                    var prod = parameter.allProducts[x];
                    if (prod.forpeoplelevel === this.level && prodHelper.consume.indexOf(prod.id) === -1) {
                        prodHelper.consume.push(prod.id);
                        this.world.findCompanyThatProduces(product_3.Product.productHelper).forEach(p => p.rawmaterials.push(0));
                    }
                    if (prod.forsoldierlevel === this.level && productSoldier.consume.indexOf(prod.id) === -1) {
                        productSoldier.consume.push(prod.id);
                        this.world.findCompanyThatProduces(product_3.Product.productSoldier).forEach(p => p.rawmaterials.push(0));
                    }
                }
                if (this.level === 2) {
                    var soldier = this.world.findCompanyThatProduces(product_3.Product.productSoldier).forEach((sol) => {
                    });
                }
                alert("Glückwunsch, Du hast Level " + this.level + " erreicht. Weitere Gebäude wurden freigeschaltet.");
            }
            this.updateTitle();
            this.setProductsInGate();
        }
        setProductsInGate() {
            var gate = this.world.findCompanyThatProduces(product_3.Product.productGate)[0];
            var helper = this.world.findCompanyThatProduces(product_3.Product.productHelper)[0];
            var soldier = this.world.findCompanyThatProduces(product_3.Product.productSoldier)[0];
            var pgate = parameter.allProducts[product_3.Product.productGate];
            var phelper = parameter.allProducts[product_3.Product.productHelper];
            var psoldier = parameter.allProducts[product_3.Product.productSoldier];
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
            parameter.allProducts.forEach(p => {
                if ((this.level) && p.forpeoplelevel) {
                    var idx = phelper.consume.indexOf(p.id);
                    helper.rawmaterials[idx] = this.world.getProductsToBuildForLevel(this.level).length * 5;
                }
                if ((this.level) && p.forsoldierlevel) {
                    var idx = psoldier.consume.indexOf(p.id);
                    soldier.rawmaterials[idx] = this.world.getProductsToBuildForLevel(this.level).length * 10;
                }
            });
        }
        nextTick() {
            var _this = this;
            this.checkNextLevel();
            this.world.nextTick();
            this.updateUIID = setTimeout(() => {
                _this.nextTick();
            }, 100);
            companydialog_1.CompanyDialog.getInstance().update();
            this.updateTitle();
            //AirplaneDialog.getInstance().update();
        }
        updateSize() {
            this.domWorld.style.width = (this.mapWidth + 80) + "px";
            this.domWorld.style.height = (this.mapHeight + 100) + "px";
            this.domWorld.parentNode.style.width = (this.mapWidth + 80) + "px";
            this.domWorld.parentNode.style.height = (this.mapHeight + 100) + "px";
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
        render(dom) {
            var _this = this;
            dom.innerHTML = "";
            dom.style.backgroundColor = "lightblue";
            this.dom = dom;
            var sdomHeader = `
          <div style="height:15px;position:fixed;z-index:10000;background-color:lightblue;">
            Traffics ` + gameversion + ` 
            <button id="game-slower"  class="mybutton">` + icons_5.Icons.minus + `</button> 
            <span id="gamedate"></span>   
            <button id="game-faster"  class="mybutton">` + icons_5.Icons.plus + `</button> 
            <span id="idpeople"></span>` + "👤" + `
            Level <span id="idlevel"></span>` + `
            <button id="save-game"  class="mybutton">` + icons_5.Icons.save + `</button> 
            <!--button id="debug-game"  class="mybutton">` + icons_5.Icons.debug + `</button--> 
            <button id="show-diagram"  class="mybutton">` + icons_5.Icons.diagram + `</button> 
          </div>  
        `;
            this.domHeader = document.createRange().createContextualFragment(sdomHeader).children[0];
            var sdomWorld = `
          <div id="world" style="position:absolute;top:20px;">
          </div>  
        `;
            this.domWorld = document.createRange().createContextualFragment(sdomWorld).children[0];
            this.dom.appendChild(this.domHeader);
            // var headerPlaceeholder = <any>document.createRange().createContextualFragment('<div style="height:15px"></div>').children[0]
            // this.dom.appendChild(headerPlaceeholder);
            this.dom.appendChild(this.domWorld);
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
            document.getElementById("game-slower").addEventListener("click", () => {
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
            });
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
            this.world.destroy();
            clearTimeout(this.timer);
            clearTimeout(this.updateUIID);
            console.log("clear intervall" + this.updateUIID);
        }
        close() {
            //clearInterval(this.updateUIID);
            //  clearTimeout(this.timer);
        }
    }
    exports.Game = Game;
    Game.temposcale = [0.01, 0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256];
    function test() {
    }
    exports.test = test;
});
define("game/companydialog", ["require", "exports", "game/icons", "game/company", "game/product", "game/transport", "game/game"], function (require, exports, icons_6, company_3, product_4, transport_2, game_1) {
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
                    <li><a href="#companydialog-conquer" id="companydialog-conquer-tab"  class="companydialog-tabs">Erobern</a></li>
                    <li><a href="#companydialog-build" id="companydialog-build-tab"  class="companydialog-tabs">Bauen</a></li>
                    <li><a href="#companydialog-delete" id="companydialog-delete-tab"  class="companydialog-tabs">❌</a></li>
                    
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
            if (this.company.world.game.level < (level - 1)) {
                game_1.Game.showInfo("kann erst ab Level " + (level + 1) + " gebaut werden.");
            }
        }
        createConquerTab() {
            var _this = this;
            return `
               
                    <button id="add-soldier"  class="mybutton">+10 <img src="${company_3.Company.getImageUrl(parameter.allProducts[product_4.Product.productSoldier].image)}" width="20" height="20"> </button>  <br/>
               
               
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
                    icons += `<button id="companydialog-build-product_${p.id}" class="companydialog-build-product">+
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
                            <td>Lager&nbsp;</td>
                            <td><img id="companydialog-production-table-icon" src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td><b><span id="workersOut">1</span></b></td>
                            <td>
                                <button id="out-add-worker"  class="mybutton">+1👤 </button>  
                                <button id="out-remove-worker"  class="mybutton">-1👤 </button>  
                            </td>
                        </tr>
                        <tr>
                            <td>Produktion&nbsp;</td>
                            <td></td>
                            <td><span id="workers">1</span></td>
                            <td>
                                <button id="add-worker"  class="mybutton">+1👤 </button>
                                <button id="remove-worker"  class="mybutton">-1👤 </button> 
                            </td>
                         
                        </tr>
                      
                        <tr>
                            <td>Rohstoffe&nbsp;</td>
                            <td></td>
                            <td><span id="workersIn">1</span></td>
                            <td>
                                <button id="in-add-worker"  class="mybutton">+1👤 </button>  
                                <button id="in-remove-worker"  class="mybutton">-1👤 </button>  
                            </td>
                              
                                
                            
                        </tr>
                         <tr>
                            <td>Mehl</td> 
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                         <tr>
                            <td>Mehl</td>
                            <td><img src="${company_3.Company.getImageUrl(parameter.allProducts[0].image)}" width="20" height="20"></td>
                            <td>0/0</td>
                        </tr>
                </table>
                <div id="infonextlevel">
                    Die Produktion wird erst im naechsten Level freigeschaltet.
                </div>
               `;
        }
        createTransportTab() {
            var _this = this;
            return `

                 <table>
                    <tr>
                        <td>
                             <button id="transport-up" class="mybutton">` + icons_6.Icons.up + `</button>
                             <button id="transport-down"  class="mybutton">` + icons_6.Icons.down + `</button>
                             <button id="transport-add"  class="mybutton">` + icons_6.Icons.plus + `</button>
                             <button id="transport-del"  class="mybutton">` + icons_6.Icons.remove + `</button><br/>
                            <select id="companydialog-transport-list" size="10" class="mylist boxborder" style="height: 250px;width:180px">
                            </select>
                        </td>
                        <td>
                        <br/>
                            Auswahl &auml;ndern<br/>
                             <button id="transport-add-worker"  class="mybutton" style="width:70px" >+1👤</button>
                             <button id="transport-remove-worker"  class="mybutton" style="width:70px">-1👤</button><br/>
                             <select id="companydialog-transport-productlist"  size="10" style="width:150px">
                            </select>
                            <br/>
                            
                        </td>
                    
                        
                    </tr>
                </table>
               `;
        }
        bindActions() {
            var _this = this;
            document.getElementById("add-worker").addEventListener("click", (ev) => {
                _this.company.addWorker("workers");
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
                if (parameter.allProducts[_this.company.productid].level === 1 && _this.company.world.findCompanyThatProduces(_this.company.productid).length === 1) {
                    alert("Das letzte Gebäude dieser Art kann nicht abgerissen werden.");
                    return;
                }
                _this.company.destroy();
            });
            document.getElementById("in-add-worker").addEventListener("click", (ev) => {
                _this.company.addWorker("workersIn");
            });
            document.getElementById("in-remove-worker").addEventListener("click", (ev) => {
                _this.company.removeWorker("workersIn");
            });
            document.getElementById("out-add-worker").addEventListener("click", (ev) => {
                _this.company.addWorker("workersOut");
            });
            document.getElementById("out-remove-worker").addEventListener("click", (ev) => {
                _this.company.removeWorker("workersOut");
            });
            document.getElementById("transport-add-worker").addEventListener("click", (event) => {
                var trans = _this.getSelectedTransport();
                _this.company.addWorker(trans);
                _this.update();
            });
            document.getElementById("transport-remove-worker").addEventListener("click", (event) => {
                var selected = this.getSelectedTransport();
                _this.company.removeWorker(selected);
            });
            document.getElementById("transport-del").addEventListener("click", (event) => {
                var selected = this.getSelectedTransport();
                if (selected.workersComming) {
                    alert("Der Transport kann nicht zerstört werden, solange noch Helfer unterwegs sind.");
                    return;
                }
                while (selected.workers > 0) {
                    _this.company.removeWorker(selected);
                }
                selected.destroy(_this.company.transports);
            });
            document.getElementById("transport-add").addEventListener("click", (event) => {
                var trans = new transport_2.Transport(this.company);
                trans.active = true;
                trans.render();
                if (_this.company.productid === product_4.Product.productStone || _this.company.productid === product_4.Product.productWood) {
                    trans.autodeliver = true;
                }
                this.company.transports.push(trans);
                if (trans)
                    _this.company.addWorker(trans);
                _this.update();
            });
            document.getElementById("add-soldier").addEventListener("click", (ev) => {
                var run = (trans, delay) => {
                    setTimeout(() => trans.active = true, delay);
                };
                var company = _this.company.world.findSoldier(); // findCompanyThatProduces(Product.productSoldier)[0];
                var max = 0;
                if (company)
                    max = company.produced - company.transports.length;
                if (max < parameter.soldiersToConquer) {
                    game_1.Game.showInfo("nicht genug Soldaten");
                    return;
                }
                for (var x = 0; x < parameter.soldiersToConquer; x++) {
                    var trans = new transport_2.Transport(company);
                    trans.companyTarget = _this.company.companyID;
                    trans.workers = 1;
                    trans.render();
                    trans.transferInfo = { productid: company.productid };
                    run(trans, x * 100);
                    company.transports.push(trans);
                }
                _this.company.soldiersComing = true;
                //_this.company.workersOut++;
                _this.update(true);
            });
            for (var x = 0; x < parameter.allProducts.length; x++) {
                document.getElementById("companydialog-build-product_" + x).addEventListener("click", (evt) => {
                    var id = parseInt(evt.currentTarget.id.split("_")[1]);
                    var serror = "";
                    var count = parameter.allProducts[id].level;
                    ;
                    var transwood = _this.getBuildTransport(product_4.Product.productWood, count);
                    if (!transwood)
                        serror = "Kein " + count + " Holz gefunden oder kein Bautransport gefunden, der " + count + " Holz transportieren kann.";
                    var transstone = this.getBuildTransport(product_4.Product.productStone, count);
                    if (!transstone)
                        serror += "Kein " + count + " Stein gefunden oder kein Bautransport gefunden, der " + count + " Stein transportieren kann.";
                    if (this.company.productid !== -1)
                        serror = "das Gebiet muss entweder erobert werden oder ist bereits bebaut.";
                    if (serror !== "") {
                        game_1.Game.showInfo(serror);
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
            document.getElementById("companydialog-transport-productlist").addEventListener("change", (event) => {
                var trans = _this.getSelectedTransport();
                var comp = parseInt(event.target.value);
                trans.changeCompanyTaget(comp);
                _this.update();
            });
        }
        getSelectedTransport() {
            var list = document.getElementById("companydialog-transport-list");
            var selectedtransport = parseInt(list.value === "" ? "-1" : list.value);
            return this.company.transports[selectedtransport];
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
                if (this.company.world.game.level >= (prod.level - 1) &&
                    this.company.world.findCompanyThatProduces(prod.id, true).length < parameter.allLevels[this.company.world.game.level - 1].buildingLimit &&
                    button.disabled) {
                    button.disabled = false;
                }
                else if ((this.company.world.game.level < (prod.level - 1) ||
                    this.company.world.findCompanyThatProduces(prod.id, true).length >= parameter.allLevels[this.company.world.game.level - 1].buildingLimit)
                    && button.disabled === false) {
                    button.disabled = true;
                }
            }
        }
        updateTransport() {
            var _a;
            var list = document.getElementById("companydialog-transport-list");
            if (list.children.length !== this.company.transports.length) {
                var s = "";
                for (var x = 0; x < this.company.transports.length; x++) {
                    s = s + '<option class="bgpicture" value="' + x + `"></option>`;
                }
                list.innerHTML = s;
            }
            for (var x = 0; x < this.company.transports.length; x++) {
                var s = "";
                var trans = this.company.transports[x];
                var target = this.company.world.companies[trans === null || trans === void 0 ? void 0 : trans.companyTarget];
                var prod = parameter.allProducts[target === null || target === void 0 ? void 0 : target.productid];
                var count = trans.productCount + "/" + trans.getCapacity();
                s = s + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + trans.getName() + " " + trans.workers + (trans.workersComming ? ("+" + trans.workersComming) : "") + "👤" + '</span><span>' + count + '</span>▤';
                var im = `url(${company_3.Company.getImageUrl((prod === null || prod === void 0 ? void 0 : prod.image) === undefined ? "Dummy.png" : prod.image)})`;
                var entr = list.children[x];
                if (entr.style.backgroundImage !== im)
                    entr.style.backgroundImage = im;
                if (entr.innerHTML !== s)
                    entr.innerHTML = s;
            }
            var list2 = document.getElementById("companydialog-transport-productlist");
            var s = ``;
            var companies = this.company.world.findCompanyThatConsumes(this.company.productid);
            for (var x = 0; x < companies.length; x++) {
                var comp = companies[x];
                var prod = parameter.allProducts[comp.productid];
                s = s + `<option class="bgpicture" style="background-image:url(${company_3.Company.getImageUrl((prod === null || prod === void 0 ? void 0 : prod.image) === undefined ? "Dummy.png" : prod.image)});" value="` + comp.companyID + `">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${comp.name}</option>`;
            }
            if ((trans === null || trans === void 0 ? void 0 : trans.getName()) === "Bautransport")
                s += `<option value="-1">Bautransport</option>`;
            else
                s += `<option value="-1">inaktiv</option>`;
            if (list2.innerHTML !== s) {
                list2.innerHTML = s;
            }
            var selectedtransport = parseInt(list.value === "" ? "-1" : list.value);
            if (selectedtransport === -1) {
                document.getElementById("companydialog-transport-productlist").setAttribute("hidden", "");
                document.getElementById("transport-up").setAttribute("hidden", "");
                document.getElementById("transport-down").setAttribute("hidden", "");
                document.getElementById("transport-add-worker").setAttribute("hidden", "");
                document.getElementById("transport-remove-worker").setAttribute("hidden", "");
                document.getElementById("transport-del").setAttribute("hidden", "");
            }
            else {
                document.getElementById("companydialog-transport-productlist").removeAttribute("hidden");
                document.getElementById("transport-up").removeAttribute("hidden");
                document.getElementById("transport-down").removeAttribute("hidden");
                document.getElementById("transport-add-worker").removeAttribute("hidden");
                document.getElementById("transport-remove-worker").removeAttribute("hidden");
                document.getElementById("transport-del").removeAttribute("hidden");
            }
            if (this.company.world.tickCount % 5 === 0) { //selection of companyTarget not work
                var tar = (_a = this.getSelectedTransport()) === null || _a === void 0 ? void 0 : _a.companyTarget;
                if (tar === undefined)
                    tar = -1;
                if (list2.value !== (tar === null || tar === void 0 ? void 0 : tar.toString())) {
                    list2.value = tar === null || tar === void 0 ? void 0 : tar.toString();
                }
            }
            //if(list2.value!==
        }
        updateProduction() {
            var _a, _b;
            if (((_a = this.company) === null || _a === void 0 ? void 0 : _a.productid) === -1 || ((_b = this.company) === null || _b === void 0 ? void 0 : _b.productid) === -2)
                return;
            var srcicon = company_3.Company.getImageUrl(parameter.allProducts[this.company.productid].image);
            if (document.getElementById("companydialog-production-table-icon").src !== srcicon)
                document.getElementById("companydialog-production-table-icon").src = srcicon;
            document.getElementById("workers").textContent = this.company.workers.toString() + (this.company.workersComming ? ("+" + this.company.workersComming) : "") + " 👤";
            var maxprod = 0;
            for (var x = 0; x < this.company.rawmaterials.length; x++) {
                if (this.company.rawmaterials[x] > maxprod)
                    maxprod = this.company.rawmaterials[x];
            }
            document.getElementById("workersIn").textContent = maxprod + "/" + (this.company.workersIn * parameter.capacityPerHelper + parameter.capacityPerHelper) +
                (this.company.workersInComming ? ("+" + this.company.workersInComming * parameter.capacityPerHelper) : "") + "▤ ";
            document.getElementById("workersOut").textContent =
                this.company.produced + "/" + (this.company.workersOut * parameter.capacityPerHelper + parameter.capacityPerHelper) +
                    (this.company.workersOutComming ? ("+" + this.company.workersOutComming * parameter.capacityPerHelper) : "") + "▤ ";
            var table = document.getElementById("companydialog-production-table");
            var prod = parameter.allProducts[this.company.productid];
            var temp = document.getElementById("companydialog-production-table");
            if (this.company.world.game.level < prod.level && !temp.hasAttribute("hidden"))
                temp.setAttribute("hidden", "");
            if (this.company.world.game.level >= prod.level && temp.hasAttribute("hidden"))
                temp.removeAttribute("hidden");
            var temp = document.getElementById("infonextlevel");
            if (this.company.world.game.level >= prod.level && !temp.hasAttribute("hidden"))
                temp.setAttribute("hidden", "");
            if (this.company.world.game.level < prod.level && temp.hasAttribute("hidden"))
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
            if (this.company.world.game.level < prod.level) {
                var info = "Die Produktion wird erst im n&auml;chsten Level freigeschaltet.<br/>";
                var prods = this.company.world.getProductsToBuildForLevel(this.company.world.game.level + 1);
                // if (prods.length > 0) {
                var sgeb = "";
                for (var x = 0; x < prods.length; x++) {
                    var prod = prods[x];
                    sgeb += '<img src="' + company_3.Company.getImageUrl(prod.image) + '"  height="25"></img>';
                }
                var minpeople = parameter.allLevels[this.company.world.game.level - 1].minPeople;
                info += ` Um in den n&auml;chsten Level zu kommen, muss folgendes erf&uuml;lt werden:<br/>
                        <ol>
                            <li>    Diese Geb&auml;de m&uuml;ssen noch gebaut werden:<br/><span>${sgeb}</span></LI>
                            <li>    ${minpeople}👤 (Daf&uuml;r m&uuml;ssen Helfer produziert werden.) </LI>
                        </ol>`;
                //  }
                if (document.getElementById("infonextlevel").innerHTML !== info) {
                    document.getElementById("infonextlevel").innerHTML = info;
                }
            }
            for (var x = 0; x < this.company.rawmaterials.length; x++) {
                var tr = table.children[0].children[x + 3];
                if (tr.hasAttribute("hidden"))
                    tr.removeAttribute("hidden");
                var pconsume = parameter.allProducts[prod.consume[x]];
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
                var tr = table.children[0].children[x + 3];
                if (!tr.hasAttribute("hidden"))
                    tr.setAttribute("hidden", "");
            }
            var prodinfo = document.getElementById("production-info");
            var sprodinfo = "";
            if (this.company.productid === product_4.Product.productHelper && this.company.world.game.people >= parameter.allLevels[this.company.world.game.level - 1].maxPeople)
                sprodinfo += "Level-Limit (" + parameter.allLevels[this.company.world.game.level - 1].maxPeople + ") f&uuml;r Helfer erreicht. Es k&ouml;nnen keine weitere Helfer produziert werden.";
            var sold = 0;
            var csold = this.company.world.findCompanyThatProduces(product_4.Product.productSoldier);
            csold.forEach(s => sold = sold + s.produced);
            if (this.company.productid === product_4.Product.productSoldier && sold >= parameter.allLevels[this.company.world.game.level - 1].maxSoldiers)
                sprodinfo += "Level-Limit (" + parameter.allLevels[this.company.world.game.level - 1].maxSoldiers + ") f&uuml;r Soldaten erreicht. Es k&ouml;nnen keine weitere Soldaten produziert werden.";
            if (prodinfo.innerHTML !== sprodinfo)
                prodinfo.innerHTML = sprodinfo;
        }
        update(force = false) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            if (!this.company)
                return;
            try {
                if (!$(this.dom).dialog('isOpen')) {
                    return;
                }
            }
            catch (_k) {
                return;
            }
            this.updateTitle();
            //production,transport,conquer,build
            var tabs = [false, false, false, false, true];
            var tabnames = ["companydialog-production-tab", "companydialog-transport-tab", "companydialog-conquer-tab", "companydialog-build-tab", "companydialog-delete-tab"];
            if (this.company.productid === -2) {
                var button = document.getElementById("add-soldier");
                if (this.company.soldiersComing && !button.disabled)
                    button.disabled = true;
                if (!this.company.soldiersComing && button.disabled)
                    button.disabled = false;
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
            }
            var active = -1;
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
        show() {
            var _this = this;
            this.dom.removeAttribute("hidden");
            this.update();
            $(this.dom).dialog({
                width: "400px",
                draggable: true,
                // position: { my: "left top", at: "right top", of: $(AirplaneDialog.getInstance().dom) },
                open: function (event, ui) {
                    _this.update(true);
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
            $(this.dom).parent().css({ position: "fixed" });
        }
        close() {
            $(this.dom).dialog("close");
        }
    }
    exports.CompanyDialog = CompanyDialog;
});
define("game/company", ["require", "exports", "game/companydialog", "game/transport", "game/product", "game/game"], function (require, exports, companydialog_2, transport_3, product_5, game_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Company = void 0;
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
            if (prod) {
                if (this.domIcon)
                    this.domIcon.src = Company.getImageUrl(prod.image);
                var con = [];
                for (var x = 0; x < prod.consume.length; x++) {
                    con.push(0);
                }
            }
            this.workers = 0;
            this.workersIn = 0;
            this.workersOut = 0;
            this.rawmaterials = con;
            this.updateName();
        }
        updateName() {
            var prod = parameter.allProducts[this.productid];
            if (prod) {
                var con = [];
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
            if (this.productid === product_5.Product.productHelper && this.world.game.people >= parameter.allLevels[this.world.game.level - 1].maxPeople)
                prodnow = 0;
            var allsodiers = 0;
            this.world.findCompanyThatProduces(product_5.Product.productSoldier).forEach(s => allsodiers += s.produced);
            if (this.productid === product_5.Product.productSoldier && allsodiers >= parameter.allLevels[this.world.game.level - 1].maxSoldiers)
                prodnow = 0;
            if (prodnow > 0) {
                this.inproduction = this.inproduction % 1000;
                this.produced = this.produced + prodnow;
                for (var x = 0; x < this.rawmaterials.length; x++) {
                    this.rawmaterials[x] = this.rawmaterials[x] - prodnow;
                }
                if (this.productid === product_5.Product.productHelper) {
                    this.world.game.people = this.world.game.people + prodnow;
                }
            }
            //}
            this.update();
        }
        update() {
            if (this.domProduced) {
                var s = this.produced === 0 ? "" : this.produced.toString();
                if (this.domProduced.textContent !== s)
                    this.domProduced.textContent = s;
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
            return "images/" + image;
            //return "http://localhost/game/client/game/images/" + image;
        }
        render() {
            var _this = this;
            var text = "";
            var fact = parameter.zoomfactor;
            // console.log(this.productid);
            var prod = this.productid === -1 ? undefined : parameter.allProducts[this.productid];
            var name = prod === undefined ? "" : prod.name;
            /*text = `<div>
                      <svg style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact) + "px"};width:${fact * 3};height:${fact * 2};position:absolute" class="company">
                       </svg>
                    </div>
                `;*/
            text = `<div>
              <svg style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact) + "px"};width:${fact * 3};height:${fact * 2};position:absolute" class="company">
                <polygon points="${1 * fact},0 ${2 * fact},0 ${3 * fact},${1 * fact} ${2 * fact},${2 * fact} ${1 * fact},${2 * fact} 0,${1 * fact}" style="fill:none;stroke:white;stroke-width:1;" />
                
               </svg>
            </div>
        `;
            var icon = "";
            if (this.productid === -1)
                this.domIcon = document.createRange().createContextualFragment(`<img src="${Company.getImageUrl("Baustelle.png")}" title="Baustelle" width="${parameter.zoomfactor}" height="${parameter.zoomfactor}" style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact + fact) + "px"};position:absolute">`).children[0];
            else if (prod !== undefined && prod.image !== "")
                this.domIcon = document.createRange().createContextualFragment(`<img src="${Company.getImageUrl(prod.image)}" title="${prod.name}" width="${parameter.zoomfactor}" height="${parameter.zoomfactor}" style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact + fact) + "px"};position:absolute">`).children[0];
            else
                this.domIcon = document.createRange().createContextualFragment(`<img src="${Company.getImageUrl("Dummy.png")}" title="" width="${parameter.zoomfactor}" height="${parameter.zoomfactor}" style="top:${((this.y - 1) * fact) + "px"};left:${((this.x - 3) * fact + fact) + "px"};position:absolute">`).children[0];
            this.dom = document.createRange().createContextualFragment(text).children[0];
            this.domProduced = document.createRange().createContextualFragment(`<span  style="font-size:7pt;top:${((this.y - 1) * fact + 40) + "px"};left:${((this.x - 3) * fact + 40) + "px"};position:absolute"></span>`).children[0];
            this.domInput = document.createRange().createContextualFragment(`<span  style="font-size:6pt;top:${((this.y - 1) * fact + 10) + "px"};left:${((this.x - 3) * fact + 20) + "px"};position:absolute"></span>`).children[0];
            this.dom.appendChild(this.domProduced);
            this.dom.appendChild(this.domInput);
            this.dom.appendChild(this.domIcon);
            this.world.dom.appendChild(this.dom);
            // this.dom.setAttribute("src", "<span  class='mdi  mdi-content-save-outline'></span>");
            //this.dom.style.cursor="url(https://www.w3schools.com/cssref/myBall.cur),auto";
            this.dom.setAttribute("companyid", this.companyID.toString());
            this.dom.addEventListener("click", (ev) => {
                _this.onclick(ev);
                return undefined;
            });
            this.dom["company"] = this;
            for (var x = 0; x < this.transports.length; x++) {
                this.transports[x].render();
                //            this.companies[x].update();
            }
            // this.dom.style.top = ((this.y+2)*fact).toString() + "px";
            // this.dom.style.left = ((this.x+3)*fact).toString() + "px";
            //console.log(this.dom.style.top + "   " + ((this.x + 3) * fact).toString() + "px");
        }
        addWorker(workertype) {
            var serror = "";
            var company = this.world.findCompanyThatProduces(product_5.Product.productHelper)[0];
            var max = company.produced - company.transports.length;
            if (max < 1) {
                game_2.Game.showInfo("nicht genug Helfer");
                return;
            }
            var trans = new transport_3.Transport(company);
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
        removeWorker(workertype) {
            var compHelper = this.world.findCompanyThatProduces(product_5.Product.productHelper)[0];
            var trans = new transport_3.Transport(compHelper);
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
            trans.transferInfo = { goHome: true, productid: product_5.Product.productHelper };
            trans.moveTo(compHelper.companyID);
            trans.render();
            compHelper.transports.push(trans);
        }
        soldierGoHome() {
            var compSoldier = this.world.findCompanyThatProduces(product_5.Product.productSoldier)[0];
            var trans = new transport_3.Transport(compSoldier);
            trans.workers = 1;
            trans.x = this.x;
            trans.y = this.y;
            trans.active = true;
            trans.transferInfo = { goHome: true, productid: product_5.Product.productSoldier };
            trans.moveTo(compSoldier.companyID);
            trans.render();
            compSoldier.transports.push(trans);
        }
        destroy() {
            for (var x = 0; x < this.workers; x++)
                this.removeWorker("workers");
            for (var x = 0; x < this.workersIn; x++)
                this.removeWorker("workersIn");
            for (var x = 0; x < this.workersOut; x++)
                this.removeWorker("workersOut");
            for (var x = 0; x < this.transports.length; x++) {
                while (this.transports[x].workers > 0) {
                    this.removeWorker(this.transports[x]);
                }
            }
            var _this = this;
            //Soldiers go home
            for (var x = 0; x < parameter.soldiersToConquer; x++) {
                setTimeout(() => _this.soldierGoHome(), x * 100);
            }
            this.productid = -2;
            this.domIcon.src = Company.getImageUrl("Dummy.png");
        }
        onclick(th) {
            th.preventDefault();
            var h = companydialog_2.CompanyDialog.getInstance();
            h.company = this;
            h.show();
        }
    }
    exports.Company = Company;
});
define("game/citydialogmarket", ["require", "exports", "game/citydialog"], function (require, exports, citydialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CityDialogMarket = void 0;
    var log = (function () {
        var log = Math.log;
        return function (n, base) {
            return log(n) / (base ? log(base) : 1);
        };
    })();
    class CityDialogMarket {
        static getInstance() {
            if (CityDialogMarket.instance === undefined)
                CityDialogMarket.instance = new CityDialogMarket();
            return CityDialogMarket.instance;
        }
        create() {
            return ` <table id="citydialog-market-table" style="height:100%;weight:100%;">
                        <tr>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                            <th style="width:50px">
                                Market
                            </th>
                            <th>Price</th>
                            <th></th>
                            <th> <select id="citydialog-market-table-target" style="width:80px">
                                    <option value="placeholder">placeholder</option>
                                </select>
                            </th>
                            
                        </tr>
                       ${(function fun() {
                var ret = "";
                function price(id, change) {
                    console.log(id + " " + change);
                }
                for (var x = 0; x < window.parameter.allProducts.length; x++) {
                    ret = ret + '<tr >';
                    ret = ret + "<td>" + window.parameter.allProducts[x].getIcon() + "</td>";
                    ret = ret + "<td>" + window.parameter.allProducts[x].name + "</td>";
                    ret = ret + '<td style="width:20px"><div style="position:relative">' +
                        '<div id="sell-slider_' + x + '" style="overflow:float;position:absolute;height:1px;top:5px;width: 66px" ><div>' +
                        '</div></td>';
                    ret = ret + "<td >0</td>";
                    ret = ret + '<td style="width:40px;"><span>0</span><span id="citydialog-market-info_' + x + '"></span></td>';
                    ret = ret + '<td style="width:20px"><div style="position:relative">' +
                        '<div id="buy-slider_' + x + '" style="overflow:float;position:absolute;left:4px;height:1px;top:5px;width: 92px" ><div>' +
                        '</div></td>';
                    ret = ret + "<td>0</td>";
                    ret = ret + "<td></td>";
                    ret = ret + "</tr>";
                }
                return ret;
            })()}
                    </table>`;
        }
        bindActions() {
            var _this = this;
            var city = citydialog_1.CityDialog.getInstance().city;
            document.getElementById("citydialog-market-table-target").addEventListener("change", (e) => {
                citydialog_1.CityDialog.getInstance().update(true);
            });
            $('.citydialog-tabs').click(function (event) {
                citydialog_1.CityDialog.getInstance().update(true);
            });
            for (var x = 0; x < parameter.allProducts.length; x++) {
                $("#sell-slider_" + x).slider({
                    min: 0,
                    max: 40,
                    range: "min",
                    value: 40,
                    slide: function (event, ui) {
                        CityDialogMarket.slide(event, false, "citydialog-market-info_");
                    },
                    change: function (e, ui) {
                        CityDialogMarket.changeSlider(e, true, "citydialog-market-info_");
                    },
                    stop: function (e, ui) {
                        setTimeout(() => {
                            CityDialogMarket.inedit = true;
                            var id = Number(e.target.id.split("_")[1]);
                            document.getElementById("citydialog-market-info_" + id).innerHTML = "";
                            $(e.target).slider("value", 40);
                            CityDialogMarket.inedit = false;
                        }, 200);
                    }
                });
                $("#buy-slider_" + x).slider({
                    min: 0,
                    max: 40,
                    range: "min",
                    value: 0,
                    slide: function (event, ui) {
                        CityDialogMarket.slide(event, true, "citydialog-market-info_");
                    },
                    change: function (e, ui) {
                        CityDialogMarket.changeSlider(e, false, "citydialog-market-info_");
                    },
                    stop: function (e, ui) {
                        setTimeout(() => {
                            CityDialogMarket.inedit = true;
                            var id = Number(e.target.id.split("_")[1]);
                            document.getElementById("citydialog-market-info_" + id).innerHTML = "";
                            $(e.target).slider("value", 0);
                            CityDialogMarket.inedit = false;
                        }, 200);
                    }
                });
            }
        }
        static changeSlider(event, buy, infofield, targetMarket = true) {
            var _a;
            if (CityDialogMarket.inedit)
                return;
            var t = event.target;
            var test = $(t).slider("value");
            var val;
            if (test === 0 || test === 40) //Cursor verspringt
                val = CityDialogMarket.getSliderValue(t); //
            else
                val = parseInt(t.getAttribute("curVal"));
            if (val === 0)
                return;
            CityDialogMarket.inedit = true;
            var id = Number(t.id.split("_")[1]);
            if (targetMarket)
                CityDialogMarket.sellOrBuy(id, (buy ? -1 : 1) * val, CityDialogMarket.calcPrice(t, val), CityDialogMarket.getStore("citydialog-market-table-target"), false);
            else {
                var city = citydialog_1.CityDialog.getInstance().city;
                city.shop[id] -= (buy ? -1 : 1) * val;
                var storetarget = CityDialogMarket.getStore("citydialog-shop-table-target");
                storetarget[id] += (buy ? -1 : 1) * val;
                (_a = this.getAirplaneInMarket("citydialog-shop-table-target")) === null || _a === void 0 ? void 0 : _a.refreshLoadedCount();
            }
            document.getElementById(infofield + id).innerHTML = "";
            $(t).slider("value", 40);
            CityDialogMarket.inedit = false;
            citydialog_1.CityDialog.getInstance().update(true);
            citydialog_1.CityDialog.getInstance().city.world.game.updateTitle();
        }
        static slide(event, buy, infofield, changePrice = true) {
            var _this = this;
            var t = event.target;
            var val = CityDialogMarket.getSliderValue(t);
            t.setAttribute("curVal", val.toString());
            console.log(val);
            var price = 0;
            var id = parseInt(t.id.split("_")[1]);
            if (val === 0)
                document.getElementById(infofield + id).innerHTML = "";
            else {
                if (changePrice) {
                    price = CityDialogMarket.calcPrice(t, val);
                    document.getElementById(infofield + id).innerHTML = "x" + val + "<br/>= " + (buy ? "-" : "") + val * price;
                }
                else
                    document.getElementById(infofield + id).innerHTML = "" + val;
            }
            if (changePrice)
                t.parentNode.parentNode.parentNode.children[4].children[0].innerHTML = "" + price;
        }
        static sellOrBuy(productid, amount, price, storetarget, isshop) {
            var _a, _b;
            var city = citydialog_1.CityDialog.getInstance().city;
            if (isshop) {
                city.shop[productid] -= amount;
            }
            else {
                city.world.game.changeMoney(-amount * price, "sell or buy from market", city);
                city.market[productid] -= amount;
            }
            storetarget[productid] += amount;
            (_a = this.getAirplaneInMarket("citydialog-market-table-target")) === null || _a === void 0 ? void 0 : _a.refreshLoadedCount();
            (_b = this.getAirplaneInMarket("citydialog-shop-table-target")) === null || _b === void 0 ? void 0 : _b.refreshLoadedCount();
            citydialog_1.CityDialog.getInstance().update(true);
        }
        static getAirplaneInMarket(target) {
            var city = citydialog_1.CityDialog.getInstance().city;
            var select = document.getElementById(target);
            var val = select.value;
            if (val) {
                for (var x = 0; x < city.world.airplanes.length; x++) {
                    if (val === city.world.airplanes[x].name)
                        return city.world.airplanes[x];
                }
            }
            return undefined;
        }
        static getStore(target) {
            var _a;
            var city = citydialog_1.CityDialog.getInstance().city;
            var select = document.getElementById(target);
            var val = select.value;
            if (val) {
                if (city.shops > 0 && val === "MyShop") {
                    return city.shop;
                }
                return (_a = this.getAirplaneInMarket(target)) === null || _a === void 0 ? void 0 : _a.products;
            }
            return undefined;
        }
        update() {
            var city = citydialog_1.CityDialog.getInstance().city;
            if (!city)
                return;
            var select = document.getElementById("citydialog-market-table-target");
            var last = select.value;
            select.innerHTML = "";
            if (city.shops > 0) {
                var opt = document.createElement("option");
                opt.value = "MyShop";
                opt.text = opt.value;
                select.appendChild(opt);
            }
            var allAPs = city.getAirplanesInCity();
            for (var x = 0; x < allAPs.length; x++) {
                var opt = document.createElement("option");
                opt.value = allAPs[x].name;
                opt.text = opt.value;
                select.appendChild(opt);
            }
            if (last !== "") {
                select.value = last;
            }
            citydialog_1.CityDialog.getInstance().updateTitle();
            /*
                                <th>icon</th>
                                <th>name</th>
                                <th>market</th>
                                <th>buy</th>
                                <th>airplane1</th>
                                <th>sell</th>
                                <th>price</th>
            */
            var storetarget = CityDialogMarket.getStore("citydialog-market-table-target");
            var storesource = city.market;
            for (var x = 0; x < parameter.allProducts.length; x++) {
                var table = document.getElementById("citydialog-market-table");
                var tr = table.children[0].children[x + 1];
                tr.children[3].innerHTML = storesource[x].toString();
                var buyslider = document.getElementById("buy-slider_" + x);
                var sellslider = document.getElementById("sell-slider_" + x);
                tr.children[4].children[0].innerHTML = CityDialogMarket.calcPrice(buyslider, 0).toString();
                if (storetarget) {
                    var max = storesource[x];
                    var testap = CityDialogMarket.getAirplaneInMarket("citydialog-market-table-target");
                    if (testap)
                        max = Math.min(max, testap.capacity - testap.loadedCount);
                    else {
                        var diff = city.shops * parameter.capacityShop - city.getCompleteAmount();
                        if (diff > 0)
                            max = Math.min(max, diff);
                        else
                            max = 0;
                    }
                    buyslider.readOnly = false;
                    // sellslider.readOnly = false;
                    buyslider.setAttribute("maxValue", max.toString());
                    tr.children[6].innerHTML = storetarget[x].toString();
                    if (storetarget[x] !== 0)
                        $(sellslider).slider("enable"); //storetarget[x].toString();
                    else
                        $(sellslider).slider("disable"); //storetarget[x].toString();
                    if (max !== 0)
                        $(buyslider).slider("enable"); //storetarget[x].toString();
                    else
                        $(buyslider).slider("disable"); //storetarget[x].toString();
                    sellslider.setAttribute("maxValue", storetarget[x].toString());
                }
                else {
                    buyslider.readOnly = true;
                    // sellslider.readOnly = true;
                    tr.children[6].innerHTML = "";
                    $(buyslider).slider("disable");
                    $(sellslider).slider("disable");
                }
            }
            citydialog_1.CityDialog.getInstance().updateTitle();
        }
        static getSliderValue(dom) {
            var maxValue = parseInt(dom.getAttribute("maxValue"));
            var val = $(dom).slider("value"); // parseInt(dom.value);
            if (dom.id.indexOf("sell") > -1)
                val = 40 - val;
            if (val === 0)
                return 0;
            if (val === 40)
                return maxValue;
            var exp = Math.round(log(maxValue, 40) * 1000) / 1000;
            var ret = Math.round(Math.pow(val, exp));
            return ret;
        }
        static calcPrice(el, val) {
            var city = citydialog_1.CityDialog.getInstance().city;
            var id = Number(el.id.split("_")[1]);
            var isProducedHere = false;
            for (var x = 0; x < city.companies.length; x++) {
                if (city.companies[x].productid === id)
                    isProducedHere = true;
            }
            var prod = isProducedHere ? parameter.allProducts[id].pricePurchase : parameter.allProducts[id].priceSelling;
            if (el.id.indexOf("sell") > -1)
                val = -val;
            var ret = parameter.allProducts[id].calcPrice(city.people, city.market[id] - val, isProducedHere);
            var color = "#32CD32";
            if (ret > ((0.0 + prod) * ((1 - parameter.ratePriceMin) * 2 / 4 + parameter.ratePriceMin)))
                color = "#DAF7A6 ";
            if (ret > ((0.0 + prod) * ((1 - parameter.ratePriceMin) * 3 / 4 + parameter.ratePriceMin)))
                color = "white";
            if (ret > ((0.0 + prod) * 1))
                color = "Yellow";
            if (ret > ((0.0 + prod) * ((parameter.ratePriceMax - 1) * 2 / 4 + 1)))
                color = "LightPink";
            try {
                el.parentElement.parentElement.parentElement.children[4].style.background = color;
            }
            catch (_a) {
            }
            return ret;
        }
    }
    exports.CityDialogMarket = CityDialogMarket;
});
define("game/citydialogshop", ["require", "exports", "game/citydialog", "game/citydialogmarket"], function (require, exports, citydialog_2, citydialogmarket_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CityDialogShop = void 0;
    var log = (function () {
        var log = Math.log;
        return function (n, base) {
            return log(n) / (base ? log(base) : 1);
        };
    })();
    class CityDialogShop {
        static getInstance() {
            if (CityDialogShop.instance === undefined)
                CityDialogShop.instance = new CityDialogShop();
            return CityDialogShop.instance;
        }
        create() {
            return `<table id="citydialog-shop-table" style="height:100%;weight:100%;">
                        <tr>
                            <th></th>
                            <th>Shop</th>
                            <th></th>
                            <th>#</th>
                            <th> <select id="citydialog-shop-table-target" style="width:60px">
                                    <option value="placeholder">placeholder</option>
                                </select>
                            </th>
                            <th></th>
                            <th>Min<br/>Stock</th>
                        </tr>
                       ${(function fun() {
                var ret = "";
                for (var x = 0; x < parameter.allProducts.length; x++) {
                    ret = ret + "<tr>";
                    ret = ret + "<td>" + parameter.allProducts[x].getIcon() + "</td>";
                    ret = ret + '<td style="text-align: right">0</td>'; //stack
                    ret = ret + '<td style="width:110px"><div style="position:relative">' +
                        '<div id="shop-sell-slider_' + x + '" style="overflow:float;position:absolute;height:1px;top:5px;width: 53px" ><div>' +
                        '</div></td>';
                    ret = ret + '<td style="width:30px;"><span id="citydialog-shop-info_' + x + '"></span></td>';
                    ret = ret + '<td style="width:40px"><div style="position:relative">' +
                        '<div id="shop-buy-slider_' + x + '" style="overflow:float;position:absolute;left:4px;height:1px;top:5px;width: 62px" ><div>' +
                        '</div></td>';
                    ret = ret + '<td style="width:40px">0</td>'; //Airplane stack
                    ret = ret + '<td>' +
                        '<input type="number" min="0" class="shop-min-stock" id="shop-min-stock_' + x + '"' +
                        'style="width: 50px;"' +
                        '"></td>';
                    ret = ret + "</tr>";
                }
                return ret;
            })()}
                    </table>
                    <span id="citydialog-shop-info"><span>`;
        }
        bindActions() {
            var _this = this;
            document.getElementById("citydialog-shop-table-target").addEventListener("change", (e) => {
                citydialog_2.CityDialog.getInstance().update(true);
            });
            for (var x = 0; x < parameter.allProducts.length; x++) {
                document.getElementById("shop-min-stock_" + x).addEventListener("change", (e) => {
                    var city = citydialog_2.CityDialog.getInstance().city;
                    var ctrl = e.target;
                    var id = parseInt(ctrl.id.split("_")[1]);
                    city.shopMinStock[id] = ctrl.value === "" ? undefined : parseInt(ctrl.value);
                });
            }
            for (var x = 0; x < parameter.allProducts.length; x++) {
                $("#shop-sell-slider_" + x).slider({
                    min: 0,
                    max: 40,
                    range: "min",
                    value: 40,
                    slide: function (event, ui) {
                        console.log("slide");
                        citydialogmarket_1.CityDialogMarket.slide(event, false, "citydialog-shop-info_", false);
                    },
                    change: function (e, ui) {
                        citydialogmarket_1.CityDialogMarket.changeSlider(e, true, "citydialog-shop-info_", false);
                    },
                    stop: function (e, ui) {
                        setTimeout(() => {
                            citydialogmarket_1.CityDialogMarket.inedit = true;
                            var id = Number(e.target.id.split("_")[1]);
                            document.getElementById("citydialog-shop-info_" + id).innerHTML = "";
                            $(e.target).slider("value", 40);
                            citydialogmarket_1.CityDialogMarket.inedit = false;
                        }, 200);
                    }
                });
                $("#shop-buy-slider_" + x).slider({
                    min: 0,
                    max: 40,
                    range: "min",
                    value: 0,
                    slide: function (event, ui) {
                        citydialogmarket_1.CityDialogMarket.slide(event, true, "citydialog-shop-info_", false);
                    },
                    change: function (e, ui) {
                        citydialogmarket_1.CityDialogMarket.changeSlider(e, false, "citydialog-shop-info_", false);
                    },
                    stop: function (e, ui) {
                        setTimeout(() => {
                            citydialogmarket_1.CityDialogMarket.inedit = true;
                            var id = Number(e.target.id.split("_")[1]);
                            document.getElementById("citydialog-shop-info_" + id).innerHTML = "";
                            $(e.target).slider("value", 0);
                            citydialogmarket_1.CityDialogMarket.inedit = false;
                        }, 200);
                    }
                });
            }
        }
        update() {
            var city = citydialog_2.CityDialog.getInstance().city;
            if (!city)
                return;
            var select = document.getElementById("citydialog-shop-table-target");
            var last = select.value;
            if (document.activeElement !== document.getElementById("citydialog-shop-table-target")) {
                select.innerHTML = "";
                var allAPs = city.getAirplanesInCity();
                for (var x = 0; x < allAPs.length; x++) {
                    var opt = document.createElement("option");
                    opt.value = allAPs[x].name;
                    opt.text = opt.value;
                    select.appendChild(opt);
                }
                if (last !== "") {
                    select.value = last;
                }
            }
            citydialog_2.CityDialog.getInstance().updateTitle();
            var storetarget = citydialogmarket_1.CityDialogMarket.getStore("citydialog-shop-table-target");
            var storesource = city.shop;
            var gesamount = 0;
            for (var x = 0; x < parameter.allProducts.length; x++) {
                var table = document.getElementById("citydialog-shop-table");
                var tr = table.children[0].children[x + 1];
                gesamount += storesource[x];
                tr.children[1].innerHTML = city.shop[x].toLocaleString();
                var buyslider = document.getElementById("shop-buy-slider_" + x);
                var sellslider = document.getElementById("shop-sell-slider_" + x);
                if (document.activeElement !== buyslider && document.activeElement !== sellslider) {
                    if (storetarget) {
                        var max = storesource[x];
                        var testap = citydialogmarket_1.CityDialogMarket.getAirplaneInMarket("citydialog-shop-table-target");
                        if (testap)
                            max = Math.min(max, testap.capacity - testap.loadedCount);
                        buyslider.readOnly = false;
                        // sellslider.readOnly = false;
                        buyslider.setAttribute("maxValue", max.toString());
                        tr.children[5].innerHTML = storetarget[x].toString();
                        if (storetarget[x] !== 0)
                            $(sellslider).slider("enable"); //storetarget[x].toString();
                        else
                            $(sellslider).slider("disable"); //storetarget[x].toString();
                        if (max !== 0)
                            $(buyslider).slider("enable"); //storetarget[x].toString();
                        else
                            $(buyslider).slider("disable"); //storetarget[x].toString();
                        var max2 = storetarget[x];
                        var diff = city.shops * parameter.capacityShop - city.getCompleteAmount();
                        if (diff > 0)
                            max2 = Math.min(max2, diff);
                        else
                            max2 = 0;
                        sellslider.setAttribute("maxValue", max2.toString());
                    }
                    else {
                        buyslider.readOnly = true;
                        // sellslider.readOnly = true;
                        tr.children[5].innerHTML = "";
                        $(buyslider).slider("disable");
                        $(sellslider).slider("disable");
                    }
                }
                if (document.activeElement !== tr.children[6].children[0])
                    tr.children[6].children[0].value = city.shopMinStock[x] === undefined ? "" : city.shopMinStock[x].toString();
            }
            document.getElementById("citydialog-shop-info").innerHTML = "Shops:" + city.shops + " Capacity " + gesamount.toLocaleString() + "/" + (city.shops * parameter.capacityShop).toLocaleString();
        }
    }
    exports.CityDialogShop = CityDialogShop;
});
define("game/citydialog", ["require", "exports", "game/city", "game/icons", "game/citydialogshop", "game/routedialog", "game/tools"], function (require, exports, city_1, icons_7, citydialogshop_1, routedialog_2, tools_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CityDialog = void 0;
    //@ts-ignore
    window.city = function () {
        return CityDialog.getInstance().city;
    };
    class CityDialog {
        constructor() {
            this.maxCompanies = 14;
            this.hasPaused = false;
            this.create();
        }
        static getInstance() {
            if (CityDialog.instance === undefined)
                CityDialog.instance = new CityDialog();
            return CityDialog.instance;
        }
        create() {
            //template for code reloading
            var sdom = `
          <div hidden id="citydialog" class="citydialog">
            <div></div>
           </div>
        `;
            this.dom = document.createRange().createContextualFragment(sdom).children[0];
            var old = document.getElementById("citydialog");
            if (old) {
                old.parentNode.removeChild(old);
            }
            var products = parameter.allProducts;
            var _this = this;
            var city = _this.city;
            var sdom = `
          <div>
          <div>
            <button id="buy-companies-next" title="update all routes" class="mybutton">` + "+" + icons_7.Icons.factory + icons_7.Icons.route + ">" + `</button>
            <button id="citydialog-capital" title="goto Capital" class="mybutton">` + icons_7.Icons.capital + `</button>
            <input style="width:30px" id="citydialog-prev" type="button" value="<"  class="mybutton"/>
            <input style="width:30px" id="citydialog-next" type="button" value=">"  class="mybutton"/>
            
            <select id="citydialog-filter" style="width:80px">
                ` + this.productFilter() + `
            </select>
            <input type="checkbox" id="hide-busy" name="vehicle1">hide busy</input>
            <input type="checkbox" id="citydialog-shopinfo" title="show shop info beside the city" >info</input>
            <button id="update-all-routes" title="update all routes" class="mybutton">` + icons_7.Icons.route + `</button>
            
          </div>
            <div id="citydialog-tabs">
                <ul>
                    <li><a href="#citydialog-buildings" id="citydialog-buildings-tab" class="citydialog-tabs">Buildings</a></li>
                    <li><a href="#citydialog-shop" id="citydialog-shop-tab"  class="citydialog-tabs">` + icons_7.Icons.shop + ` MyShop</a></li>
                    <li><a href="#citydialog-construction" id="citydialog-construction-tab" class="citydialog-tabs">Construction</a></li>
                    <li><a href="#citydialog-score" id="citydialog-score-tab"  class="citydialog-tabs">Score</a></li>
                </ul>
                <div id="citydialog-buildings"> ` + this.createBuildings() + `
                </div>
                <div id="citydialog-shop">` + citydialogshop_1.CityDialogShop.getInstance().create() + `
                </div>
                <div id="citydialog-construction">` + this.createConstruction() + `
                </div>
                <div id="citydialog-score">` + this.createScore() + `
                </div>
          </div>
        `;
            var newdom = document.createRange().createContextualFragment(sdom).children[0];
            this.dom.removeChild(this.dom.children[0]);
            this.dom.appendChild(newdom);
            $("#citydialog-tabs").tabs({
            //collapsible: true
            });
            setTimeout(() => {
                $("#citydialog-tabs").tabs({
                //collapsible: true
                });
            }, 100);
            document.body.appendChild(this.dom);
            //        document.getElementById("citydialog-prev")
            setTimeout(() => { _this.bindActions(); }, 500);
            //document.createElement("span");
        }
        productFilter() {
            var ret = '<option value="all">All</option>';
            for (var x = 0; x < parameter.allProducts.length; x++) {
                //  ret+='<option value="'+x+'"><span>'+parameter.allProducts[x].getIcon()+" "+parameter.allProducts[x].name+'</span></option>';
                ret += '<option value="' + x + '">' + parameter.allProducts[x].name + '</option>';
            }
            return ret;
        }
        createBuildings() {
            var _this = this;
            return `<table id="citydialog-buildings-table" style="height:100%;weight:100%;">
                        <tr>
                            <th>Produce</th>
                            <th> </th>
                            <th>Buildings</th>
                            <th>Jobs</th>
                            <th>Needs</th>
                            <th></th>
                            <th>Actions</th>
                        </tr>
                       ${(function fun() {
                var ret = "";
                for (var x = 0; x < _this.maxCompanies; x++) {
                    ret = ret + "<tr>";
                    ret = ret + "<td></td>";
                    ret = ret + "<td></td>";
                    ret = ret + "<td></td>";
                    ret = ret + "<td></td>";
                    ret = ret + "<td style='white-space: nowrap;'></td>";
                    ret = ret + "<td></td>";
                    ret = ret + '<td>' +
                        //'<button id="new-factory_' + x + '" class="mybutton">' + "+" + Icons.factory + '</button>' +
                        '<button id="new-factoryX_' + x + '" class="mybutton">' + "x " + icons_7.Icons.factory + '</button>' +
                        '<button id="delete-factory_' + x + '" class="mybutton">' + "- " + icons_7.Icons.factory + '</button>' +
                        '<button id="buy-license_' + x + '" class="mybutton">' + "buy license to produce for " + (0, tools_3.getLocalNumber)(50000) + icons_7.Icons.money + '</button>' +
                        '<div id="no-shop_' + x + '">need a shop to produce</div>' +
                        '</td>';
                    ret = ret + "</tr>";
                }
                return ret;
            })()}
                    </table>
                       ` + icons_7.Icons.home + ` Shops: <span id="count-shops">0/0</span> ` + `  
                        <button id="buy-shop"  class="mybutton">+` + icons_7.Icons.shop + ` ` + (0, tools_3.getLocalNumber)(15000) + icons_7.Icons.money + `</button> 
                        <button id="delete-shop"  class="mybutton">-` + icons_7.Icons.shop + `</button>` + "&nbsp;&nbsp;&nbsp;&nbsp;" +
                `<span id="city-buildingplaces">` + icons_7.Icons.wrench + `Speed: <span id="count-buildingplaces">0</span>  
                        ` + icons_7.Icons.money + `  
                        <button id="buy-buildingplace"  class="mybutton">+` + ` ` + (0, tools_3.getLocalNumber)(20000000) + icons_7.Icons.money + `</button> 
                        <button id="delete-buildingplace"  class="mybutton">-` + `</button>` +
                '</span>';
        }
        createScore() {
            return `<table id="citydialog-score-table" style="height:100%;weight:100%;">
                        <tr>
                            <th>Name</th>
                            <th> </th>
                            <th>Produce</th>
                            <th>Need</th>
                            <th>Score</th>
                        </tr>
                       ${(function fun() {
                var ret = "";
                for (var x = 0; x < parameter.allProducts.length; x++) {
                    ret = ret + "<tr>";
                    ret = ret + "<td>" + parameter.allProducts[x].getIcon() + "</td>";
                    ret = ret + "<td>" + parameter.allProducts[x].name + "</td>";
                    ret = ret + "<td>0</td>";
                    ret = ret + "<td>0</td>";
                    ret = ret + "<td>0</td>";
                    ret = ret + "</tr>";
                }
                return ret;
            })()}
                    </table>`;
        }
        createConstruction() {
            return `<table id="citydialog-construction-table" style="height:100%;weight:100%;">
                        <tr>
                            <th>Model</th>
                            <th>Speed</th>
                            <th>Capacity</th>
                            <th>Daily Costs</th>
                            <th>Build days</th>
                            <th>Action</th>
                        </tr>
                        ${(function fun() {
                var ret = "";
                for (var x = 0; x < 1; x++) {
                    ret = ret + "<tr>";
                    ret = ret + "<td>" + parameter.allAirplaneTypes[x].model + "</td>";
                    ret = ret + "<td>" + parameter.allAirplaneTypes[x].speed + "</td>";
                    ret = ret + "<td>" + parameter.allAirplaneTypes[x].capacity + "</td>";
                    ret = ret + "<td>" + parameter.allAirplaneTypes[x].costs + "</td>";
                    ret = ret + "<td>" + parameter.allAirplaneTypes[x].buildDays + "</td>";
                    ret = ret + "<td>" + '<button id="new-airplane_' + x + '" class="mybutton">' + "+" + icons_7.Icons.airplane + " " +
                        city_1.City.getBuildingCostsAsIcon(Math.round(parameter.allAirplaneTypes[x].buildingCosts * parameter.rateCostsAirplaine), parameter.allAirplaneTypes[x].buildingMaterial) + "</button></td>";
                    ret = ret + "</tr>";
                }
                return ret;
            })()}  
                </table>

                <table id="citydialog-constructionqueue-table" style="height:100%;weight:100%;">
                        
                </table> 
            
            `;
        }
        nextCity() {
            var _this = this;
            if (_this.filteredCities === undefined)
                _this.filteredCities = _this.city.world.cities;
            var pos = _this.filteredCities.indexOf(_this.city);
            pos++;
            if (pos >= _this.filteredCities.length)
                pos = 0;
            _this.city = _this.filteredCities[pos];
            if (_this.city === undefined)
                _this.city = _this.filteredCities[0];
            if (!_this.city.hasAirport)
                this.nextCity();
            _this.update(true);
        }
        prevCity() {
            var _this = this;
            if (this.filteredCities === undefined)
                this.filteredCities = _this.city.world.cities;
            var pos = _this.filteredCities.indexOf(_this.city);
            pos--;
            if (pos === -1)
                pos = _this.filteredCities.length - 1;
            _this.city = _this.filteredCities[pos];
            if (_this.city === undefined)
                _this.city = _this.filteredCities[0];
            if (!_this.city.hasAirport)
                this.prevCity();
            _this.update(true);
        }
        buildCompanies(evt) {
            var _this = this;
            var sid = evt.target.id;
            if (sid === "")
                sid = evt.target.parentNode.id;
            var id = Number(sid.split("_")[1]);
            var comp = _this.city.companies[id];
            var count = 0;
            for (var i = 0; i < parameter.numberBuildWithContextMenu; i++) {
                if (!_this.city.commitBuildingCosts(comp.getBuildingCosts(i), comp.getBuildingMaterial(), "buy building", false))
                    return;
                count++;
            }
            _this.city.buildBuilding(id, comp.productid, count);
            //comp.buildings++;
            _this.update();
            _this.city.world.game.updateTitle();
        }
        bindActions() {
            var _this = this;
            document.getElementById("citydialog-capital").addEventListener("click", (ev) => {
                var max = 0;
                for (var x = 0; x < _this.city.world.cities.length; x++) {
                    if (_this.city.world.cities[x].shops > _this.city.world.cities[max].shops) {
                        max = x;
                    }
                }
                _this.city = _this.city.world.cities[max];
                _this.update(true);
            });
            document.getElementById("citydialog-next").addEventListener("click", (ev) => {
                _this.nextCity();
            });
            document.getElementById("citydialog-prev").addEventListener("click", (ev) => {
                _this.prevCity();
            });
            document.getElementById("citydialog-filter").addEventListener("change", (ev) => {
                var sel = document.getElementById("citydialog-filter").value;
                var hide_busy = document.getElementById("hide-busy").checked;
                if (sel === "all")
                    this.filteredCities = _this.city.world.cities;
                else {
                    this.filteredCities = [];
                    for (var x = 0; x < _this.city.world.cities.length; x++) {
                        var city = _this.city.world.cities[x];
                        for (var y = 0; y < city.companies.length; y++) {
                            if (city.companies[y].productid === Number(sel)) {
                                if (hide_busy && city.queueBuildings.length > 0) {
                                    //
                                }
                                else
                                    this.filteredCities.push(city);
                            }
                        }
                    }
                    if (this.filteredCities.length === 0) {
                        this.filteredCities = [_this.city];
                    }
                    this.filteredCities.sort((a, b) => {
                        var a1, b1;
                        for (var y = 0; y < a.companies.length; y++) {
                            if (a.companies[y].productid === Number(sel)) {
                                a1 = a.companies[y].buildings - (a.companies[y].buildingsWithoutCosts ? a.companies[y].buildingsWithoutCosts : 0);
                            }
                        }
                        for (var y = 0; y < b.companies.length; y++) {
                            if (b.companies[y].productid === Number(sel)) {
                                b1 = b.companies[y].buildings - (b.companies[y].buildingsWithoutCosts ? b.companies[y].buildingsWithoutCosts : 0);
                            }
                        }
                        return (a1 - b1) * 1000000000 + (a.people - b.people) / 1000;
                    });
                    this.city = this.filteredCities[this.filteredCities.length - 1];
                }
                _this.nextCity();
            });
            document.getElementById("update-all-routes").addEventListener("click", (e) => {
                _this.loadFillAllConsumtion();
                //  _this.update();
            });
            document.getElementById("buy-companies-next").addEventListener("click", (e) => {
                var sel = document.getElementById("citydialog-filter").value;
                if (sel == "all")
                    return;
                var num = parseInt(sel);
                for (var x = 0; x < _this.city.companies.length; x++) {
                    if (this.city.companies[x].productid === num) {
                        var bt = document.getElementById('new-factoryX_' + x);
                        bt.click();
                    }
                }
                _this.loadFillAllConsumtion();
                _this.nextCity();
                //  _this.update();
            });
            document.getElementById("citydialog-shopinfo").addEventListener("click", (e) => {
                var en = document.getElementById("citydialog-shopinfo").checked;
                _this.city.cityShowShopInfo = en;
                _this.city.renderShopinfo(en);
                //  _this.update();
            });
            for (var x = 0; x < this.maxCompanies; x++) {
                /* document.getElementById("new-factory_" + x).addEventListener("click", (evt) => {
                     var sid = (<any>evt.target).id;
                     if (sid === "")
                         sid = (<any>evt.target).parentNode.id
                     var id = Number(sid.split("_")[1]);
                     var comp = _this.city.companies[id];
                     if (!_this.city.commitBuildingCosts(comp.getBuildingCosts(), comp.getBuildingMaterial(), "buy building"))
                         return;
                     _this.city.buildBuilding(comp.productid);
     
                     //comp.buildings++;
                     _this.update();
                 });*/
                document.getElementById("new-factoryX_" + x).addEventListener("click", (evt) => {
                    _this.buildCompanies(evt);
                });
                /* document.getElementById("new-factory_" + x).addEventListener("contextmenu", (evt) => {
                     evt.preventDefault();
                     _this.buildCompanies(evt);
     
                 });*/
                /* document.getElementById("delete-factory_" + x).addEventListener("click", (evt) => {
                     var sid = (<any>evt.target).id;
                     if (sid === "")
                         sid = (<any>evt.target).parentNode.id
                     var id = Number(sid.split("_")[1]);
                     _this.deleteFactory(id);
                     _this.update();
                 });*/
                document.getElementById("delete-factory_" + x).addEventListener("click", (evt) => {
                    evt.preventDefault();
                    var sid = evt.target.id;
                    if (sid === "")
                        sid = evt.target.parentNode.id;
                    var id = Number(sid.split("_")[1]);
                    _this.deleteFactory(id, parameter.numberBuildWithContextMenu);
                    /* var unempl = this.city.companies[id].workers - (this.city.companies[id].buildings * parameter.workerInCompany);
                     if (unempl > 0) {
                         this.city.companies[id].workers -= unempl;
                         this.city.transferWorker(unempl);
                     }*/
                    _this.update();
                });
                document.getElementById("buy-license_" + x).addEventListener("click", (evt) => {
                    var sid = evt.target.id;
                    if (sid === "")
                        sid = evt.target.parentNode.id;
                    var id = Number(sid.split("_")[1]);
                    var comp = _this.city.companies[id];
                    if (!_this.city.commitBuildingCosts(50000, [], "buy licence"))
                        return;
                    comp.hasLicense = true;
                    _this.update();
                });
            }
            /* document.getElementById("buy-shop").addEventListener("click", (evt) => {
                 if (!_this.city.commitBuildingCosts(15000, [], "buy building"))
                     return;
                 _this.city.buildBuilding(10000,true);
                 _this.update();
             });*/
            document.getElementById("buy-shop").addEventListener("click", (evt) => {
                evt.preventDefault();
                if (!_this.city.commitBuildingCosts(15000 * parameter.numberBuildShopsWithContextMenu, [], "buy building"))
                    return;
                // for (var x = 0; x < parameter.numberBuildShopsWithContextMenu; x++) {
                _this.city.buildBuilding(10000, 10000, parameter.numberBuildShopsWithContextMenu, true);
                // }
                _this.update();
            });
            document.getElementById("delete-shop").addEventListener("click", (evt) => {
                if (_this.city.shops === 0)
                    return;
                if (_this.city.tryRemoveBuildingInProgress(10000, 1)) {
                    _this.update();
                    return;
                }
                _this.city.shops--;
                _this.update();
            });
            /*   document.getElementById("buy-buildingplace").addEventListener("click", (evt) => {
                   if (!_this.city.commitBuildingCosts(20000000, [], "buy buildingplace"))
                       return;
                   if (_this.city.buildingplaces === 0)
                       _this.city.buildingplaces = 0;
                   //_this.city.buildingplaces++;
                   _this.city.buildBuilding(10001,true);
                   _this.update();
               });*/
            document.getElementById("buy-buildingplace").addEventListener("click", (evt) => {
                evt.preventDefault();
                if (!_this.city.commitBuildingCosts(20000000 * parameter.numberBuildSpeedWithContextMenu, [], "buy buildingplace"))
                    return;
                //_this.city.buildingplaces= parameter.numberBuildSpeedWithContextMenu+_this.city.buildingplaces;
                _this.city.buildBuilding(10001, 10001, parameter.numberBuildSpeedWithContextMenu, true);
                //_this.city.buildBuilding(10000);
                _this.update();
            });
            document.getElementById("delete-buildingplace").addEventListener("click", (evt) => {
                //if (_this.city.tryRemoveBuildingInProgress(10000)) {
                //    _this.update();
                //    return;
                //}
                _this.city.buildingplaces = _this.city.buildingplaces - parameter.numberBuildSpeedWithContextMenu;
                if (_this.city.buildingplaces < 0)
                    _this.city.buildingplaces = 1;
                _this.update();
            });
            for (var x = 0; x < 1; x++) {
                document.getElementById("new-airplane_" + x).addEventListener("click", (evt) => {
                    var sid = evt.target.id;
                    if (sid === "")
                        sid = evt.target.parentNode.id;
                    var id = parseInt(sid.split("_")[1]);
                    if (!_this.city.commitBuildingCosts(Math.round(parameter.allAirplaneTypes[id].buildingCosts *
                        parameter.rateBuyAirplane), parameter.allAirplaneTypes[id].buildingMaterial, "buy airplane"))
                        return;
                    _this.city.buildAirplane(id);
                    _this.update(true);
                    //_this.newAirplane(id);
                });
            }
            citydialogshop_1.CityDialogShop.getInstance().bindActions();
        }
        loadFillAllConsumtion(nowarning = false) {
            var routes = [];
            var posCity = this.city.world.cities.indexOf(this.city);
            for (var a = 0; a < this.city.world.airplanes.length; a++) {
                var ap = this.city.world.airplanes[a];
                var found = false;
                for (var x = 0; x < ap.route.length; x++) {
                    if (ap.route[x].cityid === posCity) { //this.city.id) {
                        found = true;
                    }
                }
                for (var x = 0; x < ap.route.length; x++) {
                    if (found) {
                        routes.push(ap.route[x]);
                    }
                    /*if (ap.route[x].loadShopAmount[0] !== undefined) {
                        RouteDialog.loadFillConsumtion(ap.route[x], true);
                    }
                    if (this.route.airplane.route[x].loadShopUntilAmount[0] !== undefined) {
                        RouteDialog.loadFillConsumtion(ap.route[x], false);
                    }*/
                }
            }
            var money = 20000 * routes.length / 2;
            if ((this.city.world.game.getMoney() / money) < 1000 && (routes.length > 2 || this.city.world.game.getMoney() < 1000000)) {
                if (nowarning)
                    return;
                if (!confirm("Update conumtion in all routes for " + money + "?")) {
                    return;
                }
            }
            this.city.world.game.changeMoney(-money, "update routes", this.city);
            for (var x = 0; x < routes.length; x++) {
                if (routes[x].loadShopAmount[0] !== undefined) {
                    routedialog_2.RouteDialog.loadFillConsumtion(routes[x], true);
                }
                if (routes[x].loadShopUntilAmount[0] !== undefined) {
                    routedialog_2.RouteDialog.loadFillConsumtion(routes[x], false);
                }
            }
        }
        deleteFactory(id, count) {
            var _this = this;
            var comp = _this.city.companies[id];
            if (_this.city.tryRemoveBuildingInProgress(comp.productid, count)) {
                _this.update();
                return;
            }
            for (var x = 0; x < count; x++) {
                if (comp.buildings > 0) {
                    comp.buildings--;
                    _this.city.companies[id].workers -= parameter.workerInCompany;
                }
            }
        }
        updateBuildings() {
            /*
                                   <th>produce</th>
                                       <th> </th>
                                       <th>buildings</th>
                                       <th>jobs</th>
                                       <th>needs</th>
                                       <th></th>
                                       <th>costs new building</th>
                                       <th>actions</th>
                   */
            var companies = this.city.companies;
            var all = parameter.allProducts;
            var selectedProduct = document.getElementById("citydialog-filter").value;
            for (var x = 0; x < companies.length; x++) {
                var comp = companies[x];
                var table = document.getElementById("citydialog-buildings-table");
                var tr = table.children[0].children[x + 1];
                var product = all[comp.productid];
                var produce = comp.getDailyProduce();
                tr.children[0].innerHTML = produce + " " + product.getIcon();
                tr.children[1].innerHTML = product.name;
                var s = (0, tools_3.getLocalNumber)(comp.buildings); //.toString();
                var inprogr = this.city.getBuildingInProgress(comp.productid);
                if (inprogr) {
                    s = s + "<br/>" + inprogr + icons_7.Icons.hammer + "";
                }
                tr.children[2].innerHTML = s;
                //tr.children[3].innerHTML = "" + getLocalNumber(comp.workers);// + "/<br/>" + getLocalNumber(comp.getMaxWorkers());
                tr.children[3].innerHTML = (0, tools_3.getLocalNumber)(comp.workers);
                /*            if (comp.workers > 10000)
                                tr.children[3].innerHTML = (Math.floor(comp.workers / 1000)).toLocaleString() + "K" + "/<br/>" + Math.floor(comp.getMaxWorkers() / 1000).toLocaleString() + "K";
                            if (comp.workers > 10000000)
                                tr.children[3].innerHTML = (Math.floor(comp.workers / 1000000)).toLocaleString() + "M" + "/<br/>" + Math.floor(comp.getMaxWorkers() / 1000000).toLocaleString() + "M";
                */
                var needs1 = "";
                var needs2 = "";
                if (product.input1 !== undefined)
                    needs1 = "" + /*Math.round(comp.getDailyInput1()) + */ all[product.input1].getIcon() + " ";
                tr.children[4].innerHTML = needs1;
                if (product.input2 !== undefined)
                    needs2 = /*"<br/>" + Math.round(comp.getDailyInput2()) +*/ all[product.input2].getIcon();
                tr.children[4].innerHTML = needs1 + " " + needs2;
                if (comp.hasLicense) {
                    document.getElementById("buy-license_" + x).setAttribute("hidden", "");
                }
                else {
                    document.getElementById("buy-license_" + x).removeAttribute("hidden");
                }
                if (this.city.shops === 0) {
                    document.getElementById("no-shop_" + x).removeAttribute("hidden");
                }
                else {
                    document.getElementById("no-shop_" + x).setAttribute("hidden", "");
                }
                var discomp = false;
                if (comp.hasLicense && this.city.shops > 0) {
                    document.getElementById("new-factoryX_" + x).innerHTML = "+" + icons_7.Icons.factory +
                        city_1.City.getBuildingCostsAsIcon(comp.getBuildingCosts(), comp.getBuildingMaterial());
                    //  document.getElementById("new-factory_" + x).removeAttribute("hidden");
                    document.getElementById("new-factoryX_" + x).removeAttribute("hidden");
                    document.getElementById("delete-factory_" + x).removeAttribute("hidden");
                    if (comp.productid.toString() === selectedProduct)
                        document.getElementById("buy-companies-next").removeAttribute("disabled");
                }
                else {
                    //  document.getElementById("new-factory_" + x).setAttribute("hidden", "");
                    document.getElementById("new-factoryX_" + x).setAttribute("hidden", "");
                    document.getElementById("delete-factory_" + x).setAttribute("hidden", "");
                    if (comp.productid.toString() === selectedProduct) {
                        discomp = true;
                        document.getElementById("buy-companies-next").setAttribute("disabled", "");
                    }
                }
                var mat = comp.getBuildingMaterial();
                if (this.city.canBuild(comp.getBuildingCosts(), comp.getBuildingMaterial()) != "") {
                    if (comp.productid.toString() === selectedProduct)
                        document.getElementById("buy-companies-next").setAttribute("disabled", "");
                    document.getElementById("new-factoryX_" + x).setAttribute("disabled", "");
                    document.getElementById("new-factoryX_" + x).setAttribute("title", "not all building costs are available");
                }
                else {
                    if (comp.productid.toString() === selectedProduct && discomp === false)
                        document.getElementById("buy-companies-next").removeAttribute("disabled");
                    document.getElementById("new-factoryX_" + x).removeAttribute("disabled");
                    document.getElementById("new-factoryX_" + x).removeAttribute("title");
                }
                if (this.city.canBuild(50000, []) === "") {
                    document.getElementById("buy-license_" + x).removeAttribute("disabled");
                }
                else {
                    document.getElementById("buy-license_" + x).setAttribute("disabled", "");
                }
            }
            for (var x = 6; x <= this.maxCompanies; x++) {
                var trr = table.children[0].children[x];
                if (x > this.city.companies.length && trr.style.display !== "none") {
                    trr.style.display = "none";
                }
                if (x <= this.city.companies.length && trr.style.display === "none") {
                    trr.style.display = "";
                }
            }
            var sh = (0, tools_3.getLocalNumber)(this.city.shops);
            var inprogr = this.city.getBuildingInProgress(10000);
            if (inprogr) {
                sh = sh + "(" + inprogr + icons_7.Icons.hammer + ")";
            }
            document.getElementById("count-shops").innerHTML = "" + sh;
            // document.getElementById("costs-shops").innerHTML = "" + this.city.getDailyCostsShops();
            sh = "" + this.city.buildingplaces.toLocaleString();
            var inprogr = this.city.getBuildingInProgress(10001);
            if (inprogr) {
                sh = sh + "(" + inprogr + icons_7.Icons.hammer + ")";
            }
            document.getElementById("count-buildingplaces").innerHTML = "" + sh;
            if (this.city.canBuild(15000, []) !== "") {
                document.getElementById("buy-shop").setAttribute("disabled", "");
            }
            else {
                document.getElementById("buy-shop").removeAttribute("disabled");
            }
            if (this.city.canBuild(100000000, []) !== "") {
                document.getElementById("buy-buildingplace").setAttribute("disabled", "");
            }
            else {
                document.getElementById("buy-buildingplace").removeAttribute("disabled");
            }
        }
        updateConstruction() {
            for (var x = 0; x < 1; x++) {
                if (this.city.canBuild(Math.round(parameter.allAirplaneTypes[x].buildingCosts * parameter.rateCostsAirplaine), parameter.allAirplaneTypes[x].buildingMaterial) === "") {
                    document.getElementById("new-airplane_" + x).removeAttribute("disabled");
                }
                else {
                    document.getElementById("new-airplane_" + x).setAttribute("disabled", "");
                }
            }
            var tab = document.getElementById("citydialog-constructionqueue-table");
            var html = `<tr>
                    <th>Modelname</th>
                    <th>Finished</th>
                    <th></th>
                </tr>`;
            for (var x = 0; x < this.city.queueAirplane.length; x++) {
                html += '<tr><td >' + this.city.queueAirplane[x].name + "</td>";
                html += "     <td>" + new Date(this.city.queueAirplane[x].ready).toLocaleDateString() + "</td>";
                html += "</tr>";
            }
            tab.innerHTML = html;
        }
        updateScore() {
            var needs = [];
            for (var x = 0; x < parameter.allProducts.length; x++) {
                needs.push(0);
            }
            for (var i = 0; i < this.city.companies.length; i++) {
                var test = parameter.allProducts[this.city.companies[i].productid];
                if (test.input1 !== undefined) {
                    needs[test.input1] += (Math.round(this.city.companies[i].workers * test.input1Amount / parameter.workerInCompany));
                }
                if (test.input2 !== undefined) {
                    needs[test.input2] += (Math.round(this.city.companies[i].workers * test.input2Amount / parameter.workerInCompany));
                }
            }
            //score
            for (var x = 0; x < parameter.allProducts.length; x++) {
                var table = document.getElementById("citydialog-score-table");
                var tr = table.children[0].children[x + 1];
                var prod = "";
                var product = parameter.allProducts[x];
                for (var i = 0; i < this.city.companies.length; i++) {
                    if (this.city.companies[i].productid === x) {
                        prod = Math.round(this.city.companies[i].workers * product.dailyProduce / parameter.workerInCompany).toString();
                    }
                }
                tr.children[2].innerHTML = prod;
                tr.children[3].innerHTML = needs[x] === 0 ? "" : needs[x];
                tr.children[4].innerHTML = this.city.score[x] + "</td>";
            }
        }
        update(force = false) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            if (!this.city)
                return;
            try {
                if (!$(this.dom).dialog('isOpen')) {
                    return;
                }
            }
            catch (_o) {
                return;
            }
            if (!this.city.hasAirport)
                return;
            this.updateTitle();
            if ((_c = (_b = (_a = document.getElementById("citydialog-buildings-tab")) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList) === null || _c === void 0 ? void 0 : _c.contains("ui-tabs-active"))
                this.updateBuildings();
            if (force || ((_f = (_e = (_d = document.getElementById("citydialog-shop-tab")) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.classList) === null || _f === void 0 ? void 0 : _f.contains("ui-tabs-active")))
                citydialogshop_1.CityDialogShop.getInstance().update();
            if ((_j = (_h = (_g = document.getElementById("citydialog-construction-tab")) === null || _g === void 0 ? void 0 : _g.parentElement) === null || _h === void 0 ? void 0 : _h.classList) === null || _j === void 0 ? void 0 : _j.contains("ui-tabs-active"))
                this.updateConstruction();
            if ((_m = (_l = (_k = document.getElementById("citydialog-score-tab")) === null || _k === void 0 ? void 0 : _k.parentElement) === null || _l === void 0 ? void 0 : _l.classList) === null || _m === void 0 ? void 0 : _m.contains("ui-tabs-active"))
                this.updateScore();
            if (document.getElementById("citydialog-shopinfo").checked !== this.city.cityShowShopInfo)
                document.getElementById("citydialog-shopinfo").checked = this.city.cityShowShopInfo;
            return;
        }
        updateTitle() {
            var sicon = '';
            if ($(this.dom).parent().find('.ui-dialog-title').length > 0)
                $(this.dom).parent().find('.ui-dialog-title')[0].innerHTML = '<img style="float: right" id="citydialog-icon" src="' + this.city.icon +
                    '"  height="15"></img> ' + this.city.name + " (lev " + this.city.level + ") " + this.city.people + " " + icons_7.Icons.people;
        }
        show() {
            var _this = this;
            this.dom.removeAttribute("hidden");
            this.update();
            $(this.dom).dialog({
                width: "400px",
                draggable: true,
                // position: { my: "left top", at: "right top", of: $(AirplaneDialog.getInstance().dom) },
                open: function (event, ui) {
                    _this.update(true);
                },
                close: function (ev, ev2) {
                    if (_this.hasPaused) {
                        _this.city.world.game.resume();
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
            $(this.dom).parent().css({ position: "fixed" });
        }
        close() {
            $(this.dom).dialog("close");
        }
    }
    exports.CityDialog = CityDialog;
});
define("game/world", ["require", "exports", "game/company", "game/product", "game/tools", "game/transport"], function (require, exports, company_4, product_6, tools_4, transport_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.World = void 0;
    class World {
        constructor() {
            this.type = "World";
            this.lastUpdate = undefined;
            this.tickCount = 0;
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
            this.tickCount++;
            for (var x = 0; x < this.companies.length; x++) {
                this.companies[x].nextTick();
                //            this.companies[x].update();
            }
            /* for (var x = 0; x < this.transports.length; x++) {
                 this.transports[x].nextTick();
     
             }      */
        }
        getProductsToBuildForLevel(level) {
            var ret = [];
            for (var x = 0; x < parameter.allProducts.length; x++) {
                var prod = parameter.allProducts[x];
                if ((level) === prod.level) {
                    if (this.findCompanyThatProduces(prod.id).length === 0) {
                        ret.push(prod);
                    }
                }
            }
            return ret;
        }
        newGame() {
            //createCities(this, 15);
            this.companies = [];
            var all = [];
            parameter.allProducts.forEach(p => {
                if (p.level === 1)
                    all.push(p.id);
            });
            for (var x = all.length; x < parameter.width * parameter.height; x++) {
                all.push(-2);
            }
            //mix
            for (var x = 0; x < (parameter.width * parameter.height * 5); x++) {
                var rand1 = (0, tools_4.getRandomInt)(parameter.width * parameter.height);
                var rand2 = (0, tools_4.getRandomInt)(parameter.width * parameter.height);
                var temp = all[rand2];
                all[rand2] = all[rand1];
                all[rand1] = temp;
            }
            var z = 0;
            for (var x = 1; x <= parameter.width; x++) {
                for (var y = 1; y <= parameter.height; y++) {
                    if (y % 2 === 1)
                        this.companies.push(new company_4.Company(this, z, all[z], 0, 0, 0, x * 4 - 1, y));
                    else
                        this.companies.push(new company_4.Company(this, z, all[z], 0, 0, 0, x * 4 + 1, y));
                    z++;
                }
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
            this.game.setProductsInGate();
            var helper = this.findCompanyThatProduces(product_6.Product.productHelper)[0];
            var soldier = this.findCompanyThatProduces(product_6.Product.productSoldier)[0];
            helper.workers = 1;
            helper.rawmaterials[0] = 8;
            helper.produced = 0;
            this.game.people = 4; //2xBautransport 1Soldier 1Helper
            soldier.workers = 1;
            soldier.produced = 0;
            //Bautransport
            var holz = this.findCompanyThatProduces(product_6.Product.productWood)[0];
            var trans = new transport_4.Transport(holz);
            trans.active = true;
            trans.workers = 1;
            trans.autodeliver = true;
            holz.transports.push(trans);
            var stein = this.findCompanyThatProduces(product_6.Product.productStone)[0];
            var trans2 = new transport_4.Transport(stein);
            trans2.active = true;
            trans2.workers = 1;
            trans2.autodeliver = true;
            stein.transports.push(trans2);
            var gate = this.findCompanyThatProduces(product_6.Product.productGate)[0];
        }
        findSoldier() {
            var comps = this.findCompanyThatProduces(product_6.Product.productSoldier);
            for (var x = 0; x < comps.length; x++) {
                if (comps[x].produced > parameter.soldiersToConquer)
                    return comps[x];
            }
            return undefined;
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
        findCompanyThatProduces(prodid, withBuildingInProgress = false) {
            var ret = [];
            for (var x = 0; x < this.companies.length; x++) {
                if (this.companies[x].productid === prodid || (withBuildingInProgress === true && this.companies[x].buildingInProgress === prodid))
                    ret.push(this.companies[x]);
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
define("game/airplane", ["require", "exports", "game/airplanedialog"], function (require, exports, airplanedialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Airplane = void 0;
    //
    class Airplane {
        get squadron() {
            return []; //Geschwader
        }
        set squadron(val) {
            //Geschwader
        }
        constructor(world) {
            this.status = "";
            this.loadedCount = 0;
            this.activeRoute = -1;
            this.type = "Airplane";
            this.world = world;
            this.route = [];
            this.products = [];
            for (var x = 0; x < parameter.allProducts.length; x++) {
                this.products[x] = 0;
            }
            this.typeid = 1;
            this.action = "";
            /*  for(var x=0;x<4;x++){
                  var rt=new Route();
                  rt.cityid=x;
                  this.route.push(rt);
              }*/
        }
        getCurrentCity() {
            for (var x = 0; x < this.world.cities.length; x++) {
                if (this.world.cities[x].x === this.x && this.world.cities[x].y === this.y) {
                    return this.world.cities[x];
                }
            }
            return undefined;
        }
        upgrade() {
            this.typeid++;
            this.speed = Math.round(this.speed * 1.01);
            if (this.speed > 150)
                this.speed = 150;
            this.capacity = Math.round(this.capacity * 1.5);
            this.world.game.changeMoney(-this.typeid * 10000, "upgrade airplane");
            this.costs = Math.round(this.costs * 1.5);
        }
        updateSquadron() {
            var speed = parameter.allAirplaneTypes[this.typeid].speed;
            var capacity = parameter.allAirplaneTypes[this.typeid].capacity;
            for (var x = 0; x < this.squadron.length; x++) {
                speed = Math.min(this.squadron[x].speed, speed);
                capacity += this.squadron[x].capacity;
            }
            this.speed = speed;
            this.capacity = capacity;
        }
        render() {
            var _this = this;
            this.dom = document.createRange().createContextualFragment("<span z-index:2;style='font-size:20px;transform:rotate(0turn)' class='mdi mdi-airplane'></span>").children[0]; //document.createElement("span");
            this.dom.style.position = "absolute";
            this.dom.style.zIndex = "10";
            this.dom.addEventListener("click", (ev) => {
                _this.onclick(ev);
                return undefined;
            });
            this.lastUpdate = this.world.game.date.getTime();
            this.update();
        }
        refreshLoadedCount() {
            var all = 0;
            for (var x = 0; x < parameter.allProducts.length; x++) {
                all += this.products[x];
            }
            this.loadedCount = all;
        }
        flyTo(city) {
            var x = city.x;
            var y = city.y;
            this.lastUpdate = this.world.game.date.getTime();
            // console.log("fly to " + city.name)
            this.action = "fly";
            this.status = "fly to " + city.name;
            this.targetX = x;
            this.targetY = y;
            this.update();
        }
        select() {
            if (this.dom)
                this.dom.classList.add("airplane_selected");
        }
        unselect() {
            if (this.dom)
                this.dom.classList.remove("airplane_selected");
        }
        arrived() {
            this.targetX = undefined;
            this.targetY = undefined;
            this.action = "";
            this.status = "";
            this.dom.style.transform = "rotate(0deg)";
            if (this.activeRoute !== -1) {
                this.action = "unload";
                this.status = "unload";
                this.lastAction = this.lastUpdate;
            }
        }
        calcNewPosition() {
            var _this = this;
            var pixelToTarget = Math.round(Math.sqrt(Math.pow(this.targetX - this.x, 2) + Math.pow(this.targetY - this.y, 2))); //Pytharoras
            var fromX = this.x;
            var fromY = this.y;
            var fromTime = 0;
            var toX = this.targetX;
            var toY = this.targetY;
            var toTime = pixelToTarget / this.speed; //t=s/v; in Tage
            var speedVectorX = toX - fromX;
            var speedVectorY = toY - fromY;
            var speedVectorTime = (toTime - fromTime);
            var nowTime = (this.world.game.date.getTime() - this.lastUpdate) / (1000 * 60 * 60 * 24);
            var nowX = Math.round((nowTime / speedVectorTime) * speedVectorX + fromX);
            var nowY = Math.round((nowTime / speedVectorTime) * speedVectorY + fromY);
            if (nowTime >= toTime) {
                this.x = this.targetX;
                this.y = this.targetY;
                this.arrived();
            }
            else {
                var rad = Math.atan((fromX - toX) / (fromY - toY));
                var winkel = 0;
                if (fromY > toY) {
                    winkel = 360 - rad * (180) / Math.PI;
                }
                else {
                    winkel = 180 - rad * (180) / Math.PI;
                }
                var s = ("" + winkel).replace(",", ".");
                //   setTimeout(()=>{
                _this.dom.style.transform = "rotate(" + s + "deg)";
                //   });
                // console.log(pixelToTarget+" pixel in "+toTime+" seconds. Position "+nowX+" "+nowY+" lastupdate "+nowTime+" "+winkel+"°");
                this.x = nowX;
                this.y = nowY;
            }
        }
        update() {
            if (!this.dom) {
                return;
            }
            if (this.loadedCount === this.capacity && !this.dom.classList.contains("airplane_fullloaded")) {
                this.dom.classList.add("airplane_fullloaded");
            }
            if (this.loadedCount !== this.capacity && this.dom.classList.contains("airplane_fullloaded")) {
                this.dom.classList.remove("airplane_fullloaded");
            }
            if (this.status === "" && !this.dom.classList.contains("airplane_lazy")) {
                this.dom.classList.add("airplane_lazy");
            }
            if (this.status !== "" && this.dom.classList.contains("airplane_lazy")) {
                this.dom.classList.remove("airplane_lazy");
            }
            if (this.targetX !== undefined) {
                this.calcNewPosition();
            }
            this.lastUpdate = this.world.game.date.getTime();
            this.dom.style.top = this.y + "px";
            this.dom.style.left = (this.x - 18) + "px";
            if (this.activeRoute !== -1 && this.route.length > 1) {
                if (this.action === "unload" && (this.lastUpdate - this.lastAction) > (3 * 1000 * 60 * 60)) {
                    // console.log("load now");
                    this.action = "load";
                    this.status = "load";
                    this.lastAction = this.lastUpdate;
                    if (this.activeRoute >= this.route.length) {
                        this.activeRoute = 0;
                    }
                    else
                        this.route[this.activeRoute].unload();
                    airplanedialog_1.AirplaneDialog.getInstance().update();
                }
                if (this.action === "load" && (this.lastUpdate - this.lastAction) > (3 * 1000 * 60 * 60)) {
                    this.lastAction = this.lastUpdate;
                    if (this.activeRoute >= this.route.length)
                        this.activeRoute = 0;
                    else
                        this.route[this.activeRoute].load();
                    airplanedialog_1.AirplaneDialog.getInstance().update();
                    this.activeRoute++;
                    if (this.activeRoute >= this.route.length)
                        this.activeRoute = 0;
                    var city = this.world.cities[this.route[this.activeRoute].cityid];
                    this.flyTo(city);
                }
            }
        }
        onclick(th) {
            var _a;
            th.preventDefault();
            th.stopPropagation();
            (_a = this.world.selection) === null || _a === void 0 ? void 0 : _a.unselect();
            this.world.selection = this;
            this.select();
            var h = airplanedialog_1.AirplaneDialog.getInstance();
            h.airplane = this;
            h.show();
        }
        getDailyCosts() {
            /*var ret=parameter.allAirplaneTypes[this.typeid].costs;
            for(var x=0;x<this.squadron.length;x++){
                ret+=parameter.allAirplaneTypes[this.squadron[x].typeid].costs;
            }
            return ret;*/
            return this.costs;
        }
    }
    exports.Airplane = Airplane;
});
//<span style='font-size:100px;'>&#9951;</span>
define("game/startgame", ["require", "exports", "jassijs/ui/Panel", "jassijs/base/Windows", "game/game", "jassijs/base/Actions", "jassijs/remote/Registry"], function (require, exports, Panel_1, Windows_1, game_3, Actions_1, Registry_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.test = exports.PPanel = void 0;
    let PPanel = class PPanel extends Panel_1.Panel {
        constructor() {
            super();
            this.game = new game_3.Game();
            //this.width = "1050px";
            // this.height = "650px"; 
            this.game.newGame();
            this.game.render(this.dom);
        }
        destroy() {
            this.game.destroy();
            super.destroy();
        }
        static async show() {
            test();
        }
    };
    __decorate([
        (0, Actions_1.$Action)({
            name: "Game",
            icon: "mdi  mdi-airplane",
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], PPanel, "show", null);
    PPanel = __decorate([
        (0, Actions_1.$ActionProvider)("jassijs.base.ActionNode"),
        (0, Registry_1.$Class)("game.PPanel"),
        __metadata("design:paramtypes", [])
    ], PPanel);
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
