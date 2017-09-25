    (function (window, document) {
        var showNum=document.getElementsByClassName('showNum')[0];
       
        var active = 0,
                inputBtn = document.querySelectorAll("input[type='password']");
        for (var i = 0; i < inputBtn.length; i++) {
            inputBtn[i].addEventListener('click', function () {
                inputBtn[active].focus();
            }, false);
            inputBtn[i].addEventListener('focus', function () {
                this.addEventListener('keyup', listenKeyUp, false);
            }, false);
            inputBtn[i].addEventListener('blur', function () {
                this.removeEventListener('keyup', listenKeyUp, false);
            }, false);
        }

       /*监听键盘的敲击事件*/
        function listenKeyUp() {
            if (!isNaN(this.value) && this.value.length != 0) {
                if (active < 5) {
                    active += 1;
                }
                inputBtn[active].focus();
            } else if (this.value.length == 0) {
                if (active > 0) {
                    active -= 1;
                }
                inputBtn[active].focus();
            }
        }
    })(window, document);