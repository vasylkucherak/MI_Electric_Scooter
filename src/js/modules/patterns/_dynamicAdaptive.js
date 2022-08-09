//* Динамічний адаптив
//? HTML data-da="куди([id]|[class]|[name]), коли([breakpoint]), позиція([digit]|first|last)"
//* Приклад: data-da=".item,992,2"

export default function dynamicAdaptive({type}) { // type: "max" - pcFirst | "min" - mobileFirst
    class DynamicAdapt {
        constructor(type) {
            this.type = type;
        }
        
        init() {
            this.оbjects = []; // масив об'єктів
            this.daClassname = '_dynamic_adapt_';
            this.nodes = [...document.querySelectorAll('[data-da]')]; // масив DOM-елементів
        
            this.nodes.forEach((node) => { // наповнення оbjects об'єктами
                const data = node.dataset.da.trim();
                const dataArray = data.split(',');
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
                оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            });
        
            this.arraySort(this.оbjects);
        
            this.mediaQueries = this.оbjects // масив унікальних медіа-запитів
                .map(({
                    breakpoint
                }) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)
                .filter((item, index, self) => self.indexOf(item) === index);
 
            this.mediaQueries.forEach((media) => { // навішування слухача на медіа-запит і виклик обробника при першому запуску
                const mediaSplit = media.split(',');
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
        
                const оbjectsFilter = this.оbjects.filter( // масив об'єктів з потрібним брейк-поінтом
                    ({
                        breakpoint
                    }) => breakpoint === mediaBreakpoint
                );
                matchMedia.addEventListener('change', () => {
                    this.mediaHandler(matchMedia, оbjectsFilter);
                });
                this.mediaHandler(matchMedia, оbjectsFilter);
            });
        }
        
        // Основна функція
        mediaHandler(matchMedia, оbjects) {
            if (matchMedia.matches) {
                оbjects.forEach((оbject) => {
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                });
            } else {
                оbjects.forEach(
                    ({ parent, element, index }) => {
                            if (element.classList.contains(this.daClassname)) {
                                this.moveBack(parent, element, index);
                            }
                    }
                );
            }
        }
        
        // Функція переміщення
        moveTo(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === 'last' || place >= destination.children.length) {
                destination.append(element);
                return;
            }
            if (place === 'first') {
                destination.prepend(element);
                return;
            }
            destination.children[place].before(element);
        }
        
        // Функція повернення
        moveBack(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== undefined) {
                parent.children[index].before(element);
            } else {
                parent.append(element);
            }
        }
        
        // Функція отримання індексу всередині батьківського елемента
        indexInParent(parent, element) {
            return [...parent.children].indexOf(element);
        }
        
        // Функція сортування масиву по breakpoint і place 
        // по зростанню для this.type = min
        // по спаданню для this.type = max
        arraySort(arr) {
            if (this.type === 'min') {
                arr.sort((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) {
                            return 0;
                        }
                        if (a.place === 'first' || b.place === 'last') {
                            return -1;
                        }
                        if (a.place === 'last' || b.place === 'first') {
                            return 1;
                        }
                        return a.place - b.place;
                    }
                    return a.breakpoint - b.breakpoint;
                });
            } else {
                arr.sort((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) {
                            return 0;
                        }
                        if (a.place === 'first' || b.place === 'last') {
                            return 1;
                        }
                        if (a.place === 'last' || b.place === 'first') {
                            return -1;
                        }
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                });
                return;
            }
        }
    }
    const da = new DynamicAdapt(type);  
    da.init();
}