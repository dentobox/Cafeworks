(function() {
  var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

  NUM_CONFETTI = 50;

  COLORS = [[98, 79, 255], [255,255,255], [42,171,255]];

  PI_2 = 5 * Math.PI;

  canvas = document.getElementById("world");

  context = canvas.getContext("2d");

  window.w = 0;

  window.h = 0;

  resizeWindow = function() {
    window.w = canvas.width = window.innerWidth;
    return window.h = canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resizeWindow, false);

  window.onload = function() {
    return setTimeout(resizeWindow, 0);
  };

  range = function(a, b) {
    return (b - a) * Math.random() + a;
  };

  drawCircle = function(x, y, r, style) {
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    context.fillStyle = style;
    return context.fill();
  };

  xpos = 0;

  document.onmousemove = function(e) {
    return xpos = e.pageX / w;
  };

  window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 100 / 60);
    };
  })();

  Confetti = class Confetti {
    constructor() {
      this.style = COLORS[~~range(0, 3)];
      this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
      this.r = ~~range(2, 8);
      this.r2 = 4 * this.r;
      this.replace();
    }

    replace() {
      this.opacity = 0;
      this.dop = 0.02 * range(1, 4);
      this.x = range(-this.r2, w - this.r2);
      this.y = range(-20, h - this.r2);
      this.xmax = w - this.r;
      this.ymax = h - this.r;
      this.vx = range(0, 2) + 8 * xpos - 5;
      return this.vy = 0.2 * this.r + range(-1, 1);
    }

    draw() {
      var ref;
      this.x += this.vx;
      this.y += this.vy;
      this.opacity += this.dop;
      if (this.opacity > 1) {
        this.opacity = 1;
        this.dop *= -1;
      }
      if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
      }
      if (!((0 < (ref = this.x) && ref < this.xmax))) {
        this.x = (this.x + this.xmax) % this.xmax;
      }
      return drawCircle(~~this.x, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
    }

  };

  confetti = (function() {
    var j, ref, results;
    results = [];
    for (i = j = 1, ref = NUM_CONFETTI; (1 <= ref ? j <= ref : j >= ref); i = 1 <= ref ? ++j : --j) {
      results.push(new Confetti);
    }
    return results;
  })();

  window.step = function() {
    var c, j, len, results;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    results = [];
    for (j = 0, len = confetti.length; j < len; j++) {
      c = confetti[j];
      results.push(c.draw());
    }
    return results;
  };

  step();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLE1BQUEsRUFBQSxRQUFBLEVBQUEsWUFBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEVBQUEsUUFBQSxFQUFBLE9BQUEsRUFBQSxVQUFBLEVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxZQUFBLEVBQUE7O0VBQUEsWUFBQSxHQUFlOztFQUNmLE1BQUEsR0FBUyxDQUFDLENBQUMsRUFBRCxFQUFJLEVBQUosRUFBTyxHQUFQLENBQUQsRUFBYyxDQUFDLEdBQUQsRUFBSyxFQUFMLEVBQVEsRUFBUixDQUFkLEVBQTJCLENBQUMsR0FBRCxFQUFLLEVBQUwsRUFBUSxFQUFSLENBQTNCLEVBQXdDLENBQUMsR0FBRCxFQUFLLEVBQUwsRUFBUSxFQUFSLENBQXhDLEVBQXFELENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBUyxFQUFULENBQXJEOztFQUNULElBQUEsR0FBTyxDQUFBLEdBQUUsSUFBSSxDQUFDOztFQUdkLE1BQUEsR0FBUyxRQUFRLENBQUMsY0FBVCxDQUF3QixPQUF4Qjs7RUFDVCxPQUFBLEdBQVUsTUFBTSxDQUFDLFVBQVAsQ0FBa0IsSUFBbEI7O0VBQ1YsTUFBTSxDQUFDLENBQVAsR0FBVzs7RUFDWCxNQUFNLENBQUMsQ0FBUCxHQUFXOztFQUVYLFlBQUEsR0FBZSxRQUFBLENBQUEsQ0FBQTtJQUNiLE1BQU0sQ0FBQyxDQUFQLEdBQVcsTUFBTSxDQUFDLEtBQVAsR0FBZSxNQUFNLENBQUM7V0FDakMsTUFBTSxDQUFDLENBQVAsR0FBVyxNQUFNLENBQUMsTUFBUCxHQUFnQixNQUFNLENBQUM7RUFGckI7O0VBSWYsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQWxDLEVBQWdELEtBQWhEOztFQUVBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFFBQUEsQ0FBQSxDQUFBO1dBQUcsVUFBQSxDQUFXLFlBQVgsRUFBeUIs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O0VBSFk7O0VBS2QsSUFBQSxDQUFBO0FBL0VBIiwic291cmNlc0NvbnRlbnQiOlsiTlVNX0NPTkZFVFRJID0gMzUwXG5DT0xPUlMgPSBbWzg1LDcxLDEwNl0sIFsxNzQsNjEsOTldLCBbMjE5LDU2LDgzXSwgWzI0NCw5Miw2OF0sIFsyNDgsMTgyLDcwXV1cblBJXzIgPSAyKk1hdGguUElcblxuXG5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCBcIndvcmxkXCJcbmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCBcIjJkXCJcbndpbmRvdy53ID0gMFxud2luZG93LmggPSAwXG5cbnJlc2l6ZVdpbmRvdyA9IC0+XG4gIHdpbmRvdy53ID0gY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgd2luZG93LmggPSBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyICdyZXNpemUnLCByZXNpemVXaW5kb3csIGZhbHNlXG4gIFxud2luZG93Lm9ubG9hZCA9IC0+IHNldFRpbWVvdXQgcmVzaXplV2luZG93LCAwXG5cbnJhbmdlID0gKGEsYikgLT4gKGItYSkqTWF0aC5yYW5kb20oKSArIGFcblxuZHJhd0NpcmNsZSA9ICh4LHkscixzdHlsZSkgLT5cbiAgY29udGV4dC5iZWdpblBhdGgoKVxuICBjb250ZXh0LmFyYyh4LHksciwwLFBJXzIsZmFsc2UpXG4gIGNvbnRleHQuZmlsbFN0eWxlID0gc3R5bGVcbiAgY29udGV4dC5maWxsKClcblxueHBvcyA9IDAuNVxuXG5kb2N1bWVudC5vbm1vdXNlbW92ZSA9IChlKSAtPlxuICB4cG9zID0gZS5wYWdlWC93XG5cbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBkbyAtPlxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgIHx8XG4gIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxuICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgIHx8XG4gIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgfHxcbiAgKGNhbGxiYWNrKSAtPiB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKVxuXG5cbmNsYXNzIENvbmZldHRpXG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgQHN0eWxlID0gQ09MT1JTW35+cmFuZ2UoMCw1KV1cbiAgICBAcmdiID0gXCJyZ2JhKCN7QHN0eWxlWzBdfSwje0BzdHlsZVsxXX0sI3tAc3R5bGVbMl19XCJcbiAgICBAciA9IH5+cmFuZ2UoMiw2KVxuICAgIEByMiA9IDIqQHJcbiAgICBAcmVwbGFjZSgpXG5cbiAgcmVwbGFjZTogLT5cbiAgICBAb3BhY2l0eSA9IDBcbiAgICBAZG9wID0gMC4wMypyYW5nZSgxLDQpXG4gICAgQHggPSByYW5nZSgtQHIyLHctQHIyKVxuICAgIEB5ID0gcmFuZ2UoLTIwLGgtQHIyKVxuICAgIEB4bWF4ID0gdy1AclxuICAgIEB5bWF4ID0gaC1AclxuICAgIEB2eCA9IHJhbmdlKDAsMikrOCp4cG9zLTVcbiAgICBAdnkgPSAwLjcqQHIrcmFuZ2UoLTEsMSlcblxuICBkcmF3OiAtPlxuICAgIEB4ICs9IEB2eFxuICAgIEB5ICs9IEB2eVxuICAgIEBvcGFjaXR5ICs9IEBkb3BcbiAgICBpZiBAb3BhY2l0eSA+IDFcbiAgICAgIEBvcGFjaXR5ID0gMVxuICAgICAgQGRvcCAqPSAtMVxuICAgIEByZXBsYWNlKCkgaWYgQG9wYWNpdHkgPCAwIG9yIEB5ID4gQHltYXhcbiAgICBpZiAhKDAgPCBAeCA8IEB4bWF4KVxuICAgICAgQHggPSAoQHggKyBAeG1heCkgJSBAeG1heFxuICAgIGRyYXdDaXJjbGUofn5AeCx+fkB5LEByLFwiI3tAcmdifSwje0BvcGFjaXR5fSlcIilcblxuXG5jb25mZXR0aSA9IChuZXcgQ29uZmV0dGkgZm9yIGkgaW4gWzEuLk5VTV9DT05GRVRUSV0pXG5cbndpbmRvdy5zdGVwID0gLT5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApXG4gIGNvbnRleHQuY2xlYXJSZWN0KDAsMCx3LGgpXG4gIGMuZHJhdygpIGZvciBjIGluIGNvbmZldHRpXG5cbnN0ZXAoKSJdfQ==
//# sourceURL=coffeescript
