define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transport = void 0;
    //
    class Transport {
        constructor(world) {
            this.status = "";
            this.loadedCount = 0;
            this.activeRoute = -1;
            this.type = "Transport";
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
        get squadron() {
            return []; //Geschwader
        }
        set squadron(val) {
            //Geschwader
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
        moveTo(city) {
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
            this.dom.style.top = this.y + "px";
            this.dom.style.left = (this.x - 18) + "px";
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
            h.show();
        }
    }
    exports.Transport = Transport;
});
//<span style='font-size:100px;'>&#9951;</span>
//# sourceMappingURL=transport.js.map