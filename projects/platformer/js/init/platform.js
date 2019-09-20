(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the platform.create() method to create platforms for the level. 
     * 
     * platform.create() takes these arguments:
     *      
     *      platform.create(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    platform.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        platform.create(0, game.world.height - 32, 3, 2);

        // example:
        platform.create(400, 460);
        platform.create(500, 200);
        
        platform.create(x, y, scaleX, scaleY);
 
            x: The x coordineate for the platform.
            y: The y coordineate for the platform.
            scaleX: OPTIONAL The scale factor on the x-axis, this value will stretch the platform in width.
            scaleY: OPTIONAL The scale factor on the y-axis, this value will stretch the platform in height.
        
        collectable.create(type.Tim, 200, 170, 6, .7);

            type: The type of the collectable
            x: The x coordineate for the collectable.
            y: The y coordineate for the collectable.
            gravity: OPTIONAL The gravitational pull on the collectable.
            bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
            
                cannon.create.onTop(450);
                cannon.create.onBottom(225);
                cannon.create.onLeft(300);
                cannon.create.onRight(110); 
                
                
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);