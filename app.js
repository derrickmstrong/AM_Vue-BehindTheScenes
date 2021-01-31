const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;

      // Using refs
      this.message = this.$refs.userText.value;
      // console.log(this.$refs.userText);
      console.dir(this.$refs.userText);
    },
  },
});

app.mount('#app');

const app2 = Vue.createApp({
  template: ' <p>{{ favoriteMeal }}</p>',
  data() {
    return {
      favoriteMeal: 'pizza',
    };
  },
});

app2.mount('#app2');

// Vanilla JS
// let message = 'hello';
// let longMessage = message + ' World!';

// console.log(longMessage);

// message = 'goodbye';

// By default JS is not reactive; that's why longMessage was not updated here
// console.log(longMessage);

// Under the Hood
// Vue uses proxies to make it reactive and we can use proxies on Vanilla JS to create the same effect

const data = {
  message: 'What up',
  longMessage: 'Hello World!',
};

const handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);

    if (key === 'message') {
      target.longMessage = value + ' World World World!!!';
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = 'What up Homie!';

console.log(proxy.longMessage);
