import { createApp, Directive, FunctionDirective } from 'vue';
import App from './App.vue';

// export const ColorDirective: FunctionDirective = (el, binding, vnode) => {
//    let property = binding.arg === 'bg' ? 'background-color' : 'color';
//    if (binding.modifiers.opacity) {
//       el.style.setProperty('opacity', 0.5);
//    }
//    el.style.setProperty(property, binding.value);
// };

const app = createApp(App);

// app.directive('color', ColorDirective);

app.mount('#app');
