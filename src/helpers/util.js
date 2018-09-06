// export default function func (param) {
  
//     return param;
    
// }

export default function removeClass (elements, className) {
    //elements must be a HTML collection
    elements[0].classList.remove(className);
    if (elements[0]){
        removeClass(elements, className);
    }
}