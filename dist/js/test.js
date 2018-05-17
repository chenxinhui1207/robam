	var wrap= document.querySelector('.shopping-show');
    var spic = document.querySelector(".shopping-big");
    var bpic = document.querySelector(".magnifier img");
    var sf = document.querySelector(".microscope");
    var bf = document.querySelector('.magnifier');

    spic.onmouseenter = function() {
        sf.style.display = 'block';
        bf.style.display = 'block';
        sf.style.width = spic.offsetWidth * bf.offsetWidth / bpic.offsetWidth + 'px';
        sf.style.height = spic.offsetHeight * bf.offsetHeight / bpic.offsetHeight + 'px';
        var scale = bf.offsetWidth / sf.offsetWidth;
        this.onmousemove = function(ev) {
        	var ev=ev||window.event;
            var x = ev.clientX - wrap.offsetLeft - sf.offsetWidth / 2;
            var y = ev.clientY - wrap.offsetTop - sf.offsetHeight / 2;
            if (x < 0) {
                x = 0;
            } else if (x >= spic.offsetWidth - sf.offsetWidth - 2) {
                x = spic.offsetWidth - sf.offsetWidth - 2;
            }
            if (y < 0) {
                y = 0;
            } else if (y >= spic.offsetHeight - sf.offsetHeight - 2) {
                y = spic.offsetHeight - sf.offsetHeight - 2;
            }
            sf.style.left = x + 'px';
            sf.style.top = y + 'px';
            bpic.style.left = -x * scale + 'px';
            bpic.style.top = -y * scale + 'px';
        }
    }

    spic.onmouseleave = function() {
        sf.style.display = 'none';
        bf.style.display = 'none';
    }