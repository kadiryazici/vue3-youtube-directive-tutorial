import { Directive, FunctionDirective } from 'vue';

export const color: FunctionDirective = (el, binding, vnode) => {
   let property = binding.arg === 'bg' ? 'background-color' : 'color';
   if (binding.modifiers.opacity) {
      el.style.setProperty('opacity', 0.5);
   }
   el.style.setProperty(property, binding.value);
};

// export const color: Directive = {
//    created(el: HTMLElement, binding, vnode) {

//    },
//    beforeMount(...params) {},
//    mounted(...params) {},
//    beforeUpdate(...params) {},
//    updated(el, binding, vnode, oldVnode) {
//       let property = binding.arg === 'bg' ? 'background-color' : 'color';
//       el.style.setProperty(property, binding.value);
//    },
//    beforeUnmount(...params) {},
//    unmounted(...params) {}
// };
