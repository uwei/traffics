define(["require", "exports", "game/city", "game/icons", "game/citydialogshop", "game/routedialog", "game/tools"], function (require, exports, city_1, icons_1, citydialogshop_1, routedialog_1, tools_1) {
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
            <button id="buy-companies-next" title="update all routes" class="mybutton">` + "+" + icons_1.Icons.factory + icons_1.Icons.route + ">" + `</button>
            <button id="citydialog-capital" title="goto Capital" class="mybutton">` + icons_1.Icons.capital + `</button>
            <input style="width:30px" id="citydialog-prev" type="button" value="<"  class="mybutton"/>
            <input style="width:30px" id="citydialog-next" type="button" value=">"  class="mybutton"/>
            
            <select id="citydialog-filter" style="width:80px">
                ` + this.productFilter() + `
            </select>
            <input type="checkbox" id="hide-busy" name="vehicle1">hide busy</input>
            <input type="checkbox" id="citydialog-shopinfo" title="show shop info beside the city" >info</input>
            <button id="update-all-routes" title="update all routes" class="mybutton">` + icons_1.Icons.route + `</button>
            
          </div>
            <div id="citydialog-tabs">
                <ul>
                    <li><a href="#citydialog-buildings" id="citydialog-buildings-tab" class="citydialog-tabs">Buildings</a></li>
                    <li><a href="#citydialog-shop" id="citydialog-shop-tab"  class="citydialog-tabs">` + icons_1.Icons.shop + ` MyShop</a></li>
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
                        '<button id="new-factoryX_' + x + '" class="mybutton">' + "x " + icons_1.Icons.factory + '</button>' +
                        '<button id="delete-factory_' + x + '" class="mybutton">' + "- " + icons_1.Icons.factory + '</button>' +
                        '<button id="buy-license_' + x + '" class="mybutton">' + "buy license to produce for " + (0, tools_1.getLocalNumber)(50000) + icons_1.Icons.money + '</button>' +
                        '<div id="no-shop_' + x + '">need a shop to produce</div>' +
                        '</td>';
                    ret = ret + "</tr>";
                }
                return ret;
            })()}
                    </table>
                       ` + icons_1.Icons.home + ` Shops: <span id="count-shops">0/0</span> ` + `  
                        <button id="buy-shop"  class="mybutton">+` + icons_1.Icons.shop + ` ` + (0, tools_1.getLocalNumber)(15000) + icons_1.Icons.money + `</button> 
                        <button id="delete-shop"  class="mybutton">-` + icons_1.Icons.shop + `</button>` + "&nbsp;&nbsp;&nbsp;&nbsp;" +
                `<span id="city-buildingplaces">` + icons_1.Icons.wrench + `Speed: <span id="count-buildingplaces">0</span>  
                        ` + icons_1.Icons.money + `  
                        <button id="buy-buildingplace"  class="mybutton">+` + ` ` + (0, tools_1.getLocalNumber)(20000000) + icons_1.Icons.money + `</button> 
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
                    ret = ret + "<td>" + '<button id="new-airplane_' + x + '" class="mybutton">' + "+" + icons_1.Icons.airplane + " " +
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
                    routedialog_1.RouteDialog.loadFillConsumtion(routes[x], true);
                }
                if (routes[x].loadShopUntilAmount[0] !== undefined) {
                    routedialog_1.RouteDialog.loadFillConsumtion(routes[x], false);
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
                var s = (0, tools_1.getLocalNumber)(comp.buildings); //.toString();
                var inprogr = this.city.getBuildingInProgress(comp.productid);
                if (inprogr) {
                    s = s + "<br/>" + inprogr + icons_1.Icons.hammer + "";
                }
                tr.children[2].innerHTML = s;
                //tr.children[3].innerHTML = "" + getLocalNumber(comp.workers);// + "/<br/>" + getLocalNumber(comp.getMaxWorkers());
                tr.children[3].innerHTML = (0, tools_1.getLocalNumber)(comp.workers);
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
                    document.getElementById("new-factoryX_" + x).innerHTML = "+" + icons_1.Icons.factory +
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
            var sh = (0, tools_1.getLocalNumber)(this.city.shops);
            var inprogr = this.city.getBuildingInProgress(10000);
            if (inprogr) {
                sh = sh + "(" + inprogr + icons_1.Icons.hammer + ")";
            }
            document.getElementById("count-shops").innerHTML = "" + sh;
            // document.getElementById("costs-shops").innerHTML = "" + this.city.getDailyCostsShops();
            sh = "" + this.city.buildingplaces.toLocaleString();
            var inprogr = this.city.getBuildingInProgress(10001);
            if (inprogr) {
                sh = sh + "(" + inprogr + icons_1.Icons.hammer + ")";
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
                    '"  height="15"></img> ' + this.city.name + " (lev " + this.city.level + ") " + this.city.people + " " + icons_1.Icons.people;
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
//# sourceMappingURL=citydialog.js.map