class BuilderJS{
    static create(elemName){
        class ElementBuilder{
            constructor(elemName){
                this.element = document.createElement(elemName);
            }
            appendInnerText(innetText){
                this.element.innerHTML += innetText;
                return this;
            }
            setInnerText(innetText){
                this.element.innerHTML = innetText;
                return this;
            }
            addClass(className){
                this.element.classList.add(className);
                return this;
            }
            removeClass(className){
                this.element.classList.remove(className);
                return this;
            }
            toggleClass(className){
                this.element.classList.toggle(className);
                return this;
            }
            setStyle(style,value){
                console.log(this.element.style);
                this.element.style[style] = value;
                return this;
            }
            removeStyle(style){
                this.element.style[style] = null;
                return this;
            }
            appendChild(childElement){
                this.element.appendChild(childElement);
                return this;
            }
            addEventListener(type,listener){
                this.element.addEventListener(type,listener);
                return this;
            }
            removeEventListener(type,listener){
                this.element.removeEventListener(type,listener);
                return this;
            }
            build(){
                return this.element;
            }


        }
        return new ElementBuilder(elemName);
    }
}

