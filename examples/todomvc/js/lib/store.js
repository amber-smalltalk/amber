//
// store.js by Frank Kohlhepp
// Copyright (c) 2011 - 2012 Frank Kohlhepp
// https://github.com/frankkohlhepp/store-js
// License: MIT-license
//
(function () {
    var objectGetLength = function (object) {
        var count = 0;
        for (var key in object) {
            if (object.hasOwnProperty(key)) { count++; }
        }
        
        return count;
    };
    
    var arrayIndexOf = function (array, item, from) {
        var length = array.length >>> 0;
        for (var i = (from < 0) ? Math.max(0, length + from) : from || 0; i < length; i++) {
            if (array[i] === item) { return i; }
        }
        
        return -1;
    };
    
    var arrayContains = function (array, item, from) {
        return arrayIndexOf(array, item, from) !== -1;
    };
    
    var arrayInclude = function (array, item) {
        if (!arrayContains(array, item)) { array.push(item); }
        return array;
    };
    
    var Store = this.Store = function (name, defaults, watcherSpeed) {
        this.name = name;
        this.defaults = defaults || {};
        this.watcherSpeed = watcherSpeed || 500;
        this.listeners = {};
        
        // Apply defaults
        this.applyDefaults();
    };
    
    Store.clear = function () {
        localStorage.clear();
    };
    
    Store.prototype.applyDefaults = function () {
        for (var key in this.defaults) {
            if (this.defaults.hasOwnProperty(key) && this.get(key) === undefined) {
                this.set(key, this.defaults[key]);
            }
        }
        
        return this;
    };
    
    Store.prototype.watcher = function (force) {
        if (this.watcherTimer) {
            clearTimeout(this.watcherTimer);
        }
        
        if (objectGetLength(this.listeners) || force) {
            this.newObject = this.toObject();
            
            if (this.oldObject) {
                for (var key in this.newObject) {
                    if (this.newObject.hasOwnProperty(key) && this.newObject[key] !== this.oldObject[key]) {
                        this.fireEvent(key, this.newObject[key]);
                    }
                }
                
                for (var key in this.oldObject) {
                    if (this.oldObject.hasOwnProperty(key) && !this.newObject.hasOwnProperty(key)) {
                        this.fireEvent(key, this.newObject[key]);
                    }
                }
            }
            
            this.oldObject = this.newObject;
            var that = this;
            this.watcherTimer = setTimeout(function () {
                that.watcher();
            }, this.watcherSpeed);
        }
        
        return this;
    };
    
    Store.prototype.get = function (name) {
        var value = localStorage.getItem("store." + this.name + "." + name);
        if (value === null) { return undefined; }
        try { return JSON.parse(value); } catch (e) { return null; }
    };
    
    Store.prototype.set = function (name, value) {
        if (value === undefined) {
            this.remove(name);
        } else {
            if (typeof value === "function") { value = null; }
            try { value = JSON.stringify(value); } catch (e) { value = null; }
            localStorage.setItem("store." + this.name + "." + name, value);
        }
        
        return this;
    };
    
    Store.prototype.remove = function (name) {
        localStorage.removeItem("store." + this.name + "." + name);
        return this.applyDefaults();
    };
    
    Store.prototype.reset = function () {
        var name = "store." + this.name + ".";
        for (var i = (localStorage.length - 1); i >= 0; i--) {
            if (localStorage.key(i).substring(0, name.length) === name) {
                localStorage.removeItem(localStorage.key(i));
            }
        }
        
        return this.applyDefaults();
    };
    
    Store.prototype.toObject = function () {
        var values = {};
        var name = "store." + this.name + ".";
        for (var i = (localStorage.length - 1); i >= 0; i--) {
            if (localStorage.key(i).substring(0, name.length) === name) {
                var key = localStorage.key(i).substring(name.length);
                var value = this.get(key);
                if (value !== undefined) { values[key] = value; }
            }
        }
        
        return values;
    };
    
    Store.prototype.fromObject = function (values, merge) {
        if (!merge) { this.reset(); }
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                this.set(key, values[key]);
            }
        }
        
        return this;
    };
    
    Store.prototype.addEvent = function (selector, callback) {
        this.watcher(true);
        if (!this.listeners[selector]) { this.listeners[selector] = []; }
        arrayInclude(this.listeners[selector], callback);
        return this;
    };
    
    Store.prototype.removeEvent = function (selector, callback) {
        for (var i = (this.listeners[selector].length - 1); i >= 0; i--) {
            if (this.listeners[selector][i] === callback) { this.listeners[selector].splice(i, 1); }
        }
        
        if (!this.listeners[selector].length) { delete this.listeners[selector]; }
        return this;
    };
    
    Store.prototype.fireEvent = function (name, value) {
        var selectors = [name, "*"];
        for (var i = 0; i < selectors.length; i++) {
            var selector = selectors[i];
            if (this.listeners[selector]) {
                for (var j = 0; j < this.listeners[selector].length; j++) {
                    this.listeners[selector][j](value, name, this.name);
                }
            }
        }
        
        return this;
    };
}());
