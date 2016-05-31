pc.script.create('selectable', function (app) {
    var tmp = new pc.Vec3();
    
    // Creates a new Selectable instance
    var Selectable = function (entity) {
        this.entity = entity;
    };

    Selectable.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this._sphere = new pc.BoundingSphere(this.entity.getPosition().clone(), 1);
            app.fire("selectorcamera:add", this.entity, this._sphere);

            this.entity.on("selectorcamera:hover", this.onHover, this);
            this.entity.on("selectorcamera:unhover", this.onUnhover, this);
            this.entity.on("selectorcamera:selectionprogress", this.onSelectionProgress, this);
            this.entity.on("selectorcamera:select", this.onSelect, this);            
        },
        
        update: function (dt) {
        },
        
        onHover: function () {
            // show popup
            this.entity.getChildren()[0].enabled = true;
        },
        
        onUnhover: function () {
            // show popup
            this.entity.getChildren()[0].enabled = false;
        },
        
        onSelect: function () {
        },
        
        onSelectionProgress: function (progress) {
        }        
    };

    return Selectable;
});