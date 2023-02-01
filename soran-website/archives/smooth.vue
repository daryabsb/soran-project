<template>
  <div>

    <nav>
      <ul>
        <li class="green-item">Go to green</li>
        <li class="blue-item">Go to blue</li>
        <li class="red-item">Go to red</li>
        <li class="yellow-item">Go to yellow</li>
        <li class="purple-item">Go to purple</li>
        <li class="footer-item">Go to footer</li>
      </ul>
    </nav>
    <section ref="green" class="content green flex-el h-screen">
      <span class="bottom-item">Scroll to bottom!</span>
      <LandingHero class="bottom-item" id="section-1" />

    </section>
    <section ref="blue" class="content blue">
      <p class="bottom-item" data-aos="fade-out" data-aos-ease='ease' data-aos-duration="1500" data-aos-delay='1000'>
        Scroll to bottom!</p>
      <p data-aos="fade-out" data-aos-ease='ease' data-aos-duration="1800" data-aos-delay='1500'>Bacon ipsum dolor amet
        beef ribs bacon t-bone, pork capicola strip steak frankfurter cupim ball tip flank swine
        brisket doner hamburger. Short ribs salami shoulder bacon pancetta, pork loin corned beef chicken turkey.</p>
    </section>
    <section ref="red" class="content red">
      <p>Bacon ipsum dolor amet beef ribs bacon t-bone, pork capicola strip steak frankfurter cupim ball tip flank swine
        brisket doner hamburger. Short ribs salami shoulder bacon pancetta, pork loin corned beef chicken turkey.</p>
    </section>
    <section ref="yellow" class="content yellow">
      <p>Bacon ipsum dolor amet beef ribs bacon t-bone, pork capicola strip steak frankfurter cupim ball tip flank swine
        brisket doner hamburger. Short ribs salami shoulder bacon pancetta, pork loin corned beef chicken turkey.</p>
    </section>
    <section ref="purple" class="content purple">
      <p>Bacon ipsum dolor amet beef ribs bacon t-bone, pork capicola strip steak frankfurter cupim ball tip flank swine
        brisket doner hamburger. Short ribs salami shoulder bacon pancetta, pork loin corned beef chicken turkey.</p>
    </section>
    <footer ref="footer" class="footer">
      Back to top!
      <button class="top-item">Scroll to top!</button>
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
const green = ref(null)
const blue = ref(null)
const red = ref(null)
const yellow = ref(null)
const purple = ref(null)
const footer = ref(null)

onMounted(() => {
  var topButton = document.querySelector('.top-item')
  var bottomButton = green.value.querySelector('.bottom-item')
  // var footer = document.querySelector('.footer')

  bottomButton.addEventListener('click', function () {
    footer.value.scrollIntoView({ behavior: "smooth" })
  })

  topButton.addEventListener('click', function () {
    green.value.scrollIntoView({ behavior: "smooth" })
  })

  var navigation = document.querySelector('nav ul')

  const sections = {
    green: green,
    blue: blue,
    red: red,
    yellow: yellow,
    purple: purple,
    footer: footer
  }

  navigation.addEventListener('click', function (e) {
    if (e.target.classList[0].includes('-item')) {
      var item = e.target.classList[0].split('-')[0];

      var section = sections[item]
      if (section)
        section.value.scrollIntoView({ behavior: "smooth" })
    }
  })
})
</script>
<style lang="scss" >
.content {
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    width: 500px;
    max-width: 100%;
    text-align: center;
    line-height: 1.4;
  }
}

.flex-el {
  display: flex;
  justify-content: center;
}

.green {
  background: green;
}

.blue {
  background: transparent;
  color: #3f3f3f;
}

.red {
  background: red;
}

.purple {
  background: purple;
}


.yellow {
  background: yellow;

  p {
    color: black;
  }
}

nav {
  position: fixed;
  background: white;
  width: 100%;
}

ul {
  display: flex;
  justify-content: space-evenly;
  padding: 8px 0;

  li {
    cursor: pointer;
  }
}

.bottom-item {
  padding-top: 10vh;
  color: white;
  font-size: 32px;
  cursor: pointer;
}

.footer {
  padding: 20px;
  cursor: pointer;
  text-align: center;
  background: #3f3f3f;
  color: white;
}
</style>