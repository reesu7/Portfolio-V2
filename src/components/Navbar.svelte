<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { Router, link } from "svelte-routing";

  const dispatch = createEventDispatcher();

  let open = false;
  export let theme;

  const toggleTheme = () => dispatch("toggleTheme");

  onMount(() => {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    let prevScrollPos = window.pageYOffset;
    const navbar = document.getElementById("navbar");

    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos)
        navbar.style.transform = "translateY(0)";
      else navbar.style.transform = `translateY(-${navbar.offsetHeight}px)`;

      prevScrollPos = currentScrollPos;
    };

    // show navbar when hover over
    onmousemove = (e) => {
      if (e.clientY < navbar.offsetHeight)
        navbar.style.transform = "translateY(0)";
    };
  });
</script>

<nav
  id="navbar"
  class="flex items-center gap-4 px-6 lg:px-10 py-4 top-0 bg-white/80
  dark:bg-gray-900/80 backdrop-blur-md shadow-md fixed w-full z-50"
>
  <a href="/" data-aos="flip-up" class="nav-text-home">Pradeep Rawat</a>
  <div class="hidden lg:flex gap-9 items-center ml-auto">
    <Router>
      <link to="/about" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="700" class="ml-auto nav-text">About</link>
      <link to="/experience" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="700" class="nav-text">Experience</link>
      <link to="/web-development" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="700" class="nav-text">Web dev</link>
      <link to="/aiml" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="700" class="nav-text">AI/ML</link>
      <link to="/cp" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="700" class="nav-text">CP</link>
      <link to="/contact" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="700" class="nav-text">Contact</link>
      <link to="/resume" data-aos="zoom-in" data-aos-delay="700" class="nav-text">Resume</link>
    </Router>
    <button
      title="toggle theme"
      aria-label="toggle theme"
      data-aos="flip-up"
      data-aos-delay="800"
      data-aos-duration="700"
      on:click={toggleTheme}
      class="text-sm font-semibold border-gray-500 border-2 hover:bg-gray-200 dark:hover:bg-gray-700 py-1.5 px-3 dark:text-gray-50 rounded-md transition-colors"
      ><i
        class="{theme === 'dark' ? 'fa fa-moon' : 'far fa-sun'} mr-2"
      />{theme === "dark" ? "Dark" : "Light"}</button
    >
  </div>

  <button
    title="Navigation Menu"
    aria-label="Navigation Menu"
    on:click={() => (open = !open)}
    class="lg:hidden text-lg ml-auto dark:text-white"
    ><i class="fas fa-bars" /></button
  >
</nav>

{#if open}
  <div
    on:click={() => (open = false)}
    transition:fade={{ duration: 500 }}
    class="backdrop-blur-md fixed z-50 inset-0"
  />
  <dialog
    open
    transition:slide={{ duration: 500 }}
    class="fixed top-0 left-0 right-0 z-50 p-0 py-4 shadow-2xl w-full bg-white dark:bg-gray-900"
  >
    <div class="text-right py-2 px-2">
      <button
        title="Close navigation menu"
        aria-label="Close navigation menu"
        on:click={() => (open = false)}
        class="text-right text-lg text-gray-800 dark:text-gray-50 bg-gray-50 dark:bg-gray-800 px-3 py-1"
        ><i class="fas fa-times fa-sm" /></button
      >
    </div>
    <nav
      class="mb-3 text-center font-mono text-gray-800 dark:text-gray-50 space-y-2"
    >
      <a
        on:click={() => (open = false)}
        data-aos="slide-left"
        data-aos-delay="200"
        class="block bg-gray-50 dark:bg-gray-800 p-5"
        href="#about"
      >
        About Me
      </a>
      <a
        on:click={() => (open = false)}
        data-aos="slide-right"
        data-aos-delay="200"
        class="block bg-gray-50 dark:bg-gray-800 p-5"
        href="#experience"
      >
        Experience
      </a>
      <a
        on:click={() => (open = false)}
        data-aos="slide-left"
        data-aos-delay="200"
        class="block bg-gray-50 dark:bg-gray-800 p-5"
        href="#web-development"
      >
        Web Development
      </a>
      <a
        on:click={() => (open = false)}
        data-aos="slide-right"
        data-aos-delay="200"
        class="block bg-gray-50 dark:bg-gray-800 p-5"
        href="#aiml"
      >
        AI/ML
      </a>
      <a
        on:click={() => (open = false)}
        data-aos="slide-left"
        data-aos-delay="200"
        class="block bg-gray-50 dark:bg-gray-800 p-5"
        href="#cp"
      >
        CP
      </a>
      <a
        on:click={() => (open = false)}
        data-aos="slide-right"
        data-aos-delay="200"
        class="block bg-gray-50 dark:bg-gray-800 p-5"
        href="#contact"
      >
        Contact Me
      </a>
      <a
        on:click={() => (open = false)}
        data-aos="slide-left"
        data-aos-delay="200"
        class="block bg-gray-50 dark:bg-gray-800 p-5"
        href="#resume"
      >
        Resume
      </a>
    </nav>
    <div class="text-center">
      <button
        title="Close navigation menu"
        aria-label="toggle theme"
        data-aos="flip-up"
        data-aos-delay="400"
        on:click={toggleTheme}
        class="border-gray-500 border-2 py-2 px-4 dark:text-gray-50 rounded-md"
        ><i
          class="{theme === 'dark' ? 'fa fa-moon' : 'far fa-sun'} mr-2"
        />{theme === "dark" ? "Dark" : "Light"}</button
      >
    </div>
  </dialog>
{/if}

<style>
  #navbar {
    transition: transform 0.3s; /* Transition effect when sliding down (and up) */
  }
  .logo-type {
    bottom: -0.7rem;
    left: -0.46rem;
    font-size: 2rem;
  }
</style>
