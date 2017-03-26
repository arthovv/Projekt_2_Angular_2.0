(function () {


    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic();



    

    var AppComponent = Component({
        selector: 'app',
        templateUrl: './temp.html'
       
    })

        .Class({
            constructor: function () { }
        });

    var SecondComponent = Component({
        selector: 'sec',
        template: '<h2> Pseudo-losowe elementy tablicy : {{zmienna}}'

    })

        .Class({
            constructor: function () {
                var index = Math.floor(Math.random() * arr.length);
                this.zmienna = arr[index];
            }
        });

  


    


    var AppModule = NgModule({
        imports: [BrowserModule],
        declarations: [AppComponent, SecondComponent],
            bootstrap: [AppComponent]
    })

    .Class({
        constructor: function () {}
        });


    platformBrowserDynamic.bootstrapModule(AppModule);
    
})();

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

