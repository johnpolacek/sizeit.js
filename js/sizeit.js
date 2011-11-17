/*
	sizeit.js
	by John Polacek (@johnpolacek)
	
	Docs: http://johnpolacek.github.com/sizeit.js/
	
	License: http://www.opensource.org/licenses/mit-license.php
*/

(function()
{
	var config = {};
	var screenW;
	
	function windowSize() {
		var wSize;
        // Internet Explorer
		if (document.body && document.body.offsetWidth) {
			wSize = document.body.offsetWidth;
		}
		// Internet Explorer
		else if (document.compatMode == 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {
			wSize = document.documentElement.offsetWidth;
		}
		// All other browsers
		else if (window.innerWidth) {
			wSize = window.innerWidth;
		}
        
        return wSize;
	}
	
	function update() {
		screenW = windowSize();
        var newSize;
        var i;
		
		for (i = 0; i < config.settings.length; i++) {
			var setting = config.settings[i];
			
			if (screenW < setting.max) {
				newSize = setting;
				break;
            }
			else if (!setting.max) {
				newSize = setting;
            }
        }
		
		if (!config.size || newSize.name != config.size.name) {
            config.size = newSize;
        } else {
            newSize = null;
        }
        
        if (config.size.css && newSize) {
            
            // If there is a stylesheet, update it, otherwise make new
            if (config.css) {
				var links = document.getElementsByTagName('link');
				
				for (i = 0; i < links.length; i++) {
					
                    if (links[i].getAttribute('title') == 'sizeit') {
						config.css.href = config.size.css;
                        break;
                    }
                }
			}
			else {
				config.css = document.createElement('link');
                config.css.href = config.size.css;
                config.css.type = 'text/css';
                config.css.rel = 'stylesheet';
                config.css.title = 'sizeit';
                document.getElementsByTagName('head')[0].appendChild(config.css);
            }
        }      
    }
    
    window.sizeit = {
        configure : function() {
            
            config.settings = arguments;
            
            // sort by breakpoints, lowest to highest
            for (var i = 0; i < config.settings.length; i++) {
                
                // set name to css href if not assigned
                if (config.settings[i].name === undefined) {
                    config.settings[i].name = config.settings[i].css;
                }
                
                for (var j = i + 1; j < config.settings.length; j++) {
                    
                    if (config.settings[i].max > config.settings[j].max) {
                        s = config.settings[j];	
                        config.settings[j] = config.settings[i];
                        config.settings[i] = s;
                    }
                }
            }
            
            update();
            
            if (window.addEventListener) {
                window.addEventListener('resize', update, false);
            }
			else if (window.attachEvent) {
                window.attachEvent('resize', update);
            }
			else {
                window.onresize = update;
            }
            
        },
        
        size : function() {
            return config.size.name;
        },
        
        width : function() {
            return screenW;
        }
    };
	
}());