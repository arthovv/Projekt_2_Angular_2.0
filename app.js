(function () {


    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic();
    var Class = ng.core.Class;

    var id = 1;

    var ArrService = Class({
        constructor: function ArrService() {
            this.numbers = arr;
            this.id = id++;
        },

        getRandomNumber: function () {
            console.log('nr instancji: ' + this.id);
            var index = Math.floor(Math.random() * this.numbers.length);
            return this.numbers[index];
        },

       

    });


    var TestService = Class({
        constructor: function (d) {
            this.value = d;
        },

        getRandomNumber: function () {
            console.log("test service");
            return this.value;
        }

    });

  

    var AppComponent = Component({
        selector: 'app',
        templateUrl: './temp.html',
       
    })

        .Class({
            constructor: function AppComponent () { }
        });



    var SecondComponent = Component({
        selector: 'sec',        
        template: '<h2> Pseudo-losowe elementy tablicy : {{number}}'

    })

        .Class({
            constructor: [ArrService, function SecondComponent (potato) { //wazne ¿eby przekazac serwis w tablicy do konstruktora
                //var numberService = new ArrService(); // bez tablicy i 'wstrzykiwania' logiki
                this.number = potato.getRandomNumber();
            }]
        });
    
    
     

    var AppModule = NgModule({
        imports: [BrowserModule],
        declarations: [AppComponent, SecondComponent],
        providers: [
            {
                provide: ArrService,
                useFactory: function () { // useClass: TestService lub useValue: new TestService(500)
                    return new TestService(500);
                }
            }
        ],
        bootstrap: [AppComponent]
    })

    .Class({
        constructor: function () {}
        });


    platformBrowserDynamic.bootstrapModule(AppModule);
    
})();


var arr = [];

for (i = 0; i < 100; i++)
{
    arr[i] = i;
}

